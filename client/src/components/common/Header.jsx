import React from 'react';
import Logo from '../../app/assets/Logo (1).png'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Header = () => {
    return (

        <Row className="justify-content-md-between py-3">
            <Col>
                <div className='header__logo'>
                    <Link to={'/'}>
                        <img src={Logo} alt='logo.png' />
                    </Link>
                </div>
            </Col>

            <Col>
                <div className='d-flex d-sm-flex justify-content-end' style={{ 'gap': "1rem" }}>
                    <div className="icon-notification lh-lg">
                        <FontAwesomeIcon icon={faBell} size='lg' />
                    </div>
                    <Button className='rounded-1' variant="outline-primary">
                        <Link to={'/post-a-job'}>Post A Jobs</Link>
                    </Button>{' '}
                    <div className='avatar float-end'>
                        <img src='users/user-1.jpg' alt="avatar.png" className='rounded-circle' width={40} height={40} />
                    </div>
                </div>

            </Col>
        </Row>

    );
};

export default Header;