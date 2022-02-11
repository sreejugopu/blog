
import './articlepage.css'
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Articlepage = (props) => {
    const { id } = useParams();
    console.log("Article Id", id)
    let [singleArticle, setSingleArticle] = useState([]);
    useEffect(() => {
        articleData();
    }, []);

    function articleData() {
        axios.get("http://localhost:3005/api/view")
            .then((response) => {
                console.log(response.data);
                setSingleArticle(singleArticle = response.data.find(i => i._id === id));
                console.log(singleArticle)
            }
            )
    }

    return (
        < div className='articlepage'>
            <h1>"{singleArticle.title}"</h1>
            {/* <h3>{singleArticle.username}</h3> */}
            <p> {singleArticle.content}</p>
        </div>
    );
};

export default Articlepage;