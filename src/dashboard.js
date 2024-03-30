import { useNavigate, useParams } from 'react-router-dom';
import './assests/dashboardcss.css';
import './assests/editbutton.css';
import React, { useEffect, useState } from 'react';
import './assests/navbar.css'
import { onLoadoneuser } from './connect';

export const Dashborad1 = () => {

    const [userdetail, setUserdetail] = useState({})

    const callreadingvalue = async () => {
        const t = await onLoadoneuser();
        setUserdetail(t.data);
    }

    useEffect(
        () => {
            callreadingvalue();
        }, []
    )
    useEffect(() => {
        const test = () => {
            var tabsNewAnim = document.getElementById('navbarSupportedContent');
            var selectorNewAnim = tabsNewAnim.querySelectorAll('li').length;
            var activeItemNewAnim = tabsNewAnim.querySelector('.active');
            var activeWidthNewAnimHeight = activeItemNewAnim.clientHeight;
            var activeWidthNewAnimWidth = activeItemNewAnim.clientWidth;
            var itemPosNewAnimTop = activeItemNewAnim.offsetTop;
            var itemPosNewAnimLeft = activeItemNewAnim.offsetLeft;
            document.querySelector(".hori-selector").style.cssText = `
                top: ${itemPosNewAnimTop}px; 
                left: ${itemPosNewAnimLeft}px;
                height: ${activeWidthNewAnimHeight}px;
                width: ${activeWidthNewAnimWidth}px;
            `;
            tabsNewAnim.addEventListener("click", (e) => {
                var target = e.target.closest("li");
                if (!target) return;
                var activeWidthNewAnimHeight = target.clientHeight;
                var activeWidthNewAnimWidth = target.clientWidth;
                var itemPosNewAnimTop = target.offsetTop;
                var itemPosNewAnimLeft = target.offsetLeft;
                document.querySelector(".hori-selector").style.cssText = `
                    top: ${itemPosNewAnimTop}px; 
                    left: ${itemPosNewAnimLeft}px;
                    height: ${activeWidthNewAnimHeight}px;
                    width: ${activeWidthNewAnimWidth}px;
                `;
                tabsNewAnim.querySelectorAll('li').forEach((li) => li.classList.remove("active"));
                target.classList.add('active');
            });
        }
        test();
        window.addEventListener('resize', () => {
            setTimeout(() => {
                test();
            }, 500);
        });
        const navbarToggler = document.querySelector(".navbar-toggler");
        navbarToggler.addEventListener('click', () => {
            document.querySelector(".navbar-collapse").classList.toggle('show');
            setTimeout(() => {
                test();
            });
        });
        // Clean up function
        return () => {
            window.removeEventListener('resize', () => {
                setTimeout(() => {
                    test();
                }, 500);
            });
        };
    }, []);

    useEffect(() => {
        // Get current path and find target link
        let path = window.location.pathname.split("/").pop();

        // Account for home page with empty path
        if (path === '/') {
            path = './dashboard.js';
        }

        const target = document.querySelector('#navbarSupportedContent ul li a[href="' + path + '"]');
        // Add active class to target link
        if (target && target.parentNode) {
            target.parentNode.classList.add('active');
        }
    }, []);
    return (
        <>
            <div class="dashboardbody" >
                <div class="container-fluid m-0 p-0">
                    <nav class="navbar fixed-top navbar-expand-custom navbar-mainbg">
                        <a href='https://mec.edu.in/'><img class="navbar-brand navbar-logo ms-lg-4 ms-md-5 mb-1 mt-lg-1 mt-md-3 imglogo" src={require('./images/muthayammal_logo.png')} style={{ 'width': '2em', 'marginTop': '3px', 'borderRadius': '20%' }}></img></a><h5 class='text-white fw-bold mt-lg-0 mt-md-3 barmec' style={{ 'font-family': "Madimi One , sans-serif", 'fontStyle': 'italic' }}>MEC Student Record</h5>
                        <button class="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i class="bi bi-list text-white"></i>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto">
                                <div class="hori-selector"><div class="left"></div><div class="right"></div></div>
                                <li class="nav-item ms-4 active firstbar">
                                    <a class="nav-link" href="/"><i class="bi bi-file-bar-graph"></i>Dashboard</a>
                                </li>
                                <li class="nav-item ms-4">
                                    <a class="nav-link" href="/personalinfo"><i class="bi bi-person"></i>About you</a>
                                </li>
                                <li class="nav-item ms-4">
                                    <a class="nav-link" href="/premec"><i class="bi bi-buildings"></i>Schooling</a>
                                </li>
                                <li class="nav-item ms-4">
                                    <a class="nav-link" href="./mecsem1"><i class="bi bi-journals"></i>Academics</a>
                                </li>
                                <li class="nav-item ms-4">
                                    <a class="nav-link" href="./cocnavigation"><i class="bi bi-controller"></i>Co-curricular</a>
                                </li>
                                <li class="nav-item ms-4">
                                    <a class="nav-link" href="./project"><i class="bi bi-lightbulb"></i>Projects</a>
                                </li>
                            </ul>
                            <div class="d-flex align-items-center  barbutton">
                                <button data-mdb-ripple-init type="button" class="btn btn-danger"
                                    onClick={() => {
                                        sessionStorage.removeItem("user");
                                        sessionStorage.removeItem("student");
                                        window.location.assign("/")
                                    }}>
                                    Logout <i class="bi bi-arrow-right-circle ms-1"></i>
                                </button>
                            </div>
                        </div>
                    </nav>
                </div>

                <div className="bg" style={{ 'fontFamily': 'Poppins, sans-serif', 'marginTop': '110px' }}>
                    <h1 className="text-center mt-5 fw-bold">Student <span style={{ color: 'rgb(35, 35, 228)', letterSpacing: '1.5px' }}>Record </span><i class="bi bi-journal-check"></i></h1>
                    <div className=" justify-content-center d-flex  mt-4 p-3"  >
                        <div className="table-responsive  col-lg-10 col-sm-12" >
                            <table className="table table-hover table-bordered text-nowrap" style={{ border: '3px solid grey', backgroundColor: '', color: 'black' }} >
                                <tbody >
                                    <tr >
                                        <th>
                                            Name of the student
                                        </th>
                                        <td>
                                            {userdetail.studentName}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            Batch
                                        </th>
                                        <td>
                                            {userdetail.studentBatch}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th >
                                            Degree/branch
                                        </th>
                                        <td colspan="2">
                                            {userdetail.studentDegree}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            Regulation
                                        </th>
                                        <td colspan="2">
                                            {userdetail.studentRegulation}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            Roll Number
                                        </th>
                                        <td colspan="2">
                                            {userdetail.studentRollno}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            Register Number
                                        </th>
                                        <td colspan="2">
                                            {userdetail.studentRegistrationno}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            Date of Joining the Institution
                                        </th>
                                        <td colspan="2">
                                            {userdetail.studentDateofjoining}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            Quota
                                        </th>
                                        <td colspan="2">
                                            {userdetail.studentQuota}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
                <div class="justify-content-center d-flex p-5">
                    <button class="editbutton fw-bold">
                        <a href='/userdetailupdate'>&nbsp;Edit <i class="bi bi-pen"></i></a>
                    </button>
                </div>
            </div>
        </>
    );
}