import { fetchPorts, fetchVessels } from '../services/backend';

const fetchPortData = (state, dispatch) => {
  Promise.all([
    fetchPorts({ durationPerc: stringify([5, 20, 50, 75, 90]) }),
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
      delayPerc: stringify([5, 50, 80]),
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

function stringify(array) {
  return JSON.stringify(array).slice(1, -1);
}

export default { fetchPortData, fetchVesselData };
