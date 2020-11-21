import React from 'react'
import { Button, Form } from 'react-bootstrap'

export const contactUs = () => {
    return (
        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={5} />
            </Form.Group>
            <Button type="submit">Submit</Button>
        </Form>
    )
}
