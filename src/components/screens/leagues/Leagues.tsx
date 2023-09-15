import {FC} from 'react';
import { Input, Card, Col, Row } from 'antd';
import {useLeagues} from "./useLeagues";
import league from "../league/League";
import styles from "./Leagues.module.css"
import {Link} from "react-router-dom";

const Leagues: FC = () => {
    const {
        data,
        isLoading,
        searchTerm,
        handleSearch,
    } = useLeagues()

    return (
        <>
            <Input.Search placeholder="Поиск..." style={{ width: 400 }} />
            <Row className={styles.cardList} gutter={16}>
                {data?.map((league) => (
                    <Col span={8} key={league.id}>
                        <Link to={`/leagues/${league.id}`}>
                            <Card className={styles.card} type="inner" hoverable >
                                <Card.Meta title={league.name} description={league.country} />
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default Leagues;
