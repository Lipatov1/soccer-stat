import type { MenuProps } from 'antd';
import {NavLink} from "react-router-dom";
import { TrophyOutlined, TeamOutlined } from "@ant-design/icons";

export const items: MenuProps['items'] = [
    {
        label: <NavLink to="/leagues">Лиги</NavLink>,
        key: 'leagues',
        icon: <TrophyOutlined />,
    },
    {
        label: <NavLink to="/teams">Команды</NavLink>,
        key: 'teams',
        icon: <TeamOutlined />
    },
];
