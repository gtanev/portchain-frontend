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

const addAbsoluteToRelative = (value, label, object) => {
  if (label === 'relative' && object.payload.hasOwnProperty('absolute')) {
    return value + object.payload.absolute;
  }
  return value;
};

function InfoChartAreaContent({ data, xAxisKey, yAxisKey, xAxisInterval, height }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={data} margin={{ top: 6, right: 24, left: 0, bottom: 3 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xAxisKey} tickFormatter={toPercent} interval={xAxisInterval || 0} />
        <YAxis />
        <Tooltip
          formatter={(value, label, object) =>
            toHoursAndMinutes(addAbsoluteToRelative(value, label, object))
          }
          labelFormatter={toPercentile}
        />
        {yAxisKey.map((dataKey, index) => (
          <Area
            key={dataKey}
            stackId={1}
            type="monotone"
            dataKey={dataKey}
            stroke="none"
            fill={fillColors[index]}
          />
        ))}
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default InfoChartAreaContent;
