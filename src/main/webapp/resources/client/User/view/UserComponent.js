import { UserView } from "./UserView.js";
import { CommonView } from "../../Common/view/CommonView.js";
import { AdminView } from "../../Admin/view/AdminView.js";

export class UserComponent {
  constructor() {
    this.user_view = new UserView();
    this.common_view = new CommonView();

    //form
    this.signup_form = document.getElementById("js-signup-form");
    this.signin_form = document.getElementById("js-signin-form");
    this.add_cafe_form = document.getElementById("js-addcafe-user-form");
    this.search_form = document.getElementById("js-search-form");
    this.settings_form = document.getElementById("js-user-settings-form");
    this.review_form = document.getElementById("js-cafe-review-form");

    //btn
    this.signin_btn = document.getElementsByClassName("js-signin-btn")[0];
    this.signup_btn = document.getElementsByClassName("js-signup-btn")[0];
    this.cafe_review_btn = document.getElementsByClassName(
        "js-cafe-review-btn"
    )[0];
    this.search_btn = document.getElementsByClassName("js-search-btn")[0];
    this.add_cafe_btn = document.getElementsByClassName(
        "js-user-addcafe-btn"
    )[0];
    this.settings_btn = document.getElementsByClassName(
        "js-user-pwchange-btn"
    )[0];

    //preview btn
    this.profile_btn = document.getElementsByClassName(
        "js-user-profile-btn"
    )[0];
    this.bgimg_btn = document.getElementsByClassName("js-user-bgimg-btn")[0];

    //tag
    this.cafe_review_list = document.getElementsByClassName(
        "js-cafe-review-list"
    );
    this.mini_map = document.getElementById("js-map-mini");

    this.header_img = document.getElementsByClassName("js-user-header-img");
    this.my_hidden_cafe_list = document.getElementsByClassName(
        "js-user-myhiddencafe-list"
    );
    this.half_map = document.getElementById("js-map-half");
    this.search_list = document.getElementsByClassName(
        "js-search-result-list"
    )[0];
    this.review_list = document.getElementsByClassName(
        "js-cafe-review-list"
    )[0];

    //이미지 미리보기
    this.thumnail = document.getElementById("js-thumnail");
    this.upload_profile = document.getElementById("js-upload-profile");
    this.background = document.getElementById("js-back-img");
    this.upload_background = document.getElementById("js-upload-back-img");
  }

  //Listener
  signin(callback) {
    console.log("signin-listener");

    document
        .getElementsByClassName("js-signin-btn")[0]
        .addEventListener("click", callback);
  }

  signup(callback) {
    console.log("signup-listener");
    document
        .getElementsByClassName("js-signup-btn")[0]
        .addEventListener("click", callback);
  }
  addCafe(callback) {
    document
        .getElementsByClassName("js-user-addcafe-btn")[0]
        .addEventListener("click", callback);
  }

  search(callback) {
    document
        .getElementsByClassName("js-search-btn")[0]
        .addEventListener("click", callback);
  }

  settings(callback) {
    document
        .getElementsByClassName("js-user-pwchange-btn")[0]
        .addEventListener("click", callback);
  }

  addReview(callback) {
    document
        .getElementsByClassName("js-cafe-review-btn")[0]
        .addEventListener("click", callback);
  }

  headerMenu(callback) {
    console.log("header-delegation");

    let r_header = document.getElementsByClassName("js-user-header-menu")[0];
    let header = document.getElementsByClassName("js-user-header-menu")[1];

    r_header.addEventListener("click", callback);
    header.addEventListener("click", callback);
  }

  userMenu(callback) {
    console.log("user_menu-delegation");
    document
        .getElementsByClassName("js-user-menu")[0]
        .addEventListener("click", callback);
  }

  caffeineList(callback) {
    console.log("caffeine-list");
    document
        .getElementsByClassName("js-caffeine-list")[0]
        .addEventListener("click", callback);
  }

  cafeList(callback) {
    console.log("cafe-list");
    document
        .getElementsByClassName("js-cafe-list")[0]
        .addEventListener("click", callback);
  }

