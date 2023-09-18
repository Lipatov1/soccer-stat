import { TrophyOutlined, TeamOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom'
import styles from './Layout.module.css'
import type { MenuProps } from 'antd'

export const items: MenuProps['items'] = [
  {
    label: (
      <div className={styles.logo}>
        <img className={styles.logoImage} src="images/logo.png" alt="Логотип SoccerStat" />
        <span className={styles.logoText}>SoccerStat</span>
      </div>
    ),
    key: 'logo',
    disabled: true,
  },
  {
    label: <NavLink to="/leagues">Лиги</NavLink>,
    key: 'leagues',
    icon: <TrophyOutlined />,
  },
  {
    label: <NavLink to="/teams">Команды</NavLink>,
    key: 'teams',
    icon: <TeamOutlined />,
  },
]
