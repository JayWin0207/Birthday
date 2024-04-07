import React, { useState } from "react";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    padding: "0px"
  },
  overlay: {zIndex: 1000  }
};

function DOB() {
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [DOB, setDOB] = useState("");
  

  const credCheck = () =>{
    const dob=document.getElementById('dateOfBirth').value;
    const name=document.getElementById('name').value;
    if(dob=='2000-04-07' && name.toLowerCase()=='pulasani aswini'){
      setModalOpen(false);
    }else{
      alert("Invalid Name or DOB! Try again");
    }
  };

  return (
    <div className="DOB">
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        ariaHideApp={true}
        style={customStyles}
      >
      <div id="model" className="model-class">
          <div id="DOB">
          <div id='nameInput' className='input-class'>
                <label id='NameLabel'>Enter your Name:</label>
                <input type='text' id="name" placeholder="Surname+Firstname" value={name} onChange={(e)=> setName(e.target.value)}></input>
            </div>
            <div id='DOBInput' className='input-class'>
                <label id='DOBLabel'>Enter your Date of Birth:</label>
                <input type='text' id="dateOfBirth" placeholder="YYYY-MM-DD" value={DOB} onChange={(e)=> setDOB(e.target.value)}></input>
            </div>
            <div id='submit'>
            <input type='Submit' onClick={()=>credCheck()}></input>
            </div>
          </div>
      </div>
    </Modal>
    </div>
  );
}

export default DOB;