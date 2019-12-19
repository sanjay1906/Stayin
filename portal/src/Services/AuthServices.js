import Config from 'Config';
import { NetworkServices, LogServices } from 'Services';

const logger = LogServices.getInstance('AuthServices');
const AUTH_LOCALSTORAGEKEY = 'panther';

class AuthService {
  constructor() {
    const authString = localStorage.getItem(AUTH_LOCALSTORAGEKEY);
    if (authString) {
      this._auth = JSON.parse(authString);
    }
  }

  /**
   * @param {string} username
   * @param {string} password
   */
  async login(username, password) {
    const response = await NetworkServices.post(`${Config.SERVER_URL}/login`, {
      username,
      password
    });

    if (response.success) {
      localStorage.setItem(AUTH_LOCALSTORAGEKEY, JSON.stringify(response.data));
      this._auth = response.data;
    }

    logger.debug(response);
    return response;
  }
  async managerlogin(username, password) {
    const response = await NetworkServices.post(
      `${Config.SERVER_URL}/managerlogin`,
      {
        username,
        password
      }
    );

    if (response.success) {
      localStorage.setItem(AUTH_LOCALSTORAGEKEY, JSON.stringify(response.data));
      this._auth = response.data;
    }

    logger.debug(response);
    return response;
  }

  isAuthenticated() {
    if (!this._auth) {
      return false;
    }

    if (Date.now() > this._auth.expiredOn) {
      localStorage.removeItem(AUTH_LOCALSTORAGEKEY);
      this._auth = undefined;
      return false;
    }

    return true;
  }

  getToken() {
    if (!this._auth) {
      return null;
    }
    return this._auth.token;
  }

  async logout() {
    localStorage.removeItem(AUTH_LOCALSTORAGEKEY);
    this._auth = undefined;
  }

    /**
   * @param {string} username
   * @param {string} password
   */
  async signup(firstname,lastname,username, password) {
    const response = await NetworkServices.post(`${Config.SERVER_URL}/signup`, {
      firstname,
      lastname,
      username,
      password
    });

    if (response.success) {
      localStorage.setItem(AUTH_LOCALSTORAGEKEY, JSON.stringify(response.data));
      this._auth = response.data;
    }

    logger.debug(response);
    return response;
  }
}

export default new AuthService();
