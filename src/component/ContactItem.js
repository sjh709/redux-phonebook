import React from 'react';
import { Row, Col } from 'react-bootstrap';

const ContactItem = () => {
  return (
    <Row>
      <Col lg={1}>
        <img
          width={50}
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg'
        ></img>
      </Col>
      <Col lg={11}>
        <div>이름</div>
        <div>전화번호</div>
      </Col>
    </Row>
  );
};

export default ContactItem;
