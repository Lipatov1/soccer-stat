import { Layout as LayoutAntd, Menu } from 'antd';
import {Outlet} from "react-router-dom";
import {items} from "./menu.data";
import styles from "./Layout.module.css"
import cn from 'classnames';

const { Header, Content, Footer } = LayoutAntd;

const Layout = () => {
    return (
        <LayoutAntd className={styles.layout}>
            <Header className={styles.header}>
                <div className='container flex-center'>
                    <div className="flex-center">
                        <img className={styles.logoImage} src="/images/logo.png" alt="Logo" height="28px"/>
                        <span className={styles.logoText}>qwerty</span>
                    </div>
                    <Menu style={{ minWidth: 0, flex: "auto" }} mode="horizontal" items={items} />
                </div>
            </Header>
            <Content className={cn(styles.content, 'container')}>
                <Outlet />
            </Content>
            <Footer className={styles.footer}>Ant Design ©2023 Created by Ant UED</Footer>
        </LayoutAntd>
    );
};

export default Layout;
