import React from 'react';
import "./write.css";
import axios from 'axios';
import MyForm from './DbForm';
import { useNavigate } from "react-router-dom";
import ArticlesListPage from '../pages/Articlelistpage';

const AddArticle = () => {
    let navigate = useNavigate();
    var [myvalue, setmyValue] = MyForm({ username: "", title: "", content: "" })
    const addArticles = () => {
        console.log(myvalue)
        axios.post("/add", myvalue).then(
            (res) => {
                alert("Successfully Added Article")
                navigate(window.location("/ArticlesListPage"), { replace: true })
                console.log("in axios post" + res.data)

            }
        )
    }
    return (

        

        <div className='write'>

<form className='writeForm'>
    <div className="writeformGroup">
   
    <input type="text" placeholder='Name' className='writeInput' autoFocus={true} name="username" value={myvalue.username} onChange={setmyValue}/>
    </div>
    <div className="writeformGroup">
    
    <input type="text" placeholder='Title' className='writeInput'  name="title" value={myvalue.title} onChange={setmyValue}/>
    </div>
    <div className="writeformGroup">
        <textarea placeholder='Tell Your Story....' type='text' className='writeInput writeText' name="content" value={myvalue.content} onChange={setmyValue}></textarea>
    </div>
    <button className="writeSubmit" onClick={addArticles}>Publish</button>
</form>


  </div>

    );
};

export default AddArticle;