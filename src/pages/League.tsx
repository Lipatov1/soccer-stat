import {FC} from 'react';
import {Breadcrumb} from "antd";
import {Link} from "react-router-dom";

const League: FC = () => {
    return (
        <div>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>
                    <Link to="/leagues">Команды</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>qwerty</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    );
};

export default League;
