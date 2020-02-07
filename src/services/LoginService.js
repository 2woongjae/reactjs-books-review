import axios from "axios";

export default class LoginService {
  static login = (email, password) =>
    axios.post("https://api.marktube.tv/v1/me", {
      email,
      password
    });

  static logout = token =>
    axios.delete("https://api.marktube.tv/v1/me", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
}
