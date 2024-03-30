import personal from './images/5590897.jpg';
import './assests/editpersonalinfo.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onCreatepersonaldetails, onLoadoneuser } from './connect';



export const Createpersonalinfo = () => {
    const navi = useNavigate();

    const [personalinfo, setPersonalinfo] = useState({
        "gender": "",
        "dateofbirth": "",
        "nationality": "",
        "religion": "",
        "community": "",
        "caste": "",
        "mothertongue": "",
        "languageknowns": "",
        "permanentaddress": "",
        "addressforcommunication": "",
        "mobileno": 0,
        "emailid": "",
        "aadharcardno": 0,
        "pancardno": 0,
        "identificationmark": "",
        "bloodgroup": "",
        "passportavilable": "",
        "fathername": "",
        "fatherqualifications": "",
        "fatheroccupation": "",
        "fathercontactno": 0,
        "mothername": "",
        "motherqualifications": "",
        "motheroccupation": "",
        "mothercontactno": 0,
        "noofbrotherelder": 0,
        "noofbrotheryounger": 0,
        "noofsisterelder": 0,
        "noofsisteryounger": 0,
        "guardianname": "",
        "guardianmobileno": 0,
        "guardianaddress": "",
        "studentdetails": {

        }
    })

    const [userdetail, setUserdetail] = useState({
        "username": "",
        "password": "",
        "confirmpassword": "",
        "studentName": "",
        "studentBatch": "",
        "studentDegree": "",
        "studentDepartment": "",
        "studentRegulation": 0,
        "studentRollno": "",
        "studentRegistrationno": "",
        "studentClassadvisor": "",
        "studentDateofjoining": "",
        "studentQuota": ""
    })

    const callreadingvalue = async () => {
        const t = await onLoadoneuser();
        setUserdetail(t.data);
    }

    useEffect(() => {
        callreadingvalue();
    })

    const onGet = (getinputvalues) => {
        const { name, value } = getinputvalues.target;
        setPersonalinfo((getting) => {
            return {
                ...getting,
                [name]: value
            }
        });
    }


    const create = async () => {
        personalinfo.studentdetails = userdetail;
        alert(JSON.stringify(personalinfo)); // Alerting personalinfo for debugging
        const response = await onCreatepersonaldetails(personalinfo);
        navi("/personalinfo");
    }

    return (
        <>
            <div className="editpersonalinfo_body" style={{ backgroundImage: `url(${personal})` }}>
                <div className="row justify-content-center p-1 mt-3">
                    <div className="form-group col-lg-7 col-md-11 col-sm-9 p-lg-5 " style={{ border: '2px solid black', borderRadius: '10px' }}>
                        <div class="form-icon text-center mt-2">
                            <h1><i class="bi bi-person-circle display-3"></i></h1>
                        </div>
                        <div className='text-center'>
                            <h3>Personal Information create form</h3>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label className="fl form-label fw-bold">GENDER</label>
                                <br></br>
                                <select className='form-select' style={{ backgroundColor: '#fafafa' }}
                                    name='gender'
                                    value={personalinfo.gender}
                                    onChange={onGet}>
                                    <option value="none" selected>None</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Date of birth</label>
                                <input className='form-control mt-0' type='date'
                                    name='dateofbirth'
                                    onChange={onGet}
                                    value={personalinfo.dateofbirth}></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Nationality</label>
                                <input className='form-control' type='text'
                                    name='nationality'
                                    onChange={onGet}
                                    value={personalinfo.nationality}></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Religion</label>
                                <input className='form-control'
                                    type='text'
                                    name='religion'
                                    onChange={onGet}
                                    value={personalinfo.religion}></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Community</label>
                                <input className='form-control' type='text'
                                    name='community'
                                    onChange={onGet}
                                    value={personalinfo.community}></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Caste</label>
                                <select className='form-select'
                                    name='caste'
                                    onChange={onGet}
                                    value={personalinfo.caste}>
                                    <option>SC</option>
                                    <option>ST</option>
                                    <option>BC</option>
                                    <option>MBC</option>
                                    <option>OBC</option>
                                    <option>OC</option>
                                </select>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Mother tongue</label>
                                <input className='form-control' type='text'
                                    name='mothertongue'
                                    onChange={onGet}
                                    value={personalinfo.mothertongue}></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Nationality</label>
                                <input className='form-control' type='text'
                                    name='nationality'
                                    onChange={onGet}
                                    value={personalinfo.nationality}></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Languages Known</label>
                                <input className='form-control' type='text'
                                    name='languageknowns'
                                    onChange={onGet}
                                    value={personalinfo.languageknowns}></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Permanent Address</label>
                                <input className='form-control' type='text'
                                    name='permanentaddress'
                                    onChange={onGet}
                                    value={personalinfo.permanentaddress}></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Address for communication</label>
                                <input className='form-control' type='text'
                                    name='addressforcommunication'
                                    onChange={onGet}
                                    value={personalinfo.addressforcommunication}></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Mobile Number</label>
                                <input className='form-control' type='tel'
                                    name='mobileno'
                                    onChange={onGet}
                                    value={personalinfo.mobileno}
                                ></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Email id</label>
                                <input className='form-control' type='email'
                                    name='emailid'
                                    onChange={onGet}
                                    value={personalinfo.emailid}></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Aadhar Card no</label>
                                <input className='form-control' type='number'
                                    name='aadharcardno'
                                    onChange={onGet}
                                    value={personalinfo.aadharcardno}></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Pan Card No</label>
                                <input className='form-control' type='text'
                                    name='pancardno'
                                    onChange={onGet}
                                    value={personalinfo.pancardno}
                                ></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Identification Mark<small className='text-secondary'>(as mentioned in your tc)</small></label>
                                <input className='form-control' type='text'
                                    name='identificationmark'
                                    onChange={onGet}
                                    value={personalinfo.identificationmark}></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Blood Group</label>
                                <input className='form-control' type='text'
                                    name='bloodgroup'
                                    onChange={onGet}
                                    value={personalinfo.bloodgroup}></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Passport particulars<small className='text-secondary' >(if Available enter details else enter No)</small></label>
                                <input className='form-control' type='text'
                                    name='passportavilable'
                                    onChange={onGet}
                                    value={personalinfo.passportavilable}></input>
                            </div>
                        </div>
                        <div className='mt-5 text-center'>
                            <img src={require('./images/parental-control.png')} style={{ 'width': '8%', 'borderRadius': '' }} class="imgparents" />
                            <h2 className='ms-4 text-center d-inline-block'>Parent Details</h2><br />
                        </div>
                        <div className='row mt-3'>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Father Name</label>
                                <input className='form-control' type='text'
                                    name='fathername'
                                    onChange={onGet}
                                    value={personalinfo.fathername}
                                ></input>
                            </div>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Father Mobile Number</label>
                                <input className='form-control' type='tel'
                                    name='fathercontactno'
                                    onChange={onGet}
                                    value={personalinfo.fathercontactno}></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Father Qualifications</label>
                                <input className='form-control' type='text'
                                    name='fatherqualifications'
                                    onChange={onGet}
                                    value={personalinfo.fatherqualifications}></input>
                            </div>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Father Occupation</label>
                                <input className='form-control' type='text'
                                    name='fatheroccupation'
                                    onChange={onGet}
                                    value={personalinfo.fatheroccupation}></input>
                            </div>
                        </div>
                        <div className='row mt-4'>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Mother Name</label>
                                <input className='form-control' type='text'
                                    name='mothername'
                                    onChange={onGet}
                                    value={personalinfo.mothername}></input>
                            </div>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Mother Mobile Number</label>
                                <input className='form-control' type='tel'
                                    name='mothercontactno'
                                    onChange={onGet}
                                    value={personalinfo.mothercontactno}></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Mother Qualifications</label>
                                <input className='form-control' type='text'
                                    name='motherqualifications'
                                    onChange={onGet}
                                    value={personalinfo.motherqualifications}></input>
                            </div>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Mother Occupation</label>
                                <input className='form-control' type='text'
                                    name='motheroccupation'
                                    onChange={onGet}
                                    value={personalinfo.motheroccupation}></input>
                            </div>
                        </div>
                        <div className='row'>
                            <label className='form-label float start fw-bold mt-3'>No of Brothers</label><br></br>
                            <div className='col-6'>
                                <label className='form-label float start fw-bold mt-1'>Elder</label>
                                <input className='form-control' type='text'
                                    name='noofbrotherelder'
                                    onChange={onGet}
                                    value={personalinfo.noofbrotherelder}></input>
                            </div>
                            <div className='col-6'>
                                <label className='form-label float start fw-bold mt-1'>Younger</label>
                                <input className='form-control' type='text'
                                    name='noofbrotheryounger'
                                    onChange={onGet}
                                    value={personalinfo.noofbrotheryounger}></input>
                            </div>
                        </div>
                        <div className='row'>
                            <label className='form-label float start fw-bold mt-3'>No of Sisters</label><br></br>
                            <div className='col-6'>
                                <label className='form-label float start fw-bold mt-1'>Elder</label>
                                <input className='form-control' type='text'
                                    name='noofsisterelder'
                                    onChange={onGet}
                                    value={personalinfo.noofsisterelder}></input>
                            </div>
                            <div className='col-6'>
                                <label className='form-label float start fw-bold mt-1'>Younger</label>
                                <input className='form-control' type='text'
                                    name='noofsisteryounger'
                                    onChange={onGet}
                                    value={personalinfo.noofsisteryounger}></input>
                            </div>
                        </div>
                        <div className='row mt-4' style={{ 'display': 'flex', 'align-items': 'center' }}>
                            <i class="bi bi-people-fill display-3 d-inline text-center"></i>
                            <h3 className='text-center d-inline'>Guardian Details <h6 className='d-inline text-secondary'> (if yes fill details else no)</h6></h3>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Gaurdian Name</label>
                                <input className='form-control' type='text'
                                    name='guardianname'
                                    onChange={onGet}
                                    value={personalinfo.guardianname}></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Gaurdian Mobile</label>
                                <input className='form-control' type='text'
                                    name='guardianmobileno'
                                    onChange={onGet}
                                    value={personalinfo.guardianmobileno}></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Gaurdian Address</label>
                                <input className='form-control' type='text'
                                    name='guardianaddress'
                                    onChange={onGet}
                                    value={personalinfo.guardianaddress}></input>
                            </div>
                        </div >
                        <div className='d-flex justify-content-center mt-5 mb-2'>
                            <button class="button-23" role="button"
                                onClick={() => {
                                    create();
                                }}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}