  //Pages
  makeLoginMain(result) {
    //main -> makeUserHeader + makeMainCaffeineList + makeMainCafeList + makeFooter(common) + makeSearchPop
    let user_view = new UserView();
    let common_view = new CommonView();
    this.addScript();
    let header = user_view.makeUserHeader();
    let caffeine = user_view.makeMainCaffeineList();
    let cafe = user_view.makeMainCafeList();
    let footer = common_view.makeFooter();
    let pop = common_view.makeSearchPop();
    // this.addScript();
    window.document.body.setAttribute("class", "full-height");
    window.document.body.setAttribute("id", "scrollup");
    window.document.body.innerHTML = header + caffeine + cafe + footer + pop;

    // [
    //   {
    //     cafe_id: 1,
    //     cafe_name: "재카페",
    //     cafe_image:
    //       "resources/cafeimage/898bc8d1-29c4-4bb9-91ac-5dae332b9b54_asdf.jpeg",
    //   },
    //   {
    //     cafe_id: 2,
    //     cafe_name: "은카페",
    //     cafe_image:
    //       "resources/cafeimage/8a8a3516-50e4-4683-9ca7-bbcac2120e48_asdf.jpeg",
    //   },
    //   {
    //     cafe_id: 3,
    //     cafe_name: "재은카페",
    //     cafe_image:
    //       "resources/cafeimage/9a31614e-9410-4f8b-8c18-2da41250f5f8_asdf.jpeg",
    //   },
    // ]; admin도 동일, 아이디만 로컬스토리지에서 뺴서 쓰자
  }

  makeAdminMain(result) {
    //main -> makeUserHeader + makeMainCaffeineList + makeMainCafeList + makeFooter(common) + makeSearchPop
    let user_view = new UserView();
    let common_view = new CommonView();
    let admin_view = new AdminView();
    this.addScript();
    let header = admin_view.makeAdminHeader();
    let caffeine = user_view.makeMainCaffeineList();
    let cafe = user_view.makeMainCafeList();
    let footer = common_view.makeFooter();
    let pop = common_view.makeSearchPop();

    window.window.document.body.setAttribute("class", "full-height");
    window.document.body.setAttribute("id", "scrollup");
    window.document.body.innerHTML = header + caffeine + cafe + footer + pop;
  }

  makeDashboard(result) {
    //dashboard -> makeUserHeader + makeUserMenu + makeDashboard + makeFooter(common) + makeSearchPop
    let user_view = new UserView();
    let common_view = new CommonView();
    this.addScript();
    let header = user_view.makeUserHeader();
    let user_menu = user_view.makeUserMenu();
    let dashboard = user_view.makeDashboard();
    let footer = common_view.makeFooter();
    let pop = common_view.makeSearchPop();

    window.document.body.setAttribute("class", "full-height");
    window.document.body.setAttribute("id", "scrollup");
    window.document.body.innerHTML =
        header + user_menu + dashboard + footer + pop;

    //   {
    //     "user_id": null,
    //     "user_pk": 0,
    //     "user_bg_img": null,
    //     "user_circle_img": null,
    //     "user_like": 0,
    //     "total_visited": 0,
    //     "total_addcafe": 0,
    //     "user_caffeine": 0
    // }
  }

