import React, { useRef,useState } from "react";
import Csidebar from "./Csidebar";
import CNavbar from "./CNavbar";
import Data from './Data'
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

function Clubs() {
  const [name, setName] = useState("");
  const nameInput=useRef(null);
  const passwordInput=useRef(null);

const filtering = () =>{
     const updatedItems = Data.filter((item)=>{
        return (item.Username===nameInput.current.value && item.Password===passwordInput.current.value)
     });
     setName(updatedItems[0].Name)
}

  return (
    <>
      {name.length === 0 ? (
        <div className="login">
          <div className="logincontainer">
            <div className="loginbox">              
              <div className="topheader">Student Login</div>
              <div className="input-field">
                <input type="text" className="input" placeholder="Username" ref={nameInput} required/>
                <PersonIcon className="icon"/>
              </div>

              <div className="input-field">
                <input type="password" className="input" placeholder="Password" ref={passwordInput} required/>
                <LockIcon className="icon"/>
              </div>

              <div className="input-field">
              <button className="button" onClick={filtering}>submit</button>
              </div>
              
              <div className="bottom">
              <div className="leftbox">
                <input type="checkbox" id="check"/>
                <label for="check">Remember Me</label>
              </div>

              <div className="rightbox">
                <label><a href="#">Forgot password</a></label>
              </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <CNavbar name={name}/>
          <div className="studentcontainer">
            <Csidebar />
          </div>
        </div>
       )}
    </>
  );
}

export default Clubs;
