import { fetchPorts, fetchVessels } from '../services/backend';
import { range, stringify } from '../helpers/utils';

const fetchPortData = (state, dispatch) => {
  Promise.all([
    fetchPorts({ durationPerc: stringify(range(0, 100, 5)) }),
    fetchPorts({ limit: 5, sortKey: 'portCalls', sortDir: 'desc' }),
    fetchPorts({ limit: 5, sortKey: 'portCalls', sortDir: 'asc' }),
  ])
    .then(portData =>
      dispatch({
        type: 'handlePortsData',
        payload: {
          all: portData[0].data,
          topFive: portData[1].data,
          bottomFive: portData[2].data,
        },
      })
    )
    .catch(e =>
      dispatch({
        type: 'handleError',
        payload: e,
      })
    );
};

const fetchVesselData = (state, dispatch) => {
  Promise.all([
    fetchVessels({
      delayDays: stringify([2, 7, 14]),
      delayPerc: stringify(range(0, 100, 5)),
    }),
    fetchVessels({ limit: 5, sortKey: 'portCalls', sortDir: 'desc' }),
    fetchVessels({ limit: 5, sortKey: 'portCalls', sortDir: 'asc' }),
  ])
    .then(vesselData =>
      dispatch({
        type: 'handleVesselsData',
        payload: {
          all: vesselData[0].data,
          topFive: vesselData[1].data,
          bottomFive: vesselData[2].data,
        },
      })
    )
    .catch(e =>
      dispatch({
        type: 'handleError',
        payload: e,
      })
    );
};


export default { fetchPortData, fetchVesselData };
