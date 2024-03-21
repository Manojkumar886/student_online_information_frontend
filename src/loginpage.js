import { loadStudentdetails } from './connect.js';
import './assests/style.css';
import React, { useEffect, useState } from 'react';
import { SignupForm } from './createone.js';


export let Loginpage = () => {


    const [user, setUser] = useState({
        "username": "",
        "password": ""
    })
    const onGet = (getinputvalues) => {
        const { name, value } = getinputvalues.target;
        setUser((getting) => {
            return {
                ...getting,
                [name]: value
            }
        });
    }

    const [createview, setCreateview] = useState(false);

    return (
        <>
            {
                (createview) ?
                    <>
                        <SignupForm />
                    </>
                    :
                    <>
                        <div class='body'>
                            <div className="area" style={{ overflowY: 'hidden' }}>
                                <ul className="circles">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                                <header className="row justify-content-md-center ms-lg-5" style={{ margin: 'auto' }}>
                                    <div className="col-lg-2 col-md-5 col-sm-6 col-12 text-center">
                                        <img src={require('./images/muthayammal_logo.png')} className="img-fluid mt-lg-3" alt="Muthayammal College Logo" />
                                    </div>
                                    <div className="col-lg-8 col-md-8 col-sm-6 col-12 text-center mt-3">
                                        <div className="mec-title me-lg-5">
                                            <h1 className="text-white fw-bold">Muthayammal Engineering College</h1>
                                            <p className="text-white fw-light mt-sm-5 mt-lg-0">An Autonomous Institution</p>
                                            <p className="text-white fw-light">Approved by AICTE | Affiliated to Anna University</p>
                                        </div>
                                    </div>
                                </header>
                                <div className="container mt-5">
                                    <div className="first row justify-content-lg-evenly">
                                        <div className="inner-first col-lg-4 col-12 ">
                                            <div className="bg-white p-3" style={{ borderRadius: '20px', zIndex: 1 }}>
                                                <h2 className="text-center mt-3 fw-bold" style={{ color: '#001aff', letterSpacing: '2px' }}>Login</h2>
                                                <div className="form-body">
                                                    <div className="input-container mt-5">
                                                        <input placeholder="E-mail Address"
                                                            className="input-field"
                                                            onChange={onGet}
                                                            name='username'
                                                            value={user.username}
                                                            type="email"
                                                        />
                                                        <label htmlFor="input-field" className="input-label">E-mail Address</label>
                                                        <span className="input-highlight"></span>
                                                    </div>
                                                    <div className="input-container mt-5">
                                                        <input id="password"
                                                            placeholder="Password"
                                                            className="input-field"
                                                            type="password"
                                                            onChange={onGet}
                                                            value={user.password}
                                                            name='password' />
                                                        <label htmlFor="password" className="input-label">Password</label>
                                                        <span className="input-highlight"></span>
                                                        <i className="bi bi-eye-slash password-toggle"></i>
                                                    </div>
                                                    <div className="mt-5 text-center">
                                                        <button class="button1"
                                                            onClick={
                                                                async () => {
                                                                    const t = await loadStudentdetails(user);
                                                                    // alert(t.data);
                                                                    window.location.assign("/")
                                                                }
                                                            }>
                                                            Submit
                                                        </button>
                                                    </div>
                                                    <p className="mt-3 text-center" style={{ position: 'relative', zIndex: 2 }}>
                                                        Don't have an account?
                                                        <a style={{ textDecoration: 'none', cursor: 'pointer' }}
                                                            className='text-primary'
                                                            onClick={() => {
                                                                setCreateview(true);
                                                            }}
                                                        >Create one
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="second col-lg-7  p-0">
                                            <div className="carousel carousel-dark slide w-100 p-0" data-bs-ride="carousel" id="my" style={{ borderRadius: '30px' }}>
                                                <div className="carousel-inner" style={{ borderRadius: '20px' }}>
                                                    <div className="carousel-item active" data-bs-interval="2000">
                                                        <img src={require('./images/Muthayammalcollege.png')} className="d-block " alt="First slide" style={{ height: '430px', width: '800px', marginLeft: '0px' }} />
                                                    </div>
                                                    <div className="carousel-item" data-bs-interval="2000">
                                                        <img src={require('./images/muthyammalcaorusel2.jpg')} className="d-block " alt="Second slide" style={{ height: '430px', width: '800px', marginLeft: '0px' }} />
                                                    </div>
                                                    <div className="carousel-item" data-bs-interval="2000">
                                                        <img src={require('./images/muthayammalcarousel3.jpg')} className="d-block" alt="Third slide" style={{ height: '430px', width: '800px', marginLeft: '0px' }} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </>
    );
}
