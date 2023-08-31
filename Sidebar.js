import React from "react";
import sidebar from "./sidebar.css";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import HomeIcon from "@mui/icons-material/Home";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import AssignmentIcon from "@mui/icons-material/Assignment";
import EventNoteIcon from "@mui/icons-material/EventNote";
import AssignmentReturnedIcon from "@mui/icons-material/AssignmentReturned";
import TimerIcon from "@mui/icons-material/Timer";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import FeedbackIcon from "@mui/icons-material/Feedback";
import SchoolIcon from "@mui/icons-material/School";
import DatasetIcon from "@mui/icons-material/Dataset";
import CampaignIcon from "@mui/icons-material/Campaign";
import { NavLink, Outlet } from "react-router-dom";


function Sidebar() {
  
  return (
    <>
      <div className="sidebar"> 
      <div className="side">
        <div className="sidebarimagebox">
          <div className="sidebarimage"></div>
        </div>

        <hr className="sidebarhr" />
        <div className="sidebarwrapper">
          <ul className="sidebarlist">
            <li className="sidebarlistitem">
              
              <div className="iconscontainer">
              <AccountBalanceIcon className="sidebaricon" />
              <NavLink to="institute">
                <span className="sidebarlistitemtext">My Institute</span>
              </NavLink>
              </div>
            </li>
            <li className="sidebarlistitem">
            <div className="iconscontainer">
              <HomeIcon className="sidebaricon" />
              <NavLink to="sidehome">
                <span className="sidebarlistitemtext">Home</span>
              </NavLink>
              </div>
            </li>
            <li className="sidebarlistitem">
            <div className="iconscontainer">
              <CoPresentIcon className="sidebaricon" />
              <NavLink to="attendance">
                <span className="sidebarlistitemtext">Attendance</span>
              </NavLink>
              </div>
            </li>
            <li className="sidebarlistitem">
            <div className="iconscontainer">
              <AssignmentIcon className="sidebaricon" />
              <NavLink to="assignment">
                <span className="sidebarlistitemtext">Assignments</span>
              </NavLink>
              </div>
            </li>
            <li className="sidebarlistitem">
            <div className="iconscontainer">
              <EventNoteIcon className="sidebaricon" />
              <NavLink to="assignment">
                <span className="sidebarlistitemtext">Exam Schedules</span>
              </NavLink>
              </div>
            </li>
            <li className="sidebarlistitem">
            <div className="iconscontainer">
              <AssignmentReturnedIcon className="sidebaricon" />
              <NavLink to="assignment">
                <span className="sidebarlistitemtext">Reports</span>
              </NavLink>
              </div>
            </li>
            <li className="sidebarlistitem">
            <div className="iconscontainer">
              <TimerIcon className="sidebaricon" />
              <NavLink to="assignment">
                <span className="sidebarlistitemtext">Assessments</span>
              </NavLink>
              </div>
            </li>
            <li className="sidebarlistitem">
            <div className="iconscontainer">
              <HolidayVillageIcon className="sidebaricon" />
              <NavLink to='assignment'>
              <span className="sidebarlistitemtext">Holidays</span>
              </NavLink>
              </div>
            </li>
            <li className="sidebarlistitem">
            <div className="iconscontainer">
              <PendingActionsIcon className="sidebaricon" />
              <NavLink to='assignment'>
              <span className="sidebarlistitemtext">Time Tables</span>
              </NavLink>
              </div>
            </li>
            <li className="sidebarlistitem">
            <div className="iconscontainer">
              <MenuBookIcon className="sidebaricon" />
              <NavLink to='assignment'>
              <span className="sidebarlistitemtext">Teaching Content</span>
              </NavLink>
              </div>
            </li>
            <li className="sidebarlistitem">
            <div className="iconscontainer">
              <TimeToLeaveIcon className="sidebaricon" />
              <NavLink to='assignment'>
              <span className="sidebarlistitemtext">Leave</span>
              </NavLink>
              </div>
            </li>
            <li className="sidebarlistitem">
            <div className="iconscontainer">
              <ManageAccountsIcon className="sidebaricon" />
              <NavLink to='assignment'>
              <span className="sidebarlistitemtext">Services</span>
              </NavLink>
              </div>
            </li>
            <li className="sidebarlistitem">
            <div className="iconscontainer">
              <CreditCardIcon className="sidebaricon" />
              <NavLink to="assignment">
                <span className="sidebarlistitemtext">Billing</span>
              </NavLink>
              </div>
            </li>
            <li className="sidebarlistitem">
            <div className="iconscontainer">
              <NoteAltIcon className="sidebaricon" />
              <NavLink to='assignment'>
              <span className="sidebarlistitemtext">Enrollments</span>
              </NavLink>
              </div>
            </li>
            <li className="sidebarlistitem">
            <div className="iconscontainer">
              <DirectionsRunIcon className="sidebaricon" />
              <NavLink to='assignment'>
              <span className="sidebarlistitemtext">Activity</span>
              </NavLink>
              </div>
            </li>
            <li className="sidebarlistitem">
            <div className="iconscontainer">
              <RemoveCircleIcon className="sidebaricon" />
              <NavLink to='assignment'>
              <span className="sidebarlistitemtext">Clearance</span>
              </NavLink>
              </div>
            </li>
            <li className="sidebarlistitem">
            <div className="iconscontainer">
              <FeedbackIcon className="sidebaricon" />
              <NavLink to='assignment'>
              <span className="sidebarlistitemtext">Feedback</span>
              </NavLink>
              </div>
            </li>
            <li className="sidebarlistitem">
            <div className="iconscontainer">
              <SchoolIcon className="sidebaricon" />
              <NavLink to='assignment'>
              <span className="sidebarlistitemtext">Scholarship</span>
              </NavLink>
              </div>
            </li>
            <li className="sidebarlistitem">
            <div className="iconscontainer">
              <DatasetIcon className="sidebaricon" />
              <NavLink to='assignment'>
              <span className="sidebarlistitemtext">Final Results</span>
              </NavLink>
              </div>
            </li>
            <li className="sidebarlistitem">
            <div className="iconscontainer">
              <DatasetIcon className="sidebaricon" />
              <NavLink to='assignment'>
              <span className="sidebarlistitemtext">Exam Course</span>
              </NavLink>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="middle">
        <div className="bottomsidebar">
          <Outlet/>
        </div>
      </div>

      <div className="right">
        <div className="rightcontainer">
          <div className="rightcontainerbox1">
            <div className="announcement">
              <CampaignIcon className="announcementicon" />
              <div>Announcements</div>
            </div>

            <hr />
            <div className="rightinfo">
              Republic Day Celebrations National Flag Hoisting: Honorable
              President Sri N. Subash Garu unfurls the National Flag at 9.45 AM
              at CBIT.
            </div>
          </div>
          <div className="rightcontainerbox2"></div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Sidebar;
