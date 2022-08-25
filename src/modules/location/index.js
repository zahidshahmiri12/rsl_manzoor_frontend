import rslApi from '../RslApi/rslApi';

class Location {
  getAllLocations = callBack => {
    rslApi({
      method: 'GET',
      url: `/getLocation`,
    })
      .then(response => {
        if (response.data) {
          callBack({ status: 'success', data: response.data });
        }
      })
      .catch(error => {
        console.log('Error occure while getting locations', error.message);
        callBack({ status: 'error' });
      });
  };
}
export default new Location();
