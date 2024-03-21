/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable  */
import * as React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';

import { Footer } from '../components/homepage';
import Navbar from 'src/components/navigation/Navbar';
import Background from 'src/components/background/Background';

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: 'WEST REGION',
    description:
      'Our product effortlessly adjusts to your needs, boosting efficiency and simplifying your tasks.',
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: 'SOUTH WEST REGION',
    description:
      'Experience unmatched durability that goes above and beyond with lasting investment.',
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: 'CENTRE REGION',
    description:
      'Integrate our product into your routine with an intuitive and easy-to-use interface.',
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: 'LITTORAL',
    description:
      'Stay ahead with features that set new standards, addressing your evolving needs better than the rest.',
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: 'EAST REGION',
    description:
      'Count on our responsive customer support, offering assistance that goes beyond the purchase.',
  },
];

export default function VotingCategory() {
  return (
    <>
      <Navbar />
      <Background />
      <Box
        id="highlights"
        sx={{
          pt: { xs: 4, sm: 12 },
          pb: { xs: 8, sm: 16 },
          color: 'white',
        }}
      >
        <Container
          sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: { xs: 3, sm: 6 },
          }}
        >
          <Box
            sx={{
              width: { sm: '100%', md: '60%' },
              textAlign: { sm: 'left', md: 'center' },
            }}
          >
            <Typography sx={{ color: 'black' }} component="h2" variant="h4">
              Voting Categories per regions
            </Typography>
            <Typography variant="body1" sx={{ color: 'grey.400' }}>
              Explore why our product stands out: adaptability, durability, user-friendly design,
              and innovation. Enjoy reliable customer support and precision in every detail.
            </Typography>
          </Box>
          <Grid container spacing={2.5}>
            {items.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Stack
                  direction="column"
                  color="inherit"
                  component={Card}
                  spacing={1}
                  useFlexGap
                  sx={{
                    p: 3,
                    height: '100%',
                    border: '1px solid',
                    borderColor: 'grey.800',
                    background: 'transparent',
                    backgroundColor: '#102A42',
                    cursor: 'pointer',
                  }}
                >
                  <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                  <div>
                    <Typography fontWeight="medium" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'grey.400' }}>
                      {item.description}
                    </Typography>
                  </div>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
