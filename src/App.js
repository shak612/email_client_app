import "./App.css";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import MainBody from "./components/MainBody/MainBody";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getData, updateData } from "./store/features/emailSlice";
import { readData } from "./store/features/emailSlice";

function App() {
  const [emailData, setEmailData] = useState([]);
  const [display, setDisplay] = useState("none");
  let [favData, setFavData] = useState([]);
  let [id, setId] = useState();
  let [fav, setFav] = useState(false);
  let [read, setRead] = useState(false);
  let [dataRead, setDataRead] = useState([]);

  let dispatch = useDispatch();

  const getAPI = async () => {
    const response = await fetch("https://flipkart-email-mock.now.sh");
    let data = await response.json();
    if (data) setEmailData(data);
  };

  function handleClick(id) {
    setId(id);
    setDisplay("block");
    const filterData = emailData.list.find((item) => item.id === id);
    dispatch(getData(filterData));
    setDataRead((prev) => [...prev, id]);
    dispatch(readData({ data: emailData.list, id: dataRead }));
  }

  function markFav(favId) {
    setFavData((old) => [...old, favId]);
  }

  function showFav() {
    dispatch(updateData({ data: emailData.list, id: favData }));
    setDisplay("none");
    setFav(true);
  }

  function showRead() {
    setRead(true);
    setDisplay("none");
  }

  useEffect(() => {
    getAPI();
  }, []);

  return (
    <div className="container">
      <Header showFav={showFav} showRead={showRead} />
      <div className="row">
        <div className="col">
          <SideBar
            read={read}
            fav={fav}
            emailData={emailData.list}
            handleClick={handleClick}
          />
        </div>
        <div className="col" style={{ display: `${display}` }}>
          <MainBody id={id} markFav={markFav} />
        </div>
      </div>
    </div>
  );
}

export default App;
