//Resources
import React, {useState,  useEffect} from "react";
import { getDrivers } from "../services/services";

//Components
import Header from "../sections/Header/Header";
import Information from "../sections/Information/Information";
import Vehicles from "../sections/ListVehicle/Vehicles";
import Footer from "../sections/Footer/Footer";

function MainPage() {
  const [drivers, setDrivers] = useState([]);

  //get drivers
  const getListOfDrivers = async () => {
    const drivers = await getDrivers();
    setDrivers(drivers);
  } 

  useEffect(() => {
    getListOfDrivers();
  }, [])

  return (
    <>
      <Header />
      <Information />
      <Vehicles drivers={drivers}/>
      <Footer />
    </>
  );
}

export default MainPage;
