import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Modal from 'react-bootstrap/Modal';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import html2canvas from "html2canvas";
import downloadjs from 'downloadjs';
import React,{useCallback, useRef, useState} from 'react';
function App() {
  const [toptext,setTopText] = useState('');
  const [bottomtext,setBottomText] = useState('');
  const [img,setimg] = useState();
  const mainimg  = useRef('');
  const toptextInput  = useRef('');
  const bottomtextInput  = useRef('');


  function handleImgUpload(e){
     
    mainimg.current.src = URL.createObjectURL(e.target.files[0]);

    console.log(e.target.files[0]);
  }

  function handleTopText(){
    setTopText(toptextInput.current.value);
  }

  function handleBottomText(){
    setBottomText(bottomtextInput.current.value);
  }

  const handleCapture = useCallback(async() =>{
    const canvas = await html2canvas(document.getElementById('MEME'));
    const dataURL = canvas.toDataURL('image/png');
    downloadjs(dataURL,'download.png','image/png')
  },[]);
  
  return (
  
  <>
  <Container>
  <Row>
  <Col md={4}>
      <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
           
            <Form.Control type="text" ref={toptextInput} placeholder="Enter Top Line Text here" onChange={handleTopText}/>
    
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control  type="text"ref={bottomtextInput} placeholder="Enter Top Line Text here" onChange={handleBottomText}/>
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Default file input example</Form.Label>
          <Form.Control type="file" accept="image/*" onChange={handleImgUpload} />
        </Form.Group>
          {/* <Button variant="primary" type="submit" onClick={handleCapture}>
            Submit
          </Button> */}
          <a href="#" onClick={handleCapture}>
            Capture
          </a>
        </Form>
  </Col>
    <Col md={8}>

    <Modal.Dialog id='MEME'>
  <div className='text-center' >
    <Modal.Title>{toptext}</Modal.Title>
  </div>

  <Modal.Body>
    <p> <img ref={mainimg} style={{height:'auto',width:'100%'}}/></p>
  </Modal.Body>

  <div className='text-center'>
  <p>{bottomtext}</p>
  </div>
</Modal.Dialog>
    
    
    </Col>
    
  </Row>

</Container>
  </>
  );
}

export default App;
