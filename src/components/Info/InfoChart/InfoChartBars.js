import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import InfoChartHeading from './InfoChartHeading';
import InfoChartBarsContent from './InfoChartBarsContent';
import Paper from '@material-ui/core/Paper';
import isEqual from 'react-fast-compare';
import { themeColors } from '../../../constants/constants';

const headingPaperStyle = {
  padding: '0 24px',
  marginBottom: 12,
  backgroundColor: themeColors.primary,
  color: 'white',
};

function InfoChartBars({ data, yAxisKey, xAxisKey, title, style }) {
  const [charHeight, setChartHeight] = useState(0);

  useEffect(() => {
    window.addEventListener('resize', () => computeChartHeight());
    return () => window.removeEventListener('resize', () => computeChartHeight());
  }, []);

  const computeChartHeight = () => {
    let infoGridHeight = document.getElementById('infoGrid').offsetHeight;
    let infoHeadHeight = document.getElementById('infoHead').offsetHeight;
    setChartHeight(infoGridHeight / 2 - infoHeadHeight - 2 * 24);
  };

  return (
    <Grid container item direction="column" alignItems="center" style={style}>
      <Paper elevation={2} style={headingPaperStyle}>
        <InfoChartHeading text={title} callback={!charHeight && computeChartHeight} />
      </Paper>
      {!!charHeight && (
        <InfoChartBarsContent
          data={data}
          yAxisKey={yAxisKey}
          xAxisKey={xAxisKey}
          height={charHeight}
        />
      )}
    </Grid>
  );
}

export default React.memo(InfoChartBars, isEqual);
