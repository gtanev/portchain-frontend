import React from 'react';
import actions from '../../state/actions';
import Info from './Info';

function PortsInfo() {
  return (
    <Info
      dataKey={'ports'}
      fetchCallback={actions.fetchPortData}
      tableColumns={[
        { field: 'id', label: 'ID' },
        { field: 'name', label: 'Name' },
        { field: 'portCalls', label: 'Port Calls' },
      ]}
      tableDetailProp={'portCallDurations'}
      tableDetailText={'<b>Port call durations</b> (h)'}
    />
  );
}

export default PortsInfo;
