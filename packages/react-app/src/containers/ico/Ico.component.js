import React from "react";
import {
  Grid, 
  Typography,
  Button
} from '@material-ui/core'
import { useStyles } from './Ico.styles'
import { useWeb3React } from "@web3-react/core";

import InfoCard from '../../components/cards/InfoCard/InfoCard.component';
import InvestCard from '../../components/cards/InvestCard/InvestCard.component';

import aircraft from '../../assets/aircraft.png'

import usePresaleStage from '../../hooks/usePresaleStage';
import useCurrentStage from '../../hooks/useCurrentStage';

function Ico() {
  const {account, chainId, library } = useWeb3React();
  const currentStage = useCurrentStage();
  const stage = usePresaleStage(currentStage);
  const classes = useStyles();

  React.useEffect(() => {
 
    if(!!account) {
      
    }
    
    return () => {
      
    }
  }, [account, chainId]);

  return (
    <Grid
      container
      spacing={6}
      justify='center'
      alignItems='flex-end'
      className={classes.container}
    >
      <Grid item xs={12}>
        <Typography variant="h2" className={classes.title}>
            O.Flights Token Sale
        </Typography>
      </Grid>
        <Grid item xs={12}>
          <Typography variant="h4">
             {stage ? stage.name : ''}
          </Typography>
        </Grid>
        <Grid item xs={12} >
          <Button 
            variant="contained" 
            color="primary" 
            className={classes.button}
            href="https://fc5fdf55-4241-45fe-a274-d028d011ed78.filesusr.com/ugd/743b78_fecc2adf4c5a44bfa089d78a2abc5214.pdf"
            target="_blank"
          > OFLY Lightpaper </Button>
        </Grid>
        <Grid 
          container item xs={12}
          spacing={9}
        >
          <Grid container justify="center" item xs>
            <InfoCard/>
          </Grid>
          <Grid container justify="center" item xs >
            <InvestCard/>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4">
              Welcome to the Future
          </Typography>
        </Grid>
        <img src={aircraft} alt='FlightCraft' className={classes.backgroundImageConnected}/> 
    </Grid>        
  );
}

export default Ico;

