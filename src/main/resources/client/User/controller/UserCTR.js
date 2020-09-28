import { UserService } from "../service/UserService.js";
import { UserComponent } from "../view/UserComponent.js";
import { UserView } from "../view/UserView.js";

import { AdminComponent } from "../../Admin/view/AdminComponent.js";
import { AdminService } from "../../Admin/service/AdminService.js";
import { AdminCTR } from "../../Admin/controller/AdminCTR.js";


export class UserCTR {
  constructor(service, view) {
    this.service = service;
    this.view = view;
    this.self = this;

    // this.view.makeCafeInfo()
    // this.makeCafeInfo()

    // this.view.makeDashboard();
    // this.makeDashboard();

    // this.view.makeAddCafe();
    // this.makeAddCafe();

    // this.view.makeSettings();
    //this.makeSettings

    // this.view.makeLoginMain();
    // this.makeLoginMain();

    // this.view.makeSubscription()
    // this.makeSubscription()

    // this.view.makeSearchResult();
    // this.makeSearchResult();

    this.view.signin((e) => {
      this.signin(e);
    });
    this.view.signup((e) => {
      this.signup(e);
    });
  }
  //callback functions are to be splited into UserComponent and UserService
  signin = async (e) => {
    e.preventDefault();
    console.log("PREVENT");

    var result;
    var service = new UserService();
    let userData = new FormData(document.getElementById("js-signin-form"));

    for (let value of userData.values()) {
      console.log("value:" + value);
    }

    result = await service.signin(userData);

    if (result === undefined || result === "undefined") {
      console.log("CTR-return-error:" + result);
    } else if (result[0] === "member") {
      console.log("컨트롤러-서비스 결과값:" + result);
      this.view.makeLoginMain(result[1]);
      this.makeLoginMain();
    } else if (result[0] === "admin") {
      console.log("컨트롤러-서비스 결과값:" + result);
      this.view.makeAdminMain(result[1]);
      this.makeAdminMain();

    }
  };

  signup = async (e) => {
    e.preventDefault();
    console.log("PREVENT");
    var result;
    let userData = new FormData(this.view.signup_form);
    for (let value of userData.values()) {
      console.log("value:" + value);
    }

    let service = new UserService();
    result = await service.signup(userData);

    if (result === undefined || result === "undefined") {
      console.log("CTR-return-error:" + result);
    } else {
      console.log("컨트롤러-서비스 결과값:" + result); //화면은 만들필요 없음, 서비스에서 통신해서 가져옴
    }
  };

  search = async (e) => {
    e.preventDefault();
    var result;

    let userData = new FormData(this.view.search_form);
    for (let value of userData.values()) {
      console.log("vlaue:" + value);
    }

    let service = new UserService();
    result = await service.search(userData);

    if (result === undefined || result === "undefined") {
      console.log("CTR-return-error:" + result);
    } else {
      console.log("컨트롤러-서비스 결과값:" + result);
      this.view.makeSearchResult(result); //헤더 클릭 되나?
    }
  };

  //listener pages
  makeCafeInfo() {
    this.makeHeaderComp();
    this.makeAddReviewComp();
  }

  makeSubscription() {
    this.makeHeaderComp();
    this.makeUserMenuComp();
    //유저 클릭시 넘어갈 이벤트와 리스너 필요함
    this.makeCafeListComp();
  }

  makeDashboard() {
    this.makeHeaderComp();
    this.makeUserMenuComp();
  }

  makeAddCafe() {
    this.makeHeaderComp();
    this.makeAddCafeComp();
  }

  makeLoginMain() {
    this.makeHeaderComp();
    this.makeCafeListComp();
    this.makeCaffeineListComp();
  }

  makeSearchResult() {
    this.makeHeaderComp();
    this.makeCafeListComp();
  }

  makeVisitedCafe() {
    this.makeHeaderComp();
    this.userMenuComp();
    this.makeCafeListComp();
  }

  makeSettings() {
    this.makeHeaderComp();
    this.makeUserMenuComp();
    this.makeSettingsComp();
  }

  makeAdminMain() {
    this.makeAdminHeaderComp();
    this.makeCafeListComp();
    this.makeCaffeineListComp();
  }

