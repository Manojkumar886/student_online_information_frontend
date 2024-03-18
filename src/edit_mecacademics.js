import backgroundImage from './images/386.jpg';
import './assests/edit_mecacademics.css'
export const Edit_mecacademics=()=>
{
    return(
        <>
            <div class="edit_mecacademicbody" style={{ backgroundImage: `url(${backgroundImage})`,fontFamily: 'Poppins, sans-serif'}}> 
                <div className=" row justify-content-center p-1 " >
                    <div class='form-group col-lg-7 col-md-11 col-sm-7 p-lg-5 p-4 mt-4 mb-4' style={{borderRadius:'20px'}}>
                    <h2 class='text-center fw-bold mt-3 ' style={{'letterSpacing':'1.5px'}}><i class="bi bi-wrench-adjustable-circle-fill"></i> Update form for Mec Academics</h2>
                    <h6 class='mt-5 text-center text-secondary'>Choose your Semester to update form</h6>
                    <div class="row justify-content-center align-items-center text-center mt-3">
                        <div class='col-11'>
                        <div class="radio-input-1">
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
                        <div class="row mt-5">
                            <label class='form-label fw-bold'>Duration</label>
                            <div class='col-6'>
                                <label class='from-label'>From<small class='text-secondary'> (year)</small></label>
                                <input class='form-control mt-2' type='number'></input>
                            </div>
                            <div class='col-6'>
                                <label class='from-label'>To<small class='text-secondary'> (year)</small></label>
                                <input class='form-control mt-2' type='number'></input>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class='col-6'>
                                <label class='from-label fw-bold'>Hostler/block name</label>
                                <input class='form-control mt-2' type='text'></input>
                            </div>
                            <div class='col-6'>
                                <label class='from-label fw-bold'>Room No</label>
                                <input class='form-control mt-2' type='number'></input>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class='col-6'>
                                <label class='from-label fw-bold'>Day Scholar/ Bus stage</label>
                                <input class='form-control mt-2' type='text'></input>
                            </div>
                            <div class='col-6'>
                                <label class='from-label fw-bold'>Bus No</label>
                                <input class='form-control mt-2' type='number'></input>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class='col-6'>
                                <label class='from-label fw-bold'>Class Advisor/ Counselor</label>
                                <input class='form-control mt-2' type='text'></input>
                            </div>
                            <div class='col-6'>
                                <label class='from-label fw-bold'>Contact No</label>
                                <input class='form-control mt-2' type='number'></input>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class='col-6'>
                                <label class='from-label fw-bold'>Mentor of the Student</label>
                                <input class='form-control mt-2' type='text'></input>
                            </div>
                            <div class='col-6'>
                                <label class='from-label fw-bold'>Contact No</label>
                                <input class='form-control mt-2' type='number'></input>
                            </div>
                        </div>
                        <h2 class='mt-5 fw-bold text-center'><i class="bi bi-box-arrow-in-up-left"></i> Internal Test Attednace & Marks Obtained</h2>
                        <div className="justify-content-center d-flex mt-3 ">
                            <div className="table-responsive col-lg-12">
                                <table className="table-responsive text-center table-bordered table text-nowrap" style={{border: '2px solid black'}}>
                                    <thead >
                                        <tr>
                                            <th rowSpan='2'> S.no</th>
                                            <th rowSpan='2'> Subject Code</th>
                                            <th rowSpan='2'>Subject Name</th>
                                            <th colSpan='2'>Internal 1</th>
                                            <th colSpan='2'>Internal 2</th>
                                            <th colSpan='2'>Internal 3</th>
                                        </tr>
                                        <tr>
                                            <th>Attd %</th>
                                            <th>Marks(100)</th>
                                            <th>Attd %</th>
                                            <th>Marks(100)</th>
                                            <th>Attd %</th>
                                            <th>Marks(100)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>1.</th>
                                            <th><input class='form-control' type='text'></input></th>
                                            <th><input class='form-control' type='text'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                        </tr>
                                        <tr>
                                            <th>2.</th>
                                            <th><input class='form-control' type='text'></input></th>
                                            <th><input class='form-control' type='text'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                        </tr>
                                        <tr>
                                            <th>3.</th>
                                            <th><input class='form-control' type='text'></input></th>
                                            <th><input class='form-control' type='text'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                        </tr>
                                        <tr>
                                            <th>4.</th>
                                            <th><input class='form-control' type='text'></input></th>
                                            <th><input class='form-control' type='text'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                        </tr>
                                        <tr>
                                            <th>5.</th>
                                            <th><input class='form-control' type='text'></input></th>
                                            <th><input class='form-control' type='text'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                        </tr>
                                        <tr>
                                            <th>6.</th>
                                            <th><input class='form-control' type='text'></input></th>
                                            <th><input class='form-control' type='text'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                        </tr>
                                        <tr>
                                            <th>7.</th>
                                            <th><input class='form-control' type='text'></input></th>
                                            <th><input class='form-control' type='text'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                        </tr>
                                        <tr>
                                            <th>8.</th>
                                            <th><input class='form-control' type='text'></input></th>
                                            <th><input class='form-control' type='text'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                        </tr>
                                        <tr>
                                            <th>9.</th>
                                            <th><input class='form-control' type='text'></input></th>
                                            <th><input class='form-control' type='text'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                        </tr>
                                        <tr>
                                            <th>10.</th>
                                            <th><input class='form-control' type='text'></input></th>
                                            <th><input class='form-control' type='text'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                            <th><input class='form-control' type='number'></input></th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <h2 className='fw-bold mt-5 text-center'><i class="bi bi-calendar-check"></i> Perfromance in end Semester Examination</h2>
                        <div className="justify-content-center d-flex mt-3 ">
                            <div className="table-responsive col-lg-12">
                                <table className="table-responsive table-hover table-bordered table text-nowrap" style={{border: '2px solid black'}}>
                                    <thead>
                                        <tr>
                                            <th>S.no</th>
                                            <th>Subject Code</th>
                                            <th>No. of apperance till Pass</th>
                                            <th>Grade Obtained</th>
                                            <th>Month and year of passing</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>1.</th>
                                            <th><input className='form-control' type='text'></input></th>
                                            <th><select className='form-select'>
                                                    <option value='1'>1</option>
                                                    <option value='2'>2</option>
                                                    <option value='3'>3</option>
                                                    <option value='4'>4</option>
                                                    <option value='5'>5</option>
                                                    <option value='6'>6</option>
                                                    <option value='7'>7</option>
                                                    <option value='8'>8</option>
                                                </select>
                                            </th>
                                            <th><input className='form-control' type='text'></input></th>
                                            <th><input className='form-control' type='month'></input></th>
                                        </tr>
                                        <tr>
                                            <th>2.</th>
                                            <th><input className='form-control' type='text'></input></th>
                                            <th><select className='form-select'>
                                                    <option value='1'>1</option>
                                                    <option value='2'>2</option>
                                                    <option value='3'>3</option>
                                                    <option value='4'>4</option>
                                                    <option value='5'>5</option>
                                                    <option value='6'>6</option>
                                                    <option value='7'>7</option>
                                                    <option value='8'>8</option>
                                                </select>
                                            </th>
                                            <th><input className='form-control' type='text'></input></th>
                                            <th><input className='form-control' type='month'></input></th>
                                        </tr>
                                        <tr>
                                            <th>3.</th>
                                            <th><input className='form-control' type='text'></input></th>
                                            <th><select className='form-select'>
                                                    <option value='1'>1</option>
                                                    <option value='2'>2</option>
                                                    <option value='3'>3</option>
                                                    <option value='4'>4</option>
                                                    <option value='5'>5</option>
                                                    <option value='6'>6</option>
                                                    <option value='7'>7</option>
                                                    <option value='8'>8</option>
                                                </select>
                                            </th>
                                            <th><input className='form-control' type='text'></input></th>
                                            <th><input className='form-control' type='month'></input></th>
                                        </tr>
                                        <tr>
                                            <th>4.</th>
                                            <th><input className='form-control' type='text'></input></th>
                                            <th><select className='form-select'>
                                                    <option value='1'>1</option>
                                                    <option value='2'>2</option>
                                                    <option value='3'>3</option>
                                                    <option value='4'>4</option>
                                                    <option value='5'>5</option>
                                                    <option value='6'>6</option>
                                                    <option value='7'>7</option>
                                                    <option value='8'>8</option>
                                                </select>
                                            </th>
                                            <th><input className='form-control' type='text'></input></th>
                                            <th><input className='form-control' type='month'></input></th>
                                        </tr>
                                        <tr>
                                            <th>5.</th>
                                            <th><input className='form-control' type='text'></input></th>
                                            <th><select className='form-select'>
                                                    <option value='1'>1</option>
                                                    <option value='2'>2</option>
                                                    <option value='3'>3</option>
                                                    <option value='4'>4</option>
                                                    <option value='5'>5</option>
                                                    <option value='6'>6</option>
                                                    <option value='7'>7</option>
                                                    <option value='8'>8</option>
                                                </select>
                                            </th>
                                            <th><input className='form-control' type='text'></input></th>
                                            <th><input className='form-control' type='month'></input></th>
                                        </tr>
                                        <tr>
                                            <th>6.</th>
                                            <th><input className='form-control' type='text'></input></th>
                                            <th><select className='form-select'>
                                                    <option value='1'>1</option>
                                                    <option value='2'>2</option>
                                                    <option value='3'>3</option>
                                                    <option value='4'>4</option>
                                                    <option value='5'>5</option>
                                                    <option value='6'>6</option>
                                                    <option value='7'>7</option>
                                                    <option value='8'>8</option>
                                                </select>
                                            </th>
                                            <th><input className='form-control' type='text'></input></th>
                                            <th><input className='form-control' type='month'></input></th>
                                        </tr>
                                        <tr>
                                            <th>7.</th>
                                            <th><input className='form-control' type='text'></input></th>
                                            <th><select className='form-select'>
                                                    <option value='1'>1</option>
                                                    <option value='2'>2</option>
                                                    <option value='3'>3</option>
                                                    <option value='4'>4</option>
                                                    <option value='5'>5</option>
                                                    <option value='6'>6</option>
                                                    <option value='7'>7</option>
                                                    <option value='8'>8</option>
                                                </select>
                                            </th>
                                            <th><input className='form-control' type='text'></input></th>
                                            <th><input className='form-control' type='month'></input></th>
                                        </tr>
                                        <tr>
                                            <th>8.</th>
                                            <th><input className='form-control' type='text'></input></th>
                                            <th><select className='form-select'>
                                                    <option value='1'>1</option>
                                                    <option value='2'>2</option>
                                                    <option value='3'>3</option>
                                                    <option value='4'>4</option>
                                                    <option value='5'>5</option>
                                                    <option value='6'>6</option>
                                                    <option value='7'>7</option>
                                                    <option value='8'>8</option>
                                                </select>
                                            </th>
                                            <th><input className='form-control' type='text'></input></th>
                                            <th><input className='form-control' type='month'></input></th>
                                        </tr>
                                        <tr>
                                            <th>9.</th>
                                            <th><input className='form-control' type='text'></input></th>
                                            <th><select className='form-select'>
                                                    <option value='1'>1</option>
                                                    <option value='2'>2</option>
                                                    <option value='3'>3</option>
                                                    <option value='4'>4</option>
                                                    <option value='5'>5</option>
                                                    <option value='6'>6</option>
                                                    <option value='7'>7</option>
                                                    <option value='8'>8</option>
                                                </select>
                                            </th>
                                            <th><input className='form-control' type='text'></input></th>
                                            <th><input className='form-control' type='month'></input></th>
                                        </tr>
                                        <tr>
                                            <th>10.</th>
                                            <th><input className='form-control' type='text'></input></th>
                                            <th><select className='form-select'>
                                                    <option value='1'>1</option>
                                                    <option value='2'>2</option>
                                                    <option value='3'>3</option>
                                                    <option value='4'>4</option>
                                                    <option value='5'>5</option>
                                                    <option value='6'>6</option>
                                                    <option value='7'>7</option>
                                                    <option value='8'>8</option>
                                                </select>
                                            </th>
                                            <th><input className='form-control' type='text'></input></th>
                                            <th><input className='form-control' type='month'></input></th>
                                        </tr>
                                    </tbody>
                                </table>
                                
                            </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                                <button class='edit_mecacademic_btn mt-4 mb-2'>
                                    Submit
                                </button>
                        </div>
                    </div>                   
                </div>
            </div>
        </>
    );
}