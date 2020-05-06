import axios from 'axios';

import { config } from '../../config';
import { RequestApi } from './request-api';

class TopicsApi extends RequestApi {
  constructor({ host }) {
    super({ host, endpoint: 'topics' });
  }

  async getOne(id) {
    const response = await axios.get(`${this.getUrl()}/${id}`);

    return response.data;
  }

  async getList() {
    const response = await axios.get(`${this.getUrl()}/`);

    return response.data;
  }
}

export const topicsApi = new TopicsApi(config.api);
