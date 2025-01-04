This is a kitty project made by a kitty :)

Como configurar:
1. npm i
2. npm run dev


Iniciar mongodb docker:

1. docker build -t my-mongo-image .\kittyblog-main\backoffice\
2. docker run -d -p 27017:27017 --name my-mongo-container my-mongo-image

Depois, no projeto:
1. .\backoffice\ -> npm run dev 
2. .\frontoffice\KITTYBLOG -> npm run dev
