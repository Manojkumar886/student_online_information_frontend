import './assests/premec.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './assests/navbar.css'
export const Premec=()=>
{
    const navi= useNavigate();
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
            <div class="premecbody">
                <div class="container-fluid m-0 p-0">
                <nav class="navbar fixed-top navbar-expand-custom navbar-mainbg">
                        <a href='https://mec.edu.in/'><img class="navbar-brand navbar-logo ms-lg-4 ms-md-5 mb-1 mt-lg-1 mt-md-3 imglogo" src={require('./images/muthayammal_logo.png')} style={{'width':'2em','marginTop':'3px','borderRadius':'20%'} }></img></a><h5 class='text-white fw-bold mt-lg-0 mt-md-3 barmec' style={{'font-family': "Madimi One , sans-serif,",'fontStyle':'italic'}}>MEC Student Record</h5>
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
                                <li class="nav-item ms-4 active">
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
                                <button data-mdb-ripple-init type="button" class="btn btn-danger">
                                  Logout <i class="bi bi-arrow-right-circle ms-1"></i>
                                </button>
                            </div>
                        </div>
                    </nav>
                </div>
                    <div className="bg"style={{ fontFamily: 'Poppins, sans-serif',marginTop:'110px' }}>
                    <div className="justify-content-center d-flex mt-5 p-3">
                        <div className="table-responsive col-lg-10 col-sm-12">
                        <h1 className="text-center mt-4 fw-bold"><span style={{color: 'rgb(35, 35, 228)',letterSpacing:'1.5px'}}>Schooling</span> Details <i class="bi bi-backpack2"></i></h1>
                            <table className="table table-hover table-bordered text-nowrap mt-4" style={{border:'2px solid black'}}>
                                <thead className="text-center" >
                                    <tr style={{backgroundColor:'#d6e4f0'}}>
                                        <th>S.no</th>
                                        <th>Particulars</th>
                                        <th colspan="2">SSLC</th>
                                        <th colspan="2">HSC</th>
                                        <th colspan="2">Diploma</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>1</th>
                                        <th>Registration NO</th>
                                        <td colspan="2">5363958</td>
                                        <td colspan="2">2306464</td>
                                        <td colspan="2">-----</td>
                                    </tr>
                                    <tr>
                                        <th>2</th>
                                        <th>Medium of Instruction</th>
                                        <td colspan="2">English</td>
                                        <td colspan="2">English</td>
                                        <td colspan="2">-----</td>
                                    </tr>
                                    <tr>
                                        <th>3</th>
                                        <th>Year of Completion</th>
                                        <td colspan="2">2018</td>
                                        <td colspan="2">2020</td>
                                        <td colspan="2">-----</td>
                                    </tr>
                                    <tr>
                                        <th>4</th>
                                        <th>Institution Name and Address</th>
                                        <td colspan="2">The Little Flower Higher Secondary School</td>
                                        <td colspan="2">The Little Flower Higher Secondary School</td>
                                        <td colspan="2">-----</td>
                                    </tr>
                                    <tr>
                                        <th>5</th>
                                        <th>Certificate NO</th>
                                        <td colspan="2">965245</td>
                                        <td colspan="2">895745</td>
                                        <td colspan="2">-----</td>
                                    </tr>
                                    <tr>
                                        <th>6</th>
                                        <th>Total Marks Obtained(out of)</th>
                                        <td colspan="2">456</td>
                                        <td colspan="2">556</td>
                                        <td colspan="2">-----</td>
                                    </tr>
                                    <tr>
                                        <th>7</th>
                                        <th>Percentage</th>
                                        <td colspan="2">87.1%</td>
                                        <td colspan="2">74.1%</td>
                                        <td colspan="2">-----</td>
                                    </tr>
                                    <tr>
                                        <th rowspan="3">8</th>
                                        <th rowspan="3">Major Subjects and Marks Obtained</th>
                                        <td>Maths</td>
                                        <td>-----</td>
                                        <td>Maths</td>
                                        <td>-----</td>  
                                        <td>-----</td>                        
                                    </tr>
                                    <tr>
                                        <td>Science</td>
                                        <td>-----</td> 
                                        <td>Science</td>
                                        <td>-----</td>  
                                        <td>-----</td>                        
                                    </tr>
                                    <tr>
                                        <td>Social</td>
                                        <td>-----</td>
                                        <td>Social</td>
                                        <td>-----</td>
                                        <td>-----</td>  
                                    </tr>
                                    
                                </tbody>

                            </table>

                        </div>

                    </div>
                </div>
                   
                <div class="justify-content-center d-flex p-5">
                        <button class="editbutton fw-bold" onClick={()=>
                    {
                        navi("/editpremec")
                    }}> &nbsp;Edit <i class="bi bi-pen"></i></button>
                </div>
            </div>
        </>
    );
}