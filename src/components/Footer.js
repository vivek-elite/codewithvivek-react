import React from 'react';
import './Footer.css';

const Footer = () => ( 
    <footer>
        <div id="footer-info">
            <div className="footer-block">
                <h2>Learn Web Development Free</h2>
                <ul>
                    <li><a href="/courses/htmltutorial">free HTML Tutorial for Beginners</a></li>
                    <li><a href="/courses/csstutorial">free CSS Tutorial in Hindi</a></li>
                    <li><a href="/courses/jstutorial">free JavaScript Tutorial in Hindi</a></li>
                </ul>
                <h2>Learn Programming Free</h2>
                <ul>
                    <li><a href="/courses/ctutorial">free C Tutorial in Hindi</a></li>
                    <li><a href="/courses/phptutorial">free PHP Tutorial in Hindi</a></li>
                    <li><a href="/courses/cpptutorial">free Programming with C++</a></li>
                </ul>
            </div>
            <div className="footer-block">
                <h2>Programming for Kids Free</h2>
                <ul>
                    <li><a href="/courses/kidstutorial">free Coding for Kids Tutorial</a></li>
                </ul>
                <h2>free Coding Classes in Jammu</h2>
                <ul>
                    <li><a href="#">learn Python in Jammu</a></li>
                    <li><a href="#">learn C# in Jammu</a></li>
                    <li><a href="#">learn C++ in Jammu</a></li>
                    <li><a href="#">learn C in Jammu</a></li>
                </ul>
            </div>            
            <div className="footer-block">
                <h2>free Coding Projects</h2>
                <ul>
                    <li><a href="/courses/jsprojectshindi">free JavaScript Projects in Hindi</a></li>
                    <li><a href="/courses/jsprojectseng">free JavaScript Projects in English</a></li>
                </ul>
                <h2>learn Web Development in Jammu</h2>
                <ul>
                    <li><a href="#">learn React.js in Jammu</a></li>
                    <li><a href="#">learn PHP in Jammu</a></li>
                    <li><a href="#">learn Django in Jammu</a></li>
                </ul>                
            </div>
            <div className="footer-block">
                <h2>Contact for live coding classes...</h2>
                <ul>
                    <li>learn HTML, learn CSS, learn JavaScript</li>
                    <li>learn C, learn C++, learn PHP</li>
                    <li>learn React JS</li>
                    <li>learn Node JS, learn Express JS</li>
                    <li>learn Python, learn Django</li>
                </ul>
            </div>
        </div>
        <div id="copyright">
            <p><a href="/"> &copy; {new Date().getFullYear()} Code with Vivek</a></p>
        </div>
    </footer>
);

export default Footer;