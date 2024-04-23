import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://media.istockphoto.com/id/172315512/photo/sweet-cherries.webp?b=1&s=170667a&w=0&k=20&c=dR5nAJD3GdLRNBG5brpk2NAz_thhh-6tzK1K3clphFw="
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>

      <CardMedia
        sx={{ height: 140 }}
        image="https://media.istockphoto.com/id/1480944028/photo/lots-of-ripe-red-cherries-isolated-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=q5_4VvIbxSbmR9KjQUF69RMhdfCXs3AybxC-iPbPVto="
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
      <CardMedia
        sx={{ height: 140 }}
        image="https://media.istockphoto.com/id/1693717637/photo/cherry-isolated-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=AcOf3ifDINWgRn00f-DNPOdy_eYAI5x_djDm-0xPuZ0="
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
      <CardMedia
        sx={{ height: 140 }}
        image="https://media.istockphoto.com/id/2023403673/photo/cherry.webp?b=1&s=170667a&w=0&k=20&c=BCIZ5N7G2TTE1ISDk4IjKY93akLkOplLZVwqG9FPoJs="
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}