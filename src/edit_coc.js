import './assests/edit_coc.css';
import backgroundImage from './images/bg.png'
export const Edit_Cocuricular=()=>
{
    return (
        <>
                <div class="edit_mecacademicbody" style={{ backgroundImage: `url(${backgroundImage})`,fontFamily: 'Poppins, sans-serif'}}> 
                    <div className=" row justify-content-center p-1 " >
                        <div class='form-group col-lg-7 col-md-11 col-sm-7 p-lg-5 p-4 mt-4 mb-4' style={{borderRadius:'20px'}}>
                            <h2 className='text-center fw-bold' style={{letterSpacing:'1.5px'}}><i class="bi bi-graph-up-arrow"></i> Co-Curricular Update Form</h2>
                            <h6 className='text-center text-secondary mt-5'>choose your semester to update form</h6>
                            <div class="row justify-content-center align-items-center text-center mt-3">
                            <div class='col-11'>
                                 <div class="radio-input">
                                    <input value="value-1"  name="value-radio" id="value-1" type="radio"/>
                                    <label for="value-1">Sem 1</label>
                                    <input value="value-2" name="value-radio" id="value-2" type="radio"/>
                                    <label for="value-2">Sem 2</label>
                                    <input value="value-3" name="value-radio" id="value-3" type="radio"/>
                                    <label for="value-3">Sem 3</label>
                                    <input value="value-4" name="value-radio" id="value-4" type="radio"/>
                                    <label for="value-4">Sem 4</label>
                                    <input value="value-5" name="value-radio" id="value-5" type="radio"/>
                                    <label for="value-5">Sem 5</label>
                                    <input value="value-6" name="value-radio" id="value-6" type="radio"/>
                                    <label for="value-6">Sem 6</label>
                                    <input value="value-7" name="value-radio" id="value-7" type="radio"/>
                                    <label for="value-7">Sem 7</label>
                                    <input value="value-8" name="value-radio" id="value-8" type="radio"/>
                                    <label for="value-8">Sem 8</label>
                                </div>
                        </div>
                    </div>     
                    <h4 className='text-center mt-5'>A. Co-Curricular Activites (External)</h4>
                    <div className="justify-content-center d-flex mt-3 ">
                            <div className="table-responsive col-lg-12">
                                <table className="table-responsive   table-bordered table text-nowrap" style={{border: '2px solid black'}}>
                                    <thead className='text-center'>
                                        <tr>
                                        <th>S.no</th>
                                        <th>Event Description</th>
                                        <th>Duration With Date</th>
                                        <th>Details of Participation</th>
                                        </tr>
                                    </thead>
                                    <thead>
                                        <tr>
                                            <th>1.</th>
                                            <th>Conference/ Symposium - paper presented</th>
                                            <th><input className='form-control'></input></th>
                                            <th><input className='form-control'></input></th>
                                        </tr>
                                        <tr>
                                            <th>2.</th>
                                            <th>Workshop & Seminar attended</th>
                                            <th><input className='form-control'></input></th>
                                            <th><input className='form-control'></input></th>
                                        </tr>
                                        <tr>
                                            <th>3.</th>
                                            <th>Project Contest Particuapted</th>
                                            <th><input className='form-control'></input></th>
                                            <th><input className='form-control'></input></th>
                                        </tr>
                                        <tr>
                                            <th>4.</th>
                                            <th>Inplant Training/ Internship Attended</th>
                                            <th><input className='form-control'></input></th>
                                            <th><input className='form-control'></input></th>
                                        </tr>
                                        <tr>
                                            <th>5.</th>
                                            <th>Industrial Visit/ Indian /Foriegn University Visit</th>
                                            <th><input className='form-control'></input></th>
                                            <th><input className='form-control'></input></th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                    </div>
                    <h4 className='text-center mt-5'>B. Co-Curricular Activites (Internal)</h4>
                    <div className="justify-content-center d-flex mt-3 ">
                            <div className="table-responsive col-lg-12">
                                <table className="table-responsive   table-bordered table text-nowrap" style={{border: '2px solid black'}}>
                                    <thead className='text-center'>
                                        <tr>
                                        <th>S.no</th>
                                        <th>Event Description</th>
                                        <th>Duration With Date</th>
                                        <th>Details of Participation</th>
                                        </tr>
                                    </thead>
                                    <thead>
                                        <tr>
                                            <th>1.</th>
                                            <th>Conference/ Symposium - paper presented</th>
                                            <th><input className='form-control'></input></th>
                                            <th><input className='form-control'></input></th>
                                        </tr>
                                        <tr>
                                            <th>2.</th>
                                            <th>Workshop & Seminar attended</th>
                                            <th><input className='form-control'></input></th>
                                            <th><input className='form-control'></input></th>
                                        </tr>
                                        <tr>
                                            <th>3.</th>
                                            <th>Project Contest Particuapted</th>
                                            <th><input className='form-control'></input></th>
                                            <th><input className='form-control'></input></th>
                                        </tr>
                                        <tr>
                                            <th>4.</th>
                                            <th>Students Tech Talk</th>
                                            <th><input className='form-control'></input></th>
                                            <th><input className='form-control'></input></th>
                                        </tr>
                                        <tr>
                                            <th>5.</th>
                                            <th>Technical Training Attended</th>
                                            <th><input className='form-control'></input></th>
                                            <th><input className='form-control'></input></th>
                                        </tr>
                                        <tr>
                                            <th>6.</th>
                                            <th>Alumini Interaction and Mentoring Serires (AIMS) Attended</th>
                                            <th><input className='form-control'></input></th>
                                            <th><input className='form-control'></input></th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                    </div>
                    <h4 className='text-center mt-5'>C. Extra-Curricular Activites</h4>
                    <div className="justify-content-center d-flex mt-3 ">
                            <div className="table-responsive col-lg-12">
                                <table className="table-responsive   table-bordered table text-nowrap" style={{border: '2px solid black'}}>
                                    <thead>
                                        <tr>
                                            <th>S.No</th>
                                            <th>Activites</th>
                                            <th>Details of Participation</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>1.</th>
                                            <th>NCC / NSS / YRC / RRC / Others (Parade / Camp / Other)</th>
                                            <th><input className='form-control' type='text'></input></th>
                                        </tr>
                                        <tr>
                                            <th>2.</th>
                                            <th>Sports (Details of sprots Participation, Winner, runner, other)</th>
                                            <th><input className='form-control' type='text'></input></th>
                                        </tr>
                                        <tr>
                                            <th>3.</th>
                                            <th>Clutural (Participation, winner, runner, other)</th>
                                            <th><input className='form-control' type='text'></input></th>
                                        </tr>
                                        <tr>
                                            <th>4.</th>
                                            <th>Club Activites (Paticipation, winner , runner, other)</th>
                                            <th><input className='form-control' type='text'></input></th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                    </div>
                    <h4 className='text-center mt-5'>D. Tranining/ Competitive Exams/ Value Added/ Industry Linked Courses (ILCs) Details</h4>  
                    <div className="justify-content-center d-flex mt-3 ">
                            <div className="table-responsive col-lg-12">
                                <table className="table-responsive   table-bordered table text-nowrap" style={{border: '2px solid black'}}>
                                    <thead className='text-center'>
                                        <tr>
                                        <th rowSpan='2'>S.No</th>
                                        <th rowSpan='2'>Details of Training/ Courses</th>
                                        <th colSpan='2'>Duration</th>
                                        <th rowSpan='2'>Student Verification</th>
                                        </tr>
                                        <tr>
                                            <th>From</th>
                                            <th>To</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <th className='text-center'>1.</th>
                                        <th><input className='form-control' type='text'></input></th>
                                        <th><input className='form-control'type='text'></input></th>
                                        <th><input className='form-control'type='text'></input></th>
                                        <th><input className='form-control' placeholder='Yes/no'></input></th>
                                        </tr>
                                        <tr>
                                        <th className='text-center'>2.</th>
                                        <th><input className='form-control' type='text'></input></th>
                                        <th><input className='form-control'type='text'></input></th>
                                        <th><input className='form-control'type='text'></input></th>
                                        <th><input className='form-control' placeholder='Yes/no'></input></th>
                                        </tr>
                                        <tr>
                                        <th className='text-center'>3.</th>
                                        <th><input className='form-control' type='text'></input></th>
                                        <th><input className='form-control'type='text'></input></th>
                                        <th><input className='form-control'type='text'></input></th>
                                        <th><input className='form-control' placeholder='Yes/no'></input></th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                    </div>
                    <h4 className='text-center mt-5 '>E. NPTEL/ MOOC Online Course Detials</h4> 
                    <div className="justify-content-center d-flex mt-3 ">
                            <div className="table-responsive col-lg-12">
                                <table className="table-responsive   table-bordered table text-nowrap" style={{border: '2px solid black'}}>
                                    <thead>
                                        <tr>
                                            <th>S.NO</th>
                                            <th>Subject Registered</th>
                                            <th>Marks Obtained</th>
                                            <th>Student Authorization(yes/no)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>1.</th>
                                            <th><input class='form-control' type='text'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                            <th><input class='form-control' type='text'></input></th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                    </div>
                    <h4 className='text-center mt-5 '>F. Other Activites/Professional Bodies Details</h4> 
                    <div className="justify-content-center d-flex mt-3 ">
                            <div className="table-responsive col-lg-12">
                                <table className="table-responsive   table-bordered table text-nowrap" style={{border: '2px solid black'}}>
                                    <thead>
                                        <tr>
                                            <th>S.NO</th>
                                            <th>Event Description</th>
                                            <th>Details(if any)</th>
                                            <th>Student Authorization(yes/no)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>1.</th>
                                            <th>Members in Professional Bodies</th>
                                            <th><input class='form-control' type='text'></input></th>
                                            <th><input class='form-control' type='text'></input></th>
                                        </tr>
                                        <tr>
                                            <th>1.</th>
                                            <th>Any Other</th>
                                            <th><input class='form-control' type='text'></input></th>
                                            <th><input class='form-control' type='text'></input></th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                    </div>
                    <div className='d-flex mt-5 justify-content-center'>
                    <button class="editcocbtn">
                            Submit
                        </button>
                    </div>
                        </div>
                    </div>
                </div>
        </>
    );
}