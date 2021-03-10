import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar";
import Channels from "./components/Channels";


function App() {
  const [userName, setUserName] = useState("");
  const [userMassage, setUserMassage] = useState("");
  const [WholeData, setWholeData] = useState([]);
  const [MassagesData, setMassagesData] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setWholeData(response.data);
    });
  }, []);
  useEffect(() => {
    Axios.get("http://localhost:3001/api/massages").then((response) => {
      setMassagesData(response.data);
    });
  }, []);

  const submitMessage = () => {
    Axios.post("http://localhost:3001/api/insert", {
      userName: userName,
      userMassage: userMassage,
    });

    setWholeData([
      ...WholeData,
      { userName: userName, userMassage: userMassage },
    ]);
  };

  const deleteMassage = (massage) => {
    Axios.delete(`http://localhost:3001/api/delete/${massage}`);
  };


  

  return (
    <div className="App">
      <Navbar WholeData={WholeData} />
      <div className="container">
        <div className="card border-dark mb-3" id="card">
          <div className="card-header">Channel messages</div>
          <div className="card-body">
            <Channels WholeData={WholeData} deleteMassage={deleteMassage} />
            <div className="form-group">
              <label className="col-form-label" htmlFor="inputDefault">
                Type your massage
              </label>
              <div className="row">
                <div className="col-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="write new name"
                    id="inputDefault"
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                  />
                </div>
                <div className="col-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="write new message"
                    id="setUserMassage"
                    onChange={(e) => {
                      setUserMassage(e.target.value);
                    }}
                  />
                </div>

                <div className="col-4" style={{ marginLeft: "-100px" }}>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={submitMessage}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default App;
