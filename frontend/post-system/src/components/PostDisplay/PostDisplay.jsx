//import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Ratio from 'react-bootstrap/Ratio'
import Image from 'react-bootstrap/Image'
import Post from './Post.jsx'

import "bootstrap/dist/css/bootstrap.min.css"

const PostDisplay = () => {
    return (
        <Container>
            <Row className='bg-dark text-white rounded'>
                <Col md={6} className='p-4'>
                    <Post />
                </Col>
                <Col>
                    <Row>
                        <Col md={6} className='p-4'>
                            <Post />
                        </Col>
                        <Col md={6} className='p-4'>
                            <Post />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} className='p-4'>
                            <Post />
                        </Col>
                        <Col md={6} className='p-4'>
                            <Post />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default PostDisplay