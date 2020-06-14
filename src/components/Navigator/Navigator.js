import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ShipIcon from 'mdi-material-ui/Ferry';
import AnchorIcon from 'mdi-material-ui/Anchor';

function Navigator(props) {
  const [selected, setSelected] = React.useState('PORTS');

  const handleTabChange = (event, newValue) => setSelected(newValue);
  const handleViewChange = () => props.setView(selected);

  return (
    <Tabs value={selected} onChange={handleTabChange} indicatorColor="primary" textColor="primary">
      <Tab icon={<AnchorIcon />} label="Ports" value="PORTS" onAnimationStart={handleViewChange} />
      <Tab icon={<ShipIcon />} label="Vessels" value="VESSELS" onAnimationStart={handleViewChange} />
    </Tabs>
  );
}

export default Navigator;
