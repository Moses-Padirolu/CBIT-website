import React,{useContext} from "react";
import "./attendance.css";
import { BigData } from "./Student";

function Attendance() {

  const context = useContext(BigData);
  console.log(context.Java.ClassHeld)

  return (
    <>
      <div className="attendance">
        <div className="attendancecontainer">
          <table>
            <tr id="attendanceheader">
              <th>Sno</th>
              <th>Code</th>
              <th>Subject</th>
              <th>Classes Held</th>
              <th>Classes Attended</th>
              <th>Subject Attendance</th>
            </tr>

            <tr>
              <td>1</td>
              <td>20ADC01</td>
              <td>JP</td>
              <td>{context.Java.ClassHeld}</td>
              <td>{context.Java.ClassAttended}</td>
              <td>{context.Java.OverAllAttendance}</td>
            </tr>

            <tr>
              <td>2</td>
              <td>20ADC02</td>
              <td>JPLab</td>
              <td>{context.JavaLab.ClassHeld}</td>
              <td>{context.JavaLab.ClassAttended}</td>
              <td>{context.JavaLab.OverAllAttendance}</td>
            </tr>

            <tr>
              <td>3</td>
              <td>20ADC03</td>
              <td>AIML</td>
              <td>{context.AIML.ClassHeld}</td>
              <td>{context.AIML.ClassAttended}</td>
              <td>{context.AIML.OverAllAttendance}</td>
            </tr>

            <tr>
              <td>4</td>
              <td>20ECC34</td>
              <td>DCCST</td>
              <td>{context.DCCST.ClassHeld}</td>
              <td>{context.DCCST.ClassAttended}</td>
              <td>{context.DCCST.OverAllAttendance}</td>
            </tr>

            <tr>
              <td>5</td>
              <td>20EGM01</td>
              <td>ICFP</td>
              <td>{context.Mentoring.ClassHeld}</td>
              <td>{context.Mentoring.ClassAttended}</td>
              <td>{context.Mentoring.OverAllAttendance}</td>
            </tr>

            <tr>
              <td>6</td>
              <td>20ITC05</td>
              <td>DLCA</td>
              <td>{context.DLCA.ClassHeld}</td>
              <td>{context.DLCA.ClassAttended}</td>
              <td>{context.DLCA.OverAllAttendance}</td>
            </tr>

            <tr>
              <td>7</td>
              <td>20ITC08</td>
              <td>DBMS</td>
              <td>{context.DBMS.ClassHeld}</td>
              <td>{context.DBMS.ClassAttended}</td>
              <td>{context.DBMS.OverAllAttendance}</td>
            </tr>

            <tr>
              <td>8</td>
              <td>20ITC08</td>
              <td>DBMSLAB</td>
              <td>{context.DBMSLab.ClassHeld}</td>
              <td>{context.DBMSLab.ClassAttended}</td>
              <td>{context.DBMSLab.OverAllAttendance}</td>
            </tr>

            <tr>
              <td>9</td>
              <td>20ITC12</td>
              <td>MP</td>
              <td>{context.MiniProject.ClassHeld}</td>
              <td>{context.MiniProject.ClassAttended}</td>
              <td>{context.MiniProject.OverAllAttendance}</td>
            </tr>

            <tr>
              <td>10</td>
              <td>20MTC09</td>
              <td>P&S</td>
              <td>{context.Maths.ClassHeld}</td>
              <td>{context.Maths.ClassAttended}</td>
              <td>{context.Maths.OverAllAttendance}</td>
            </tr>

            <tr>
              <td>11</td>
              <td>20SMC01</td>
              <td>MENTORING</td>
              <td>{context.Mentoring.ClassHeld}</td>
              <td>{context.Mentoring.ClassAttended}</td>
              <td>{context.Mentoring.OverAllAttendance}</td>
            </tr>
          </table>
        </div> 
      </div>
      <div className="overallattendance">
        <div className="overallattendancecontainer">
          <table>
            <tr className="finalbox">
              <td>Over All Attendance Is</td>
              <td>{context.OverAllAttendance}</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default Attendance;
