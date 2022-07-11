import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import { Collapse } from '@material-ui/core';
import SortIcon from '@mui/icons-material/Sort';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link as Scroll } from 'react-scroll'
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Button from '@mui/material/Button';

const useStyles = makeStyles((theme) => ({

  root: {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: 'Nunito !important',
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

function HideOnScroll( {children, window} ) {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Header( {centerTitle, ...props} ) {
  const classes = useStyles();
  const [checked, SetChecked] = useState(false);
  useEffect(() => {
    SetChecked(true);
  }, []);

  return(
     <div className={classes.root} id="header">
      <HideOnScroll>
        <AppBar className={classes.appBar} elevation={0}>
          <Toolbar className={classes.wrapper}>
            <h1 href="/" className={classes.title}>
              Exa<span className={classes.spanTitle}>Nutri.</span>
            </h1>
            <IconButton>
              <SortIcon className={classes.icon} />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Collapse
        in={checked}
        { ... (checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
      <div className={classes.container}>
        {centerTitle ?
          <h1 className={classes.middleTitle}>
            Exa<span className={classes.spanTitle}>Nutri.</span>
          </h1>
          : 
          <h1 className={classes.middleTitle}>
            Bienvenido <br /> a Exa<span className={classes.spanTitle}>Nutri.</span>
          </h1>
        }
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