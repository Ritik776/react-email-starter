import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface VercelInviteUserEmailProps {
  username?: string;
  userImage?: string;
  invitedByUsername?: string;
  invitedByEmail?: string;
  teamName?: string;
  teamImage?: string;
  inviteLink?: string;
  inviteFromIp?: string;
  inviteFromLocation?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

export const VercelInviteUserEmail = ({
  username = 'zenorocha',
  userImage = `${baseUrl}/static/vercel-user.png`,
  invitedByUsername = 'bukinoshita',
  invitedByEmail = 'bukinoshita@example.com',
  teamName = 'My Project',
  teamImage = `${baseUrl}/static/vercel-team.png`,
  inviteLink = 'https://vercel.com/teams/invite/foo',
  inviteFromIp = '204.13.186.218',
  inviteFromLocation = 'São Paulo, Brazil',
}: VercelInviteUserEmailProps) => {
  const previewText = `Join ${invitedByUsername} on Vercel`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-black my-auto mx-auto font-sans">
          <Container className="border bg-[#FFFEF4] border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Section className="mt-[32px]">
              <Img
                src={`${baseUrl}/static/isolation-logo.png`}
                width="auto"
                height="50"
                alt="Vercel"
                className="my-0 mx-auto"
              />
              
            </Section>
            <Heading className="text-[#003E2C] text-left text-[24px] text-left mt-[32px] mb-[32px] text-wrap font-normal">
            Say hello to your<br/>
daily dose of wellness
            </Heading>
          
            <Section>
             
                  <Img  className="my-0 mx-auto" src={`${baseUrl}/static/vector.png`} width="auto" height="140" />
               
            </Section>
            <Section >
              <Heading className="text-[#003E2C] text-left mt-[32px] mb-[32px] text-wrap font-normal text-[24px]">For fresh <br/>& restful days</Heading>
              <Text>Our new range of products are designed to revive vitality and ultimately restore happiness in your life. </Text>
            </Section>
            <Text className="text-black text-[14px] leading-[24px]">
              or copy and paste this URL into your browser:{' '}
              <Link
                href={inviteLink}
                className="text-blue-600 no-underline"
              >
                {inviteLink}
              </Link>
            </Text>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              This invitation was intended for{' '}
              <span className="text-black">{username} </span>.This invite was sent from{' '}
              <span className="text-black">{inviteFromIp}</span> located in{' '}
              <span className="text-black">{inviteFromLocation}</span>. If you were not
              expecting this invitation, you can ignore this email. If you are
              concerned about your account's safety, please reply to this email to
              get in touch with us.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default VercelInviteUserEmail;