import './assests/edit_dashboardcss.css';
import backgroundImage from './images/15007.jpg';
export const Editdashboard=()=>
{
    const togglePasswordVisibility = () => {
        var passwordInput = document.getElementById('password');
        var eyeIcon = document.querySelector('.password-toggle');

        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            eyeIcon.classList.remove('bi-eye-slash');
            eyeIcon.classList.add('bi-eye');
        } else {
            passwordInput.type = 'password';
            eyeIcon.classList.remove('bi-eye');
            eyeIcon.classList.add('bi-eye-slash');
        }
    };
    return(
        <>
        <div class="body" style={{ backgroundImage: `url(${backgroundImage})`}}>
            <div className="row justify-content-center p-1 mt-3">
          <div className="form-group col-lg-7 col-md-11 col-sm-9 p-3 " style={{border: '2px solid black', borderRadius: '10px',backgroundColor: '#fafafa'
          }}>
            <div className="container">
            <h2 className="text-center display-5 fw-bold mb-3" style={{
                
                background: 'linear-gradient(to right, #271BCF 22%, #55BBCF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
            }}>Edit Form for Dashborad</h2>
                 <div className="row">
                    <div className="col">
                        <label className="fl from-label float start fw-bold " >E-mail</label>
                        <input className="form-control mt-2 " type="email"  />
                    </div>
                </div>
                <div >
                    <label className="fl form-label fw-bold mt-4">Password</label>
                    <div className="password-container">
                        <input type="password" id="password" className="form-control mt-2" />
                        <i onClick={togglePasswordVisibility} className="bi bi-eye-slash password-toggle"></i>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label className="fl from-label float start fw-bold " >Confirm Password</label>
                        <input className="form-control mt-2 " type="text"  />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label className="fl from-label float start fw-bold " >Name</label>
                        <input className="form-control mt-2 " type="text"  />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label className="fl from-label float start fw-bold">Batch</label>
                        <input className="form-control mt-2 " type="text" placeholder='e.g 2020-2024' />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label className="fl from-label float start fw-bold">Degree</label>
                        <input className="form-control mt-2 " type="text" />
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <label className="fl form-label float start fw-bold ">Department</label>
                        <br></br>
                        <select className='form-select' style={{backgroundColor:'#fafafa'}}>
                            <option value="none" selected>None</option>
                            <option value="cse">CSE</option>
                            <option value="eee">EEE</option>
                            <option value="ece">ECE</option>
                            <option value="civil">CIVIL</option>
                            <option value="Aids">AI&DS</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label className="fl form-label float-start fw-bold">Regulation</label>
                        <input className="form-control mt-2" type="number" min="2000" max="2040" placeholder="Enter a year" />
                    </div>
                </div>                
                <div className="row">
                    <div className="col">
                        <label className="fl from-label float start fw-bold">Roll No</label>
                        <input className="form-control mt-2 " type="text" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label className="fl from-label float start fw-bold">Register number</label>
                        <input className="form-control mt-2 " type="text" />
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <label className="fl form-label float start fw-bold ">Choose you CA</label>
                        <br></br>
                        <select className='form-select' style={{backgroundColor:'#fafafa'}}>
                            <option value="none" selected>None</option>
                            <option value="Suvitha">Suvitha S</option>
                            <option value="Ramesh">Ramesh</option>
                            <option value="surender">Surender</option>
                            <option value="suganya">Suganya</option>
                            <option value="soundarya">Soundarya M</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label className="fl from-label float start fw-bold">Date of joining the Institution</label>
                        <input className="form-control mt-2" type="date" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label className="fl form-label fw-bold">Quota</label>
                        <div className="form-check form-check">
                            <input className="form-check-input " type="radio" name="quota" id="gmRadio" value="GM"/>
                            <label className="form-check-label" for="gmRadio">Government</label>
                        </div>
                        <div className="form-check form-check">
                            <input className="form-check-input" type="radio" name="quota" id="mnRadio" value="MN"/>
                            <label className="form-check-label" for="mnRadio">Management</label>
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <label for="formFile" className="fl form-label fw-bold">Choose image<span className="text-secondary"> (professional images .jpg .png .jpge)</span></label>
                    <input className="form-control mt-2" type="file" id="formFile" accept=".jpg, .jpeg, .png"/>
                </div>
                <div className="d-flex justify-content-center mt-5">
                    <button className="mt-5 col-2" class="button2">Submit</button>
                </div>                         
             </div>
           </div>
        </div>  
     </div>
        </>
    );
}