import React from 'react';
import vivek from './vivek.png';
import cplus from './cplus.png';
import css from './css.png';
import django from './django.png'; 
import html from './html.png';
import javascript from './javascript.png';
import mysql from './mysql.png';
import nodejs from './nodejs.png';
import php from './php.png';
import python from './python.png';
import react from './react.png';

const AboutPage = () => (
    <>
        <h1>About me</h1>
        <div className="flex-container">
            <div className="flex-item">
                <img src={vivek} alt="Vivek" className="instructor-img"></img>
            </div>
            <div className="flex-item">
                <h2>Coding is Fun!</h2>
                <p>
                    My belief is that given the right content and instruction methodology learning coding can be a fun-filled 
                    adventure activity.
                </p>
                <p>
                    Join my video and live tutorials to see this in action.
                </p>
            </div>
            <div className="flex-item">
                <img src={cplus} alt="C++" className="languageicon"></img>
                <img src={css} alt="CSS" className="languageicon"></img>
                <img src={django} alt="Django" className="languageicon"></img>
                <img src={html} alt="HTML" className="languageicon"></img>
                <img src={javascript} alt="JavaScript" className="languageicon"></img>
                <img src={mysql} alt="MySQL" className="languageicon"></img>
                <img src={nodejs} alt="Node JS" className="languageicon"></img>
                <img src={php} alt="PHP" className="languageicon"></img>
                <img src={python} alt="Python" className="languageicon"></img>
                <img src={react} alt="React JS" className="languageicon"></img>

                <div class="attributions">
                    <div>
                        <a href="https://www.flaticon.com/free-icons/python" title="python icons">Python icons created by Freepik - Flaticon</a>
                        <a href="https://www.flaticon.com/free-icons/html" title="html icons">Html icons created by Freepik - Flaticon</a>
                        <a href="https://www.flaticon.com/free-icons/java" title="java icons">Java icons created by Pixel perfect - Flaticon</a>
                        <a href="https://www.flaticon.com/free-icons/mysql" title="mysql icons">Mysql icons created by Pixel perfect - Flaticon</a>
                        <a href="https://www.flaticon.com/free-icons/development" title="development icons">Development icons created by Freepik - Flaticon</a>
                        <a href="https://www.flaticon.com/free-icons/django" title="django icons">Django icons created by Freepik - Flaticon</a>
                    </div>
                    <div> 
                        <a href="https://www.flaticon.com/free-icons/php" title="php icons">Php icons created by Freepik - Flaticon</a>
                        <a href="https://www.flaticon.com/free-icons/css" title="css icons">Css icons created by Freepik - Flaticon</a>
                        <a href="https://www.flaticon.com/free-icons/nodejs" title="nodejs icons">Nodejs icons created by Freepik - Flaticon</a>
                        <a href="https://www.flaticon.com/free-icons/react" title="react icons">React icons created by Freepik - Flaticon</a>
                    </div>
                </div>     
            </div>
        </div>
    </>
);

export default AboutPage;