const express = require('express');//biblioteca necessaria para ajudar na cracao de api's
const cors = require('cors');
const jwt = require('jsonwebtoken');// biblioteca PARA criar jwt (chave)
const mongoose = require('mongoose'); // biblioteca para conectar a base de dados

const app = express();//iniciar biblioteca da api
const port = 3001; // porta da api (comunicacao entre offices)
const SECRET_KEY = '17821h12871h2';//key


app.use(express.json());// transformar as requests em json
app.use(cors({ origin: 'http://localhost:5173' }));

// Connect to MongoDB -  vi na config da mongodb
mongoose.connect('mongodb://localhost:27017/kittydatabase', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).then(() => {
      console.log('Conectado ao MongoDB');
    }).catch((err) => {
      console.error('Erro ao conectar ao MongoDB', err);
    });
// Modelos da base de daos (tabelas)
const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  imagemPerfil: String,
});

const PostSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId, // "foreign key do user" 
  username: String,
  content: String,
  comments: [{ username: String, comment: String , userId: mongoose.Schema.Types.ObjectId}],
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model('User', UserSchema);//chamar tabela user
const Post = mongoose.model('Post', PostSchema);//chamar tabela post

// Registration Endpoint
app.post('/register', async (req, res) => { //async pq vou usar await -  porem podia usar then
  const { username, password, imagemPerfil } = req.body;//conteudo da request / payload
  const existingUser = await User.findOne({ username });//pra ver se tem igual

  if (existingUser) {
    return res.status(400).json({ error: 'Username already exists' });
  }

  const newUser = new User({ username, password, imagemPerfil});
  await newUser.save();
  res.json({ message: 'User registered successfully' });//res - manda por frontoffice, como json
});

// Login Endpoint
app.post('/login', async (req, res) => {//async pq vou usar await -  porem podia usar then
  const { username, password } = req.body;//conteudo da request / payload
  const user = await User.findOne({ username, password }); //existe conta

  if (user) {
    const key = jwt.sign({ userId: user._id, username }, SECRET_KEY, { expiresIn: '2 days' });//cria chave(userid e username) que expira em dois dias
    res.json({ key }); ///res - manda por frontoffice, como json
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// verifica se és mesmo tu pela chave/token
const verifyToken = (req, res, next) => { //todas as requests passam por aqui(menos as requests não protegidas), analisa a chave, se estiver correta, next
  const authHeader = req.headers['authorization'];//pega a chave (Bearer "key")
  if (!authHeader) {// se n houver chave
    return res.status(403).json({ error: 'Authentication required' });
  }

  const key = authHeader.split(' ')[1]; //fica só "key", sem Bearer
  jwt.verify(key, SECRET_KEY, (err, user) => { //verifica a chave, se houver erro... (user -> é oq tinha na chave linha 55)
    if (err) {
      console.error("Token verification failed:", err.message);
      return res.status(403).json({ error: 'Invalid or expired token' });//frontoffice
    }
    req.user = user;//adiciona user desencriptado na request
    next();//continua proxima função
  });
};

// Get User's Personal Feed - Only User's Posts
app.get('/feed', verifyToken, async (req, res) => { //verifyToken -> acaba -> next() -> proxima função
  const userId = req.user.userId;//ler id e guardar em userid
  const posts = await Post.find({ userId }).sort({ createdAt: -1 });// -1 -> os mais recentes no topo || meus posts (procurar na bd userId)
  res.json(posts);// mandar posts pro frontoffice
});

// Update Account Information
app.put('/update/account', verifyToken, async (req, res) => {//verifyToken -> acaba -> next() -> proxima função
  const { username, password, imagemPerfil } = req.body;//payload
  await User.updateOne({ _id: req.user.userId }, { username, password, imagemPerfil });//update (quem e o que)
  res.json({ message: 'Account updated successfully' });//mandar pro frontoffice
});

// Create Post
app.post('/create/post', verifyToken, async (req, res) => {////verifyToken -> acaba -> next() -> proxima função
  const { content } = req.body;//payload
  const post = new Post({
    userId: req.user.userId,
    username: req.user.username,
    content,
  });// criar post
  await post.save();// guardar na bd
  res.json({ message: 'Post created successfully', post });//mandar para o frontoffice msg e post
});

// Find Users by Username
app.post('/find/users', verifyToken, async (req, res) => {//verifyToken -> acaba -> next() -> proxima função
  const { username } = req.body;//payload
  const users = await User.find({ username: new RegExp(username, 'i') });//username -> na pesquia procura usernames com esses caracteres || i-> faz com que seja case insensitive
  res.json(users);//mandar users para frontoffice
});

// Get Feed of a Specific User
app.post('/find/user/feed', verifyToken, async (req, res) => {//verifyToken -> acaba -> next() -> proxima função
  const { userId } = req.body;//payload
  const posts = await Post.find({ userId }).sort({ createdAt: -1 });// -1 -> os mais recentes no topo || posts do user (procurar na bd userId)
  res.json(posts);//mandar posts para o frontoffice
});

// Comment on a Post
app.post('/create/post/comment', verifyToken, async (req, res) => {//verifyToken -> acaba -> next() -> proxima função
  const { postId, comment } = req.body;//payload
  const post = await Post.findById(postId);//encontrar post a comentar

  if (!post) {// se n existir
    return res.status(404).json({ error: 'Post not found' });
  }

  post.comments.push({ username: req.user.username, comment });//to a dar o meu username e a comentar
  await post.save();//guardar na bd
  res.json({ message: 'Comment added successfully', post });//mandar para o frontoffice msg e post
});

// Start the API
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
