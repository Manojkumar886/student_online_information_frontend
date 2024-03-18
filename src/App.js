
import { SignupForm } from "./createone"
import { Dashborad1 } from "./dashboard";
import { Editdashboard } from "./edit_dashborad";
import { Loginpage } from "./loginpage"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Personalinfo } from "./personalinfo";
import { Editpersonalinfo } from "./edit_personalinfo";
import { Premec } from "./premec";
import { MECACADEMICS_1 } from "./mecacademics_1";
import { MECACADEMICS_2 } from "./mecacademics_2";
import { MECACADEMICS_3 } from "./mecacademics_3";
import { MECACADEMICS_4 } from "./mecacademics_4";
import { MECACADEMICS_5 } from "./mecacademics_5";
import { MECACADEMICS_6 } from "./mecacademics_6";
import { MECACADEMICS_7 } from "./mecacademics_7";
import { MECACADEMICS_8 } from "./mecacademics_8";
import { Cocuricular_1 } from "./coc_1";
import { Cocuricular_2 } from "./coc_2";
import { Cocuricular_3 } from "./coc_3";
import { Cocuricular_4 } from "./coc_4";
import { Cocuricular_5 } from "./coc_5";
import { Cocuricular_6 } from "./coc_6";
import { Cocuricular_7 } from "./coc_7";
import { Cocuricular_8 } from "./coc_8";
import { Projects } from "./projects";
import { Edit_premec } from "./edit_premec";
import { Edit_mecacademics } from "./edit_mecacademics";
import { Edit_Cocuricular } from "./edit_coc";
import { Edit_project } from "./edit_project";
function App() {
  return (
    <>
      {
        (sessionStorage.getItem("user")) ?
          <>
            <BrowserRouter>
              <Dashborad1 />
              <Routes>
              </Routes>
            </BrowserRouter>
          </>
          :
          <>
            <Loginpage />
          </>
      }
    </>
  );
}

export default App;
