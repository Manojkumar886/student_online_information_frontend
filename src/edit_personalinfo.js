import personal from './images/5590897.jpg';
import './assests/editpersonalinfo.css';
export const Editpersonalinfo=()=>
{
    return(
        <>
            <div className="editpersonalinfo_body" style={{backgroundImage:`url(${personal})`}}>
                <div className="row justify-content-center p-1 mt-3">
                    <div className="form-group col-lg-7 col-md-11 col-sm-9 p-lg-5 " style={{border:'2px solid black',borderRadius:'10px'}}>
                        <div class="form-icon text-center mt-2">
                            <h1><i class="bi bi-person-circle display-3"></i></h1>
                        </div>
                        <div className='text-center'>
                            <h3>Personal Information update form</h3>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label className="form-label float start fw-bold">Gender</label>
                                <select className='form-select'>
                                    <option value="male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Date of birth</label>
                                <input className='form-control mt-0' type='date'></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Nationality</label>
                                <input className='form-control' type='text'></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Religion</label>
                                <input className='form-control' type='text'></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Community</label>
                                <input className='form-control' type='text'></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Caste</label>
                               <select className='form-select'>
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
                                <input className='form-control' type='text'></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Nationality</label>
                                <input className='form-control' type='text'></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Languages Known</label>
                                <input className='form-control' type='text'></input>
                            </div>
                        </div>   
                        <div className='row'>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Permanent Address</label>
                                <input className='form-control' type='text'></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Address for communication</label>
                                <input className='form-control' type='text'></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Mobile Number</label>
                                <input className='form-control' type='tel'></input>
                            </div>
                        </div> 
                        <div className='row'>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Email id</label>
                                <input className='form-control' type='email'></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Aadhar Card no</label>
                                <input className='form-control' type='number'></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Pan Card No</label>
                                <input className='form-control' type='text'></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Identification Mark<small className='text-secondary'>(as mentioned in your tc)</small></label>
                                <input className='form-control' type='text'></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Blood Group</label>
                                <input className='form-control' type='text'></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Passport particulars<small className='text-secondary' >(if Available enter details else enter No)</small></label>
                                <input className='form-control' type='text'></input>
                            </div>
                        </div>
                        <div className='mt-5 text-center'>
                        <img src={require('./images/parental-control.png')} style={{'width':'8%', 'borderRadius':''}} class="imgparents"/>
                            <h2 className='ms-4 text-center d-inline-block'>Parent Details</h2><br/>
                        </div>
                        <div className='row mt-3'>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Father Name</label>
                                <input className='form-control' type='text'></input>
                            </div>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Father Mobile Number</label>
                                <input className='form-control' type='tel'></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Father Qualifications</label>
                                <input className='form-control' type='text'></input>
                            </div>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Father Occupation</label>
                                <input className='form-control' type='text'></input>
                            </div>
                        </div>
                        <div className='row mt-4'>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Mother Name</label>
                                <input className='form-control' type='text'></input>
                            </div>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Mother Mobile Number</label>
                                <input className='form-control' type='tel'></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Mother Qualifications</label>
                                <input className='form-control' type='text'></input>
                            </div>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Mother Occupation</label>
                                <input className='form-control' type='text'></input>
                            </div>
                        </div>
                        <div className='row'>
                        <label className='form-label float start fw-bold mt-3'>No of Brothers</label><br></br>
                            <div className='col-6'>                                
                                <label className='form-label float start fw-bold mt-1'>Elder</label>
                                <input className='form-control' type='text'></input>
                            </div>
                            <div className='col-6'>                                
                                <label className='form-label float start fw-bold mt-1'>Younger</label>
                                <input className='form-control' type='text'></input>
                            </div>
                        </div>
                        <div className='row'>
                        <label className='form-label float start fw-bold mt-3'>No of Sisters</label><br></br>
                            <div className='col-6'>                                
                                <label className='form-label float start fw-bold mt-1'>Elder</label>
                                <input className='form-control' type='text'></input>
                            </div>
                            <div className='col-6'>                                
                                <label className='form-label float start fw-bold mt-1'>Younger</label>
                                <input className='form-control' type='text'></input>
                            </div>
                        </div>
                        <div className='row mt-4' style={{'display': 'flex', 'align-items': 'center'}}>
                            <i class="bi bi-people-fill display-3 d-inline text-center"></i>
                            <h3 className='text-center d-inline'>Guardian Details <h6 className='d-inline text-secondary'> (if yes fill details else no)</h6></h3>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Gaurdian Name</label>
                                <input className='form-control' type='text'></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Gaurdian Mobile</label>
                                <input className='form-control' type='text'></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label className='form-label float start fw-bold mt-3'>Gaurdian Address</label>
                                <input className='form-control' type='text'></input>
                            </div>
                        </div >
                            <div className='d-flex justify-content-center mt-5 mb-2'>
                            <button class="button-23" role="button">Submit</button> 
                            </div>                                            
                    </div>
                </div>
            </div>
        </>
    );
}