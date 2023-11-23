import { Column, Img, Row, Section, Text } from "@react-email/components";
import React from "react";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const Footer = () => {
  return (
    <Section
      style={{ backgroundColor: "#003E2C", position: "relative", height: 100 }}
    >
      <Row style={{ padding: "0 30px" }}>
        <Column>
          <Text
            style={{ color: "#fff", fontFamily: "Arial", fontWeight: "normal" }}
          >
            Copyright 2023 Reset. All rights reserved.
          </Text>
        </Column>
        <Column align="right">
          <Text
            style={{ color: "#fff", fontFamily: "Arial", fontWeight: "normal" }}
          >
            https://www.r3set.life/
          </Text>
        </Column>
        <Img
          src={`${baseUrl}/static/svgs/footer.png`}
          style={{
            position: "absolute",
            right: 0,
            top: -55,
            width: 170,
            objectFit: "contain",
          }}
        />
      </Row>
    </Section>
  );
};
