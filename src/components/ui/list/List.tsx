import { IDataSource } from './list.interface';
import { Card, List as ListAntd } from 'antd';
import { Link } from 'react-router-dom';
import styles from './List.module.css'
import { FC } from 'react';

interface IList {
    dataSource?: IDataSource[]
    pageSize?: number
    link: string
}

const List: FC<IList> = ({ dataSource, pageSize = 15, link }) => (
    <ListAntd
        grid={{
            gutter: 16,
            xs: 1,
            sm: 1,
            md: 2,
            lg: 3,
            xl: 3,
            xxl: 3,
        }}
        pagination={{
            pageSize,
            align: 'center',
            showSizeChanger: false
        }}
        dataSource={dataSource}
        renderItem={(item) => (
            <ListAntd.Item>
                <Link to={`/${link}/${item.id}`}>
                    <Card
                        className={styles.card}
                        type="inner"
                        hoverable
                        cover={item.cover ? <img className={styles.logo} src={item.cover} alt={item.name}/> : false}
                    >
                        <Card.Meta
                            title={item.name}
                            description={item.description ? item.description : false}
                        />
                    </Card>
                </Link>
            </ListAntd.Item>
        )}
    />
);

export default List;
