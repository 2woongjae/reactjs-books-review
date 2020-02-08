import axios from "axios";

export default class LoginService {
  static login = user => axios.post("https://api.marktube.tv/v1/me", user);

  static logout = token =>
    axios.delete("https://api.marktube.tv/v1/me", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
}
