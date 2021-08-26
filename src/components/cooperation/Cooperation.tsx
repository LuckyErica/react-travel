import React from "react";
import styles from "./Cooperation.module.css";

import image1 from "../../assets/images/microsoft-80658_640.png";
import image2 from "../../assets/images/icon-720944_640.png";
import image3 from "../../assets/images/follow-826033_640.png";
import image4 from "../../assets/images/facebook-807588_640.png";
import { Divider, Typography, Row, Col } from "_antd@4.16.13@antd";

const companies = [
  { src: image1, title: "Microsoft" },
  { src: image2, title: "Microsoft" },
  { src: image3, title: "Microsoft" },
  { src: image4, title: "Microsoft" },
];

export const Cooperation: React.FC = () => {
  return (
    <div className={styles.content}>
      <Divider orientation="left">
        <Typography.Title>合作公司</Typography.Title>
      </Divider>
      <Row>
        {companies.map((i, index) => {
          return (
            <Col span={6} key={index}>
              <img
                src={i.src}
                alt=""
                style={{
                  width: "80%",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
