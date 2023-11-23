import { Container, Img } from "@react-email/components";
import React from "react";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

const Header = ({ logo, bgImages }) => {
  return (
    <Container style={{ position: "relative", width: "100%" }}>
      {bgImages && (
        <Img
          src={`${baseUrl}/static/svgs/corner-leaf.png`}
          width="150"
          height="150"
          alt="Reset's Logo"
          style={{ position: "absolute", left: "-10rem", top: "-10px" }}
        />
      )}
      <Container
        align="center"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Img
          src={logo}
          alt="Reset's Logo"
          style={{ objectFit: "contain", height: 150, width: 190 }}
        />
      </Container>
    </Container>
  );
};

export default Header;
