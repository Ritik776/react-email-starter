"use client";

import React from "react";

import {
  Body,
  Container,
  Font,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { HeroSection } from "../../components/hero-section";
import { ContentSection } from "../../components/content-section";
import { templateOneData } from "../../data/template-one";
import { Footer } from "../../components/footer";
import Header from "../../components/header";
import { ContentSectionReverse } from "../../components/content-section-reverse";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const NotionMagicLinkEmail = () => {
  return (
    <Html lang="en">
      <Head>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Body style={main}>
        <Container>
          <Container style={container}>
            <Header logo={`${baseUrl}/static/svgs/reset-logo.png`} bgImages />
            <Section style={{ width: "100%" }}>
              <HeroSection />
            </Section>
            <ContentSection
              headingOne="For fresh"
              headingTwo="& restful days"
              para="Our new range of products are designed to revive vitality and ultimately restore happiness in your life."
              linkText="Feel good today"
              images={templateOneData}
            >
              <Img
                src={`${baseUrl}/static/svgs/yoga-oil-wb.png`}
                style={{
                  width: 550,
                  height: 650,
                  objectFit: "contain",
                  position: "relative",
                  zIndex: 10,
                }}
                alt="Notion's Logo"
              />

              <>
                <Img
                  src={`${baseUrl}/static/svgs/corner-leaf.png`}
                  width="150"
                  height="150"
                  alt="Reset's Logo"
                  style={{
                    position: "absolute",
                    left: 75,
                    top: "30%",
                    transform: "rotate(210deg)",
                  }}
                />{" "}
                <Img
                  src={`${baseUrl}/static/svgs/red-flower.png`}
                  alt="Reset's Logo"
                  style={{
                    position: "absolute",
                    right: "7rem",
                    bottom: "70px",
                    width: 100,
                    height: 100,
                    objectFit: "contain",
                  }}
                />
              </>
            </ContentSection>
            <ContentSectionReverse
              headingOne="It’s raining"
              headingTwo="goodness"
              para="Use GOOD20 to get 20% off
          on our new range of wellness
          products and services."
              linkText="Shop Now"
            >
              <Img
                src={`${baseUrl}/static/svgs/rain.png`}
                style={{ width: 550, height: 520, objectFit: "contain" }}
                alt="Notion's Logo"
              />
            </ContentSectionReverse>
          </Container>
          <Footer />
        </Container>
      </Body>
    </Html>
  );
};

export default NotionMagicLinkEmail;

const main = {
  backgroundColor: "#ffffff",
};

const container = {
  paddingLeft: "12px",
  paddingRight: "12px",
  backgroundColor: "#FFFEF4",
  overflow: "hidden",
};
