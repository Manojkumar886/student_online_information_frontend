import { useNavigate } from 'react-router-dom';
import './assests/coc1.css';
import { useEffect } from 'react';
import './assests/navbar.css'
export const Cocuricular_3=()=>
{
    const cocnavigation=useNavigate();
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
            <div class="cocbody">
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
                                <li class="nav-item ms-4">
                                    <a class="nav-link" href="./mecsem1"><i class="bi bi-journals"></i>Academics</a>
                                </li>
                                <li class="nav-item ms-4 active">
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
                        <h2 className="text-center fw-bold" style={{letterSpacing:'1.5px'}}>SEMESTER <i class="bi bi-3-circle-fill"></i></h2>
                        <h3 className="text-center mt-5 fw-bold" style={{letterSpacing:'1.5px'}}>A. Co-Curricular Activites (External)</h3>
                        <div className="justify-content-center d-flex mt-3 p-3">
                            <div className="table-responsive col-lg-10">
                                <table className="table-responsive table-hover table-bordered table text-nowrap" style={{border: '2px solid black'}}>
                                    <thead style={{backgroundColor:'#d6e4f0'}} className="text-center">
                                        <tr>
                                            <th>S.no</th>
                                            <th>Event Description</th>
                                            <th>Duration With date</th>
                                            <th>Details of Participation</th>
                                            <th>HOD Verification</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>1.</th>
                                            <th>Conference/ Symposium - paper presented</th>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                        </tr>
                                        <tr>
                                            <th>2.</th>
                                            <th>Workshop & Seminar attended</th>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                        </tr>
                                        <tr>
                                            <th>3.</th>
                                            <th>Project Contest Particuapted</th>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                        </tr>
                                        <tr>
                                            <th>4.</th>
                                            <th>Inplant Training/ Internship Attended</th>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                        </tr>
                                        <tr>
                                            <th>5.</th>
                                            <th>Industrial Visit/ Indian /Foriegn University Visit</th>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <h3 className="text-center fw-bold mt-5" style={{letterSpacing:'1.5px'}}>B. Co-Curriular Activites (Internal)</h3>
                        <div className="justify-content-center d-flex mt-3 p-3">
                            <div className="table-responsive col-lg-10">
                                <table className="table-responsive table-hover table-bordered table text-nowrap" style={{border: '2px solid black'}}>
                                    <thead style={{backgroundColor:'#d6e4f0'}} className="text-center">
                                        <tr>
                                            <th>S.No</th>
                                            <th>Event Description</th>
                                            <th>Duration with Date</th>
                                            <th>Details of Participation</th>
                                            <th>HOD Verification</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>1.</th>
                                            <th>Conference / Symposium presented</th>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                        </tr>
                                        <tr>
                                            <th>2.</th>
                                            <th>Workshop, Seminar Lecture Attended in MEC</th>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                        </tr>
                                        <tr>
                                            <th>3.</th>
                                            <th>Project Contest Partipated</th>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                        </tr>
                                        <tr>
                                            <th>4.</th>
                                            <th>Students Tech Talk</th>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                        </tr>
                                        <tr>
                                            <th>5.</th>
                                            <th>Technical Training Attended</th>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                        </tr>
                                        <tr>
                                            <th>6.</th>
                                            <th>Alumini Interaction and Mentoring Serires (AIMS) Attended</th>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <h3 className="text-center fw-bold mt-5" style={{letterSpacing:'1.5px'}}>C. Extra-Curricular Activites</h3>
                        <div className="justify-content-center d-flex mt-3 p-3">
                            <div className="table-responsive col-lg-10">
                                <table className="table-responsive table-hover table-bordered table text-nowrap" style={{border: '2px solid black'}}>
                                    <thead className="text-center" style={{backgroundColor: '#d6e4f0'}}>
                                        <tr>
                                            <th>S.No</th>
                                            <th>Activites</th>
                                            <th>Details Of Participation</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>1.</th>
                                            <th>NCC / NSS / YRC / RRC / Others (Parade / Camp / Other) </th>
                                            <th>---</th>
                                        </tr>
                                        <tr>
                                            <th>2.</th>
                                            <th>Sports (Details of sprots Participation, Winner, runner, other) </th>
                                            <th>---</th>
                                        </tr>
                                        <tr>
                                            <th>3.</th>
                                            <th>Clutural (Participation, winner, runner, other) </th>
                                            <th>---</th>
                                        </tr>
                                        <tr>
                                            <th>4.</th>
                                            <th>Club Activites (Paticipation, winner , runner, other)</th>
                                            <th>---</th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <h3 className="text-center fw-bold mt-5" >D. Tranining/ Competitive Exams/ Value Added/ Industry Linked Courses (ILCs) Details</h3>
                        <div className="justify-content-center d-flex mt-3 p-3">
                            <div className="table-responsive col-lg-10">
                                <table className="table-responsive table-hover table-bordered table text-nowrap" style={{border: '2px solid black'}}>
                                    <thead className="text-center" style={{backgroundColor: '#d6e4f0'}}>
                                        <tr>
                                            <th rowspan="2">S.No</th>
                                            <th rowspan="2">Details of Training / Course</th>
                                            <th colspan="2">Duration</th>
                                            <th rowspan="2">Student Verification</th>
                                        </tr>
                                        <tr>
                                            <th>From</th>
                                            <th>To</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>1.</th>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                        </tr>
                                        <tr>
                                            <th>2.</th>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                        </tr>
                                        <tr>
                                            <th>3.</th>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                        </tr>
                                        <tr>
                                            <th>4.</th>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <h3 className="text-center fw-bold mt-5" style={{letterSpacing:'1.5px'}}>E. NPTEL/ MOOC Online Course Detials</h3>
                        <div className="justify-content-center d-flex mt-3 p-3">
                            <div className="table-responsive col-lg-10">
                                <table className="table-responsive table-hover table-bordered table text-nowrap" style={{border: '2px solid black'}}>
                                    <thead className="text-center" style={{backgroundColor: '#d6e4f0'}}>
                                        <tr>
                                            <th>S.no</th>
                                            <th>Subject Registered</th>
                                            <th>Marks Obtained</th>
                                            <th>Faculty Co-ordinator Sign</th>
                                            <th>Studnet Signature</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1.</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <h3 className="text-center mt-5 fw-bold" style={{letterSpacing:'1.5px'}}>F. Other Activites/Professional Bodies Details </h3>
                        <div className="justify-content-center d-flex mt-3 p-3">
                            <div className="table-responsive col-lg-10">
                                <table className="table-responsive table-hover table-bordered table text-nowrap" style={{border: '2px solid black'}}>
                                        <thead style={{backgroundColor: '#d6e4f0'}} className='text-center'>
                                            <tr>
                                                <th>S.No</th>
                                                <th>Event Description</th>
                                                <th>Details <span className="text-secondary">(Members/Any Other)</span></th>
                                                <th>Student Signature</th>
                                            </tr>
                                    </thead>
                                    <tbody>
                                            <tr>
                                                <th>1.</th>
                                                <th>Members in Professional Bodies</th>
                                                <td>---</td>
                                                <td>---</td>
                                            </tr>
                                            <tr>
                                                <th>2.</th>
                                                <th>Any Other</th>
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
                                            <a href="./cocsem2" class="page-link" aria-label="Previous">
                                                <span aria-hidden="true">«</span>
                                            </a>
                                        </li>
                                        <li class="page-item"><a class="page-link" href="./cocsem1" data-hover="1">1</a></li>
                                        <li class="page-item"><a class="page-link" href="./cocsem2" data-hover="2">2</a></li>
                                        <li class="page-item active"><a class="page-link" href="./cocsem3" data-hover="3">3</a></li>
                                        <li class="page-item"><a class="page-link" href="./cocsem4" data-hover="4">4</a></li>
                                        <li class="page-item"><a class="page-link" href="./cocsem5" data-hover="5">5</a></li>
                                        <li class="page-item"><a class="page-link" href="./cocsem6" data-hover="6">6</a></li>
                                        <li class="page-item"><a class="page-link" href="./cocsem7" data-hover="7">7</a></li>
                                        <li class="page-item"><a class="page-link" href="./cocsem8" data-hover="8">8</a></li>
                                        <li class="page-item">
                                            <a href="./cocsem4" class="page-link" aria-label="Next">
                                                <span aria-hidden="true">»</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="justify-content-center d-flex p-5">
                            <button class="editbutton fw-bold" onClick={()=>
                            {
                                cocnavigation('/editcocurricular')
                            }}> &nbsp;Edit <i class="bi bi-pen"></i></button>
                        </div>
             </div>
        </>
    );
}