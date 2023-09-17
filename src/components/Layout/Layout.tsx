import { Layout as LayoutAntd, Menu } from 'antd'
import { Link, Outlet } from 'react-router-dom'
import styles from './Layout.module.css'
import { items } from './menu.data'
import cn from 'classnames'

const { Header, Content, Footer } = LayoutAntd

const Layout = () => (
  <LayoutAntd className={styles.layout}>
    <Header className={styles.header}>
      <div className="container flex-center">
        <Link to="/">
          <div className="flex-center">
            <img className={styles.logoImage} src="/images/logo.png" alt="Logo" height="28px" />
            <span className={styles.logoText}>qwerty</span>
          </div>
        </Link>

        <Menu mode="horizontal" items={items} />
      </div>
    </Header>
    <Content className={cn(styles.content, 'container')}>
      <Outlet />
    </Content>
    <Footer className={styles.footer}>Ant Design ©2023 Created by Ant UED</Footer>
  </LayoutAntd>
)

export default Layout
