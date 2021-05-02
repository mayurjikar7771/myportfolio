import React from 'react';

import image1 from '../../assets/images/front_end.png';
import image2 from '../../assets/images/Back-End.jpg';
import image3 from '../../assets/images/great-support.jpg';
import image4 from '../../assets/images/easy-customise.jpg';
import image5 from '../../assets/images/unlimited-features.jpg';
import image6 from '../../assets/images/advanced-option.jpg';

import { Col, Row, Button } from 'antd';
import { Card } from 'antd';

const { Meta } = Card;
class AppFeature extends React.Component{
  render(){
    return(
        <div id="feature" className="block featureBlock bgGray">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>Key Features and Benefits</h2>
            <p>Obcaecati consequatur libero repudiandae, aperiam itaque laborum!</p>
          </div>
          <Row gutter={[16, 16]}>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <Card
                hoverable
                cover={<img alt="Modern Design" src={image1} />}

                actions={[
                  <Button type="primary" ghost>
                    <b>See Details</b>
                  </Button>
                  ]}
                 >

                <Meta title="Front End Technolgy" 
                description="Material Dashboard PRO React is a Premium Material-UI@4.1.0 Admin with a fresh, new design inspired by Google's Material Design. We are very excited to introduce our take on the material concepts."
                />
              </Card>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <Card
                hoverable
                cover={<img alt="Test" src={image2} />}

                actions={[
                  <Button type="primary" ghost>
                    <b>See Details</b>
                  </Button>
                  ]}
                 
              >
                <Meta title="Back End Technology " 
                      description="Material Dashboard PRO React is a Premium Material-UI@4.1.0 Admin with a fresh, new design inspired by Google's Material Design. We are very excited to introduce our take on the material concepts."
                />
              </Card>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <Card
                hoverable
                cover={<img alt="Test" src={image3} />}

                actions={[
                  <Button type="primary" ghost>
                    <b>See Details</b>
                  </Button>
                  ]}
              >
                <Meta title="Software Testing" 
                      description="Material Dashboard PRO React is a Premium Material-UI@4.1.0 Admin with a fresh, new design inspired by Google's Material Design. We are very excited to introduce our take on the material concepts."
                />
              </Card>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <Card
                hoverable
                cover={<img alt="Test" src={image4} />}

                actions={[
                  <Button type="primary" ghost>
                    <b>See Details</b>
                  </Button>
                  ]}
                 
              >
                <Meta title="Mobile Development" 
                      description="Material Dashboard PRO React is a Premium Material-UI@4.1.0 Admin with a fresh, new design inspired by Google's Material Design. We are very excited to introduce our take on the material concepts."
                />
              </Card>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <Card
                hoverable
                cover={<img alt="Test" src={image5} />}

                actions={[
                  <Button type="primary" ghost>
                    <b>See Details</b>
                  </Button>
                  ]}
              >
                <Meta title="Development Tools" 
                      description="Material Dashboard PRO React is a Premium Material-UI@4.1.0 Admin with a fresh, new design inspired by Google's Material Design. We are very excited to introduce our take on the material concepts."
                />
              </Card>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <Card
                hoverable
                cover={<img alt="Test" src={image6} />}

                actions={[
                  <Button type="primary" ghost>
                    <b>See Details</b>
                  </Button>
                  ]}
              >
                <Meta title="Data Science" 
                      description="Material Dashboard PRO React is a Premium Material-UI@4.1.0 Admin with a fresh, new design inspired by Google's Material Design. We are very excited to introduce our take on the material concepts."
                />
              </Card>
            </Col>
          </Row>
        </div>
      </div>
       
    );
}
}
export default AppFeature;