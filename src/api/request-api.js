export class RequestApi {
  constructor({ host, endpoint }) {
    this.host = host;
    this.endpoint = endpoint;
  }

  getUrl() {
    return `${this.host}/${this.endpoint}`;
  }
}
