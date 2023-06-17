import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEarth } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
return (
	
	<Box>
		
	<Container>
		<Row>
		<Column>
			<Heading>Info</Heading>
			<FooterLink href="/">Home</FooterLink>
			<FooterLink href="/support">Support Us</FooterLink>
			<FooterLink href="/register">Register</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
				<FontAwesomeIcon icon={faFacebook} title="Facebook" />		
				<span style={{ marginLeft: "10px" }}>
					Facebook
				</span>
			</FooterLink>
			<FooterLink href="#">
				<FontAwesomeIcon icon={faInstagram} title="Instagram" />		
				<span style={{ marginLeft: "10px" }}>
					Instagram
				</span>
			</FooterLink>
			<FooterLink href="#">
				<FontAwesomeIcon icon={faYoutube} title="Youtube" />		
				<span style={{ marginLeft: "10px" }}>
					Youtube 
				</span>
			</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">email@email.org</FooterLink>
			<FooterLink href="#">(111) 111-1111</FooterLink>
		</Column>
		<Column>
			<Heading>Tawasaw</Heading>
			<FooterLink href="https://tawasaw.org/">
				<FontAwesomeIcon icon={faEarth} title="Website" />		
				<span style={{ marginLeft: "10px" }}>
					Website
				</span>
			</FooterLink>
            <FooterLink href="https://www.facebook.com/Tawasaw/">
				<FontAwesomeIcon icon={faFacebook} title="Facebook" />		
				<span style={{ marginLeft: "10px" }}>
					Facebook
				</span>
			</FooterLink>
			<FooterLink href="https://www.instagram.com/tawasawyouth/">
				<FontAwesomeIcon icon={faInstagram} title="Instagram" />		
				<span style={{ marginLeft: "10px" }}>
					Instagram
				</span>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;