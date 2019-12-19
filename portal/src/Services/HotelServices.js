import { NetworkServices, LogServices } from 'Services';
import Config from 'Config';
const logger = LogServices.getInstance('HotelServices');

class HotelServices {
  async addHotel(data) {
    const response = await NetworkServices.post(
      `${Config.SERVER_URL}/addHotel`,
      data
    );
    logger.debug(response);
    return response;
  }

  async addHotelImage(imageName, imageSource) {
    const hotelImage = await NetworkServices.uploadFile(imageName, imageSource);
    return hotelImage;
  }

  async getHotels() {
    const response = await NetworkServices.get(`${Config.SERVER_URL}/hotels`);
    return response;
  }

  async getHotelById(id) {
    const response = await NetworkServices.get(
      `${Config.SERVER_URL}/hotels/${id}`
    );
    return response;
  }

  async searchHotel(search) {
    const response = await NetworkServices.get(
      `${Config.SERVER_URL}/hotels/search/${search}`
    );
    return response;
  }
}

export default new HotelServices();
