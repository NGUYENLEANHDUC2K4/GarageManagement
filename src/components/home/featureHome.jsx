import React from 'react'
import "./featureHome.css"
import { Card, Col, Row } from 'antd'
import manage_parkingLot from '../../assets/manage_parkingLot.jpg'
import manage_customers from '../../assets/manage_customers.jpg'
import manage_parts from '../../assets/manage_part.jpg'
import manage_work from '../../assets/manage_work.jpg'
import Meta from 'antd/es/card/Meta'

function FeatureHome() {
  return (
    <div id='feature' className="featureHome-container">
      <div className='feature-title'>CÁC TÍNH NĂNG CỦA HỆ THỐNG</div>
      <div className='feature-content'>
        <Row justify={'space-evenly'}>
          <Col span={5}>
            <Card 
              hoverable 
              cover={<img src={manage_parkingLot} alt="Parking Lot"/>}
            >
              <Meta title="Quản lý bãi đỗ xe" />
            </Card>
          </Col>
          <Col span={5}>
            <Card
              hoverable 
              cover={<img src={manage_customers} alt="Customers"/>}
            >
              <Meta title="Quản lý khách hàng và xe" />
            </Card>
          </Col>
          <Col span={5}>
            <Card 
              hoverable 
              cover={<img src={manage_work} alt="Works management"/>}
            >
              <Meta title="Quản lý công việc hiệu quả" />
            </Card>
          </Col>
          <Col span={5}>
            <Card 
              hoverable 
              cover={<img src={manage_parts} alt="Parts management"/>}
            >
              <Meta title="Quản lý linh kiện và phụ tùng" />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default FeatureHome