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
            <Header
              logo={`${baseUrl}/static/svgs/reset-logo-two.png`}
              bgImages={false}
            />

            <ContentSection
              headingOne="Welcome to the"
              headingTwo="world of r3set"
              para="Say hello to Reset and all things that are filled with goodness."
            >
              {" "}
              <Img
                src={`${baseUrl}/static/svgs/watering.png`}
                style={{
                  width: 550,
                  height: 650,
                  objectFit: "contain",
                  position: "relative",
                  zIndex: 10,
                }}
                alt="Notion's Logo"
              />
            </ContentSection>
            <ContentSectionReverse
              headingOne="Vitals for your"
              headingTwo="everyday health"
              para="We believe well-being is for everyone.
              Our pure and powerful supplements are
              made to shine and are as unique as you."
              linkText="Explore"
            >
              <Img
                src={`${baseUrl}/static/svgs/wobble.png`}
                style={{
                  width: 550,
                  height: 520,
                  objectFit: "contain",
                  position: "relative",
                  zIndex: 10,
                  right: "93px",
                }}
                alt="Notion's Logo"
              />
            </ContentSectionReverse>
            <ContentSection
              headingOne="Enriched with"
              headingTwo="essential oils"
              para="All our herbal products – gels,
              emulsions, sprays and tablets –
              the entire range is naturally
              enhanced with essential oils."
              linkText="Know More"
            >
              {" "}
              <Img
                src={`${baseUrl}/static/svgs/wobble-bottle.png`}
                style={{
                  width: 550,
                  height: 650,
                  objectFit: "contain",
                  position: "relative",
                  zIndex: 10,
                  left: "43px",
                }}
                alt="Notion's Logo"
              />
            </ContentSection>
            <ContentSectionReverse
              headingOne="Spread the"
              headingTwo="love to all"
              para="Avail 20% off on all our
              products with reset
              loyalty card."
              linkText="Feel good today"
            >
              <Img
                src={`${baseUrl}/static/svgs/hand-raise.png`}
                style={{
                  width: 550,
                  height: 520,
                  objectFit: "contain",
                }}
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
