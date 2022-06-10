//Resources
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import cities from "../../resources/cities";

//Services
import {
  getDrivers,
  createVehicle,
  getVehicleById,
  updateVehicle,
} from "../../services/services";

//UI
import { Row, Col, Input, Select, Button } from "antd";
import { SaveOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import styles from "./Form.module.scss";

function Form() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { Option } = Select;
  const [drivers, setDrivers] = useState([]);
  const [driverId, setDriverId] = useState("");
  const [cityCode, setcityCode] = useState("");
  const [plate, setPlate] = useState("");
  const [model, setModel] = useState("");
  const [type, setType] = useState("");
  const [capacity, setCapacity] = useState("");
  const [loading, setLoading] = useState(false);

  //get drivers
  const getListOfDrivers = async () => {
    const drivers = await getDrivers();
    setDrivers(drivers);
  };

  const getVehicle = async () => {
    const vehicle = await getVehicleById(id);
    setDriverId(vehicle.driver_id);
    setcityCode(vehicle.city);
    setPlate(vehicle.plate);
    setModel(vehicle.model);
    setType(vehicle.type);
    setCapacity(vehicle.capacity);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const vehicle = {
      driver_id: parseInt(driverId),
      city: cityCode,
      plate: plate,
      model: model,
      type: type,
      capacity: capacity,
      creation_date: new Date(),    
    };
    if (id) {
      updateVehicle(id, vehicle);
    }else{
        createVehicle(vehicle);
    }
    setLoading(false);
    navigate("/", {replace: true});
  };

  const handleDriverId = (value) => {
    setDriverId(value);
  };
  const handleCityCode = (value) => {
    setcityCode(value);
  };

  useEffect(() => {
    getListOfDrivers();
    if (id) {
      getVehicle();
    }
  }, [id]);

  return (
    <Row justify="center">
      <Col xs={24} className={styles.WrappForm}>
        <form className={styles.Form}>
          <h3>Vehicle Form</h3>
          <div>
            <p>Select a driver: </p>
            <Select
              data-testid="driver-id"
              style={{ width: "100%" }}
              onChange={handleDriverId}
              value={String(driverId)}
            >
              {drivers.map((driver) => (
                <Option key={driver.id} value={driver.id}>
                  {driver.first_name} {driver.last_name}{" "}
                  <img src={driver.avatar_url} alt="driver" width="10px" />
                </Option>
              ))}
            </Select>
          </div>
          <div>
            <p>Select a city: </p>
            <Select
              data-testid="city-code"
              value={cityCode}
              onChange={handleCityCode}
              style={{ width: "100%" }}
              placeholder="Select a city"
            >
              {cities.map((city) => (
                <Option key={city.id} value={city.code}>
                  {city.name}
                </Option>
              ))}
            </Select>
          </div>
          <div>
            <Input
              data-testid="plate"
              value={plate}
              onChange={(e) => setPlate(e.target.value)}
              placeholder=" Enter a plate"
            />
          </div>
          <div>
            <Input
              data-testid="model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              placeholder=" Enter a model"
            />
          </div>

          <div>
            <Input
              data-testid="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              placeholder=" Enter a type"
            />
          </div>

          <div>
            <Input
              data-testid="capacity"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              placeholder=" Enter a capacity"
            />
          </div>

          <div className={styles.Actions}>
            <Button
              disabled={
                !driverId || !cityCode || !plate || !model || !type || !capacity
                  ? true
                  : false
              }
              type="default"
              htmlType="submit"
              loading={loading}
              icon={<SaveOutlined />}
              onClick={(e) => handleSubmit(e)}
            >
              Save
            </Button>
            <Button
              type="default"
              icon={<ArrowLeftOutlined />}
              onClick={() => navigate("/")}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Col>
    </Row>
  );
}

export default Form;
