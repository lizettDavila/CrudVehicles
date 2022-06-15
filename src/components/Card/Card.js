//Resources
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//Services
import { deleteVehicle } from "../../services/services";

//UI
import { Card as AntdCard, Button, Modal } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import styles from "./Card.module.scss";

function Card({ vehicle, getVehicles, driverId }) {
  const navigate = useNavigate();
  const { plate, model, type, capacity, id, creation_date, city } = vehicle;
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleDelete = () => {
    setShowModal(true);
  };
  const handleConfirm = async (id) => {
    setLoading(true);
    const response = await deleteVehicle(id);
    if (response !== "There is an error deleting a vehicle") {
      setLoading(false);
      setShowModal(false);
      getVehicles(driverId);
    } else {
      setLoading(false);
      setError("There is an error deleting a vehicle");
    }
  };
  const handleCancel = (id) => {
    setShowModal(false);
  };

  useEffect(() => {
    setError("");
  }, []);

  return (
    <div id="vehicles" className={styles.Card}>
      <AntdCard bordered={false}>
        <div className={styles.BackOfCard}>
          <p>
            {" "}
            <strong>Plate:</strong> {plate}
          </p>
          <p>
            {" "}
            <strong>Model:</strong> {model}
          </p>
          <p>
            {" "}
            <strong>Type:</strong> {type}
          </p>
          <p>
            {" "}
            <strong>Capacity:</strong> {capacity}
          </p>
          <div className={styles.HideElements}>
          <p>
            {" "}
            <strong>Date:</strong> {creation_date}
          </p>
          <p>
            {" "}
            <strong>City:</strong> {city}
          </p>
          </div>
          <div className={styles.Actions}>
            <Button icon={<DeleteOutlined />} onClick={() => handleDelete()}>
              Delete
            </Button>
            <Button
              icon={<EditOutlined />}
              onClick={() => navigate(`/edit-vehicle/${id}`)}
            >
              Edit
            </Button>
          </div>
        </div>
      </AntdCard>
      <Modal
        visible={showModal}
        closable={false}
        centered={true}
        maskClosable={true}
        footer={[
          <Button shape="round" key="back" onClick={() => handleCancel()}>
            No, I don't
          </Button>,
          <Button
            shape="round"
            type="primary"
            key="confirm"
            onClick={() => handleConfirm(id)}
            loading={loading}
          >
            Yes, I do
          </Button>,
        ]}
      >
        <p>
          {error === "" ? `Do you want to delete vehicle ${plate} ?` : error}
        </p>
      </Modal>
    </div>
  );
}

export default Card;
