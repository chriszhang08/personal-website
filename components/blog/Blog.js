import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard() {
  return (
    <Card sx={{maxWidth: '50%'}}>
      <a href="https://open.substack.com/pub/chriszhang3/p/bridging-the-energy-divide-sustainable?r=17stkd&utm_campaign=post&utm_medium=web">
        <CardMedia
          component="img"
          alt="substack-1"
          height="100"
          image="/bhutan.jpg"
        />
        <CardContent>
          <Typography variant="body2" sx={{color: 'text.secondary'}}>
            The average person in the United States consumes ~12,000 kWh of electricity in a year.
            Per day, that comes down to 33 kWh, which is enough for ~10 full dryer loads...
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Read More</Button>
        </CardActions>
      </a>
    </Card>
  );
}
