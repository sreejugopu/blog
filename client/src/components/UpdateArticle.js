
import './AddArticle.css'
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useNavigate } from "react-router-dom";

const UpdateArticle = (props) => {
    let navigate = useNavigate();

    const { id } = useParams();
    console.log("Article Id", id)
    let [singleArticle, setSingleArticle] = useState({username:"",title:"",content:""});
    
   //console.log(singleArticle)
    useEffect(() => {
        articleData();
    }, []);

    function articleData() {
        axios.get("/view")
            .then((response) => {
                //console.log(response.data);
                setSingleArticle(singleArticle = response.data.find(i => i._id === id));
               console.log(singleArticle.content)
               
            }
            )
    }
    function contentChange(e) {
        const { name, value } = e.target; //destructuring
        setSingleArticle({ ...singleArticle, [name]: value });
       // setSingleArticle(singleArticle.content=e.target.value)
    }
  

    function updateArticle() {
       
            
            axios.post("/update",  singleArticle )
                .then((res) => {
                    alert("Successfully Updated");
                    
                    navigate("/articlelist", { replace: true })
                   
                }
                )
            
    }

    return (
       

<div className="container">
<div className="row">
    <h1>Update Article</h1>
</div>
<div className="row">
    <h4><center>Update Article Content Here !!!!!</center></h4>
</div>
<div className="row input-container">
    <div className="col-xs-12">
        <div className="styled-input wide">
            <input type="text" required name="username" value={singleArticle.username} disabled />
            <label>Username</label>
        </div>
    </div>
    <div className="col-md-6 col-sm-12">
        <div className="styled-input">
            <input type="text" required name="title" value={singleArticle.title} disabled/>
            <label>Article Title</label>
        </div>
    </div>

    <div className="col-xs-12">
        <div className="styled-input wide">
            <textarea required name="content" value={singleArticle.content} onChange={contentChange}></textarea>
            <label>Article Content</label>
        </div>
    </div>
    <div className="col-xs-12">
        <div className="btn-lrg submit-btn" onClick={updateArticle}>Update Article</div>
    </div>
</div>
</div>
    );
};

export default UpdateArticle;