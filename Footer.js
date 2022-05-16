import React from "react";
import {Box, Container, Row, Column , FooterLink, Heading } from '../styles/FooterStyles';

const Footer = () => {
    return (
        <Box>
            <hr />
            <br></br>
            <Container>
                <Row>
                    <Column>
                        <Heading>Address</Heading>
                        <FooterLink>
                        <i> <span style={{marginLeft:"0px"}}>#4/1,Bussiness Plaza</span></i>
                            <br></br>
                        <i> <span style={{marginLeft:"0px"}}>2nd Cross,Muthunagar,</span></i>
                            <br></br>
                        <i> <span style={{marginLeft:"0px"}}>Senguthapuram Post</span></i>
                            <br></br>
                        <i> <span style={{marginLeft:"0px"}}>Karur-02,Tamil Nadu</span></i></FooterLink>
                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink href="#">
                            <span style={{marginLeft:"0px"}}>(+91)7538869118</span></FooterLink>
                            <br></br>
                        <FooterLink href="divyaprakash.gs.24@gmail.com">
                           <i> <span style={{marginLeft:"0px"}}>Email</span></i></FooterLink>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="#">
                            <i className="fab fa-facebook-f">
                                <span style={{marginLeft: "10px"}}>
                                    Facebook
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-instagram">
                                <span style={{marginLeft: "10px"}}>
                                    Instagram
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-twitter">
                                <span style={{marginLeft: "10px"}}>
                                    Twitter
                                </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
            </Container>
            <br></br>
            <p align="center" text-color="white">&copy; 2021 ashtrahomedecorss.in</p>
        </Box>
    );
};

export default Footer;