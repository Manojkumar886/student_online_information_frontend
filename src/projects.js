import './assests/projects.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './assests/navbar.css';  
export const Projects=()=>
{
    const project=useNavigate();
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
            <div class="dashboardbody">
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
                                <li class="nav-item ms-4">
                                    <a class="nav-link" href="./cocnavigation"><i class="bi bi-controller"></i>Co-curricular</a>
                                </li>
                                <li class="nav-item ms-4 active">
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
                <div className="bg fw-bold"style={{ fontFamily: 'Poppins, sans-serif',marginTop:'110px' }}>
                    <div className='justify-content-center d-flex mt-5 p-3'>
                        <div className='table-responsive col-lg-11 col-sm-12'>
                        <h1 className="text-center  fw-bold"><span style={{color: 'rgb(35, 35, 228)',letterSpacing:'1.5px'}}>Projects</span> Done <i class="bi bi-clipboard-check"></i></h1>
                            <table className="table table-bordered table-hover mt-5 table-responsive text-nowrap mt-4" style={{border:'2px solid black'}}>
                                <thead style={{backgroundColor:'#d6e4f0'}} className='text-center'>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Project 1</th>
                                        <th colSpan="2">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='text-center'>1.</td>
                                        <td>Title of the Project</td>
                                        <td>----</td>
                                    </tr>
                                    <tr>
                                        <td className='text-center'>2.</td>
                                        <td>Objectives</td>
                                        <td>----</td>
                                    </tr>
                                    <tr className='text-center'  style={{backgroundColor:'#d6e4f0'}}>
                                        <th></th>
                                        <th>Project Team Members</th>
                                        <th>Contact No.</th>
                                        <th>E-mail Id</th>
                                    </tr>
                                    <tr>
                                        <td rowspan="4" className='text-center'> 3 </td>
                                        <td>----</td>
                                        <td>----</td>
                                        <td>----</td>
                                    </tr>
                                    <tr>
                                        <td>----</td>
                                        <td>----</td>
                                        <td>----</td>
                                    </tr>
                                    <tr>
                                        <td>----</td>
                                        <td>----</td>
                                        <td>----</td>
                                    </tr>
                                    <tr>
                                        <td>----</td>
                                        <td>----</td>
                                        <td>----</td>
                                    </tr>
                                    <tr>
                                        <td className='text-center' rowspan="3">4.</td>
                                        <td rowSpan="3">Project Guide</td>
                                        <td >Name</td> 
                                        <td>----</td>                                       
                                    </tr>
                                    <tr>
                                        <td>Designation</td>
                                        <td>----</td>
                                    </tr>
                                    <tr>
                                        <td>Contact No</td>
                                        <td>----</td>
                                    </tr>
                                    <tr>
                                        <td className='text-center'>5.</td>
                                        <td>Projects Done At</td>
                                        <td>Institution/Industry</td>
                                        <td>----</td>
                                    </tr>
                                    <tr>
                                        <td className='text-center'>6.</td>
                                        <td>Name and address of the Industry</td>
                                    </tr>
                                    <tr>
                                        <td className='text-center'>7.</td>
                                        <td>Cost of the project</td>
                                    </tr>
                                </tbody>
                            </table>
                            <br></br>
                            <table className="table table-bordered table-hover table-responsive text-nowrap mt-4" style={{border:'2px solid black'}}>
                                <thead style={{backgroundColor:'#d6e4f0'}} className='text-center'>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Project 2</th>
                                        <th colSpan="5">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='text-center'>1.</td>
                                        <td>Title of the Project</td>
                                        <td>----</td>
                                    </tr>
                                    <tr>
                                        <td className='text-center'>2.</td>
                                        <td>Objectives</td>
                                        <td>----</td>
                                    </tr>
                                    <tr className='text-center'  style={{backgroundColor:'#d6e4f0'}}>
                                        <th></th>
                                        <th>Project Team Members</th>
                                        <th>Contact No.</th>
                                        <th>E-mail Id</th>
                                    </tr>
                                    <tr>
                                        <td rowspan="4" className='text-center'> 3 </td>
                                        <td>----</td>
                                        <td>----</td>
                                        <td>----</td>
                                    </tr>
                                    <tr>
                                        <td>----</td>
                                        <td>----</td>
                                        <td>----</td>
                                    </tr>
                                    <tr>
                                        <td>----</td>
                                        <td>----</td>
                                        <td>----</td>
                                    </tr>
                                    <tr>
                                        <td>----</td>
                                        <td>----</td>
                                        <td>----</td>
                                    </tr>
                                    <tr>
                                        <td className='text-center' rowspan="3">4.</td>
                                        <td rowSpan="3">Project Guide</td>
                                        <td >Name</td> 
                                        <td>----</td>                                       
                                    </tr>
                                    <tr>
                                        <td>Designation</td>
                                        <td>----</td>
                                    </tr>
                                    <tr>
                                        <td>Contact No</td>
                                        <td>----</td>
                                    </tr>
                                    <tr>
                                        <td className='text-center'>5.</td>
                                        <td>Projects Done At</td>
                                        <td>Institution/Industry</td>
                                        <td>----</td>
                                    </tr>
                                    <tr>
                                        <td className='text-center'>6.</td>
                                        <td>Name and address of the Industry</td>
                                    </tr>
                                    <tr>
                                        <td className='text-center'>7.</td>
                                        <td>Cost of the project</td>
                                    </tr>
                                </tbody>
                            </table>
                            <h1 className="text-center mt-5 fw-bold"><span style={{color: 'rgb(35, 35, 228)',letterSpacing:'1.5px'}}>Final</span> Year Project <i class="bi bi-laptop"></i></h1>
                            <table className="table table-bordered table-hover table-responsive text-nowrap mt-5" style={{border:'2px solid black'}}>
                                <thead style={{backgroundColor:'#d6e4f0'}} className='text-center'>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Project 1</th>
                                        <th colSpan="5">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='text-center'>1.</td>
                                        <td>Title of the Project</td>
                                        <td colSpan="5">----</td>
                                    </tr>
                                    <tr>
                                        <td className='text-center'>2.</td>
                                        <td>Objectives</td>
                                        <td colSpan="5">----</td>
                                    </tr>
                                    <tr className='text-center'  style={{backgroundColor:'#d6e4f0'}}>
                                        <th></th>
                                        <th>Project Team Members</th>
                                        <th colSpan="3">Contact No.</th>
                                        <th colSpan="2">E-mail Id</th>
                                    </tr>
                                    <tr>
                                        <td rowspan="4" className='text-center'> 3 </td>
                                        <td>----</td>
                                        <td colSpan="3">----</td>
                                        <td colSpan="2">----</td>
                                    </tr>
                                    <tr>
                                        <td>----</td>
                                        <td colSpan="3">----</td>
                                        <td colSpan="2">----</td>
                                    </tr>
                                    <tr>
                                        <td>----</td>
                                        <td colSpan="3">----</td>
                                        <td colSpan="2">----</td>
                                    </tr>
                                    <tr>
                                        <td>----</td>
                                        <td colSpan="3">----</td>
                                        <td colSpan="2">----</td>
                                    </tr>
                                    <tr>
                                        <td className='text-center' rowspan="3">4.</td>
                                        <td rowSpan="3">Project Guide</td>
                                        <td colSpan="3">Name</td> 
                                        <td colSpan="2">----</td>                                       
                                    </tr>
                                    <tr>
                                        <td colSpan="3"> Designation</td>
                                        <td colSpan="2">----</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="3">Contact No</td>
                                        <td colSpan="2">----</td>
                                    </tr>
                                    <tr>
                                        <td className='text-center'>5.</td>
                                        <td>Projects Done At</td>
                                        <td colSpan="3">Institution/Industry</td>
                                        <td colSpan="2">----</td>
                                    </tr>
                                    <tr>
                                        <td className='text-center'>6.</td>
                                        <td>Name and address of the Industry</td>
                                    </tr>
                                    <tr>
                                        <td className='text-center'>7.</td>
                                        <td>Cost of the project</td>
                                    </tr>
                                    <tr>
                                        <td className='text-center'>8.</td>
                                        <th colSpan="8" className='text-center'>Project Review Details</th>
                                    </tr>
                                    <tr style={{backgroundColor:'#d6e4f0'}}>
                                        <th className='text-center'>Sem.</th>
                                        <th>Review</th>
                                        <th>Date of Review</th>
                                        <th>Reviewer Name with Afflitation</th>
                                        <th>Specfic comments</th>
                                        <th>Marks out of 100</th>
                                        <th>Verification</th>
                                    </tr>
                                    <tr>
                                        <td className='text-center' rowSpan="3">VIII</td>
                                        <td>1st Review (Internal)</td>
                                        <td>----</td>
                                        <td>----</td>
                                        <td>----</td>
                                        <td>----</td>
                                        <td>----</td>
                                    </tr>
                                    <tr>
                                        <td>2nd Review (External)</td>
                                        <td>----</td>
                                        <td>----</td>
                                        <td>----</td>
                                        <td>----</td>
                                        <td>----</td>
                                    </tr>
                                    <tr>
                                        <td>3rd Review (External)</td>
                                        <td>----</td>
                                        <td>----</td>
                                        <td>----</td>
                                        <td>----</td>
                                        <td>----</td>
                                    </tr>
                                    <tr>
                                        <td className='text-center' rowSpan="3">VII</td>
                                        <td>4th Review (Internal)</td>
                                        <td>----</td>
                                        <td>----</td>
                                        <td>----</td>
                                        <td>----</td>
                                        <td>----</td>
                                    </tr>
                                    <tr>
                                        <td>5th Review (External)</td>
                                        <td>----</td>
                                        <td>----</td>
                                        <td>----</td>
                                        <td>----</td>
                                        <td>----</td>
                                    </tr>
                                    <tr>
                                        <td>Final Review Project</td>
                                        <td>----</td>
                                        <td>----</td>
                                        <td>----</td>
                                        <td>----</td>
                                        <td>----</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="justify-content-center d-flex p-5">
                        <button class="editbutton fw-bold" onClick={()=>
                        {
                            project('/editproject')
                        }}> &nbsp;Edit <i class="bi bi-pen"></i></button>
                </div>
            </div>
        </>
    );
}