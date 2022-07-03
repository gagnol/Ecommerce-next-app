import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

export default function SingleCard({exercise}) {
  function truncate (string,n){
    return string?.length > n ? string.substr(0, n - 1) : string;
  }


  return (
    <StyledCard sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="240px"
        image={exercise.gifUrl}
        alt={exercise.name}
      />
      <CardContent>
        <Typography color="#ffffff" gutterBottom variant="h5" component="div">
          {truncate(exercise.name,15)}

        </Typography>
        <Typography color="#ffffff" variant="body2" >
          {exercise.target}
        </Typography>
        <Typography color="#efeb4c">
          {exercise.equipment}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </StyledCard>
  );
}

const StyledCard = styled.section`
  width: 300px;
  height: auto;
  background-color:#333;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 2px 2px 5px #BABECC,
-5px -5px 10px #ffffff73;
`;