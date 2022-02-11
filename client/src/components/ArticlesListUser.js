
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import "./articlelist.css"

const ArticlesListUser = () => {
    let navigate = useNavigate();
    let [Data, SetData] = useState([]);
    useEffect(() => {
        articleData();
    }, []);

    function articleData() {
        axios.get("/view")
            .then((response) => {
                console.log(response.data);
                SetData(Data = response.data);
            }
            )
    }
    

    return (
        <>

            {Data.map((article, key) => (
                <div className='articlelist'>
                    <Link  className="l" key={key} to={`/articlelist/${article._id}`}>

                        <h5>Article Title : "{article.title}"</h5>
                        <p className='author'>Author : {article.username}</p>
                        <p className='content' style={{color:"white"}}>Content : {article.content}</p>
                    </Link>
                    
                </div>




            ))}


        </>
    );
}
export default ArticlesListUser;