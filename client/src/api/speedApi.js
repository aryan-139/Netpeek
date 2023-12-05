import axiosApi from '../utils/axiosApi';

const speedApi = {
  async getSpeed() {
    try {
      const response = await axiosApi.get('/speed');
      const speedData = response.data;
      return speedData;
    } catch (err) {
      console.log(err);
    }
  },
};

export default speedApi;
