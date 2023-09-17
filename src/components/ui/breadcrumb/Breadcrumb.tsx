import { Breadcrumb as BreadcrumbAntd } from 'antd'
import { Link } from 'react-router-dom'
import { FC } from 'react'

interface IBreadcrumb {
  backLink: string
  backName: string
  currentName?: string
}

const Breadcrumb: FC<IBreadcrumb> = ({ backLink, backName, currentName }) => (
  <BreadcrumbAntd style={{ marginBottom: 20 }}>
    <BreadcrumbAntd.Item>
      <Link to={backLink}>{backName}</Link>
    </BreadcrumbAntd.Item>
    <BreadcrumbAntd.Item>{currentName}</BreadcrumbAntd.Item>
  </BreadcrumbAntd>
)

export default Breadcrumb
