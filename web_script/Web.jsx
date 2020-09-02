import React, { useState, memo } from 'react';
import { Form, Button, PageHeader, Input, Row, Col, Menu } from 'antd'

import { HomeOutlined, VideoCameraAddOutlined, FileAddOutlined,SafetyOutlined } from '@ant-design/icons';
import { Layout, Typography } from 'antd';

import {
    BrowserRouter,
    Route,
    Link,
    Switch,
} from 'react-router-dom';
import Home from './Components/Home';
import AddTest from './Components/AddTest';
import SeeVideo from './Components/SeeVideo';

const SideMenu = memo((props) => {

    const MenuName = ["Home", "Add Test", "See Exam video"];
    const icons = [<HomeOutlined />, <FileAddOutlined />, <VideoCameraAddOutlined />];
    const Links = ["/web_script/Web.html", "/Add-Test", "See-Video"];


    return (
        <>
            {/* <div className="logo"/> */}

            <Menu mode="inline" theme="dark" defaultSelectedKeys={['0']} >

                {
                    MenuName.map((v, i) => {
                        return <Menu.Item key={i} icon={icons[i]}> <Link to={Links[i]}>{v}</Link></Menu.Item>;
                    })
                }


            </Menu>


        </>
    );
});


const Web = memo(() => {

    const { Header, Footer, Sider, Content } = Layout;
    const { SubMenu } = Menu;
    const { Title, Text } = Typography;


    const [collapsed, setcollapsed] = useState(false);

    const onCollapse = () => {
        console.log(collapsed);
        if (collapsed === true) {
            setcollapsed(false);
        } else {
            setcollapsed(true);
        }
    }


    return (
        <>


            <Layout style={{ minHeight: '100vh' }}>

                <Header>
                    <h2 style={{
                        color: "white"
                    }}
                        className="WebHeader"
                    >  <SafetyOutlined />NoCheat
                                        <Text disabled style={
                            {
                                fontSize: 15,
                                color: "gray"
                            }
                        }>&nbsp;@Rude_zoo</Text>
                    </h2>
                </Header>



                <Layout>
                    <BrowserRouter>
                        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                            <SideMenu></SideMenu>
                        </Sider>
                        <Layout>


                            <Content className="Site-Content">

                                <div className="site-layout-content">
                                    <Switch>
                                        <Route exact path="/web_script/Web.html" component={Home} />
                                        <Route path="/Add-Test" component={AddTest} />
                                        <Route path="/See-Video" component={SeeVideo} />
                                    </Switch>


                                </div>

                            </Content>
                            <Footer style={
                                {
                                    textAlign: "center"
                                }
                            }>Web Design ©2020 Created by Rude zoo</Footer>
                        </Layout>
                    </BrowserRouter>
                </Layout>

            </Layout>


        </>
    );

});

export default Web;