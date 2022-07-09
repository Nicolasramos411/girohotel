import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@mui/material';
import PlaceCard from './PlaceCard';
import rooms from '../static/rooms';
import useWindowPosition from '../hook/useWindowPosition';

const useStyles = makeStyles((theme) => ({

  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },

  },
}));

export default function Places() {
  const classes = useStyles();
  const checked = useWindowPosition('header');

  return(
    <div className={classes.root} id="place-to-visit">
      <PlaceCard
        cardImage={rooms[0].image}
        cardTitle={rooms[0].title}
        cardDescription={rooms[0].description}
        checked={checked}
      />
      <PlaceCard
        cardImage={rooms[1].image}
        cardTitle={rooms[1].title}
        cardDescription={rooms[1].description}
        checked={checked}
      />

    </div>
  );
}