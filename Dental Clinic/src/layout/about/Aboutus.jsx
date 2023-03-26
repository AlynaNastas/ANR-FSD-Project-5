import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import team from'../../assets/team .jpeg'
import './Aboutus.css'



export const Aboutus = () => {
  return (
   <>

    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={team}/>
            <Card.Body>
              <Card.Title className='Crd' ><h3> We're Here For You </h3> </Card.Title>
              <Card.Text >
                <p>Get to know our experienced Specialist Orthodontist and highly-skilled staff at Share a Smile Orthodontics. At our clinic, you come first. We will craft a bespoke treatment plan that fits your 
                    lifestyle, budget, and orthodontic needs. Our team will use our professional care and expert experience to provide you with the best results possible. Get to know the people who make it all happen.</p>
                <h3 className='Crd' >Our Specialist Orthodontist</h3>
                <p> Heinrich currently runs the orthodontic practice at Share a Smile in Romford, Essex. Between 1998 and 2008, he held a clinical post with an academic link with the Royal London Hospital. </p>
                 <p>He is a registered member of the British Orthodontic Society, the American Association of Orthodontists, the World Federation of Orthodontists and the British Dental Association.</p>
                <p>With the 20+ years of expertise of Dr Heinrich Ferreira and the devoted care of our staff, 
                    you can be sure you are in good hands when you choose orthodontic treatment at Share a Smile Orthodontics. Learn more about our amazing team at our conveniently located practice in Essex.</p>
                
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

    </>
  );
}


