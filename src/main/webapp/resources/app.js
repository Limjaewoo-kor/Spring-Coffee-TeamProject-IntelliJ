// let UserCTR = require("./client/User/controller/UserCTR.js");
// let UserService = require("./client/User/service/UserService.js");
// let UserComponent = require("./client/User/view/UserComponent.js");

import { UserCTR } from "./client/User/controller/UserCTR.js";
import { UserService } from "./client/User/service/UserService.js";
import { UserComponent } from "./client/User/view/UserComponent.js";

import { AdminCTR } from "./client/Admin/controller/AdminCTR.js";
import { AdminService } from "./client/Admin/service/AdminService.js";
import { AdminComponent } from "./client/Admin/view/AdminComponent.js";

// import { UserCTR } from "http://192.168.1.131:8080/hiddenc/resources/client/User/controller/UserCTR.js";
// import { UserService } from "http://192.168.1.131:8080/hiddenc/resources/client/User/service/UserService.js";
// import { UserComponent } from "http://192.168.1.131:8080/hiddenc/resources/client/User/view/UserComponent.js";

const user_app = new UserCTR(new UserService(), new UserComponent());
const admin_app = new AdminCTR(new AdminService(), new AdminComponent());
console.log("app.js");

function getContextPath() {
  var hostIndex = location.href.indexOf(location.host) + location.host.length;
  return location.href.substring(
    hostIndex,
    location.href.indexOf("/", hostIndex + 1)
  );
}