  makeSubscription(result) {
    //my subscription -> makeUserHeader + makeUserMenu + makeMySubscription + makeSubscriptionList(한개씩 추가) + makeFooter(common) + makeSearchPop
    let user_view = new UserView();
    let common_view = new CommonView();
    this.addScript();

    let header = user_view.makeUserHeader();
    let user_menu = user_view.makeUserMenu();
    var subscription = user_view.makeMySubscription();
    let item = user_view.makeSubscriptionItem(); //is it really need?
    let footer = common_view.makeFooter();
    let pop = common_view.makeSearchPop();

    window.document.body.setAttribute("class", "full-height");
    window.document.body.setAttribute("id", "scrollup");
    window.document.body.innerHTML =
        header + user_menu + subscription + footer + pop;

    window.addEventListener("load", () => {
      let dom = document.getElementsByClassName("js-user-myhiddencafe-list")[0];
      console.log("dom" + dom);

      dom.innerHTML += item;
      dom.innerHTML += item;
      dom.innerHTML += item; //for test
      for (let i = 0, max = result.length; i < max; i++) {
        dom += item(result[i]); //result는 나중에 데이터 받아서 구체적으로 바꿔줘야함
      }
    });

    //user_pk => 상대방 pk
    //   {
    //     "push_user": 132,
    //     "user_id": [
    //         {
    //             "user_id": "manje12",
    //             "user_pk": 8
    //         }
    //     ],
    //     "cafeList": [
    //         {
    //             "cafe_id": 1,
    //             "cafe_name": "Starbucks",
    //             "cafe_location": "150:150",
    //             "cafe_image": "1번카페이미지",
    //             "user_pk": 8
    //         },
    //         {
    //             "cafe_id": 4,
    //             "cafe_name": "Starcoffee",
    //             "cafe_location": "120:50",
    //             "cafe_image": "4번카페이미지1",
    //             "user_pk": 8
    //         }
    //     ]
    // }
  }

  makeVisitedCafe(result) {
    //my hidden -> makeUserHeader + makeUserMenu + makeListAndMap + makeHalfListItem(한개씩 추가) + makeFooter + makeSearchPop
    this.addScript();
    let user_view = new UserView();
    let common_view = new CommonView();

    let header = user_view.makeUserHeader();
    let user_menu = user_view.makeUserMenu();
    var half_list = user_view.makeListAndMap();
    let item = user_view.makeHalfListItem();

    let pop = common_view.makeSearchPop();

    window.addEventListener("load", () => {
      let dom = document.getElementsByClassName("js-user-myhiddencafe-list")[0];
      for (let i = 0, max = result.length; i < max; i++) {
        dom.innerHTML += item(result[i]); //result는 나중에 데이터 받아서 구체적으로 바꿔줘야함
      }
    });
    // window.document.body.setAttribute("class", "full-height");
    // window.document.body.setAttribute("id", "scrollup");
    window.document.body.innerHTML = header + user_menu + half_list + pop;

    //user_pk => 로그인한 사람
    //   [
    //     {
    //         "cafe_id": 1,
    //         "cafe_name": "Starbucks",
    //         "cafe_location": "150:150",
    //         "cafe_image": "1번카페이미지",
    //         "user_pk": 132
    //     },
    //     {
    //         "cafe_id": 4,
    //         "cafe_name": "Starcoffee",
    //         "cafe_location": "120:50",
    //         "cafe_image": "4번카페이미지1",
    //         "user_pk": 132
    //     },
    //     {
    //         "cafe_id": 7,
    //         "cafe_name": "재은카페2",
    //         "cafe_location": "122:337",
    //         "cafe_image": null,
    //         "user_pk": 132
    //     },
    //     {
    //         "cafe_id": 8,
    //         "cafe_name": "재은카페1",
    //         "cafe_location": "120:387",
    //         "cafe_image": null,
    //         "user_pk": 132
    //     }
    // ]
  }

