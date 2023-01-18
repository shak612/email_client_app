import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./MainBody.css";

const MainBody = ({ id, markFav }) => {
  const [mainData, setMainData] = useState([]);
  const newId = id;
  const someEmail = useSelector((state) => state.email);
  const getAPI = async () => {
    const response = await fetch(
      `https://flipkart-email-mock.now.sh/?id=${newId}`
    );
    const data = await response.json();
    if (data) setMainData(data);
  };

  useEffect(() => {
    getAPI();
  }, [id]);

  let d = someEmail.filter((e) => e.id === newId);

  return (
    <div className="main">
      <div className="card mb-2 h-100 submain">
        <div className="row g-0">
          <div className="col-md-2 icon">
            {d[0] && d[0].from.name[0].toUpperCase()}
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className="d-flex justify-between">
                <h6 className="card-title">
                  From: {d[0] && d[0].from.email}
                  <span className="float-right markBtn mx-3">
                    <button
                      className="fav"
                      onClick={() => markFav(mainData.id)}
                    >
                      Mark as favorite
                    </button>
                  </span>
                </h6>
              </div>
              <p className="card-text">
                <small className="text-muted">
                  26/02/2020 10:30am <span>Favorite</span>
                </small>
              </p>
              <div
                dangerouslySetInnerHTML={{ __html: `${mainData.body}` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
