import React from "react";

import {
  Column,
  Container,
  Heading,
  Img,
  Row,
  Section,
  Text,
} from "@react-email/components";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const HeroSection = () => (
  <Row style={{ margin: "80px 40px" }}>
    <Column style={{ position: "relative" }}>
      <Heading
        as="h1"
        style={{
          margin: 0,
          color: "#003E2C",
          fontFamily: "Arial",
          fontWeight: "normal",
        }}
      >
        Say hello to your
      </Heading>{" "}
      <Heading
        as="h1"
        style={{
          margin: 0,
          color: "#003E2C",
          fontFamily: "Arial",
          fontWeight: "normal",
        }}
      >
        daily dose of wellness
      </Heading>
      <Img
        src={`${baseUrl}/static/svgs/Vector.png`}
        style={{ width: "100%", objectFit: "contain", maxWidth: "800px" }}
        alt="Notion's Logo"
      />
      <Img
        src={`${baseUrl}/static/svgs/star.png`}
        style={{
          width: 160,
          objectFit: "contain",
          position: "absolute",
          top: 0,
          right: "40%",
        }}
        alt="Notion's Logo"
      />
      <Img
        src={`${baseUrl}/static/svgs/green-circle.png`}
        style={{
          width: 100,
          objectFit: "contain",
          position: "absolute",
          bottom: 0,
          right: 10,
        }}
        alt="Notion's Logo"
      />
      <Img
        src={`${baseUrl}/static/svgs/star.png`}
        style={{
          width: 160,
          objectFit: "contain",
          position: "absolute",
          bottom: "-8rem",
          left: "-7rem",
        }}
        alt="Notion's Logo"
      />
    </Column>
  </Row>
);
