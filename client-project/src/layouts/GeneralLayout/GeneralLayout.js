import React, { useState } from "react";
import { Layout } from "antd";
import { MenuSider } from "../../components/MenuComponents/MenuSider/MenuSider";
import { MenuTop } from "../../components/MenuComponents/MenuTop/MenuTop";
import { FooterPage } from "../../components/FooterPage/FooterPage";
import "./GeneralLayout.scss";

export const GeneralLayout = (props) => {
  const { children } = props;
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const { Header, Footer, Content } = Layout;

  return (
    <Layout>
      <MenuSider menuCollapsed={menuCollapsed} />
      <Layout className="general-layout">
        <Header className="general-layout__header">
          <MenuTop
            menuCollapsed={menuCollapsed}
            setMenuCollapsed={setMenuCollapsed}
          />
        </Header>
        <Content className="general-layout__content">{children}</Content>
        <Footer className="general-layout__footer">
          <FooterPage></FooterPage>
        </Footer>
      </Layout>
    </Layout>
  );
};
