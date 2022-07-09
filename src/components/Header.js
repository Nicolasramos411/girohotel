import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import { Collapse } from '@material-ui/core';
import SortIcon from '@mui/icons-material/Sort';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link as Scroll } from 'react-scroll'

const useStyles = makeStyles((theme) => ({

  root: {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: 'Nunito',
  },
  appBar: {
    background: 'none',
  },
  icon : {
    color: "white",
    fontSize: "1rem",
  },
  title : {
    flexGrow: 1,
  },
  wrapper: {
    width: "80%",
    margin: "0 auto",
  },
  spanTitle: {
    color: "#5AFF3D",
  },
  middleTitle: {
    color: "#FFF",
    fontSize: "4.5rem",
  },
  container: {
    textAlign: "center",
  },
  goDownIcon: {
    color: "#5AFF3D",
    fontSize: '4rem !important',
  }

}));

export default function Header() {
  const classes = useStyles();
  const [checked, SetChecked] = useState(false);
  useEffect(() => {
    SetChecked(true);
  }, []);

  return(
     <div className={classes.root} id="header">
      <AppBar className={classes.appBar} elevation={0}>
        <Toolbar className={classes.wrapper}>
          <h1 className={classes.title}>Giro<span className={classes.spanTitle}>hotel.</span></h1>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Collapse
        in={checked}
        { ... (checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
      <div className={classes.container}>
        <h1 className={classes.middleTitle}>
          Welcome to <br /> My <span className={classes.spanTitle}>Hotel.</span>
        </h1>
        <Scroll to="place-to-visit" smooth={true}>
          <IconButton>
            <ExpandMoreIcon className={classes.goDownIcon} />
          </IconButton>
        </Scroll>
      </div>
      </Collapse>
     </div>

  );
}