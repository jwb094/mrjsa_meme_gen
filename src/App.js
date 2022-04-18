import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React,{useState} from 'react';
function App() {
  const [toptext,setTopText] = useState('');
  const [bottomtext,setBottomText] = useState('');
  const [img,setimg] = useState();


  function handleImgUpload(e){
    console.log(e.target.files[0]);
  }


  return (
  
  <>
  <Container>
  <Row>
  <Col md={4}>
      <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Default file input example</Form.Label>
          <Form.Control type="file" accept="image/*" onChange={handleImgUpload} />
        </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
  </Col>
    <Col md={8}>
    
    
    
    </Col>
    
  </Row>

</Container>
  </>
  );
}

export default App;
