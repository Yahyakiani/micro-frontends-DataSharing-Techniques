import React from "react";
import MicroFrontend from "./components/microfrontEnd/microfrontEnd";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./reducers/counterSlice";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";


const {
  REACT_APP_DOGS_HOST: dogsHost,
  REACT_APP_CATS_HOST: catsHost,
} = process.env;


const Dogs = ({ history }) => {
  return <MicroFrontend history={history} host={dogsHost} name="Dogs" />;
}

const Cats = ({ history }) => {
  return <MicroFrontend history={history} host={catsHost} name="Cats" />;
}

const Home = ({ history }) => {

  const dispatch = useDispatch();
  const { value } = useSelector(
    (state) => state.counter
  )

  return (
    <div>
      <div className="home">
        <div className="content">
          <h2>Redux Based Data Sharing</h2>
          <Container>
            <Row>
              <Col>
                <h3>Container App</h3>
                <h4>Counter: {value}</h4>
                <Row>
                <button onClick={() => dispatch(increment())}>Increment</button>
                </Row>
                <Row>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
                </Row>
              </Col>
              <Col><h3>App 1</h3>
                <div className="dog">
                  <Dogs />
                </div>
              </Col>
              <Col><h3>App 2</h3>
                <div className="cat">
                  <Cats />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export { Cats, Dogs, Home }