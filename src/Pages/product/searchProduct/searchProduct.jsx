import React from 'react'
import { Images } from "../../../assets/Images/images.js";
import { Row, Col,Dropdown,  } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import BuyProductHeader from '../buyProduct/buyProductHeader';
import Footer from '../../../components/footer/footer';
const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    ),
  },
  {
    key: "4",

    label: "a danger item",
  },
];
export default function SearchProduct() {
  return (
    <div>
<Row className='serchProductMainContainer'>
    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <BuyProductHeader/>
        <div className='searchProductMiddlContainer'>

<Row gutter={[10, 20]} className="itemsContainer">
  <Col  xs={24} sm={24} md={4} lg={4} xl={4} className="dropdownSection" >
  
   <Row gutter={[0, 20]}>
      <Col  xs={24} sm={24} md={24} lg={24} xl={24}>
      <div>
                          <Dropdown
                            trigger={["click"]}
                            className="createDrop"
                            menu={{
                              items,
                            }}
                          >
                            <a onClick={(e) => e.preventDefault()}>
                            All categories
                              <DownOutlined />
                            </a>
                          </Dropdown>
                        </div>
      </Col>
      <Col  xs={24} sm={24} md={24} lg={24} xl={24}>
      <div>
                          <Dropdown
                            trigger={["click"]}
                            className="createDrop"
                            menu={{
                              items,
                            }}
                          >
                            <a onClick={(e) => e.preventDefault()}>
                            Price
                              <DownOutlined />
                            </a>
                          </Dropdown>
                        </div>
      </Col>
      <Col  xs={24} sm={24} md={24} lg={24} xl={24}>
      <div>
                          <Dropdown
                            trigger={["click"]}
                            className="createDrop"
                            menu={{
                              items,
                            }}
                          >
                            <a onClick={(e) => e.preventDefault()}>
                            Condition
                              <DownOutlined />
                            </a>
                          </Dropdown>
                        </div>
      </Col>
      <Col  xs={24} sm={24} md={24} lg={24} xl={24}>
      <div>
                          <Dropdown
                            trigger={["click"]}
                            className="createDrop"
                            menu={{
                              items,
                            }}
                          >
                            <a onClick={(e) => e.preventDefault()}>
                            Type of listing
                              <DownOutlined />
                            </a>
                          </Dropdown>
                        </div>
      </Col>
      <Col  xs={24} sm={24} md={24} lg={24} xl={24}>
      <div>
                          <Dropdown
                            trigger={["click"]}
                            className="createDrop"
                            menu={{
                              items,
                            }}
                          >
                            <a onClick={(e) => e.preventDefault()}>
                            Type of seller
                              <DownOutlined />
                            </a>
                          </Dropdown>
                        </div>
      </Col>
      <Col  xs={24} sm={24} md={24} lg={24} xl={24}>
      <div>
                          <Dropdown
                            trigger={["click"]}
                            className="createDrop"
                            menu={{
                              items,
                            }}
                          >
                            <a onClick={(e) => e.preventDefault()}>
                            Shipping
                              <DownOutlined />
                            </a>
                          </Dropdown>
                        </div>
      </Col>
    </Row>
   

  </Col>
  <Col  xs={24} sm={24} md={20} lg={16} xl={16}>
  <p className='serchTextSearch'>"Clothes"</p>
  <div className='searchItemContainer'>

  </div>
  </Col>
  <Col xs={24} sm={24} md={0} lg={4} xl={4}>
  <div
                  className="advertisementContainer"
                  style={{
                    backgroundImage: `url(${Images.common.advertist})`,
                  }}
                ></div>
  </Col>
</Row>

        </div>
    </Col>
    <Footer/>
</Row>

    </div>
  )
}
