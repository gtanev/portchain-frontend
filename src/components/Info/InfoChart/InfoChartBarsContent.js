import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { themeColors } from '../../../constants/constants';

const fillColor = themeColors.primary;
const gridColor = 'black';
const textColor = 'white';

const toSentenceCase = string => string.replace(/([A-Z])/g, ' $1').toLowerCase();

function InfoChartBarsContent({ data, xAxisKey, yAxisKey, height }) {
  const CustomLabel = props => {
    return (
      <Label
        style={{ textShadow: '1px 1px 2px '.concat(fillColor) }}
        value={String(props.value).toUpperCase()}
        position={props.position}
        fill={textColor}
        viewBox={props.viewBox}
      />
    );
  };

  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} layout="vertical" margin={{ top: 2, bottom: 6, left: 24, right: 24 }}>
        <YAxis type="category" dataKey={yAxisKey} mirror tick={false} axisLine={false} />
        <XAxis
          type="number"
          dataKey={xAxisKey}
          allowDecimals={false}
          axisLine={false}
          tickLine={false}
          tick={{ fill: gridColor }}
        />
        <CartesianGrid stroke={gridColor} />
        <Tooltip formatter={value => [value, toSentenceCase(xAxisKey)]} />
        <Bar dataKey={xAxisKey} fill={fillColor} minPointSize={1} isAnimationActive={true}>
          <LabelList dataKey={yAxisKey} position="insideLeft" content={<CustomLabel />} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default InfoChartBarsContent;