  makeCafeInfo(result) {
    //cafeInfo : userHeader OR makeAdminHeader + makeCafeInfo(common) + makeFooter(common) +makeSearchPop(common)
    this.addScript();
    let user_view = new UserView();
    let common_view = new CommonView();

    let header = user_view.makeUserHeader();
    let info = common_view.makeCafeInfo();
    let footer = common_view.makeFooter();
    let pop = common_view.makeSearchPop();
    var no_item = common_view.makeNoReviewItem();
    var item = common_view.makeReviewItem();

    let dom = document.getElementsByClassName("js-cafe-review-list")[0];
    console.log("dom: " + dom);

    // dom.innerHTML += item;
    // dom.innerHTML += no_item;
    // dom.innerHTML += item;

    window.document.body.setAttribute("class", "full-height");
    window.document.body.setAttribute("id", "scrollup");
    window.document.body.innerHTML = header + info + footer + pop;
    //   {
    //     "cafe_id": 1,
    //     "cafe_name": "Starbucks",
    //     "cafe_location": "150:150",
    //     "cafe_menu": "Americano",
    //     "cafe_information": "스타벅스에요!",
    //     "cafe_image": [
    //         {
    //             "cafe_image": "1번카페이미지"
    //         },
    //         {
    //             "cafe_image": "1번카페이미지2"
    //         },
    //         {
    //             "cafe_image": "1번카페이미지3"
    //         }
    //     ],
    //     "cafe_rate": 4.3,
    //     "cafe_sns": "instagram",
    //     "is_enable_bean_choice": true,
    //     "cafe_mood": 2,
    //     "is_enable_buy_bean": true,
    //     "is_enable_handdrip": false,
    //     "user_id": "manje12",
    //     "reviewList": [
    //         {
    //             "review": "현석리뷰",
    //             "rate": 5,
    //             "image": null,
    //             "user_id": "manje12"
    //         },
    //         {
    //             "review": "박재은재은리뷰3",
    //             "rate": 3,
    //             "image": null,
    //             "user_id": "박재은"
    //         },
    //         {
    //             "review": "맛있어요!",
    //             "rate": 5,
    //             "image": null,
    //             "user_id": "박재은"
    //         }
    //     ]
    // }
  }

  makeSearchResult(result) {
    //search_result : makeUserHeader OR makeAdminHeader + makeSearchResult + makeFooter(common) + makeSearchPop(common)
    this.addScript();
    let user_view = new UserView();
    let common_view = new CommonView();

    let header = user_view.makeUserHeader();
    var search_result = common_view.makeSearchResult();
    let item = common_view.makeSearchItem();
    let pop = common_view.makeSearchPop();

    window.document.body.setAttribute("class", "full-height");
    window.document.body.setAttribute("id", "scrollup");
    window.document.body.innerHTML = header + search_result + pop;

    window.addEventListener("load", () => {
      let dom = document.getElementsByClassName("js-search-result-list")[0];
      console.log(dom);
      dom.innerHTML += item;
      for (let i = 0, max = result.length; i < max; i++) {
        dom.innerHTML += item(result[i]); //result는 나중에 데이터 받아서 구체적으로 바꿔줘야함
      }
    });

    //   [
    //     {
    //         "cafe_id": 1,
    //         "cafe_name": "Starbucks",
    //         "cafe_image": "1번카페이미지",
    //         "cafe_location": "150:150"
    //     },
    //     {
    //         "cafe_id": 4,
    //         "cafe_name": "Starcoffee",
    //         "cafe_image": "4번카페이미지1",
    //         "cafe_location": "120:50"
    //     }
    // ]
  }

  makeAddCafe(result) {
    //add cafe -> makeUserHeader + makeAddCafe + makeFooter(common) + makeSearchPop
    this.addScript();
    let user_view = new UserView();
    let common_view = new CommonView();

    let header = user_view.makeUserHeader();
    let add_cafe = user_view.makeAddCafe();
    let footer = common_view.makeFooter();
    let pop = common_view.makeSearchPop();

    window.document.body.setAttribute("class", "full-height");
    window.document.body.setAttribute("id", "scrollup");
    window.document.body.innerHTML = header + add_cafe + footer + pop;

    //   {
    //     "cafe_name": "zzzzzzzz",
    //     "cafe_location": "555/111",
    //     "cafe_menu": "아이스아메리카노",
    //     "cafe_information": "예쁩니다",
    //     "is_enable_bean_choice": true,
    //     "cafe_mood": 3,
    //     "is_enable_buy_bean": true,
    //     "is_enable_handdrip": true,
    //     "is_checked": false,
    //     "user_id": 3,
    //     "cafe_rate": 0.0,
    //     "cafe_sns": "www.instagram.com/jaewoo"
    // }
  }

