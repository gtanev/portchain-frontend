import React from 'react';
import InfoChartArea from '../InfoChart/InfoChartArea';

export function infoTableRowDetail(details, title) {
  let data = [];
  let yAxisKey = ['value'];

  if (details.hasOwnProperty('absolute') && details.hasOwnProperty('relative')) {
    Object.keys(details.absolute).map(point =>
      data.push({
        percentile: point,
        absolute: details.absolute[point],
        relative: details.relative[point],
      })
    );
    yAxisKey = ['absolute', 'relative'];
  } else {
    Object.keys(details).forEach(point => data.push({ percentile: point, value: details[point] }));
  }

  return <InfoChartArea data={data} xAxisKey={'percentile'} yAxisKey={yAxisKey} title={title} />;
}
