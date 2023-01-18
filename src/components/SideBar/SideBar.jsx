import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./SideBar.css";

const SideBar = ({ emailData, handleClick, fav, read }) => {
  let [somedata, setSomedata] = useState([]);
  const data = useSelector((state) => state.email && state.email);
  const readData = useSelector((state) => state.readUnread && state.readUnread);

  useEffect(() => {
    setSomedata(emailData);
    if (fav) {
      setSomedata(() => data && data);
      fav = false;
    } else if (read) {
      setSomedata(() => readData && readData);
      read = false;
    }
  }, [emailData, fav, read]);

  return (
    <div>
      {somedata &&
        somedata.map((item) => (
          <div
            key={item.id}
            className="card mb-2"
            onClick={() => handleClick(item.id)}
          >
            <div className="row g-0">
              <div className="col-md-2 icon">
                {item.from.name[0].toUpperCase()}
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h6 className="card-title">
                    From: {item.from.name} {`<${item.from.email}>`}
                  </h6>
                  <h6 className="card-title">Subject: {item.subject}</h6>
                  <p className="card-text">{item.short_description}</p>
                  <p className="card-text">
                    <small className="text-muted">
                      26/02/2020 10:30am {fav ? <span>Favorite</span> : ""}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default SideBar;
