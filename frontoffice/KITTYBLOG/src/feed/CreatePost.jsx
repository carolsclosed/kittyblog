import React, { useState } from "react";
import './CreatePost.css'
import { Link } from "react-router-dom";

function CreatePost() {
  const [Content, setContent] = useState('')
  const [base64String, setBase64String] = useState('');


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      convertToBase64(file);
    }
  };

  const convertToBase64 = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setBase64String(reader.result);
    };

    reader.readAsDataURL(file);
  };


  const FileOpen = (e) => {
    e.preventDefault();
    document.getElementById("file").click();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('authToken');

    if (!token) {
      alert('You must be logged in to create a post.');
      return;
    }

    try {
      await fetch("http://localhost:3001/create/post", {

        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          content: Content,
          imagem: base64String
        })

      })
      setContent(''); // Clear input after submission
      alert('Post Published Successfully')

    } catch (err) {
      console.log(err)
      alert('Failed to create post. Please try again.');
    }
  };

  return (
    <>
      <div id="allBody">
        <div id="Criar">
          <Link to="/feed">
            <button className="button2">
              Return
            </button>
          </Link>
          <form className="form" >
            <textarea className="textarea"
              value={Content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Meow Something..."
              rows="4"
              cols="50"
            />
            <div style={{ display: "flex" }}>
              <button id="files" onClick={FileOpen} >Imagem</button>
              <button className="button" onClick={handleSubmit}  >Publish</button>
            </div>

          </form>
          {base64String !== "" && <img
            src={base64String}
            alt="Preview da Imagem de Perfil"
            className="imagem-post"
          />}
        </div>
      </div>
      <input
        type="file"
        name="file"
        accept="image/*"
        id="file"
        onChange={handleFileChange}
      />
    </>
  )
}
export default CreatePost