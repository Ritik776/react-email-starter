import React from "react";
import {
  Button,
  Column,
  Container,
  Heading,
  Img,
  Link,
  Row,
  Section,
  Text,
} from "@react-email/components";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

interface ContentSectionProps {
  headingOne?: string;
  headingTwo?: string;
  para?: string;
  linkText?: string;
  images?: string[];
  children?: React.ReactNode;
}

export const ContentSection = ({
  headingOne,
  headingTwo,
  para,
  linkText,
  images,
  children,
}: ContentSectionProps) => (
  <Section>
    <Row style={{ padding: "30px" }}>
      <Column style={{ minWidth: 300 }}>
        <Heading
          style={{
            color: "#003E2C",
            margin: "5px 0",
            fontFamily: "Arial",
            fontWeight: "normal",
            fontSize: 42,
          }}
        >
          {" "}
          {headingOne}
        </Heading>
        <Heading
          style={{
            color: "#003E2C",
            margin: "5px 0",
            fontFamily: "Arial",
            fontWeight: "normal",
            fontSize: 42,
          }}
        >
          {" "}
          {headingTwo}
        </Heading>

        <Text
          style={{
            fontSize: 18,
            color: "#003E2C",
            margin: "5px 0",
            fontFamily: "Arial",
            fontWeight: "normal",
            textAlign: "justify",
          }}
        >
          {para}
        </Text>

        {images && (
          <Section style={{ margin: "20px 0" }}>
            <Row>
              {images?.map((img, i) => (
                <Column key={i}>
                  <Img
                    src={img}
                    style={{ maxWidth: 180, height: 120, objectFit: "contain" }}
                    alt="Notion's Logo"
                  />
                </Column>
              ))}
            </Row>
          </Section>
        )}
        {linkText && (
          <Section style={{ height: 60 }}>
            <Link href="https://example.com" style={link}>
              {linkText}
            </Link>
          </Section>
        )}
      </Column>
      <Column style={{ position: "relative" }}>{children}</Column>
    </Row>
  </Section>
);

const link = {
  backgroundColor: "#003E2C",
  color: "#fff",
  borderRadius: 25,
  padding: 15,
  minWidth: 100,
  fontFamily: "Arial",
  fontWeight: "normal",
};
