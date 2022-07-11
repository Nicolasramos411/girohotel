import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@mui/material';
import Header from './Header';
import Places from './PlaceToVisit';
import MediaControlCard from './ContentBox';
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({

  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/landing-page-image.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    padding: '10px',
  },

}));

export default function LandingPage() {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Places />
      <MediaControlCard />
      
    </div>
  );
}