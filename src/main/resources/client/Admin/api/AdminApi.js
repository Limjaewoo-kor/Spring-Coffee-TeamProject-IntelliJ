import { Ajax } from "../../Common/lib/Ajax.js";
import { AdminDTO } from "../model/AdminDTO.js";

export class AdminApi {
  constructor() {
    this.ajax = new Ajax();
  }

  // 화면
  async callMain() {
    console.log("ajax-callmain");

    let result;
    try {
      result = await this.ajax.sendAjaxGet(
        "http://192.168.1.131:8080/hiddenc/login/main"
      );
    } catch (e) {
      console.log("error: " + e);
    }
    return result;
  }

  async callAdminPage() {
    console.log("ajax-adminpage");
    let result;
    try {
      result = await this.ajax.sendAjaxGet(
        "http://192.168.1.131:8080/hiddenc/admin/cafe"
      );
    } catch (e) {
      console.log("error:" + e);
    }
    return result;
  }

  async callCafeList() {
    console.log("ajax-adminpage-cafeList");
    let result;
    try {
      result = await this.ajax.sendAjaxGet(
        "http://192.168.1.131:8080/hiddenc/admin/cafe"
      );
    } catch (e) {
      console.log("error:" + e);
    }
    return result;
  }

  async callMemberList() {
    console.log("ajax-adminpage-member");
    let result;
    try {
      result = await this.ajax.sendAjaxGet(
        "http://192.168.1.131:8080/hiddenc/admin/user"
      );
    } catch (e) {
      console.log("error:" + e);
    }
    return result;
  }

  async callReviseCafe() {
    console.log("ajax-adminpage-revisecafe");
    let result;
    try {
      result = await this.ajax.sendAjaxGet(
        "http://192.168.1.131:8080/hiddenc/admin/addcafe/byuser"
      );
    } catch (e) {
      console.log("error:" + e);
    }
    return result;
  }

  // 데이터
  async addCafe(cafeData) {
    console.log("ajax-admin-addcafe");

    let result;
    try {
      result = await this.ajax.sendAjaxPostFile(
        "http://192.168.1.131:8080/hiddenc/admin/addcafe",
        cafeData
      );
    } catch (e) {
      console.log("error:" + e);
    }
    return result;
  }

  async reviseCafe(cafeData) {
    console.log("ajax-admin-addcafe-byuser");

    let result;
    try {
      result = await this.ajax.sendAjaxPostFile(
        "http://192.168.1.131:8080/hiddenc/admin/addcafe/byuser",
        cafeData
      );
    } catch (e) {
      console.log("error:" + e);
    }
    return result;
  }

  async search(adminData) {
    console.log("ajax-search");
    let result;
    try {
      result = await this.ajax.sendAjaxPostFile(
        "http://192.168.1.131:8080/hiddenc/login/search/result",
        adminData
      );
    } catch (e) {
      console.log("error:" + e);
    }

    return result;
  }
}
