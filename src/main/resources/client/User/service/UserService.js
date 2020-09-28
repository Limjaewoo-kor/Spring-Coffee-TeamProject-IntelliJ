import { UserApi } from "../api/UserApi.js";
import { UserDTO } from "../model/UserDTO.js"; //통신결과를 받아서 반복문으로 배열의 요소마다 추가해서 정보 저장

export class UserService {
  constructor() {
    this.api = new UserApi();
  }

  //화면
  async callMain() {
    let result;

    try {
      result = await this.api.callMain();
    } catch (e) {
      console.log("Service-error:" + e);
    }

    return result;
  }

  async callHome() {
    let result;

    try {
      result = await this.api.callHome();
    } catch (e) {
      console.log("Service-error: " + e);
    }
    return result;
  }

  //정보
  async signin(userData) {
    var result;

    try {
      result = await this.api.signin(userData);
    } catch (e) {
      console.log("Service-error: " + e);
    }

    console.log("id");
    console.log("type:" + typeof result);

    switch (result) {
      case "true":
        let result_of_main = await this.callMain();
        if (result_of_main === undefined || result_of_main === "undefined") {
          console.log("Service-result-undefined:" + result_of_main);
          alert("로그인 중 오류가 발생했습니다.");
          this.callHome();
          return;
        } else {
          localStorage.setItem("user_id", userData.get("user_id"));
          return ["member", result_of_main];
        }

      case "admin_true":
        let result_of_admin = await this.api.callAdminPage();
        if (result_of_admin === undefined || result_of_admin === "undefined") {
          console.log("Service-result-undefined:" + result_of_admin);
          alert("로그인 중 오류가 발생했습니다.");
          this.callHome();
          return;
        } else {
          console.log("Service-result:" + result_of_admin);
          localStorage.setItem("admin_id", userData.get("user_id"));
          return ["admin", result_of_admin];
        }

      case "false":
        alert("아이디 혹은 비밀번호를 확인하세요.");
        this.callHome();
        break;
      case "blockUser":
        alert("접근이 거부된 유저 입니다.");
        this.callHome();
        break;
      default:
        alert("로그인중 문제가 발생했습니다. 다시 시도 하세요.");
        this.callHome();
        break;
    }
  }

  async signup(userData) {
    var result;
    try {
      result = await this.api.signup(userData);
    } catch (e) {
      console.log("error:" + e);
    }

    console.log("id");
    console.log("type" + typeof result);

    if (result === undefined || result === "undefined") {
      console.log("Service-result-undefined:" + result);
      this.callHome();
      return;
    } else if (result.includes("Sorry")) {
      alert("이미 사용중인 아이디 입니다.");
    } else {
      console.log("Service-result:" + result);
      alert("환영합니다.");
      this.callHome();
      return result;
    }
  }

  async addCafe(userData) {
    var result;

    try {
      result = await this.api.addCafe(userData);
    } catch (e) {
      console.log("Service-error:" + e);
    }

    if (result === undefined || result === "undefined") {
      console.log("Service-result-undefined:" + result);
      return;
    } else {
      console.log("Service-result:" + result);
      return result;
    }
  }

  async search(userData) {
    var result;

    try {
      result = await this.api.search(userData);
    } catch (e) {
      console.log("Service-error:" + e);
    }

    if (result === undefined || result === "undefined") {
      console.log("Service-result-undefined: " + result);
      return;
    } else {
      console.log("Service-result:" + result);
      return result;
    }
  }

  async searchCafeInfo(userData) {
    var result;

    try {
      result = await this.api.searchCafeInfo(userData);
    } catch (e) {
      console.log("Service-error:" + e);
    }

    if (result === undefined || result === "undefined") {
      console.log("Service-result-undefined: " + result);
      return;
    } else {
      console.log("Service-result:" + result);
      return result;
    }
  }

  async settings(userData) {
    var result;

    try {
      result = await this.api.settings(userData);
    } catch (e) {
      console.log("Service-error:" + e);
    }

    if (result === undefined || result === "undefined") {
      console.log("Service-result-undefined: " + result);
      return;
    } else {
      console.log("Service-result:" + result);
      return result;
    }
  }

  async addReview(userData) {
    var result;

    try {
      result = await this.api.addReview(userData);
    } catch (e) {
      console.log("Service-error: " + e);
    }

    if (result === undefined || result === "undefined") {
      console.log("Service-result-undefined: " + result);
      return;
    } else {
      console.log("Service-result:" + result);
      return result;
    }
  }

  async callDashboard(userData) {
    let result;

    try {
      result = await this.api.callDashboard(userData);
    } catch (e) {
      console.log("error:" + e);
    }

    return result;
  }

  async callVisitedCafe(userData) {
    let result;

    try {
      result = await this.api.callVisitedCafe(userData);
    } catch (e) {
      console.log("error:" + e);
    }
    return result;
  }

  async callSubscription(userData) {
    let result;

    try {
      result = await this.api.callSubscription(userData);
    } catch (e) {
      console.log("error: " + e);
    }

    return result;
  }
}
