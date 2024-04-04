import React from 'react';

// import ContestantCard from '../components/contestantCard/card';

// function Contestant() {
//   return (
//     <div className="contestants">
//       {cards.map((card) => (
//         <ContestantCard key={card.id} item={card} />
//       ))}
//     </div>
//   );
// }
// export default Contestant;

import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

// Sample data for contestants
const contestantss = [
  {
    region: 'WEST REGION',
    artistName: 'John Doe',
    image: 'https://example.com/john-doe.jpg',
    votes: 500,
  },
  {
    region: 'WEST REGION',
    artistName: 'Jane Smith',
    image: 'https://example.com/jane-smith.jpg',
    votes: 750,
  },
  // Add more contestants for each region
  // ...
];

const contestants = ({alpha}) => {
  const handleVote = (artistName) => {
    // Perform vote handling logic
    console.log(`Voted for ${artistName}`);
  };
  return (
    <div>
    <div><h1>{alpha}</h1></div>
      {contestantss.map((contestant, index) => (
        <Card key={index} sx={{ maxWidth: 345, marginBottom: 20 }}>
          <CardMedia
            component="img"
            height="140"
            image={contestant.image}
            alt={contestant.artistName}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {contestant.region}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {contestant.artistName}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
              Votes: {contestant.votes}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
              Amount: ${contestant.votes * 2} (Assuming $2 per vote)
            </Typography>
            <Button variant="contained" onClick={() => handleVote(contestant.artistName)}>
              Vote
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );};

export default contestants;