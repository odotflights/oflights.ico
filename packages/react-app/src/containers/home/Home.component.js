import React from "react";
import {
  Grid, 
  Typography,
  Button
} from '@material-ui/core'
import { useStyles } from './Home.styles'
import { useWeb3React } from "@web3-react/core";

import InfoCard from '../../components/cards/InfoCard/InfoCard.component';
import InvestCard from '../../components/cards/InvestCard/InvestCard.component';

function Home() {
  const {account, chainId, library } = useWeb3React();

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
      spacing={4}
      justify='center'
      alignItems='center'
      className={classes.container}
    >
      <Grid item xs={12}>
        <Typography variant="h2">
            O.Flights (OFLY) Token Sale
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
       
      </Grid>
    </Grid>        
  );
}

export default Home;

