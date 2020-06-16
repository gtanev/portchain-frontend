import React from 'react';
import actions from '../../state/actions';
import Info from './Info';

function VesselsInfo() {
  return (
    <Info
      dataKey={'vessels'}
      fetchCallback={actions.fetchVesselData}
      tableColumns={[
        { field: 'imo', label: 'IMO' },
        { field: 'name', label: 'Name' },
        { field: 'portCalls', label: 'Port Calls' },
      ]}
      tableDetailProp={'portCallDelays'}
      tableDetailText={'<b>Port call delays</b>'}
    />
  );
}

export default VesselsInfo;
