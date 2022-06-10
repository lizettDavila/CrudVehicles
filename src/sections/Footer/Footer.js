//Resources
import React from "react";

//UI
import { GithubOutlined } from "@ant-design/icons";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className={styles.Footer}>
      <a
        href="https://github.com/lizettDavila/CrudVehicles.git"
        rel="noreferrer"
        target="_blank"
      >
        <GithubOutlined /> {" "}
        Visite GitHub Repository{" "}
      </a>
    </div>
  );
}

export default Footer;
