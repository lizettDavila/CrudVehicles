//Resources
import React, { useState, useEffect } from "react";
import { getVehiclesByDriver } from "../../services/services";

//UI
import { Row, Col, Select } from "antd";
import styles from "./Vehicles.module.scss";

//Components
import Card from "../../components/Card/Card";

function Vehicles({ drivers }) {
  const { Option } = Select;
  const [driverId, setDriverId] = useState(null);
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(false);

  //get vehicles by driver
  const getVehicles = async (id) => {
    setLoading(true);
    const vehicles = await getVehiclesByDriver();
    const vehiclesByDriver = vehicles.filter(
      (vehicle) => vehicle.driver_id === parseInt(id)
    );
    setVehicles(vehiclesByDriver);
    setLoading(false);
  };

  const handleOption = (value) => {
    setDriverId(value);
    getVehicles(value);
  };

  useEffect(() => {
    if (drivers.length > 0 && driverId === null) {
      setDriverId(drivers[0]?.id);
      getVehicles(drivers[0]?.id);
    }
  }, [drivers, driverId]);

  return (
    <div className={styles.Vehicles}>
      <Row justify="center">
        <Col span={24}>
          <p className={styles.Text}>Choose a driver :   </p>
          <Select
            value={driverId}
            className={styles.Select}
            onChange={handleOption}
            loading={loading}
          >
            {drivers.map((driver) => (
              <Option key={driver.id} value={driver.id}>
                {driver.first_name} {driver.last_name}{" "}
                <img src={driver.avatar_url} alt="driver" width="10px" />
              </Option>
            ))}
          </Select>
        </Col>
          {vehicles.length > 0 ? (
            vehicles.map((vehicle) => (
              <Col key={vehicle.id}  xs={24} md={10} lg={8} xxl={5}>
              <Card
                key={vehicle.id}
                vehicle={vehicle}
                getVehicles={getVehicles}
                driverId={driverId}
                />
                </Col>
            ))
          ) : (
            <h3>No vehicles founded</h3>
          )}
      </Row>
    </div>
  );
}

export default Vehicles;
