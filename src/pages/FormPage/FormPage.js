//Resources
import React from "react";

//Components
import Form from "../../components/Form/Form";

//UI
import { Row, Col } from "antd";
import styles from "./FormPage.module.scss";


export default function FormPage() {
  return (
    <Row justify="center" className={styles.FormPage}>
      <Col>
        <h3>In this section you can enter or edit data of any vehicle!</h3>
        <Form />
      </Col>
    </Row>
  );
}