  //LISTENER COMPONENTS
  makeAddReviewComp() {
    document
      .getElementsByClassName("js-cafe-review-btn")[0]
      .addEventListener("click", async (e) => {
        e.preventDefault();
        var result;
        var service = new UserService();
        var view = new UserComponent();

        let userData = new FormData(
          document.getElementById("js-cafe-review-form")
        );
        for (let value of userData.values()) {
          console.log("value:" + value);
        }

        result = await service.settings(userData);

        if (result === undefined || result === "undefined") {
          console.log("CTR-return-error:" + result);
          view.makeCafeInfo();
          this.makeCafeInfo();
        } else {
          console.log("컨트롤러-서비스 결과값: " + result);
          alert("성공적으로 등록되었습니다.");
          view.makeCafeInfo(); //새로 더한 리뷰 추가해서 페이지 다시 만들기
          this.makeCafeInfo();
        }
      });
  }
  makeSettingsComp() {
    document
      .getElementsByClassName("js-user-pwchange-btn")[0]
      .addEventListener("click", async (e) => {
        e.preventDefault();

        console.log("setting-form-set-ready");

        let userData = new FormData(
          document.getElementById("js-user-settings-form")
        );
        var result;
        for (let value of userData.values()) {
          console.log("vlaue: " + value);
        }

        let input_1 = userData.get("user_changed_pw1");
        let input_2 = userData.get("user_changed_pw2");

        if (
          input_1 !== input_2 ||
          input_1 === "" ||
          input_2 === "" ||
          isNaN(input_1) == true ||
          isNaN(input_2) == true
        ) {
          alert("입력값이 다릅니다.");
          return;
        }

        let service = new UserService();
        result = await service.settings(userData);

        if (result === undefined || result === "undefined" || result === "") {
          console.log("CTR-return-error:" + result);
          //to make the page user id and user image should be needed
        } else {
          console.log("컨트롤러-서비스 결과값:" + result);
          alert("성공적으로 변경되었습니다.");
          
          this.view.makeSettings();
          this.makeSettings();

        }
      });
  }
  makeSearchComp() {
    document
      .getElementById("js-search-btn")
      .addEventListener("click", async (e) => {
        e.preventDefault();
        var result;
        let service = new UserService();


        let userData = new FormData(this.view.search_form);
        for (let value of userData.values()) {
          console.log("vlaue:" + value);
        }

        result = await service.search(userData);

        if (result === undefined || result === "undefined") {
          console.log("CTR-return-error:" + result);
        } else {
          console.log("컨트롤러-서비스 결과값:" + result);
          this.view.makeSearchResult(result);

          this.makeSearchResult();

        }
      });
  }
  makeHeaderComp() {
    //reactive-header
    document
      .getElementsByClassName("js-user-header-menu")[0]
      .addEventListener("click", async (e) => {
        e.preventDefault();

        console.log("headermenu-this");

        if (
          e.target.tagname === "UL" ||
          e.target.tagName === "LI" ||
          e.target.tagName === "A"
        ) {
          // console.log('taget' + e.target.tagName)
          if (e.target.innerHTML.includes("Home")) {
            console.log("Home");
            var result;

            let view = new UserComponent();
            var service = new UserService();

            try {
              result = await service.callMain();
            } catch (e) {
              console.log("error:" + e);
            }

            view.makeLoginMain(result);
            this.makeLoginMain();

            //should i add something on here?
          } else if (e.target.innerHTML.includes("User")) {
            console.log("user");

            let userData = localStorage.getItem("user_id");
            var result;

            let view = new UserComponent();
            var service = new UserService();

            try {
              result = await service.callDashboard(userData);
            } catch (e) {
              console.log("error: " + e);
            }

            if (result === undefined || result === "undefined") {
              console.log("CTR-result is undefined" + result);
              return;
            } else {
              view.makeDashboard(result);
              this.makeDashboard();
            }
          } else if (e.target.innerHTML.includes("Search")) {
            console.log("search");
            var service = new UserService();
            document
              .getElementsByClassName("js-search-btn")[0]
              .addEventListener("click", async (e) => {
                e.preventDefault();
                var result;

                let userData = new FormData(
                  document.getElementById("js-search-form")
                );
                for (let value of userData.values()) {
                  console.log("vlaue:" + value);
                }

                result = await service.search(userData);

                if (result === undefined || result === "undefined") {
                  console.log("CTR-return-error:" + result);
                } else {
                  console.log("컨트롤러-서비스 결과값:" + result);

                  view.makeSearchResult(result);
                  this.makeSearchResult();
                }
              });
          }
        } else {
          console.log("you clicked invalid area" + e.target.tagName);
        }
      });
    //header
    document
      .getElementsByClassName("js-user-header-menu")[1]
      .addEventListener("click", async (e) => {
        e.preventDefault();

        console.log("headermenu-this");

        if (
          e.target.tagname === "UL" ||
          e.target.tagName === "LI" ||
          e.target.tagName === "A"
        ) {
          // console.log('taget' + e.target.tagName)
          if (e.target.innerHTML.includes("Home")) {
            console.log("Home");
            var result;

            let view = new UserComponent();
            var service = new UserService();

            try {
              result = await service.callMain();
            } catch (e) {
              console.log("error:" + e);
            }

            view.makeLoginMain(result);
            this.makeLoginMain();

            //should i add something on here?
          } else if (e.target.innerHTML.includes("User")) {
            console.log("user");

            let userData = localStorage.getItem("user_id");
            var result;

            let view = new UserComponent();
            var service = new UserService();
            try {
              result = await service.callDashboard(userData);
            } catch (e) {
              console.log("error: " + e);
            }

            if (result === undefined || result === "undefined") {
              console.log("CTR-result is undefined" + result);
              return;
            } else {
              view.makeDashboard(result);
              this.makeDashboard();
            }
          } else if (e.target.innerHTML.includes("Search")) {
            console.log("search");
            var service = new UserService();
            document
              .getElementsByClassName("js-search-btn")[0]
              .addEventListener("click", async (e) => {
                e.preventDefault();
                var result;

                let userData = new FormData(
                  document.getElementById("js-search-form")
                );
                for (let value of userData.values()) {
                  console.log("vlaue:" + value);
                }

                result = await service.search(userData);

                if (result === undefined || result === "undefined") {
                  console.log("CTR-return-error:" + result);
                } else {
                  console.log("컨트롤러-서비스 결과값:" + result);

                  view.makeSearchResult(result);
                  this.makeSearchResult();
                }
              });
          }
        } else {
          console.log("you clicked invalid area" + e.target.tagName);
        }
      });
  } //

