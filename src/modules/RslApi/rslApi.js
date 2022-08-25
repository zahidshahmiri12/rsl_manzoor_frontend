import axios from 'axios';
import { serverConfig } from '../../serverConfig/serverConfig';

let appServerURL = serverConfig.appServerUrl;

const UpstoreApi = config => {
  config.baseURL = appServerURL;
  return axios(config);
};
export default UpstoreApi;
