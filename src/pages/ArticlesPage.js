import React from 'react';
import parser from 'html-react-parser';
import articles from '../data/articles';

const ArticlesPage = () => (
    <>
        <h1>Articles</h1>
        {articles.map((article) => (
            <>
                <article>
                    <h2>{article.title}</h2>
                    <p className="articledate">Date: {article.publishdate}</p>
                    {article.content.map((paragraph, key) => (
                        <p key={key}>{ parser(paragraph) }</p>
                    ))}
                </article>
            </>
        ))}
    </>
);

export default ArticlesPage;