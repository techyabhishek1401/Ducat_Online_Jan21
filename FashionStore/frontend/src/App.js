import Header from './Components/Header';
import Footer from './Components/Footer';
import { Container, Row, Col } from 'react-bootstrap'
import React from 'react'

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Container>
          <Row>
            <Col>
              <h1>Welcome to the FASHION STORE</h1>
            </Col>
          </Row>
        </Container>
      </main>

      <Footer />
    </div>
  )
}

export default App
