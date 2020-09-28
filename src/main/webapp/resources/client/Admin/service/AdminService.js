import { AdminDTO } from "../model/AdminDTO.js";
import { AdminApi } from "../api/AdminApi.js";

export class AdminService {
  constructor() {
    this.api = new AdminApi();
  }
  // 정보
  async addCafe(cafeData) {
    let result;

    try {
      result = await this.api.addCafe(cafeData);
    } catch (e) {
      console.log("service-error: " + e);
    }

    if (result === undefined || result === "undefined") {
      console.log("Service-result-undefined:" + result);
      this.view.makeAddcafePage();
      return;
    } else {
      console.log("Service-result:" + result);
      alert("신규 카페가 성공적으로 등록되었습니다.");
      return result;
    }
  }

  async reviseCafe(cafeData) {
    let result;

    try {
      result = await this.api.reviseCafe(cafeData);
    } catch (e) {
      console.log("service-error: " + e);
    }

    if (result === undefined || result === "undefined") {
      console.log("Service-result-undefined:" + result);
      this.view.makeAddcafePage();
      return;
    } else {
      console.log("Service-result:" + result);
      alert("신규 카페가 성공적으로 등록되었습니다.");
      return result;
    }
  }
  async search(adminData) {
    let result;
    try {
      result = await this.api.search(adminData);
    } catch (e) {
      console.log("service-error: " + e);
    }

    if (result === undefined || result === "undefined") {
      console.log("Service-result-undefined: " + result);
      return;
    } else {
      console.log("Service-result:" + result);
      return result;
    }
  }
  // view
  async callMain() {
    let result;

    try {
      result = await this.api.callMain();
    } catch {
      console.log("Service-error: " + e);
    }
    return result;
  }

  //관리자 메인화면 따로없어서 카페등록현황으로 연결
  async callAdminPage() {
    let result;

    try {
      result = await this.api.callAdminPage();
    } catch {
      console.log("Service-error: " + e);
    }
    return result;
  }

  async callCafeList() {
    var result;

    try {
      result = await this.api.callCafeList();
    } catch (e) {
      console.log("error:" + e);
    }

    return result; //저장한 정보를 컨트롤러의 콜백함수에서 받아서 뷰가 가진 메소드의 매개변수로 넘긴다.
  } //DTO 활용해야할 것 같은데..

  async callMemberList() {
    let result;

    try {
      result = await this.api.callMemberList();
    } catch {
      console.log("Service-error: " + e);
    }
    return result;
  }

  async callReviseCafe() {
    let result;

    try {
      result = await this.api.callReviseCafe();
    } catch (e) {
      console.log("error: " + e);
    }
    return result;
  }
}
