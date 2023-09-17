import { extractDateFromDateTime, extractTimeFromDateTime } from '../../../utils/date/convertDate'
import { convertScore } from '../../../utils/score/convertScore'
import { IMatch } from '../../../shared/types/league.types'
import { statusDictionary } from '../../../const'
import { Table as TableAntd } from 'antd'
import { DataType } from './table.types'
import { columns } from './table.data'
import { FC } from 'react'

interface ITable {
  matches?: IMatch[]
}

const Table: FC<ITable> = ({ matches }) => {
  const data = matches?.map(
    (match): DataType => ({
      key: match.id,
      date: extractDateFromDateTime(match.utcDate),
      time: extractTimeFromDateTime(match.utcDate),
      status: statusDictionary[match.status],
      homeTeam: match.homeTeam.name,
      awayTeam: match.awayTeam.name,
      score: convertScore(match.score),
    })
  )

  return (
    <TableAntd
      columns={columns}
      dataSource={data}
      pagination={{
        position: ['bottomCenter'],
        showSizeChanger: false,
      }}
      scroll={{ x: true }}
    />
  )
}

export default Table
