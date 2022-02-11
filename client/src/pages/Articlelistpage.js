import React from 'react';
import ArticlesList from '../components/ArticlesList';

import './style.css'

const ArticlesListPage = () => (
    <div className="page">
    <h2 style={{color:"white", textAlign:"center"}}>Articles</h2>
    <ArticlesList />
    
    </div>
);

export default ArticlesListPage;