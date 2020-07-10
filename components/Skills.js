import React from 'react'
import { Card } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap';
import { ProgressBarAnimated } from './ProgressBarAnimated';
export const Skills = ({ tittle, className, skillsArray = [], on }) => {
  return (
    <Card className={` cardSkills mb-5 animate__animated ${on ? 'animate__bounceInUp' : ''}`} style={on ? {} : { opacity: 0 }}>
      <Card.Body>
        <Card.Title className="text-center">
          {tittle}
        </Card.Title>
        <div className={className} >
          {
            skillsArray.map(({ name, logo, progress }, i) => (
              <div className="mb-auto" key={i}>
                <Row className="d-flex align-items-center ">
                  <Col className=" " sm="6" xs="12">
                    <div className="mx-auto d-flex text-center align-items-center">
                      <img src={logo} className="mr-2" style={{ maxHeight: 30, maxWidth: 30 }} alt="" />
                      {name}
                    </div>
                  </Col>
                  <Col sm="6" xs="12">
                    <div>
                      <ProgressBarAnimated on={on} progress={progress} />
                    </div>
                  </Col>
                </Row>
              </div>
            ))
          }
        </div>
      </Card.Body>
    </Card>
  )
}
