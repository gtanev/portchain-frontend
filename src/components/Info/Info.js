import React from 'react';
import Grid from '@material-ui/core/Grid';
import InfoTable from './InfoTable/InfoTable';
import PerfectScrollbar from 'react-perfect-scrollbar';
import InfoChartBars from './InfoChart/InfoChartBars';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useGlobalState } from '../../state/store';

function Info({ fetchCallback, dataKey, tableColumns, tableDetailProp, tableDetailText }) {
  const [state, dispatch] = useGlobalState();

  React.useEffect(() => fetchCallback(state, dispatch), []);

  if (!state.data[dataKey].all.length && state.error == null) {
    return (
      <Grid item xs={12}>
        <LinearProgress color="primary" />
      </Grid>
    );
  }

  return (
    <React.Fragment>
      <Grid item xs={12} md={8} className="info-table-grid">
        {state.data[dataKey].all.length ? (
          <PerfectScrollbar>
            <InfoTable
              columns={tableColumns}
              detailProp={tableDetailProp}
              detailText={tableDetailText}
              data={state.data[dataKey].all}
            />
          </PerfectScrollbar>
        ) : null}
      </Grid>
      <Grid container item xs={12} md={4} className="info-charts-grid" alignItems="center">
        {state.data[dataKey].topFive.length ? (
          <InfoChartBars
            data={state.data[dataKey].topFive}
            title={`<b>TOP 5 ${dataKey}</b> by port calls`}
            yAxisKey={'name'}
            xAxisKey={'portCalls'}
            style={{ marginBottom: 24 }}
          />
        ) : null}
        {state.data[dataKey].bottomFive.length ? (
          <InfoChartBars
            data={state.data[dataKey].bottomFive}
            title={`<b>BOTTOM 5 ${dataKey}</b> by port calls`}
            yAxisKey={'name'}
            xAxisKey={'portCalls'}
          />
        ) : null}
      </Grid>
    </React.Fragment>
  );
}

export default Info;
