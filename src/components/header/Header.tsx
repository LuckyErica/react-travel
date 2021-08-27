import React, { Dispatch } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";
import { Layout, Typography, Input, Menu, Button, Dropdown } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import {
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { RootState } from "../../redux/store";
import { useSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";

// import { LanguageActionTypes } from "../../redux/language/languageActions";

export const Header: React.FC = () => {
  const language = useSelector((state: RootState) => {
    return state.language;
  });
  const LanguageList = useSelector((state: RootState) => {
    return state.languageList;
  });
  const dispatch = useDispatch();
  const history = useHistory();
  //   const location = useLocation();
  //   const param = useParams();
  //   const match = useRouteMatch();
  const menu = (
    <Menu>
      {LanguageList.map((i) => {
        return <Menu.Item key={i.code}>{i.name}</Menu.Item>;
      })}
    </Menu>
  );
  return (
    <div className={styles["app-header"]}>
      {/* top-header */}
      <div className={styles["top-header"]}>
        <div className={styles.inner}>
          <Typography.Text style={{ marginRight: 15 }}>
            让旅游更幸福
          </Typography.Text>
          <Dropdown.Button overlay={menu} icon={<GlobalOutlined />}>
            {language === "en" ? "中文" : "English"}
          </Dropdown.Button>
          <Button.Group className={styles["button-group"]}>
            <Button
              onClick={() => {
                history.push("signin");
              }}
            >
              登录
            </Button>
            <Button
              onClick={() => {
                history.push("register");
              }}
            >
              注册
            </Button>
          </Button.Group>
        </div>
      </div>
      <Layout.Header className={styles["main-header"]}>
        <span
          onClick={() => {
            history.push("/");
          }}
        >
          <img src={logo} className={styles["App-logo"]} alt="" />
        </span>

        <Typography.Title level={3} className={styles.title}>
          React 旅游网
        </Typography.Title>
        <Input.Search
          placeholder="请输入目的地"
          className={styles["search-input"]}
        ></Input.Search>
      </Layout.Header>
      <Menu mode={"horizontal"} className={styles["main-menu"]}>
        <Menu.Item key="1">首页</Menu.Item>
        <Menu.Item key="2">周末游</Menu.Item>
        <Menu.Item key="3">跟团游</Menu.Item>
        <Menu.Item key="4">自由行</Menu.Item>
        <Menu.Item key="5">自驾游</Menu.Item>
        <Menu.Item key="6">周边有</Menu.Item>
      </Menu>
    </div>
  );
};