  makeCafeListComp() {
    //Userview의   makeSearchResult 에서 클래스 추가
    document
      .getElementsByClassName("js-cafe-list")[0]
      .addEventListener("click", async (e) => {
        e.preventDefault();
        if (e.target.tagName === "H3" || e.target.tagName === "A") {
          let str = String(e.target.innerHTML);
          var result;
          var service = new UserService();
          let view = new UserComponent();
          let pattern = /(?!value=")\d{0,99999}(?<!\")/;
          let found = str.match(pattern);
          let value = found.join();

          try {
            result = await service.searchCafeInfo(value);
          } catch (e) {
            console.log("error:" + e);
          }
          view.makeCafeInfo(result);

          document
            .getElementsByClassName("js-cafe-review-btn")[0]
            .addEventListener("click", async (e) => {
              e.preventDefault();
              var result;
              var service = new UserService();

              let userData = new FormData(
                document.getElementById("js-cafe-review-form")
              );
              for (let value of userData.values()) {
                console.log("value:" + value);
              }

              result = await service.settings(userData);

              if (result === undefined || result === "undefined") {
                console.log("CTR-return-error:" + result);
                this.view.makeCafeInfo();
                this.makeCafeInfo();
              } else {
                console.log("컨트롤러-서비스 결과값: " + result);
                alert("성공적으로 등록되었습니다.");
                this.view.makeCafeInfo(); //새로 더한 리뷰 추가해서 페이지 다시 만들기
                this.makeCafeInfo();
              }
            });
        } else {
          console.log("you clicked invalid area:" + e.target.tagName);
        }
      });

  }

  makeCaffeineListComp() {
    document
      .getElementsByClassName("js-caffeine-list")[0]
      .addEventListener("click", async (e) => {
        e.preventDefault();
        console.log("CTR-CAFE: " + e.target.innerHTML);
        if (e.target.tagName === "H3" || e.target.tagName === "A") {
          let str = String(e.target.innerHTML);
          let pattern = /(?!value=")\d{0,99999}(?<!\")/;
          let found = str.match(pattern);
          let value = found.join();
          var result;
          var view = new UserComponent();
          var service = new UserService();

          try {
            result = await service.searchCafeInfo(value);
          } catch (e) {
            console.log("error:" + e);
          }
          view.makeVisitedCafe(result); //other person's page
          this.makeVisitedCafe();
        } else {
          console.log("you clicked invalid area:" + e.target.tagName);
        }
      });
  }

  makeUserMenuComp() {
    console.log("usermenu");
    document
      .getElementsByClassName("js-user-menu")[0]
      .addEventListener("click", async (e) => {
        e.preventDefault();

        if (e.target.tagName === "A" || e.target.tagName === "I") {
          if (e.target.innerHTML.includes("Dashboard")) {
            let service = new UserService();
            let view = new UserComponent();

            console.log("clicked Dashboard");
            let userData = localStorage.getItem("user_id");
            console.log("local data:" + userData);
            let result;

            try {
              result = await service.callDashboard(userData);
            } catch (e) {
              console.log("error: " + e);
            }

            if (result === undefined || result === "undefined") {
              console.log("CTR-result is undefined" + result);
              return;
            } else {
              view.makeDashboard(result);
              this.makeDashboard();
            }
          } else if (e.target.innerHTML.includes("My Hidden Cafe")) {
            console.log("clicked My hidden cafe(visited cafe)");
            let userData = localStorage.getItem("user_id");
            console.log("local data:" + userData);
            let view = new UserComponent();
            var service = new UserService();
            let result;

            try {
              result = await service.callVisitedCafe(userData);
            } catch (e) {
              console.log("error: " + e);
            }

            if (result === undefined || result === "undefined") {
              console.log("CTR-result is undefined" + result);
              return;
            } else {
              view.makeVisitedCafe(result);
              this.makeVisitedCafe();
            }
          } else if (e.target.innerHTML.includes("My Subscription")) {
            console.log("clicked My subscription");
            let userData = localStorage.getItem("user_id");
            console.log("local data:" + userData);
            let result;
            let service = new UserService();
            let view = new UserComponent();

            try {
              result = await service.callSubscription(userData);
            } catch (e) {
              console.log("error:" + e);
            }

            if (result === undefined || result === "undefined") {
              console.log("CTR-result is undefined" + result);
              return;
            } else {
              view.makeSubscription(result);
              this.makeSubscription();
            }
          } else if (e.target.innerHTML.includes("Add New Hidden Cafe")) {
            console.log("clicked Add new hidden cafe");
            let user_id = localStorage.getItem("user_id");
            let user_img = localStorage.getItem("user_img");
            console.log("local data:" + user_id);
            console.log("local data:" + user_img);
            let view = new UserComponent();
            var service = new UserService();

            view.makeAddCafe(user_id, user_img);
            this.makeAddCafe();
          } else if (e.target.innerHTML.includes("Bookmark")) {
            console.log("clicked Bookmark");
            //
          } else if (e.target.innerHTML.includes("Settings")) {
            console.log("clicked Settings");
            // let user_id = localStorage.getItem("user_id");
            // let user_img = localStorage.getItem("user_img");
            // console.log("local data:" + user_id);
            // console.log("local data:" + user_img);
            let view = new UserComponent();
            var service = new UserService();

            view.makeSettings();
            this.makeSettings();

          }
        } else {
          console.log("you clicked invalid area: " + e.target.tagName);
        }
      });
  }

  makeAddCafeComp() {
    document
      .getElementsByClassName("js-user-addcafe-btn")[0]
      .addEventListener("click", async (e) => {
        e.preventDefault();
        var service = new UserService();
        let view = new UserComponent();
        var result;
        let userData = new FormData(
          document.getElementById("js-addcafe-user-form")
        );
        for (let value of userData.values()) {
          console.log("value:" + value);
        }
        result = await service.addCafe(userData);

        if (result === undefined || result === "undefined") {
          console.log("CTR-return-error:" + result);
          view.makeAddCafe();
          this.makeAddCafe();
        } else {
          console.log("컨트롤러-서비스 결과값:" + result);
          view.makeAddCafe();
          this.makeAddCafe();
          alert("추가 요청이 성공적으로 전달되었습니다.");
          //화면은 필요하지 않음
        }
      });
  }

  makeAdminHeaderComp() {
    // responsive header
    document
      .getElementsByClassName("js-admin-header-menu")[0]
      .addEventListener("click", async (e) => {
        e.preventDefault();
        if (
          e.target.tagname === "UL" ||
          e.target.tagName === "LI" ||
          e.target.tagName === "A"
        ) {
          // console.log('taget' + e.target.tagName)
          if (e.target.innerHTML.includes("Home")) {
            console.log("clicked Home");
            var result;

            var view = new AdminComponent();
            var service = new AdminService();
            var ctr = new AdminCTR();

            try {
              result = await service.callMain();
            } catch (e) {
              console.log("error: " + e);
            }
            if (result === undefined || result === "undefined") {
              console.log("CTR-result is undefined" + result);
              return;
            } else {
              view.makeMainPage(result);
              ctr.makeAdminMainPage();
              console.log("received data:" + result);
            }
          } else if (e.target.innerHTML.includes("Search")) {
            console.log("clicked Search");
            document
              .getElementsByClassName("js-search-btn")[0]
              .addEventListener("click", async (e) => {
                e.preventDefault();
                var result;

                var view = new AdminComponent();
                var service = new AdminService();
                var ctr = new AdminCTR();

                let adminData = new FormData(
                  document.getElementById("js-search-form")
                );
                for (let value of adminData.values()) {
                  console.log("value:" + value);
                }

                result = await service.search(adminData);

                if (result === undefined || result === "undefined") {
                  console.log("CTR-return-error:" + result);
                } else {
                  console.log("컨트롤러-서비스 결과값:" + result);

                  view.makeSearchResultPage(result);
                  ctr.makeSearchResultPage();
                }
              });
          } else if (e.target.innerHTML.includes("Admin")) {
            console.log("clicked Admin");
            var result;

            let adminData = localStorage.getItem("admin_id");
            console.log("local data:" + adminData);

            var view = new AdminComponent();
            var service = new AdminService();
            var ctr = new AdminCTR();

            try {
              result = await service.callAdminPage(adminData);
            } catch (e) {
              console.log("error: " + e);
            }

            if (result === undefined || result === "undefined") {
              console.log("CTR-result is undefined" + result);
              return;
            } else {
              view.makeCafeListPage(result);
              ctr.makeCafeListPage();
            }
          }
        } else {
          console.log("you clicked invalid area");
        }
      });
    // header
    document
      .getElementsByClassName("js-admin-header-menu")[1]
      .addEventListener("click", async (e) => {
        e.preventDefault();
        if (
          e.target.tagname === "UL" ||
          e.target.tagName === "LI" ||
          e.target.tagName === "A"
        ) {
          // console.log('taget' + e.target.tagName)
          if (e.target.innerHTML.includes("Home")) {
            console.log("clicked Home");
            var result;

            var view = new AdminComponent();
            var service = new AdminService();
            var ctr = new AdminCTR();

            try {
              result = await service.callMain();
            } catch (e) {
              console.log("error: " + e);
            }
            if (result === undefined || result === "undefined") {
              console.log("CTR-result is undefined" + result);
              return;
            } else {
              view.makeMainPage(result);
              ctr.makeMainPage();
              console.log("received data:" + result);
            }
          } else if (e.target.innerHTML.includes("Search")) {
            console.log("clicked Search");
            document
              .getElementsByClassName("js-search-btn")[0]
              .addEventListener("click", async (e) => {
                e.preventDefault();
                var result;

                let adminData = new FormData(
                  document.getElementById("js-search-form")
                );
                var view = new AdminComponent();
                var service = new AdminService();
                var ctr = new AdminCTR();

                for (let value of adminData.values()) {
                  console.log("value:" + value);
                }
                result = await service.search(adminData);

                if (result === undefined || result === "undefined") {
                  console.log("CTR-return-error:" + result);
                } else {
                  console.log("컨트롤러-서비스 결과값:" + result);

                  view.makeSearchResultPage(result);
                  ctr.makeSearchResultPage();
                }
              });
          } else if (e.target.innerHTML.includes("Admin")) {
            console.log("clicked Admin");
            var result;

            let adminData = localStorage.getItem("admin_id");
            console.log("local data:" + adminData);

            var view = new AdminComponent();
            var service = new AdminService();
            var ctr = new AdminCTR();

            try {
              result = await service.callAdminPage(adminData);
            } catch (e) {
              console.log("error: " + e);
            }

            if (result === undefined || result === "undefined") {
              console.log("CTR-result is undefined" + result);
              return;
            } else {
              view.makeCafeListPage(result);
              ctr.makeCafeListPage();
            }
          }
        } else {
          console.log("you clicked invalid area");
        }
      });
  }
}
