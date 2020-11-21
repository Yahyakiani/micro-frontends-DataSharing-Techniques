import React from 'react'
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { Cats, Dogs } from '../../Home';
import { addUser } from '../../reducers/counterSlice';

const MyAccountForm = () => {

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        let data = { "firstname": event.currentTarget[0].value, "lastname": event.currentTarget[1].value, "location": event.currentTarget[2].value }
        let dataEvent = new CustomEvent('userData', { detail: data });
        dispatch(addUser(data));
        window.dispatchEvent(dataEvent);

    };

    return (
        <>
            <Container>
                <Row>
                    <h3>Container App</h3>
                </Row>
                <Row>

                    <Form noValidate onSubmit={handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="First name"
                                    defaultValue=""
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Last name"
                                    defaultValue=""
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                <Form.Label>Username</Form.Label>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                        type="text"
                                        placeholder="Username"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please choose a username.
              </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <Button type="submit">Submit form</Button>
                    </Form>
                </Row>
                <Row>
                    <h3>App 2 Event Based</h3>
                </Row>
                <Row>

                    <Cats />
                </Row>
                {/* */}
            </Container>
        </>
    );
}

export default MyAccountForm
