import { useNavigate } from 'react-router-dom';
import './assests/edit_premec.css';
import background from './images/premecbg.jpg';
import { useEffect, useState } from 'react';
import { onCreateschooldetails, onLoadoneuser } from './connect';


export let Create_premec = () => {
    const navi = useNavigate();

    const [schoolinfo, setSchoolinfo] = useState({
        "emailid": sessionStorage.getItem('student'),
        "sslcregisterno": 0,
        "sslcmediumofinstruction": "",
        "sslcyearofcompletion": 0,
        "sslcschoolname": "",
        "sslccertificateno": 0,
        "sslctotalmark": 0,
        "sslcpercentage": 0.0,
        "sslcsubjectname1": "",
        "sslcsubjectmark1": 0,
        "sslcsubjectname2": "",
        "sslcsubjectmark2": 0,
        "sslcsubjectname3": "",
        "sslcsubjectmark3": 0,
        "hsccregisterno": 0,
        "hscmediumofinstruction": "",
        "hscyearofcompletion": 0,
        "hscschoolname": "",
        "hsccertificateno": 0,
        "hsctotalmark": 0,
        "hscpercentage": 0.0,
        "hscsubjectname1": "",
        "hscsubjectmark1": 0,
        "hscsubjectname2": "",
        "hscsubjectmark2": 0,
        "hscsubjectname3": "",
        "hscsubjectmark3": 0,
        "dipregisterno": 0,
        "dipmediumofinstruction": "",
        "dipyearofcompletion": 0,
        "dipschoolname": "",
        "dipcertificateno": 0,
        "diptotalmark": 0,
        "dippercentage": 0.0,
        "dipsubjectname1": "",
        "dipsubjectmark1": 0,
        "dipsubjectname2": "",
        "dipsubjectmark2": 0,
        "dipsubjectname3": "",
        "dipsubjectmark3": 0,
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
        setSchoolinfo((getting) => {
            return {
                ...getting,
                [name]: value
            }
        });
    }


    const create = async () => {
        schoolinfo.studentdetails = userdetail;
        alert(JSON.stringify(schoolinfo)); // Alerting personalinfo for debugging
        const response = await onCreateschooldetails(schoolinfo);
        navi("/premec");
    }


    return (
        <>
            <div className="editpremecbody row justify-content-center " style={{ backgroundImage: `url(${background})`, fontFamily: 'Poppins, sans-serif' }} >

                <div className=" row align-items-center text-light ms-2 mb-4 col-lg-7 col-md-11 col-sm-9 mt-4 me-2 ms-2 p-5" style={{ borderRadius: '20px', backgroundColor: '#005580' }}>
                    <h2 className='text-center fw-bold' style={{ letterSpacing: '1.5px' }}><i class="bi bi-award"></i> Schooling details create form </h2>
                    <br />
                    <h2 class="mt-5 text-center fw-bold text-danger">SSLC</h2>
                    <label className="form-label fw-bold mt-3 ">Registration No : </label>
                    <input
                        type='number'
                        className="form-control "
                        name='sslcregisterno'
                        onChange={onGet}
                        value={schoolinfo.sslcregisterno}
                    />
                    <br /><br />

                    <label className="form-label fw-bold mt-3">Medium of instruction : </label>
                    <input
                        type='text'
                        className="form-control "
                        name='sslcmediumofinstruction'
                        onChange={onGet}
                        value={schoolinfo.sslcmediumofinstruction}
                    ></input>
                    <br /> <br />

                    <label className="form-label fw-bold mt-3">Year of completion : </label>
                    <input
                        type='number'
                        className="form-control "
                        name='sslcyearofcompletion'
                        onChange={onGet}
                        value={schoolinfo.sslcyearofcompletion}
                    />
                    <br /><br />

                    <label className="form-label fw-bold mt-3">Institution Name and Address : </label>
                    <input
                        type='text'
                        className="form-control "
                        name='sslcschoolname'
                        onChange={onGet}
                        value={schoolinfo.sslcschoolname}
                    />
                    <br /><br />

                    <label className="form-label fw-bold mt-3">Certificate No : </label>
                    <input
                        type='number'
                        className="form-control "
                        name='sslccertificateno'
                        onChange={onGet}
                        value={schoolinfo.sslccertificateno}
                    />
                    <br /><br />

                    <label className="form-label fw-bold mt-3">Total Marks Obtained (out of) : </label>
                    <input
                        type='number'
                        className="form-control "
                        name='sslctotalmark'
                        onChange={onGet}
                        value={schoolinfo.sslctotalmark}
                    />
                    <br /><br />

                    <label className="form-label fw-bold mt-3">Percentage : </label>
                    <input
                        type='number'
                        className="form-control "
                        name='sslcpercentage'
                        onChange={onGet}
                        value={schoolinfo.sslcpercentage}
                    />
                    <br /><br />

                    <label className="form-label fw-bold mt-3">Major Subjects and Marks Obtained : </label>
                    <div class='row mt-2'>
                        <div class="col-6">
                            <label className='form-label'>Subject 1</label>
                            <input className='form-control' type='text'
                                name='sslcsubjectname1'
                                onChange={onGet}
                                value={schoolinfo.sslcsubjectname1}></input>
                        </div>
                        <div className='col-6'>
                            <label className='form-label'>Mark</label>
                            <input className='form-control' type='number'
                                name='sslcsubjectmark1'
                                onChange={onGet}
                                value={schoolinfo.sslcsubjectmark1}></input>
                        </div>

                    </div>
                    <div class='row mt-2'>
                        <div class="col-6">
                            <label className='form-label'>Subject 2</label>
                            <input className='form-control' type='text'
                                name='sslcsubjectname2'
                                onChange={onGet}
                                value={schoolinfo.sslcsubjectname2}></input>
                        </div>
                        <div className='col-6'>
                            <label className='form-label'>Mark</label>
                            <input className='form-control' type='number'
                                name='sslcsubjectmark2'
                                onChange={onGet}
                                value={schoolinfo.sslcsubjectmark2}></input>
                        </div>

                    </div>
                    <div class='row mt-2'>
                        <div class="col-6">
                            <label className='form-label'>Subject 3</label>
                            <input className='form-control' type='text'
                                name='sslcsubjectname3'
                                onChange={onGet}
                                value={schoolinfo.sslcsubjectname3}></input>
                        </div>
                        <div className='col-6'>
                            <label className='form-label'>Mark</label>
                            <input className='form-control' type='number'
                                name='sslcsubjectmark3'
                                onChange={onGet}
                                value={schoolinfo.sslcsubjectmark3}></input>
                        </div>

                    </div>
                    <hr class='mt-5'></hr>

                    <h2 class="mt-3 text-center fw-bold text-danger">HSC</h2>
                    <br />
                    <label className="form-label  fw-bold mt-3">Registration No : </label>
                    <input
                        type='number'
                        className="form-control "
                        name='hsccregisterno'
                        onChange={onGet}
                        value={schoolinfo.hsccregisterno}
                    />
                    <br /><br />

                    <label className="form-label fw-bold mt-3">Medium of instruction : </label>
                    <input
                        type='text'
                        className="form-control "
                        name='hscmediumofinstruction'
                        onChange={onGet}
                        value={schoolinfo.hscmediumofinstruction}
                    ></input>
                    <br /> <br />

                    <label className="form-label fw-bold mt-3">Year of completion : </label>
                    <input
                        type='number'
                        className="form-control "
                        name='hscyearofcompletion'
                        onChange={onGet}
                        value={schoolinfo.hscyearofcompletion}
                    />
                    <br /><br />

                    <label className="form-label fw-bold mt-3">Institution Name and Address : </label>
                    <input
                        type='text'
                        className="form-control "
                        name='hscschoolname'
                        onChange={onGet}
                        value={schoolinfo.hscschoolname}
                    />
                    <br /><br />

                    <label className="form-label fw-bold mt-3">Certificate No : </label>
                    <input
                        type='number'
                        className="form-control "
                        name='hsccertificateno'
                        onChange={onGet}
                        value={schoolinfo.hsccertificateno}
                    />
                    <br /><br />

                    <label className="form-label fw-bold mt-3">Total Marks Obtained (out of) : </label>
                    <input
                        type='number'
                        className="form-control "
                        name='hsctotalmark'
                        onChange={onGet}
                        value={schoolinfo.hsctotalmark}
                    />
                    <br /><br />

                    <label className="form-label fw-bold mt-3">Percentage : </label>
                    <input
                        type='number'
                        className="form-control "
                        name='hscpercentage'
                        onChange={onGet}
                        value={schoolinfo.hscpercentage}
                    />
                    <br /><br />

                    <label className="form-label fw-bold mt-3">Major Subjects and Marks Obtained : </label>
                    <div class='row mt-2'>
                        <div class="col-6">
                            <label className='form-label'>Subject 1</label>
                            <input className='form-control' type='text'
                                name='hscsubjectname1'
                                onChange={onGet}
                                value={schoolinfo.hscsubjectname1}></input>
                        </div>
                        <div className='col-6'>
                            <label className='form-label'>Mark</label>
                            <input className='form-control' type='number'
                                name='hscsubjectmark1'
                                onChange={onGet}
                                value={schoolinfo.hscsubjectmark1}></input>
                        </div>

                    </div>
                    <div class='row mt-2'>
                        <div class="col-6">
                            <label className='form-label'>Subject 2</label>
                            <input className='form-control' type='text'
                                name='hscsubjectname2'
                                onChange={onGet}
                                value={schoolinfo.hscsubjectname2}></input>
                        </div>
                        <div className='col-6'>
                            <label className='form-label'>Mark</label>
                            <input className='form-control' type='number'
                                name='hscsubjectmark2'
                                onChange={onGet}
                                value={schoolinfo.hscsubjectmark2}></input>
                        </div>

                    </div>
                    <div class='row mt-2'>
                        <div class="col-6">
                            <label className='form-label'>Subject 3</label>
                            <input className='form-control' type='text'
                                name='hscsubjectname3'
                                onChange={onGet}
                                value={schoolinfo.hscsubjectname3}></input>
                        </div>
                        <div className='col-6'>
                            <label className='form-label'>Mark</label>
                            <input className='form-control' type='number'
                                name='hscsubjectmark3'
                                onChange={onGet}
                                value={schoolinfo.hscsubjectmark3}></input>
                        </div>

                    </div>
                    <hr className='mt-5'></hr>


                    <h2 class="mt-5 text-center fw-bold text-danger">DIPLOMA</h2>
                    <label className="form-label  fw-bold mt-3">Registration No : </label>
                    <input
                        type='number'
                        className="form-control "
                    />
                    <br /><br />

                    <label className="form-label fw-bold mt-3">Medium of instruction : </label>
                    <input
                        type='text'
                        className="form-control "
                    ></input>
                    <br /> <br />

                    <label className="form-label fw-bold mt-3">Year of completion : </label>
                    <input
                        type='number'
                        className="form-control "
                    />
                    <br /><br />

                    <label className="form-label fw-bold mt-3">Institution Name and Address : </label>
                    <input
                        type='text'
                        className="form-control "
                    />
                    <br /><br />

                    <label className="form-label fw-bold mt-3">Certificate No : </label>
                    <input
                        type='number'
                        className="form-control "
                    />
                    <br /><br />

                    <label className="form-label fw-bold mt-3">Total Marks Obtained (out of) : </label>
                    <input
                        type='number'
                        className="form-control "
                    />
                    <br /><br />

                    <label className="form-label fw-bold mt-3">Percentage : </label>
                    <input
                        type='number'
                        className="form-control "
                    />
                    <br /><br />

                    <label className="form-label fw-bold mt-3">Major Subjects and Marks Obtained : </label>
                    <div class='row mt-2'>
                        <div class="col-6">
                            <label className='form-label'>Subject 1</label>
                            <input className='form-control' type='text'></input>
                        </div>
                        <div className='col-6'>
                            <label className='form-label'>Mark</label>
                            <input className='form-control' type='number'></input>
                        </div>

                    </div>
                    <div class='row mt-2'>
                        <div class="col-6">
                            <label className='form-label'>Subject 2</label>
                            <input className='form-control' type='text'></input>
                        </div>
                        <div className='col-6'>
                            <label className='form-label'>Mark</label>
                            <input className='form-control' type='number'></input>
                        </div>

                    </div>
                    <div class='row mt-2'>
                        <div class="col-6">
                            <label className='form-label'>Subject 3</label>
                            <input className='form-control' type='text'></input>
                        </div>
                        <div className='col-6'>
                            <label className='form-label'>Mark</label>
                            <input className='form-control' type='number'></input>
                        </div>

                    </div>
                    <div class='d-flex justify-content-center mt-5'>
                        <button class='editpremecbtn'
                            onClick={
                                () => {
                                    create();
                                }
                            }><span class="text">Submit</span><span>Submit</span></button>
                    </div>

                </div>
            </div>

        </>
    );


} 