import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Navigator from './Navigator/Navigator';
import VesselsInfo from './Info/VesselsInfo';
import PortsInfo from './Info/PortsInfo';
import ErrorAlert from './Alert/ErrorAlert';


function AppView() {
  const [view, setView] = useState('PORTS');

  return (
    <Grid container direction="column" justify="flex-start" alignItems="stretch" className="app">
      <Grid container item justify="flex-end" id="navGrid" className="nav-grid">
        <Navigator setView={setView} />
      </Grid>
      <Grid container item alignItems="stretch" xs id="infoGrid" className="info-grid">
        {view === 'PORTS' && <PortsInfo />}
        {view === 'VESSELS' && <VesselsInfo />}
      </Grid>
      <Grid item className="error-grid">
        <ErrorAlert />
      </Grid>
    </Grid>
  );
}

export default AppView;
