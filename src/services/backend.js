import Axios from 'axios';
import { portsEndpoint, vesselsEndpoint } from '../constants/constants';

export const fetchPorts = async params => {
  return await Axios.get(portsEndpoint, { params });
};

export const fetchVessels = async params => {
  return await Axios.get(vesselsEndpoint, { params });
};

export const fetchPort = async (id, params) => {
  return await Axios.get(portsEndpoint.concat(`/${id}`), { params });
};

export const fetchVessel = async (id, params) => {
  return await Axios.get(vesselsEndpoint.concat(`/${id}`), { params });
};
