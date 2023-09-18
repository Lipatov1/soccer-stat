import { Layout as LayoutAntd, Menu } from 'antd'
import { Outlet } from 'react-router-dom'
import styles from './Layout.module.css'
import { items } from './menu.data'
import cn from 'classnames'

const { Header, Content, Footer } = LayoutAntd

const Layout = () => (
  <LayoutAntd className={styles.layout}>
    <Header className={styles.header}>
      <div className="container">
        <Menu mode="horizontal" items={items} />
      </div>
    </Header>
    <Content className={cn(styles.content, 'container')}>
      <Outlet />
    </Content>
    <Footer className={styles.footer}>
      Soccer Stat ©2023 Created by{' '}
      <a href="https://github.com/Lipatov1" target="_blank" rel="noreferrer">
        Ilya
      </a>
    </Footer>
  </LayoutAntd>
)

export default Layout
