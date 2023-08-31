import React,{useRef,useState} from "react";
import csidebar from "./csidebar.css";
import COSC from './COSC'
import Cdata from './Cdata'
import { NavLink, Outlet } from "react-router-dom";


function Csidebar(props) {
  const name = useRef(null)
  const [object,setObject] = useState({})

  const alertbox = () => {
     alert("Thanks for registration "+name.current.value)
  }

  const filterCdata = (category) => {
    const updatedItems = Cdata.filter((currElement) => {
      return currElement.Club === category
    });
    setObject(updatedItems[0])
  }

  return (
    <>
    <div className="ctransparent"></div>
    <div className="csidebar">
      <div className="cside">
        <div className="csidecontainer">
            <div className="csidecontainerbox">
                <NavLink to='cosc'>
                    <button className="navlinkbutton" onClick={() => filterCdata('COSC')}>
                        <span className="csidecontainerboxtext">Cosc</span>
                    </button>
                </NavLink>
            </div>
            <div className="csidecontainerbox">
                <NavLink to='robovanza'>
                    <button className="navlinkbutton" onClick={() => filterCdata('ROBOVANZA')}>
                        <span className="csidecontainerboxtext">Robovanza</span>
                    </button>
                </NavLink>
            </div>
            <div className="csidecontainerbox">
            <NavLink to='moi'>
                    <button className="navlinkbutton" onClick={() => filterCdata('Makers Of India')}>
                        <span className="csidecontainerboxtext">Makers of India</span>
                    </button>
                </NavLink>
            </div>
            <div className="csidecontainerbox">
            <NavLink to='spandana'>
                    <button className="navlinkbutton" onClick={() => filterCdata('SPANDANA')}>
                        <span className="csidecontainerboxtext">Spandana</span>
                    </button>
                </NavLink>
            </div>
            <div className="csidecontainerbox">
                <NavLink to='cosc'>
                <span className="csidecontainerboxtext">Chaitanya Shaithi</span>
                </NavLink>
            </div>
            <div className="csidecontainerbox">
                <NavLink to='cosc'>
                    <span className="csidecontainerboxtext">Chaitanya Kruthi </span>
                </NavLink>
            </div>
            <div className="csidecontainerbox">
                <NavLink to='cosc'>
                    <span className="csidecontainerboxtext">Technical Seva</span>
                </NavLink>
            </div>
            <div className="csidecontainerbox">
                <NavLink to='cosc'>
                    <span className="csidecontainerboxtext">Electoral Literacy Club </span>
                </NavLink>
            </div>
            <div className="csidecontainerbox">
                <NavLink to='cosc'>
                    <span className="csidecontainerboxtext">Energy Savers Lab</span>
                </NavLink>
            </div>
            <div className="csidecontainerbox">
                <NavLink to='cosc'>
                    <span className="csidecontainerboxtext">Wellness Club </span>
                </NavLink>
            </div>
            <div className="csidecontainerbox">
                <NavLink to='cosc'>
                    <span className="csidecontainerboxtext">Women Safety Club </span>
                </NavLink>
            </div>
            <div className="csidecontainerbox">
                <NavLink to='cosc'>
                    <span className="csidecontainerboxtext">NSS</span>
                </NavLink>
            </div>
            <div className="csidecontainerbox">
                <NavLink to='cosc'>
                    <span className="csidecontainerboxtext">Parivritha</span>
                </NavLink>
            </div>
            <div className="csidecontainerbox">
                <NavLink to='cosc'>
                    <span className="csidecontainerboxtext">Chaitanya Lasya </span>
                </NavLink>
            </div>
            <div className="csidecontainerbox">
                <NavLink to='cosc'>
                    <span className="csidecontainerboxtext">Chaitanya Geethi</span>
                </NavLink>
            </div>
            <div className="csidecontainerbox">
                <NavLink to='cosc'>
                    <span className="csidecontainerboxtext">Chaitanya Vaadhya </span>
                </NavLink>
            </div>
            <div className="csidecontainerbox">
                <NavLink to='cosc'>
                    <span className="csidecontainerboxtext">Communicando</span>
                </NavLink>
            </div>
            <div className="csidecontainerbox">
                <NavLink to='cosc'>
                    <span className="csidecontainerboxtext">SahiLiterature </span>
                </NavLink>
            </div>
            <div className="csidecontainerbox">
                <NavLink to='cosc'>
                    <span className="csidecontainerboxtext">Poets club</span>
                </NavLink>
            </div>
            <div className="csidecontainerbox">
            <NavLink to='cosc'>
                    <button className="navlinkbutton" onClick={() => filterCdata('COSC')}>
                        <span className="csidecontainerboxtext">Toast Masters</span>
                    </button>
                </NavLink>
            </div>
        </div>
      </div>

      <div className="cmiddle">
        <div className="cbottomsidebar">
          <Outlet/>
        </div>
      </div>

      <div className="cright">
        <div className="crightcontainer1">
          <div className="crightcontainerleft">
            <ul>
                <li className="listitem">President</li>
                <li className="listitem">PresidentContact</li>
                <li className="listitem">VisePresident</li>
                <li className="listitem">VisePresidentContact</li>
                <li className="listitem">ClubMembers</li>
            </ul>
          </div>
          <div className="crightcontainerright">
             <ul>
                <li className="listitem">:   {object.PresidentName}</li>
                <li className="listitem">:   {object.PresidentContact}</li>
                <li className="listitem">:   {object.VicePresidentName}</li>
                <li className="listitem">:   {object.VicePresidentContact}</li>
                <li className="listitem">:   {object.ClubMember1}</li>
                <li className="listitem">:   {object.ClubMember2}</li>
                <li className="listitem">:   {object.ClubMember3}</li>
                <li className="listitem">:   {object.ClubMember4}</li>
                <li className="listitem">:   {object.ClubMember5}</li>
                <li className="listitem">:   {object.ClubMember6}</li>
             </ul>
          </div>
        </div>
        <hr/>
        <div className="crightcontainer2">
            <div className="clogin">
                <div className="rheading">
                    <span>Registration Form</span>
                </div>
                <form>
                    <label>Email</label>
                    <input type="email" placeholder=""/>
                    <label>Full Name</label>
                    <input type="text" placeholder="" ref={name}/>
                    <label>Roll Number</label>
                    <input type="text" placeholder=""/>
                    <label>Year of studying</label>
                    <input type="text" placeholder=""/>
                    <label>Branch</label>
                    <input type="text" placeholder=""/>
                    <label>Cell Number</label>
                    <input type="text" placeholder=""/> 
                </form>
                <button className="formsubmit" onClick={alertbox}>Submit</button>
            </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Csidebar;
