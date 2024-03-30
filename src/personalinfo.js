import './assests/personalinfocss.css'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './assests/navbar.css'
import { onLoadpersonalinfo } from './connect';
export const Personalinfo = () => {

    const navi = useNavigate();


    const [personaldetail, setPersonaldetail] = useState({})

    const callreadingvalue = async () => {
        const t = await onLoadpersonalinfo();
        setPersonaldetail(t.data);
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
            <div class="personalinfobody">
                <div class="container-fluid m-0 p-0">
                    <nav class="navbar fixed-top navbar-expand-custom navbar-mainbg">
                        <a href='https://mec.edu.in/'><img class="navbar-brand navbar-logo ms-3 mb-1 mt-1 imglogo" src={require('./images/muthayammal_logo.png')} style={{ 'width': '2em', 'marginTop': '3px', 'borderRadius': '20%' }}></img></a><h5 class='text-white fw-bold ' style={{ 'font-family': "Madimi One , sans-serif", 'fontStyle': 'italic' }}>MEC Student Record</h5>
                        <button class="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i class="bi bi-list text-white"></i>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto">
                                <div class="hori-selector"><div class="left"></div><div class="right"></div></div>
                                <li class="nav-item ms-4  firstbar">
                                    <a class="nav-link" href="/"><i class="bi bi-file-bar-graph"></i>Dashboard</a>
                                </li>
                                <li class="nav-item ms-4 active">
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
                                <button data-mdb-ripple-init type="button" class="btn btn-danger">
                                    Logout <i class="bi bi-arrow-right-circle ms-1"></i>
                                </button>
                            </div>
                        </div>
                    </nav>
                </div>

                <div className="bg" style={{ fontFamily: 'Poppins, sans-serif', marginTop: '110px' }}>
                    <div class="justify-content-center d-flex mt-5 p-3">
                        <div className="table-responsive col-lg-8 col-sm-12">
                            <h1 className="text-center mb-5 fw-bold">Personal <span style={{ color: 'rgb(35, 35, 228)', letterSpacing: '1.5px' }}>Details </span><i class="bi bi-person-fill-check"></i></h1>
                            <table className="table table-bordered table-hover" style={{ backgroundColor: '#fafafa' }}>
                                <tbody style={{ border: ' 4px solid black' }}>
                                    <tr>
                                        <th>
                                            Gender
                                        </th>
                                        <td>
                                            {personaldetail.gender}

                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            Date of birth
                                        </th>
                                        <td>
                                            {personaldetail.dateofbirth}

                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            Nationality
                                        </th>
                                        <td colspan="2">
                                            {personaldetail.nationality}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            Religion
                                        </th>
                                        <td colspan="2">
                                            {personaldetail.religion}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            Community/caste
                                        </th>
                                        <td colspan="2">
                                            {personaldetail.community}/{personaldetail.caste}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            Mother tongue
                                        </th>
                                        <td colspan="2">
                                            {personaldetail.mothertongue}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            languages Known
                                        </th>
                                        <td colspan="2">
                                            {personaldetail.languageknowns}
                                        </td>
                                    </tr>
                                    <tr class="text-center">
                                        <th colspan="3">
                                            Address
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>
                                            Permanent address
                                        </th>
                                        <td colspan="2">
                                            {personaldetail.permanentaddress}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            Address for communication
                                        </th>
                                        <td colspan="2">
                                            {personaldetail.addressforcommunication}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            Mobile number of the student
                                        </th>
                                        <td colspan="2">
                                            {personaldetail.mobileno}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            Email id of the student
                                        </th>
                                        <td colspan="2">
                                            {personaldetail.emailid}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            Aadhar number
                                        </th>
                                        <td colspan="2">
                                            {personaldetail.aadharcardno}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            Pan Card
                                        </th>
                                        <td colspan="2">
                                            {personaldetail.pancardno}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            Identification Marks
                                            <span class="text-secondary">(as mentioned in the Tc)</span>
                                        </th>
                                        <td colspan="2">
                                            {personaldetail.identificationmark}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            Blood Group
                                        </th>
                                        <td colspan="2">
                                            {personaldetail.bloodgroup}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            Passport Particulars (if Available)
                                        </th>
                                        <td colspan="2">
                                            {personaldetail.passportavilable}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <hr className="mt-5 mb-5" />
                            <h1 className="mt-4 text-center fw-bold"><span style={{ color: ' rgb(35, 35, 228)', letterSpacing: '1.5px' }}>Parent</span>/Gaurdian details</h1>
                            <div className="justify-content-center d-flex mt-5 p-3">
                                <div className="col-lg-8 col-sm-12">
                                    <table className="table table-responsive table-hover table-bordered ">
                                        <thead style={{ border: '3px solid black', backgroundColor: '#d6e4f0', textAlign: 'center', fontWeight: 'bold' }}>
                                            <th>S.no</th>
                                            <th>Particulars</th>
                                            <th colspan="2">Father</th>
                                            <th colspan="2">Mother</th>
                                        </thead>
                                        <tbody style={{ border: '3px solid black' }}>
                                            <tr>
                                                <th>1</th>
                                                <th>name</th>
                                                <td colspan="2"> {personaldetail.fathername}</td>
                                                <td colspan="2"> {personaldetail.mothername}</td>
                                            </tr>
                                            <tr>
                                                <th>2</th>
                                                <th>Mobile Number</th>
                                                <td colspan="2"> {personaldetail.fathercontactno}</td>
                                                <td colspan="2">{personaldetail.mothercontactno}</td>
                                            </tr>
                                            <tr>
                                                <th>3</th>
                                                <th>Qualifications</th>
                                                <td colspan="2">{personaldetail.fatherqualifications}</td>
                                                <td colspan="2">{personaldetail.motherqualifications}</td>
                                            </tr>
                                            <tr>
                                                <th>4</th>
                                                <th>Occupation</th>
                                                <td colspan="2">{personaldetail.fatheroccupation}</td>
                                                <td colspan="2">{personaldetail.motheroccupation}</td>
                                            </tr>
                                            <tr>
                                                <th colspan="6" className="text-center">Others</th>
                                            </tr>
                                            <tr>
                                                <th>5</th>
                                                <th>No. of Brothers</th>
                                                <td colspan="">Elder</td>
                                                <td colspan="">{personaldetail.noofbrotherelder}</td>
                                                <td colspan="">Younger</td>
                                                <td colspan="">{personaldetail.noofbrotheryounger}</td>

                                            </tr>
                                            <tr>
                                                <th>6</th>
                                                <th>No. of Sisters</th>
                                                <td colspan="">Elder</td>
                                                <td colspan="">{personaldetail.noofsisterelder}</td>
                                                <td colspan="">Younger</td>
                                                <td colspan="">{personaldetail.noofsisteryounger}</td>
                                            </tr>
                                            <tr>
                                                <th>7</th>
                                                <th>Gaurdian Name</th>
                                                <td colspan="4">{Personalinfo.guardianname}</td>
                                            </tr>
                                            <tr>
                                                <th>7</th>
                                                <th>Gaurdian Mobile</th>
                                                <td colspan="4">{Personalinfo.guardiancontactno}</td>
                                            </tr>
                                            <tr>
                                                <th>7</th>
                                                <th>Gaurdian Address</th>
                                                <td colspan="4">{Personalinfo.guardianaddress}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="justify-content-center d-flex p-5">
                    <div class="justify-content-center d-flex p-5">
                        <button class="editbutton fw-bold" onClick={() => {
                            navi("/createpersonalinfo")
                        }}> &nbsp;CREATE <i class="bi bi-pen"></i></button>
                    </div>
                    <div class="justify-content-center d-flex p-5">
                        <button class="editbutton fw-bold" onClick={() => {
                            navi("/editpersonalinfo")
                        }}> &nbsp;EDIT <i class="bi bi-pen"></i></button>
                    </div>
                </div>
            </div>
        </>
    );
}