import React, { useState } from 'react';
// import InfoModal from '../InfoModal/InfoModal';
import { Button, ListGroup, Modal } from 'react-bootstrap';

const DashboardTableData = (props) => {
    const { flight_number, mission_name, launch_date_utc, rocket, launch_success, upcoming, launch_site, details } = props.launch;
    let orbitName = rocket?.second_stage?.payloads[0]?.orbit;
    let manufacturer = rocket?.second_stage?.payloads[0]?.manufacturer;
    let nationality = rocket?.second_stage?.payloads[0]?.nationality;
    let payLoadType = rocket?.second_stage?.payloads[0]?.payload_type;
    // console.log(orbitName);
    // let orbitName = rocket?.second_stage?.payloads?.orbit;

    let successRate;
    if (launch_success) {
        successRate = 'Success';
    }
    else if (upcoming) {
        successRate = 'Upcoming';
    }
    else {
        successRate = 'Failed';
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <tr>
            <td>{flight_number}</td>
            <td>{launch_date_utc}</td>
            <td>{launch_site?.site_name}</td>
            <td>{mission_name}</td>
            <td>{orbitName}</td>
            <td>{successRate}</td>
            <td>{rocket?.rocket_name}</td>
            <td>
                <Button variant="primary" onClick={handleShow}>
                    See More
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <p>{details}</p>
                        <ListGroup variant="flush">
                            <ListGroup.Item><b>Flight Number: </b> {flight_number}</ListGroup.Item>
                            <ListGroup.Item><b>Mission Name: </b> {mission_name}</ListGroup.Item>
                            <ListGroup.Item><b>Rocket Type: </b> {rocket?.rocket_type}</ListGroup.Item>
                            <ListGroup.Item><b>Rocket Name:</b> {rocket?.rocket_name}</ListGroup.Item>
                            <ListGroup.Item><b>Manufacturer: </b> {manufacturer}</ListGroup.Item>
                            <ListGroup.Item><b>Nationality:</b> {nationality}</ListGroup.Item> 
                            <ListGroup.Item><b>Launch Date: </b> {launch_date_utc}</ListGroup.Item>
                            <ListGroup.Item><b>Orbit: </b>{orbitName}</ListGroup.Item>
                            <ListGroup.Item><b>Payload Type: </b>{payLoadType}</ListGroup.Item>
                            <ListGroup.Item><b>Launch Site: </b> {launch_site?.site_name}</ListGroup.Item>
                        </ListGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </td>
        </tr>
    );
};

export default DashboardTableData;