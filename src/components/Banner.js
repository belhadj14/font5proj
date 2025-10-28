import { Container, Row, Col } from "react-bootstrap";
import { ArrowBarRight } from "react-bootstrap-icons";
const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome To My Portfolio</span>
            <h1>
              {`Hi i'm Belhadj`}
              <span>Web developer</span>
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
              sapiente expedita nostrum deserunt tempora dolor.
            </p>
            <button onClick={()=>console.log("connect")}>Let's connect</button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
