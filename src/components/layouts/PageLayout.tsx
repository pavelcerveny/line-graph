import * as React from "react";
import { Layout } from "antd";
import { Header } from "./Header";
import {renderRoutes} from "react-router-config";
import { routes } from "../routes";
import "./PageLayout.less";

const PageLayout: React.StatelessComponent<{}> = () => {
    return (
        <Layout className="ant-layout-has-sider">
            <Layout>
                <Layout.Content>
                    <Header />
                    {renderRoutes(routes)}
                </Layout.Content>
            </Layout>
        </Layout>
    );
};

export default PageLayout;
