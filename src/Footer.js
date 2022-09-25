import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  FooterText,
  Heading,
  FooterIconRow,
} from "./helpers/css/FooterStyles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "./helpers/css/footer.css";
const Footer = () => {
  return (
    <>
      <Box className="footer">
        <Container>
          <Row>
            <Column>
              <Heading>Useful Links</Heading>
              <FooterLink>
                <Link
                  to=""
                  style={{ color: "#ffe6e6" }}
                  onClick={window.scrollTo(0, 0)}
                >
                  Home
                </Link>
              </FooterLink>
              <FooterLink>
                <Link
                  to="/about-us"
                  style={{ color: "#ffe6e6" }}
                  onClick={window.scrollTo(0, 0)}
                >
                  About Us
                </Link>
              </FooterLink>
              <FooterLink>
                <Link
                  to="/presentprojects"
                  style={{ color: "#ffe6e6" }}
                  onClick={window.scrollTo(0, 0)}
                >
                  Present Projects
                </Link>
              </FooterLink>
              <FooterLink>
                <Link
                  to="/pastprojects"
                  style={{ color: "#ffe6e6" }}
                  onClick={window.scrollTo(0, 0)}
                >
                  Past Projects
                </Link>
              </FooterLink>
              <FooterLink>
                <Link
                  to="/sponsorship"
                  style={{ color: "#ffe6e6" }}
                  onClick={window.scrollTo(0, 0)}
                >
                  Sponsorship
                </Link>
              </FooterLink>
              <FooterLink>
                <Link
                  to="/team"
                  style={{ color: "#ffe6e6" }}
                  onClick={window.scrollTo(0, 0)}
                >
                  Core Team
                </Link>
              </FooterLink>
            </Column>
            <Column>
              <Heading id="contact-information">Contact Us</Heading>
              <FooterText>Email:</FooterText>
              <FooterLink href="mailto:teamastra@rvce.edu.in?">
                teamastra@rvce.edu.in
              </FooterLink>
              <FooterText>Phone Number:</FooterText>
              <FooterText href="#">Shashank: +91 76758 73584</FooterText>
              <FooterText href="#">Kiran: +91 96208 48507</FooterText>
              <div className="spacer" />
              <FooterIconRow>
                <FooterLink href="https://www.instagram.com/astra_robotics/">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="xl"
                    className="icon instagram"
                  />
                </FooterLink>
                <FooterLink href="https://twitter.com/astrarobotics">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    size="xl"
                    className="icon twitter"
                  />
                </FooterLink>
                <FooterLink href="https://github.com/astra-robotics">
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="xl"
                    className="icon github"
                  />
                </FooterLink>
                <FooterLink href="https://www.youtube.com/channel/UCKbeaYMw6fCF2u4iXOdOfJg">
                  <FontAwesomeIcon
                    icon={faYoutube}
                    size="xl"
                    className="icon youtube"
                  />
                </FooterLink>
                <FooterLink href="https://www.linkedin.com/company/astra-robotics/">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="xl"
                    className="icon linkedin"
                  />
                </FooterLink>
              </FooterIconRow>
            </Column>
            <Column>
              <Heading>Address</Heading>
              <FooterText>Mysore Road, RV Vidyanikethan Post,</FooterText>
              <FooterText>Bengaluru-560059, Karnataka,</FooterText>
              <FooterText>India</FooterText>
              <div className="spacer"></div>
              <FooterText href="#">
                © Astra Robotics. All Rights Reserved.
              </FooterText>
            </Column>
          </Row>
        </Container>
        <section className="footer-bottom-section flex-rw">
          <div className="made-with-love">
            Made with <i>♥</i> by <a target="_blank">Astra Webdev Team</a>
          </div>
        </section>
      </Box>
    </>
  );
};
export default Footer;
