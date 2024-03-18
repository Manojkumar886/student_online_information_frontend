import './assests/edit_premec.css';
import background from './images/premecbg.jpg';
export let Edit_premec = () => {


    return (
        <>
        <div className="editpremecbody row justify-content-center " style={{ backgroundImage: `url(${background})`,fontFamily: 'Poppins, sans-serif'}} >         

        <div className=" row align-items-center bg-white ms-2 mb-4 col-lg-7 col-md-11 col-sm-9 mt-4 me-2 ms-2 p-5" style={{borderRadius:'20px'}}>
            <h2 className='text-center fw-bold' style={{letterSpacing:'1.5px'}}><i class="bi bi-award"></i> Schooling details update form </h2> 
                <br/>
            <h2 class="mt-5 text-center fw-bold text-danger">SSLC</h2>
            <label className="form-label fw-bold mt-3 ">Registration No : </label>
            <input 
                type='number'
                className="form-control "
               />
            <br/><br/>

            <label className="form-label fw-bold mt-3">Medium of instruction : </label>
                <input 
                type='text' 
                className="form-control " 
                ></input>
             <br/> <br/>
            
            <label className="form-label fw-bold mt-3">Year of completion : </label>
            <input 
                type='number' 
                className="form-control " 
                 />
            <br/><br/>

            <label className="form-label fw-bold mt-3">Institution Name and Address : </label>
            <input 
                type='text' 
                className="form-control " 
                 />
            <br/><br/>

            <label className="form-label fw-bold mt-3">Certificate No : </label>
            <input 
                type='number' 
                className="form-control " 
                />
            <br/><br/>

            <label className="form-label fw-bold mt-3">Total Marks Obtained (out of) : </label>
            <input 
                type='number' 
                className="form-control " 
                />
            <br/><br/>

            <label className="form-label fw-bold mt-3">Percentage : </label>
            <input 
                type='number' 
                className="form-control " 
                />
            <br/><br/>

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
            <hr class='mt-5'></hr>

            <h2 class="mt-3 text-center fw-bold text-danger">HSC</h2>
            <br/>
            <label className="form-label  fw-bold mt-3">Registration No : </label>
            <input 
                type='number'
                className="form-control "
               />
            <br/><br/>

            <label className="form-label fw-bold mt-3">Medium of instruction : </label>
                <input 
                type='text' 
                className="form-control " 
                ></input>
             <br/> <br/>
            
            <label className="form-label fw-bold mt-3">Year of completion : </label>
            <input 
                type='number' 
                className="form-control " 
                 />
            <br/><br/>

            <label className="form-label fw-bold mt-3">Institution Name and Address : </label>
            <input 
                type='text' 
                className="form-control " 
                 />
            <br/><br/>

            <label className="form-label fw-bold mt-3">Certificate No : </label>
            <input 
                type='number' 
                className="form-control " 
                />
            <br/><br/>

            <label className="form-label fw-bold mt-3">Total Marks Obtained (out of) : </label>
            <input 
                type='number' 
                className="form-control " 
                />
            <br/><br/>

            <label className="form-label fw-bold mt-3">Percentage : </label>
            <input 
                type='number' 
                className="form-control " 
                />
            <br/><br/>

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
            <hr className='mt-5'></hr>


            <h2 class="mt-5 text-center fw-bold text-danger">DIPLOMA</h2>
            <label className="form-label  fw-bold mt-3">Registration No : </label>
            <input 
                type='number'
                className="form-control "
               />
            <br/><br/>

            <label className="form-label fw-bold mt-3">Medium of instruction : </label>
                <input 
                type='text' 
                className="form-control " 
                ></input>
             <br/> <br/>
            
            <label className="form-label fw-bold mt-3">Year of completion : </label>
            <input 
                type='number' 
                className="form-control " 
                 />
            <br/><br/>

            <label className="form-label fw-bold mt-3">Institution Name and Address : </label>
            <input 
                type='text' 
                className="form-control " 
                 />
            <br/><br/>

            <label className="form-label fw-bold mt-3">Certificate No : </label>
            <input 
                type='number' 
                className="form-control " 
                />
            <br/><br/>

            <label className="form-label fw-bold mt-3">Total Marks Obtained (out of) : </label>
            <input 
                type='number' 
                className="form-control " 
                />
            <br/><br/>

            <label className="form-label fw-bold mt-3">Percentage : </label>
            <input 
                type='number' 
                className="form-control " 
                />
            <br/><br/>

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
                <button class='editpremecbtn'><span class="text">Submit</span><span>Submit</span></button>
            </div>

     </div>
        </div>
        
        </>
    );


} 