  makeSettings(result) {
    //setting ->  makeUserHeader + makeUserMenu + makeSettings + makeFooter(common) + makeSearchPop

    this.addScript();
    let user_view = new UserView();
    let common_view = new CommonView();

    let header = user_view.makeUserHeader();
    let user_menu = user_view.makeUserMenu();
    let settings = user_view.makeSettings();
    let footer = common_view.makeFooter();
    let pop = common_view.makeSearchPop();

    window.document.body.setAttribute("class", "full-height");
    window.document.body.setAttribute("id", "scrollup");
    window.document.body.innerHTML =
        header + user_menu + settings + footer + pop;
  }

  addScript() {
    let path = this.getContextPath();
    //create
    let script1 = document.createElement("script");
    let script2 = document.createElement("script");
    let script3 = document.createElement("script");
    let script4 = document.createElement("script");
    let script5 = document.createElement("script");
    let script6 = document.createElement("script");
    let script7 = document.createElement("script");
    let script8 = document.createElement("script");
    let script9 = document.createElement("script");
    let script10 = document.createElement("script");
    let script11 = document.createElement("script");
    let script12 = document.createElement("script");
    let script13 = document.createElement("script");
    let script14 = document.createElement("script");

    //set path
    script1.src = `${path}/resources/js/jquery.min.js`;
    script2.src = `${path}/resources/js/modernizr.js`;
    script3.src = `${path}/resources/js/script.js`;
    script4.src = `${path}/resources/js/bootstrap.min.js`;
    script5.src = `${path}/resources/js/wow.min.js`;
    script6.src = `${path}/resources/js/slick.min.js`;
    script7.src = `${path}/resources/js/sumoselect.js`;
    script8.src = `${path}/resources/js/isotop.js`;
    script9.src = `${path}/resources/js/jquery.nicescroll.min.js`;
    script10.src = `${path}/resources/js/map1.js`;
    script11.src = `${path}/resources/js/jq.aminoSlider.js`;
    script12.src =
        "//dapi.kakao.com/v2/maps/sdk.js?appkey=f6ac04217d0213217c7208829defdafb";
    script13.src = `${path}/resources/img_upload.js`;
    script14.src = `${path}/resources/app.js`;

    //type
    script1.setAttribute = ("type", "text/javascript");
    script2.setAttribute = ("type", "text/javascript");
    script3.setAttribute = ("type", "text/javascript");
    script4.setAttribute = ("type", "text/javascript");
    script5.setAttribute = ("type", "text/javascript");
    script6.setAttribute = ("type", "text/javascript");
    script7.setAttribute = ("type", "text/javascript");
    script8.setAttribute = ("type", "text/javascript");
    script9.setAttribute = ("type", "text/javascript");
    script10.setAttribute = ("type", "text/javascript");
    script11.setAttribute = ("type", "text/javascript");
    script12.setAttribute = ("type", "text/javascript");
    script13.setAttribute = ("type", "text/javascript");
    script14.setAttribute = ("type", "module");

    script1.setAttribute = ("defer","");
    script2.setAttribute=("defer", "");
    script3.setAttribute=("defer", "");
    script4.setAttribute=("defer", "");
    script5.setAttribute=("defer", "");
    script6.setAttribute=("defer", "");
    script7.setAttribute=("defer", "");
    script8.setAttribute=("defer", "");
    script9.setAttribute=("defer", "");
    script10.setAttribute=("defer", "");
    script11.setAttribute=("defer", "");
    script12.setAttribute=("defer", "");
    script13.setAttribute=("defer", "");
    script14.setAttribute=("defer", "");

    //append
    document.body.append(script1);
    document.body.append(script2);
    document.body.append(script3);
    document.body.append(script4);
    document.body.append(script5);
    document.body.append(script6);
    document.body.append(script7);
    document.body.append(script8);
    document.body.append(script9);
    document.body.append(script10);
    document.body.append(script11);
    document.body.append(script12);
    document.body.append(script13);
    document.body.append(script14);
  }

  getContextPath() {
    var hostIndex = location.href.indexOf(location.host) + location.host.length;
    return location.href.substring(
        hostIndex,
        location.href.indexOf("/", hostIndex + 1)
    );
  }
}