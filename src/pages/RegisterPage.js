import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import ReCAPTCHA from 'react-google-recaptcha';

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

const RegisterPage = () => {
    const form = useRef();

    const sendEmail = async(e) => {
        e.preventDefault();

        // const response = await ReCAPTCHA.execute();
        // if (response.success) {
            emailjs
            .sendForm('service_0c6ux8q', 'template_4al7eln', form.current, {
                publicKey: 'JLvXvLtjncKAdjoET',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    let inputs = document.querySelectorAll("input.form-control");
                    inputs.forEach(input => input.value="");
                    let standard = document.querySelector("select#standard")
                    standard.value = "";
                    let state = document.querySelector("select#state")
                    state.value = "Jammu and Kashmir";                
                    let scholarship = document.querySelector("select#scholarship")
                    scholarship.value = "None";                                            
                    alert("Registered successfully for Tuition!");
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        // } else {
        //     // Display an error message to the user.
        //     console.log('Captcha validation FAILED...');
        //     alert("Captcha validation failed!");            
        // }            
    };

    return (
    <>
        <h1>Register for Tuitions</h1>
        <div className="flex-container">
            <div className="flex-item">
                <img src={vivek} alt="Vivek" className="instructor-img"></img>
            </div>
            <div className="flex-item">
                <h2>Register now!</h2>
                <form ref={form} onSubmit={sendEmail}>
                    <table>
                        <tbody>
                            <tr>
                                <td><label>Name </label></td>
                                <td><input type="text" name="user_name" className="form-control" required /></td>
                            </tr>
                            <tr>
                                <td><label>Email </label></td>
                                <td><input type="email" name="user_email" className="form-control" required /></td>
                            </tr>
                            <tr>
                                <td><label>Mobile </label></td>
                                <td><input type="number" name="user_mobile" className="form-control" required /></td>
                            </tr>
                            <tr>
                                <td><label>Class </label></td>
                                <td>
                                    <select name="user_standard" id="standard" required>
                                        <option value="">-- Select class --</option>
                                        <option value="11th">11th class</option>
                                        <option value="11th">12th class</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td><label>State / UT </label></td>
                                <td>
                                    <select name="user_state" id="state" required>
                                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                        <option value="Assam">Assam</option>
                                        <option value="Bihar">Bihar</option>
                                        <option value="Chhattisgarh">Chhattisgarh</option>
                                        <option value="Goa">Goa</option>
                                        <option value="Gujarat">Gujarat</option>
                                        <option value="Haryana">Haryana</option>
                                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                                        <option value="Jharkhand">Jharkhand</option>
                                        <option value="Karnataka">Karnataka</option>
                                        <option value="Kerala">Kerala</option>
                                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                                        <option value="Maharashtra">Maharashtra</option>
                                        <option value="Manipur">Manipur</option>
                                        <option value="Meghalaya">Meghalaya</option>
                                        <option value="Mizoram">Mizoram</option>
                                        <option value="Nagaland">Nagaland</option>
                                        <option value="Odisha">Odisha</option>
                                        <option value="Punjab">Punjab</option>
                                        <option value="Rajasthan">Rajasthan</option>
                                        <option value="Sikkim">Sikkim</option>
                                        <option value="Tamil Nadu">Tamil Nadu</option>
                                        <option value="Telangana">Telangana</option>
                                        <option value="Tripura">Tripura</option>
                                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                                        <option value="Uttarakhand">Uttarakhand</option>
                                        <option value="West Bengal">West Bengal</option>
                                        <option value="Andaman and Nicobar Island">Andaman and Nicobar Island</option>
                                        <option value="Chandigarh">Chandigarh</option>
                                        <option value="D & N Haveli and Daman & Diu">D N Haveli and Daman & Diu</option>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Ladakh">Ladakh</option>
                                        <option value="Lakshadweep">Lakshadweep</option>
                                        <option value="Puducherry">Puducherry</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td><label>City / Town </label></td>
                                <td><input type="text" name="user_city" className="form-control" required /></td>
                            </tr>                                                        
                            <tr>
                                <td><label>School / Institution </label></td>
                                <td><input type="text" name="user_school" className="form-control" required /></td>
                            </tr>                                                        
                            <tr>
                                <td colspan={2}><label>Interested in scholarship: </label></td>
                            </tr>                                                                                  
                            <tr>
                                <td colspan={2}><label class="sublabel">(scroll down for details)</label></td>
                            </tr>                                                                                                                  
                            <tr>
                                <td></td>
                                <td>
                                    <select name="scholarship" id="scholarship">
                                        <option value="None">-- If yes, select type --</option>
                                        <option value="Merit">Merit Scholarship *</option>
                                        <option value="Means">Means Scholarship **</option>
                                    </select>
                                </td>
                            </tr>                                                                                    
                            <tr>
                                <td colSpan={2} className="command">
                                    {/* <ReCAPTCHA sitekey="6LdRu9QpAAAAALV9TIdrM62RI7V6fszVhe4bZM4Z" /> */}
                                    <input type="submit" className="submit" value="REGISTER" />
                                </td>
                            </tr>                        
                        </tbody>
                    </table>
                </form>
                <h2>Details</h2>
                <table border="1" cellSpacing={0} cellPadding={5}>
                    <thead>
                        <tr>
                            <th>Class</th>
                            <th>Timings</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><b>11th</b></td>
                            <td>Tue, Thu, Sat: 6:00pm-7:15pm</td>
                        </tr>
                        <tr>
                            <td><b>12th</b></td>
                            <td>Tue, Thu, Sat: 7:15pm-8:30pm</td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <b>Batch Starts:</b> 14th May, 2024<br/>
                    <b>Course Fee:</b> Rs 9000<br/>
                    <b>Course Duration:</b> 10 weeks<br/>
                </div>

                <h2>Scholarships available!</h2>
                <table border="1" cellSpacing={0} cellPadding={5}>
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><b>Merit *</b></td>
                            <td>
                                <u>Marks in 10th:</u><br/>
                                90% and above - 30% off<br/>
                                80% and above - 15% off
                            </td>
                        </tr>
                        <tr>
                            <td><b>Means **</b></td>
                            <td>
                                For students who need financial assistance. 
                            </td>
                        </tr>
                    </tbody>
                </table>
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
        
                <div className="attributions">
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
};

export default RegisterPage;