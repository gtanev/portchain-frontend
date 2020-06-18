import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import InfoChartHeading from './InfoChartHeading';
import InfoChartAreaContent from './InfoChartAreaContent';
import isEqual from 'react-fast-compare';
import { themeColors } from '../../../constants/constants';

function InfoChartArea({ data, yAxisKey, xAxisKey, title, style }) {
  const [chartHeight, setChartHeight] = useState(0);

  const computeChartHeight = () => {
    let infoGridHeight = document.getElementById('infoGrid').offsetHeight;
    let infoHeadHeight = document.getElementById('infoHead').offsetHeight;
    setChartHeight(infoGridHeight / 2 - infoHeadHeight - 2.5 * 24);
  };

  return (
    <Grid container item direction="column" alignItems="center" style={style}>
      <InfoChartHeading
        text={title}
        callback={!chartHeight && computeChartHeight}
        color={themeColors.secondary}
      />
      <InfoChartAreaContent
        data={data}
        yAxisKey={yAxisKey}
        xAxisKey={xAxisKey}
        xAxisInterval={3}
        height={chartHeight}
      />
    </Grid>
  );
}

export default React.memo(InfoChartArea, isEqual);
