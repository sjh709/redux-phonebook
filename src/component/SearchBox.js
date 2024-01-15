import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

const SearchBox = () => {
  return (
    <Row>
      <Col>
        <Form.Control type='text' placeholder='이름을 입력해주세요' />
      </Col>
      <Col>
        <Button>찾기</Button>
      </Col>
    </Row>
  );
};

export default SearchBox;
