import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Card, ListGroup, Row, Col } from 'react-bootstrap';
import '../App.css';

const Weather = () => {
    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');

    const fetchWeather = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/weather?lat=${lat}&lon=${lon}`);
            // console.log(response);
            //console.log(response.data);
            console.log(response.data.data);
            setWeather(response.data.data);
            setError('');
        } catch (err) {
            setError('Error fetching weather data');
            setWeather(null);
        }
    };

    return (
        <>

            <Container className="d-flex justify-content-center flex-wrap">
                <h4 className="my-2 text-dark text-center">Please Fill Up the Form to Get Weather Data of City</h4>
                <Row className="w-100">
                    <Col xs={12} md={6}>
                        <Form className=" form  ms-5">
                            <Form.Group className="forminput mb-4">
                                <Form.Label className='text-dark .fs-1 fw-bold'><h4> Latitude of the City</h4></Form.Label>
                                <Form.Control
                                    type="text"
                                    className="w-50"
                                    placeholder="Enter latitude in decimal"
                                    value={lat}
                                    onChange={(e) => setLat(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className='text-dark .fs-1 fw-bold'><h4>Longitude of the City</h4></Form.Label>
                                <Form.Control
                                    type="text"
                                    className="w-50"
                                    placeholder="Enter longitude in decimal"
                                    value={lon}
                                    onChange={(e) => setLon(e.target.value)}
                                />
                            </Form.Group>
                            <Button className="my-3 w-50" variant="primary" onClick={fetchWeather}>
                                Get Weather of City
                            </Button>
                        </Form>
                    </Col>
                    <Col xs={12} md={6}>
                        {error && <p className="my-3 fs-3 fw-bold text-danger">{error}</p>}
                        {weather && (
                            <Card className="mx-auto w-75 text-light bg-dark">
                                <Card.Img variant="top" src={weather.condition.icon} alt={weather.condition.text} style={{ height: '210px' }} />
                                <Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item className="d-flex text-light bg-dark border-top border-info border-2 fw-bold lh-base fs-3 justify-content-evenly">
                                            <h5>Date & Time of the City: </h5>
                                            <h5>{weather.timestamp}</h5>
                                        </ListGroup.Item>

                                        <ListGroup.Item className="d-flex text-light bg-dark border-top border-info border-2 fw-bold lh-base fs-3 justify-content-evenly">
                                            <h4>Weather Condition:</h4>
                                            <h4>{weather.condition.text}</h4>
                                        </ListGroup.Item>

                                        <ListGroup.Item className="d-flex text-light bg-dark border-top border-info border-2 fw-bold lh-base fs-3 justify-content-evenly">
                                            <h4>Name of the City: </h4>
                                            <h4 className='text-uppercase'>
                                                {weather.cityName}
                                            </h4>
                                        </ListGroup.Item>

                                        <ListGroup.Item className='d-flex text-light bg-dark border-top border-info border-2 fw-bold lh-base fs-3 justify-content-evenly'>
                                            <h4>Temp of the City: </h4>
                                            <h4>{weather.temperature.celcius} &#8451; / {weather.temperature.farenheit} &#8457;</h4>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        )}
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Weather;
