import React from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { themeColors } from '../../../constants/constants';

const fillColors = [themeColors.secondary, themeColors.primaryLight];

const toPercent = number => `${number}%`;
const toPercentile = number => `${number}th percentile`;

const toHoursAndMinutes = value => {
  let hours = Math.floor(+value);
  let minutes = Math.round(+value * 60 - hours * 60);
  return `${hours}h ${minutes}m`;
};

function InfoChartAreaContent({ data, xAxisKey, yAxisKey, xAxisInterval, height }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={data} margin={{ top: 6, right: 24, left: 0, bottom: 3 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xAxisKey} tickFormatter={toPercent} interval={xAxisInterval || 0} />
        <YAxis />
        <Tooltip formatter={toHoursAndMinutes} labelFormatter={toPercentile} />
        {yAxisKey.map((dataKey, index) => (
          <Area
            key={dataKey}
            type="monotone"
            dataKey={dataKey}
            stroke={fillColors[index]}
            fill={fillColors[index]}
          />
        ))}
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default InfoChartAreaContent;
