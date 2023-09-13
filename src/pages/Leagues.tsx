import {FC} from 'react';
import { Input, Card, Col, Row } from 'antd';

const Leagues: FC = () => {
    return (
        <>
            <Input.Search
                placeholder="Поиск..."
                style={{ width: 400 }}
                enterButton="Найти"
            />
            <Row gutter={16}>
                <Col span={8}>
                    <Card title="Card title" type="inner">
                        Card content
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Card title" type="inner">
                        Card content
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Card title" type="inner">
                        Card content
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Leagues;
