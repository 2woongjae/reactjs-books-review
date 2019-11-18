export default class TokenService {
  remove() {
    localStorage.removeItem('token');
  }
}
