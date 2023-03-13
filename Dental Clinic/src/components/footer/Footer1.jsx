import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../footer/Footer.css'


export const Footer1 = () => {
    return (
    <>
<div className="Foot" >
    <Container >
    <Row>
        <Col xs={{ order: 'last' }}>First, but last</Col>
        <Col xs>Second, but unordered</Col>
        <Col xs={{ order: 'first' }}>Third, but first</Col>
    </Row>
    <Row>
        <Col xs={{ order: 'last' }}>First, but last</Col>
        <Col xs>Second, but unordered</Col>
        <Col xs={{ order: 'first' }}>Third, but first</Col>
    </Row>
    <Row>
        <Col xs={{ order: 'last' }}>First, but last</Col>
        <Col xs>Second, but unordered</Col>
        <Col xs={{ order: 'first' }}>Third, but first</Col>
    </Row>
    </Container>
</div>
    </>
    )
}
