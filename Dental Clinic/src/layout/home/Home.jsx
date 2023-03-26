import Carousel from 'react-bootstrap/Carousel';
import D2 from '../../assets/D2.jpeg'
import D4 from '../../assets/D4.jpeg'
import D5 from '../../assets/D5.png'


export const Home = () => {
  return (

    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={D4}
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>Green dentistry</h2>
          <h3>At Dental Studio we are committed to helping the environment</h3>
          <p>We encourage our patients to use plastic-free floss and toothbrushes and we are an official partner of PARLA toothpaste -
            the most ethical and sustainable toothpaste on the market. </p>
          <p> We have joined a movement called Green Dentistry that helps us to make better choices for our planet.
            This is an online app that breaks sustainability down into bite-sized chunks and helps us to develop a greener practice.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={D2}
          alt="D2"
        />

        <Carousel.Caption>
          <h2>Invisalign Treatments</h2>
          <h4> Invisalign® is the ultimate cosmetic treatment option for creating beautiful smiles. At Share a Smile Orthodontics, we are a leading provider of Invisalign® treatment in the UK. 
            In fact, our Specialist Orthodontist Dr Heinrich Ferreira has completed extra training to become a certified Diamond provider of Invisalign® treatment.</h4>
          <p>Simple, affordable and effective, Invisalign® treatment can straighten your teeth without anyone even knowing you're having work done! </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={D5}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h2>Let's put a smile on your face.</h2>
          <h4>Our Specialist Orthodontist will use this information to decide your
            treatment options and create a customised treatment plan. He will also discuss all the costs involved in treatment with no hidden fees.  </h4>
          <p>This can all usually be decided at the initial appointment. If the treatment needed for your unique case is more complex, a further appointment
          may be required to make sure you will achieve the best possible results.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

