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
import { Alert } from 'bootstrap';
function App() {
  const [toptext,setTopText] = useState('');
  const [bottomtext,setBottomText] = useState('');
  const [fileNametext,setfileNametext] = useState('');
  const mainimg  = useRef('');
  const toptextInput  = useRef('');
  const bottomtextInput  = useRef('');
  const fileNametextInput  = useRef('');


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

    if (fileNametextInput.current.value === '') {
      alert('this field can not be empty');
    } else {
      setfileNametext(fileNametextInput.current.value);
      console.log(fileNametext);
      const canvas = await html2canvas(document.getElementById('MEME'));
      const dataURL = canvas.toDataURL('image/png');
      downloadjs(dataURL,`${fileNametext}.png`,'image/png')
    }

  },[]);
  
  return (
  
  <>
  <Container>
  <Row>
  <Col md={12} className="mb-5 mt-5 text-center">
  <h1>Meme Generator</h1>
  </Col>
  </Row>
  <Row>
  <Col md={4}>
      <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
           
            <Form.Control type="text" ref={toptextInput} placeholder="Enter Top Line Text here" onChange={handleTopText}/>
    
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control  type="text"ref={bottomtextInput} placeholder="Enter Bottom Line Text here" onChange={handleBottomText}/>
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Please Select a Image file</Form.Label>
          <Form.Control type="file" accept="image/*" onChange={handleImgUpload} />
        </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
           
           <Form.Control type="text" ref={fileNametextInput} placeholder="Enter Desired Filename for Your Meme"/>
         </Form.Group>

         <a className='mt-10 btn btn-primary' onClick={handleCapture}>
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
