import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Collapse } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 645,
    background: "rgba(0, 0, 0, 0.5) !important",
    margin: "20px"
  },
  cardTitle: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: "2rem",
    color: "white",
  },
  cardDescription: {
    fontFamily: 'Nunito',
    fontSize: "1.1rem",
    color: "#ddd !important",
  },

}));

export default function PlaceCard({ cardImage, cardTitle, cardDescription, checked }) {
  const classes = useStyles();
  
  return (
    <Collapse
    in={checked}
    { ... (checked ? { timeout: 1000 } : {})}
    >
      <Card className={classes.root}>
        <CardMedia
          component="img"
          height="440"
          image={cardImage}
          alt="Cardalt"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1" className={classes.cardTitle}>
            {cardTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary" className={classes.cardDescription}>
            {cardDescription}
          </Typography>
        </CardContent>
      </Card>
    </Collapse>
  );
}
