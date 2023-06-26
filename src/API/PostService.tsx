import axios from 'axios';

export default class PostService {
  static async getAll(querry: string, offset: number, filmcount: number, options: string='title') {
    const response = await axios.get('https://digital-order.ru/api/getfilms/', {
      params: {
        q: querry,
        offset: offset,
        filmcount: filmcount,
        s: options
      }
    })
    return response.data
  }
}
