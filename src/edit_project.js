import './assests/edit_project.css';
import background from './images/projectbg1.png';
export const Edit_project=()=>
{
    return(
        <>
            <div className="editprojectbody" style={{backgroundImage:`url(${background})`}}>
                <div className="row justify-content-center p-1 mt-3">
                    <div className="form-group col-lg-7 col-md-11 col-sm-9 p-lg-5 " style={{border:'2px solid black',borderRadius:'10px'}}>
                            <h2 className='text-center mt-2 fw-bold' style={{letterSpacing:'1.5px'}}><i class="bi bi-lightbulb"></i> Project update form</h2>
                            <h4 className='text-center mt-4 fw-bold'>Project <i class="bi bi-1-square"></i></h4>
                            <div class='row'>
                                <div className='col'>
                                    <label className='form-lable fw-bold'>Title of the project</label>
                                    <input className='form-control mt-2' type='text'></input>
                                </div>
                            </div>
                            <div class='row'>
                                <div className='col'>
                                    <label className='form-lable fw-bold mt-3'>Objectives</label>
                                    <input className='form-control mt-2' type='text'></input>
                                </div>
                            </div>
                            <div className='row mt-4 d-flex justify-content-between'>
                                <div className='col-4'>
                                    <label className='form-label fw-bold'>Project Team Members</label>
                                </div>
                                <div className='col-3'>
                                    <label className='form-label fw-bold'>Contact No.</label>
                                </div>
                                <div className='col-3'>
                                    <label className='form-label fw-bold'>E-mail Id</label>
                                </div>
                            </div>
                            <div className='row mt-2 d-flex justify-content-between'>
                                <div className='col-4'>
                                    <input className='form-control ' type='text'></input>
                                </div>
                                <div className='col-3'>
                                    <input className='form-control ' type='number'></input>
                                </div>
                                <div className='col-3'>
                                    <input className='form-control ' type='email'></input>
                                </div>
                            </div>
                            <div className='row mt-2 d-flex justify-content-between'>
                                <div className='col-4'>
                                    <input className='form-control ' type='text'></input>
                                </div>
                                <div className='col-3'>
                                    <input className='form-control ' type='number'></input>
                                </div>
                                <div className='col-3'>
                                    <input className='form-control ' type='email'></input>
                                </div>
                            </div>
                            <div className='row mt-2 d-flex justify-content-between'>
                                <div className='col-4'>
                                    <input className='form-control ' type='text'></input>
                                </div>
                                <div className='col-3'>
                                    <input className='form-control ' type='number'></input>
                                </div>
                                <div className='col-3'>
                                    <input className='form-control ' type='email'></input>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <label className='form-label fw-bold'>Project Guide</label>
                            </div>
                            <div className='row mt-2 d-flex justify-content-between'>
                                <div className='col-4'>
                                    <label className='form-label fw-bold'>Name</label>
                                </div>
                                <div className='col-3'>
                                    <label className='form-label fw-bold'>Desgination</label>
                                </div>
                                <div className='col-3'>
                                    <label className='form-label fw-bold'>Contact NO</label>
                                </div>
                            </div>
                            <div className='row mt-2 d-flex justify-content-between'>
                                <div className='col-4'>
                                    <input className='form-control ' type='text'></input>
                                </div>
                                <div className='col-3'>
                                    <input className='form-control ' type='text'></input>
                                </div>
                                <div className='col-3'>
                                    <input className='form-control ' type='Contact NO'></input>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <label className='form-label fw-bold'>Project done at (Institution/Industry)</label>
                                <input className='form-control ' type='text'></input>
                            </div>
                            <div className='mt-4'>
                                <label className='form-label fw-bold'>Name and address of the Industry</label>
                                <input className='form-control ' type='text'></input>
                            </div>
                            <div className='mt-4'>
                                <label className='form-label fw-bold'>Cost of the Project</label>
                                <input className='form-control ' type='number'></input>
                            </div>

                            {/* project 2 */}

                            <h4 className='text-center mt-5 fw-bold'>Project <i class="bi bi-2-square"></i></h4>
                            <div class='row'>
                                <div className='col'>
                                    <label className='form-lable fw-bold'>Title of the project</label>
                                    <input className='form-control mt-2' type='text'></input>
                                </div>
                            </div>
                            <div class='row'>
                                <div className='col'>
                                    <label className='form-lable fw-bold mt-3'>Objectives</label>
                                    <input className='form-control mt-2' type='text'></input>
                                </div>
                            </div>
                            <div className='row mt-4 d-flex justify-content-between'>
                                <div className='col-4'>
                                    <label className='form-label fw-bold'>Project Team Members</label>
                                </div>
                                <div className='col-3'>
                                    <label className='form-label fw-bold'>Contact No.</label>
                                </div>
                                <div className='col-3'>
                                    <label className='form-label fw-bold'>E-mail Id</label>
                                </div>
                            </div>
                            <div className='row mt-2 d-flex justify-content-between'>
                                <div className='col-4'>
                                    <input className='form-control ' type='text'></input>
                                </div>
                                <div className='col-3'>
                                    <input className='form-control ' type='number'></input>
                                </div>
                                <div className='col-3'>
                                    <input className='form-control ' type='email'></input>
                                </div>
                            </div>
                            <div className='row mt-2 d-flex justify-content-between'>
                                <div className='col-4'>
                                    <input className='form-control ' type='text'></input>
                                </div>
                                <div className='col-3'>
                                    <input className='form-control ' type='number'></input>
                                </div>
                                <div className='col-3'>
                                    <input className='form-control ' type='email'></input>
                                </div>
                            </div>
                            <div className='row mt-2 d-flex justify-content-between'>
                                <div className='col-4'>
                                    <input className='form-control ' type='text'></input>
                                </div>
                                <div className='col-3'>
                                    <input className='form-control ' type='number'></input>
                                </div>
                                <div className='col-3'>
                                    <input className='form-control ' type='email'></input>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <label className='form-label fw-bold'>Project Guide</label>
                            </div>
                            <div className='row mt-2 d-flex justify-content-between'>
                                <div className='col-4'>
                                    <label className='form-label fw-bold'>Name</label>
                                </div>
                                <div className='col-3'>
                                    <label className='form-label fw-bold'>Desgination</label>
                                </div>
                                <div className='col-3'>
                                    <label className='form-label fw-bold'>Contact NO</label>
                                </div>
                            </div>
                            <div className='row mt-2 d-flex justify-content-between'>
                                <div className='col-4'>
                                    <input className='form-control ' type='text'></input>
                                </div>
                                <div className='col-3'>
                                    <input className='form-control ' type='text'></input>
                                </div>
                                <div className='col-3'>
                                    <input className='form-control ' type='Contact NO'></input>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <label className='form-label fw-bold'>Project done at (Institution/Industry)</label>
                                <input className='form-control ' type='text'></input>
                            </div>
                            <div className='mt-4'>
                                <label className='form-label fw-bold'>Name and address of the Industry</label>
                                <input className='form-control ' type='text'></input>
                            </div>
                            <div className='mt-4'>
                                <label className='form-label fw-bold'>Cost of the Project</label>
                                <input className='form-control ' type='number'></input>
                            </div>
                            {/* finalyear project */}
                            <h4 className='text-center mt-5 fw-bold'>Final year Project <i class="bi bi-grid-1x2-fill"></i></h4>
                            <div class='row'>
                                <div className='col'>
                                    <label className='form-lable fw-bold'>Title of the project</label>
                                    <input className='form-control mt-2' type='text'></input>
                                </div>
                            </div>
                            <div class='row'>
                                <div className='col'>
                                    <label className='form-lable fw-bold mt-3'>Objectives</label>
                                    <input className='form-control mt-2' type='text'></input>
                                </div>
                            </div>
                            <div className='row mt-4 d-flex justify-content-between'>
                                <div className='col-4'>
                                    <label className='form-label fw-bold'>Project Team Members</label>
                                </div>
                                <div className='col-3'>
                                    <label className='form-label fw-bold'>Contact No.</label>
                                </div>
                                <div className='col-3'>
                                    <label className='form-label fw-bold'>E-mail Id</label>
                                </div>
                            </div>
                            <div className='row mt-2 d-flex justify-content-between'>
                                <div className='col-4'>
                                    <input className='form-control ' type='text'></input>
                                </div>
                                <div className='col-3'>
                                    <input className='form-control ' type='number'></input>
                                </div>
                                <div className='col-3'>
                                    <input className='form-control ' type='email'></input>
                                </div>
                            </div>
                            <div className='row mt-2 d-flex justify-content-between'>
                                <div className='col-4'>
                                    <input className='form-control ' type='text'></input>
                                </div>
                                <div className='col-3'>
                                    <input className='form-control ' type='number'></input>
                                </div>
                                <div className='col-3'>
                                    <input className='form-control ' type='email'></input>
                                </div>
                            </div>
                            <div className='row mt-2 d-flex justify-content-between'>
                                <div className='col-4'>
                                    <input className='form-control ' type='text'></input>
                                </div>
                                <div className='col-3'>
                                    <input className='form-control ' type='number'></input>
                                </div>
                                <div className='col-3'>
                                    <input className='form-control ' type='email'></input>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <label className='form-label fw-bold'>Project Guide</label>
                            </div>
                            <div className='row mt-2 d-flex justify-content-between'>
                                <div className='col-4'>
                                    <label className='form-label fw-bold'>Name</label>
                                </div>
                                <div className='col-3'>
                                    <label className='form-label fw-bold'>Desgination</label>
                                </div>
                                <div className='col-3'>
                                    <label className='form-label fw-bold'>Contact NO</label>
                                </div>
                            </div>
                            <div className='row mt-2 d-flex justify-content-between'>
                                <div className='col-4'>
                                    <input className='form-control ' type='text'></input>
                                </div>
                                <div className='col-3'>
                                    <input className='form-control ' type='text'></input>
                                </div>
                                <div className='col-3'>
                                    <input className='form-control ' type='Contact NO'></input>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <label className='form-label fw-bold'>Project done at (Institution/Industry)</label>
                                <input className='form-control ' type='text'></input>
                            </div>
                            <div className='mt-4'>
                                <label className='form-label fw-bold'>Name and address of the Industry</label>
                                <input className='form-control ' type='text'></input>
                            </div>
                            <div className='mt-4'>
                                <label className='form-label fw-bold'>Cost of the Project</label>
                                <input className='form-control ' type='number'></input>
                            </div>
                            {/* review */}
                            <div className="justify-content-center d-flex mt-5 ">
                            <div className="table-responsive col-lg-12">
                                <table className="table-responsive  text-nowrap table-bordered table" style={{border: '2px solid black'}}>
                                    <thead>
                                        <tr>
                                            <th>Sem</th>
                                            <th>Review</th>
                                            <th>Date of review</th>
                                            <th>Reviewer/Examiner</th>
                                            <th>Specfic Comments</th>
                                            <th>Marks out of 100</th>
                                            <th>Verification(yes/no)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th rowSpan='3'>VII</th>
                                            <th className='text-wrap'>1 review (Internal)</th>
                                            <th><input className='form-control ' type='date'></input></th>                                         
                                            <th><input className='form-control ' type='text'></input></th>
                                            <th><input className='form-control ' type='text'></input></th>
                                            <th><input className='form-control ' type='text'></input></th>
                                            <th><input className='form-control ' type='text'></input></th>
                                        </tr>
                                        <tr>
                                            <th className='text-wrap'>2 review (External)</th>
                                            <th><input className='form-control ' type='date'></input></th>                                         
                                            <th><input className='form-control ' type='text'></input></th>
                                            <th><input className='form-control ' type='text'></input></th>
                                            <th><input className='form-control ' type='text'></input></th>
                                            <th><input className='form-control ' type='text'></input></th>
                                        </tr>
                                        <tr>
                                            <th className='text-wrap'>3 review (External)</th>
                                            <th><input className='form-control ' type='date'></input></th>                                         
                                            <th><input className='form-control ' type='text'></input></th>
                                            <th><input className='form-control ' type='text'></input></th>
                                            <th><input className='form-control ' type='text'></input></th>
                                            <th><input className='form-control ' type='text'></input></th>
                                        </tr>
                                        <tr>
                                            <th rowSpan='3'>VIII</th>
                                            <th className='text-wrap'>4 review (Internal)</th>
                                            <th><input className='form-control ' type='date'></input></th>                                         
                                            <th><input className='form-control ' type='text'></input></th>
                                            <th><input className='form-control ' type='text'></input></th>
                                            <th><input className='form-control ' type='text'></input></th>
                                            <th><input className='form-control ' type='text'></input></th>
                                        </tr>
                                        <tr>
                                            <th className='text-wrap'>5 review (External)</th>
                                            <th><input className='form-control ' type='date'></input></th>                                         
                                            <th><input className='form-control ' type='text'></input></th>
                                            <th><input className='form-control ' type='text'></input></th>
                                            <th><input className='form-control ' type='text'></input></th>
                                            <th><input className='form-control ' type='text'></input></th>
                                        </tr>
                                        <tr>
                                            <th className='text-wrap'>Final Project</th>
                                            <th><input className='form-control ' type='date'></input></th>                                         
                                            <th><input className='form-control ' type='text'></input></th>
                                            <th><input className='form-control ' type='text'></input></th>
                                            <th><input className='form-control ' type='text'></input></th>
                                            <th><input className='form-control ' type='text'></input></th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            </div>

                           <div className='d-flex justify-content-center mt-5'>
                           <button class="animated-button">
                                <svg xmlns="http://www.w3.org/2000/svg" class="arr-2" viewBox="0 0 24 24">
                                    <path
                                    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                    ></path>
                                </svg>
                                <span class="text">Submit</span>
                                <span class="circle"></span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="arr-1" viewBox="0 0 24 24">
                                    <path
                                    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                    ></path>
                                </svg>
                            </button>

                           </div>
                            
                    </div>             
                </div>
            </div>

        </>

    );
}