import React,{useContext} from "react";
import "./sidehome.css";
import { BigData } from "./Student";

function SideHome() {

  const context = useContext(BigData);
  
  return (
    <>
      <div className="sidehome">
        <div className="sidehomecontainer">
          <div className="box1">
            <div className="leftbox1">
              <div className="image">

              </div>
            </div>
            <div className="rightbox1">
            <div className="personname1">
                  {context.Name}
                </div>
              <div className="container">
                
                <div className="questions">
                  <div className="question">Admission number</div>
                  <div className="question">Roll number</div>
                  <div className="question">Department</div>
                  <div className="question">Section</div>
                  <div className="question">Sem</div>
                  <div className="question">Course</div>
                  <div className="question">College</div>
                  <div className="question">Circular Plan</div>
                </div>
                <div className="answers">
                  <div className="answer">:  {context.Admission} </div>
                  <div className="answer">:  {context.RollNumber}</div>
                  <div className="answer">:  Artificial Intelligence And Data Science</div>
                  <div className="answer">:  I-2</div>
                  <div className="answer">:  IV</div>
                  <div className="answer">:  Artificial Intelligence And Data Science</div>
                  <div className="answer">:  CBIT</div>
                  <div className="answer">:  Regular</div>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideHome;
