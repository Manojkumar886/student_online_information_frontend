import { useNavigate } from 'react-router-dom';
import backgroundImage from './images/4964089.jpg';
import './assests/mecacademic1.css';
import './assests/navbar.css'
import { useEffect } from 'react';


export const MECACADEMICS_3=()=>
{
    const mec1navigation =useNavigate();
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
        if (path === '') {
            path = 'index.html';
        }
    
        const target = document.querySelector('#navbarSupportedContent ul li a[href="'+path+'"]');
        // Add active class to target link
        if (target && target.parentNode) {
            target.parentNode.classList.add('active');
        }
    }, []);    
    return(
        <>
            <div class="mec1body">
                <div class="container-fluid m-0 p-0">
                <nav class="navbar fixed-top navbar-expand-custom navbar-mainbg">
                        <a href='https://mec.edu.in/'><img class="navbar-brand navbar-logo ms-lg-4 ms-md-5 mb-1 mt-lg-1 mt-md-3 imglogo" src={require('./images/muthayammal_logo.png')} style={{'width':'2em','marginTop':'3px','borderRadius':'20%'} }></img></a><h5 class='text-white fw-bold mt-lg-0 mt-md-3 barmec' style={{'font-family': "Madimi One , sans-serif",'fontStyle':'italic'}}>MEC Student Record</h5>
                        <button class="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="bi bi-list text-white"></i>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto">
                                <div class="hori-selector"><div class="left"></div><div class="right"></div></div>
                                <li class="nav-item ms-4 firstbar">
                                    <a class="nav-link" href="/"><i class="bi bi-file-bar-graph"></i>Dashboard</a>
                                </li>
                                <li class="nav-item ms-4">
                                    <a class="nav-link" href="/personalinfo"><i class="bi bi-person"></i>About you</a>
                                </li>
                                <li class="nav-item ms-4">
                                    <a class="nav-link" href="/premec"><i class="bi bi-buildings"></i>Schooling</a>
                                </li>
                                <li class="nav-item ms-4 active">
                                    <a class="nav-link" href="./mecsem1"><i class="bi bi-journals"></i>Academics</a>
                                </li>
                                <li class="nav-item ms-4">
                                    <a class="nav-link" href="./cocnavigation"><i class="bi bi-controller"></i>Co-curricular</a>
                                </li>
                                <li class="nav-item ms-4">
                                    <a class="nav-link" href="./project"><i class="bi bi-lightbulb"></i>Projects</a>
                                </li>
                            </ul>
                            <div class="d-flex align-items-center barbutton">
                                <button data-mdb-ripple-init type="button" class="btn btn-danger">
                                  Logout <i class="bi bi-arrow-right-circle ms-1"></i>
                                </button>
                            </div>
                        </div>
                    </nav>
                </div>    
                <div className="bg"style={{ fontFamily: 'Poppins, sans-serif',marginTop:'110px' }}>
                    <h2 className="text-center mt-3 p-3 fw-bold" style={{letterSpacing:'1.5px'}}>SEMESTER <span><i class="bi bi-3-circle-fill"></i></span></h2>
                    <div className=" justify-content-center d-flex mt-3 p-3">
                        <div className="table-responsive-md col-lg-10  ">
                            <table className="table-responsive table-bordered table table-hover text-nowrap " style={{border: '2px solid black'}}>
                                <tbody>
                                    <tr>
                                        <th>Duration</th>
                                        <td>2020</td>
                                        <th>To</th>
                                        <td>2021</td>
                                    </tr>
                                    <tr>
                                        <th>Hosteller/block name</th>
                                        <td>-----</td>
                                        <th>Room No</th>
                                        <td>----</td>
                                    </tr>
                                    <tr>
                                        <th>Day Scohalar/ Bus Stage</th>
                                        <td>7 arts College</td>
                                        <th>Bus No</th>
                                        <td>M45</td>
                                    </tr>
                                    <tr>
                                        <th>Class Advisior/counselor</th>
                                        <td>Mrs Amutharani</td>
                                        <th>Conatact No</th>
                                        <td>7418529631</td>
                                    </tr>
                                    <tr>
                                        <th>Mentor of the Student</th>
                                        <td>Mrs Amutharani</td>
                                        <th>Contact</th>
                                        <td>74185296312</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>    
                    </div>
                    <h2 className="text-center mt-3 fw-bold"><span style={{color:'rgb(35, 35, 228)',letterSpacing:'1.5px'}}>INTERNAL</span> TEST ATTENDANCE & MARKS OBTAINED</h2>
                    <div className=" justify-content-center d-flex mt-3 p-3">
                        <div className="table-responsive col-lg-10  ">
                            <table className="table-responsive table-bordered table table-hover text-nowrap " style={{border: '2px solid black'}}>
                                <thead className="text-center"  style={{backgroundColor:'#d6e4f0'}}>
                                    <tr>
                                        <th rowspan="2">S.No</th>
                                        <th rowspan="2">Subject code</th>
                                        <th rowspan="2">Subject Name</th>
                                        <th colspan="2">Internal 1</th>
                                        <th colspan="2">Internal 2</th>
                                        <th colspan="2">Internal 3</th>
                                    </tr>
                                    <tr>
                                        <th>Attd %</th>
                                        <th>Marks (100)</th>
                                        <th>Attd %</th>
                                        <th>Marks (100)</th>
                                        <th>Attd %</th>
                                        <th>Marks (100)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1.</td>
                                    <td>19HSS01</td>
                                    <td>Bussiness English</td>
                                    <td>90</td>
                                    <td>80</td>
                                    <td>87</td>
                                    <td>91</td>
                                    <td>87</td>
                                    <td>92</td>
                                </tr>
                                <tr>
                                    <td>2.</td>
                                    <td>19HSS02</td>
                                    <td>Engineerig algebra</td>
                                    <td>90</td>
                                    <td>80</td>
                                    <td>87</td>
                                    <td>91</td>
                                    <td>87</td>
                                    <td>92</td>
                                </tr>
                                <tr>
                                    <td>3.</td>
                                    <td>19HSS04</td>
                                    <td>Engineering Physics</td>
                                    <td>90</td>
                                    <td>80</td>
                                    <td>87</td>
                                    <td>91</td>
                                    <td>87</td>
                                    <td>92</td>
                                </tr>
                                <tr>
                                    <td>4.</td>
                                    <td>19HSS02</td>
                                    <td>Engineerig Chemistry</td>
                                    <td>90</td>
                                    <td>80</td>
                                    <td>87</td>
                                    <td>91</td>
                                    <td>87</td>
                                    <td>92</td>
                                </tr>
                                <tr>
                                    <td>5.</td>
                                    <td>19HSE04</td>
                                    <td>Programming for Problem solving C</td>
                                    <td>90</td>
                                    <td>80</td>
                                    <td>87</td>
                                    <td>91</td>
                                    <td>87</td>
                                    <td>92</td>
                                </tr>
                                <tr>
                                    <td>6.</td>
                                    <td>19HSR01</td>
                                    <td>Mechanical Building Science</td>
                                    <td>90</td>
                                    <td>80</td>
                                    <td>87</td>
                                    <td>91</td>
                                    <td>87</td>
                                    <td>92</td>
                                </tr>
                                <tr>
                                    <td>7.</td>
                                    <td>19HHS01</td>
                                    <td>Physics Chemistry Lab</td>
                                    <td>90</td>
                                    <td>80</td>
                                    <td>87</td>
                                    <td>91</td>
                                    <td>87</td>
                                    <td>92</td>
                                </tr>
                                <tr>
                                    <td>8.</td>
                                    <td>19HSB01</td>
                                    <td>Programming in C lab</td>
                                    <td>90</td>
                                    <td>80</td>
                                    <td>87</td>
                                    <td>91</td>
                                    <td>87</td>
                                    <td>92</td>
                                </tr>
                                <tr>
                                    <td>9.</td>
                                    <td>19RSS01</td>
                                    <td>English Communicative Skill Lab</td>
                                    <td>90</td>
                                    <td>80</td>
                                    <td>87</td>
                                    <td>91</td>
                                    <td>87</td>
                                    <td>92</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>-----</td>
                                    <td>-----</td>
                                    <td>--</td>
                                    <td>--</td>
                                    <td>--</td>
                                    <td>--</td>
                                    <td>--</td>
                                    <td>--</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>    
                    </div>
                    <h2 className="text-center mt-3 p-3 fw-bold"><span style={{color:'rgb(35, 35, 228)',letterSpacing:'1.5px'}}>PERFORMANCE</span> IN END SEMESTER EXAMINATION </h2>
                    <div className=" justify-content-center d-flex mt-3 p-3">
                        <div className="col-lg-10 table-responsive">
                            <table className="table  table-bordered table-responsive table-hover text-nowrap " style={{border:'2px solid black'}}>
                                <thead className="text-center accordion-body  " style={{backgroundColor:'#d6e4f0'}}>
                                    <tr>
                                        <th rowspan="2">S.no</th>
                                        <th rowspan="2">Subject Code</th>
                                        <th rowspan="2">Subject Name</th>
                                        <th rowspan="2">Attd%</th>
                                        <th rowspan="2">Internal Marks</th>
                                        <th colspan="8">No. of apperance till pass</th>
                                        <th rowspan="2">Grade Obtained</th>
                                        <th rowspan="2">Month and year of Passing</th>
                                    </tr>
                                    <tr>
                                        <th>I</th>
                                        <th>II</th>
                                        <th>III</th>
                                        <th>IV</th>
                                        <th>V</th>
                                        <th>VI</th>
                                        <th>VII</th>
                                        <th>VIII</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1.</td>
                                        <td>19HSS01</td>
                                        <td>Bussiness English</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                    </tr>
                                    <tr>
                                        <td>1.</td>
                                        <td>19HSS01</td>
                                        <td>Bussiness English</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                    </tr>
                                    <tr>
                                        <td>1.</td>
                                        <td>19HSS01</td>
                                        <td>Bussiness English</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                    </tr>
                                    <tr>
                                        <td>1.</td>
                                        <td>19HSS01</td>
                                        <td>Bussiness English</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                    </tr>
                                    <tr>
                                        <td>1.</td>
                                        <td>19HSS01</td>
                                        <td>Bussiness English</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                    </tr>
                                    <tr>
                                        <td>1.</td>
                                        <td>19HSS01</td>
                                        <td>Bussiness English</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                    </tr>
                                    <tr>
                                        <td>1.</td>
                                        <td>19HSS01</td>
                                        <td>Bussiness English</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                    </tr>
                                    <tr>
                                        <td>1.</td>
                                        <td>19HSS01</td>
                                        <td>Bussiness English</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                    </tr>
                                    <tr>
                                        <td>1.</td>
                                        <td>19HSS01</td>
                                        <td>Bussiness English</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                    </tr>
                                    <tr>
                                        <td>1.</td>
                                        <td>19HSS01</td>
                                        <td>Bussiness English</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                    </tr>
                                    <tr>
                                        <td>1.</td>
                                        <td>19HSS01</td>
                                        <td>Bussiness English</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>    
                    </div>
                    <div class="demo mt-5">
                            <nav class="pagination-outer" aria-label="Page navigation">
                                <ul class="pagination">
                                    <li class="page-item">
                                        <a href="./mecsem2" class="page-link" aria-label="Previous">
                                            <span aria-hidden="true">«</span>
                                        </a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="./mecsem1">1</a></li>
                                    <li class="page-item"><a class="page-link" href="./mecsem2">2</a></li>
                                    <li class="page-item active"><a class="page-link" href="./mecsem3">3</a></li>
                                    <li class="page-item"><a class="page-link" href="./mecsem4">4</a></li>
                                    <li class="page-item"><a class="page-link" href="./mecsem5">5</a></li>
                                    <li class="page-item"><a class="page-link" href="./mecsem6">6</a></li>
                                    <li class="page-item"><a class="page-link" href="./mecsem7">7</a></li>
                                    <li class="page-item"><a class="page-link" href="./mecsem8">8</a></li>
                                    <li class="page-item">
                                        <a href="./mecsem4" class="page-link" aria-label="Next">
                                            <span aria-hidden="true">»</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                    </div>
                    <div class="justify-content-center d-flex p-5">
                        <button class="editbutton fw-bold" onClick={()=>
                        {
                            mec1navigation('/editmecacademics')
                        }}> &nbsp;Edit <i class="bi bi-pen"></i></button>
                    </div>
                </div>
            </div>

        </>
    );
}