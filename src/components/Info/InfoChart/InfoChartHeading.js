import React, { useEffect } from 'react';
import Box from '@material-ui/core/Box';

function InfoChartHeading({ text, color, callback }) {
  useEffect(() => callback && callback(), []);

  return (
    <Box
      component="div"
      style={{ padding: 12 }}
      className="info-heading"
      id="infoHead"
      color={color}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
}

export default InfoChartHeading;
