import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { getCurrentDate } from 'shared-stuff'
import { Cats, Dogs } from '../../Home'

export const Time = () => {
    return (
        <>
        <h2>External Data Access</h2>
        <Container>
            <Row>
                Container App:Current Date: {getCurrentDate()}
            </Row>
            <Row>
                App 1: <Dogs />
            </Row>

            <Row>
                App 2: <Cats />
            </Row>
        </Container>
        </>
    )
}
