//Resources
import React from "react";
import { useNavigate } from "react-router-dom";

//UI
import { motion } from "framer-motion";
import { Col, Row, Button } from "antd";
import { CarOutlined } from "@ant-design/icons";
import styles from "./Header.module.scss";

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "#687cdd",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "#687cdd",
  },
};

function Header() {
  let navigate = useNavigate();
  return (
    <div className={styles.Header}>
      <Row justify="center" className={styles.SubHeader}>
        <Col xs={12} xxl={8}>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className={styles.Item}
          >
            <motion.path
              d="M 0 0 H 18.257 L 30.682 29.663 L 44.202 -0.302 H 63.935 L 30.682 11.026 L 0.352 0.429 z"
              variants={icon}
              initial="hidden"
              animate="visible"
              transition={{
                default: { duration: 2, ease: "easeInOut" },
                fill: { duration: 2, ease: [1, 0, 0.8, 1] },
              }}
            />
          </motion.svg>
        </Col>
        <Col xs={12} xxl={8} className={styles.Button}>
          <Button type="default" onClick={() => navigate("/add-vehicle")}>
            Add a vehicle
          </Button>
        </Col>
      </Row>
      <Row justify="center" className={styles.Text}>
        <Col span={24}>
          <p>
            Welcome to our fleet administrative platform. Here you can add new
            vehicles and seek drivers.
          </p>
          <a href="#vehicles">
            <Button className={styles.ButtonTwo} icon={<CarOutlined />}>
              View vehicles
            </Button>
          </a>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
