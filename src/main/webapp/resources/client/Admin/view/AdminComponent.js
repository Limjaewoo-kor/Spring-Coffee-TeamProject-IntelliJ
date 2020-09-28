import { AdminView } from "./AdminView.js";
import { CommonView } from "../../Common/view/CommonView.js";
import { UserView } from "../../User/view/UserView.js";

export class AdminComponent {
  constructor() {
    this.admin_view = new AdminView();

    this.common_view = new CommonView();

    // form
    this.search_form = document.getElementById("js-search-form");
    this.addcafe_form = document.getElementById("js-admin-addcafe-form");
    this.revisecafe_form = document.getElementById("js-admin-revisecafe-form");

    // button
    this.addcafe_btn = document.getElementsByClassName(
        "js-admin-addcafe-btn"
    )[0];
    this.revisecafe_load_btn = document.getElementsByClassName(
        "js-admin-revisecafe-load-btn"
    )[0];
    this.revisecafe_update_btn = document.getElementsByClassName(
        "js-admin-revisecafe-btn"
    )[0];
    this.search_btn = document.getElementsByClassName("js-search-btn")[0];

    // tag
    // this.header_menu = document.querySelectorAll(".js-admin-header-menu")[1];
    // this.admin_menu = document.querySelectorAll(".js-admin-header-menu")[0];
    this.revisecafe_list = document.getElementsByClassName(
        "js-admin-js-admin-revisecafe-list"
    );
    this.addcafe_img = document.getElementsByClassName("js-admin-addcafe-img");
    this.revisecafe_img = document.getElementsByClassName(
        "js-admin-revisecafe-img"
    );
    this.half_map = document.getElementById("js-map-half");
    this.search_list = document.getElementsByClassName("js-search-result-list");

    // image preview
    this.thumnail = document.getElementById("js-thumnail");
    this.upload_cafe = document.getElementById("js-upload");
  }

  // Listener

  addCafe(callback) {
    console.log("add-cafe-listener");
    document
        .getElementsByClassName("js-admin-addcafe-btn")[0]
        .addEventListener("click", callback);
  }

  reviseCafe(callback) {
    console.log("revise-cafe-listener");

    document
        .getElementsByClassName("js-admin-revisecafe-btn")[0]
        .addEventListener("click", callback);
  }

  loadCafeList(callback) {
    console.log("load list of cafe listner");

    document
        .getElementsByClassName("js-admin-revisecafe-load-btn")[0]
        .addEventListener("click", callback);
  }

  search(callback) {
    console.log("search-listener");

    document
        .getElementsByClassName("js-search-btn")[0]
        .addEventListener("click", callback);
  }

  // event delegation
  headerMenu(callback) {
    console.log("header_menu-delegation");

    let r_header = document.getElementsByClassName("js-admin-header-menu")[0];
    let header = document.getElementsByClassName("js-admin-header-menu")[1];

    r_header.addEventListener("click", callback);
    header.addEventListener("click", callback);
  }

  adminMenu(callback) {
    console.log("admin_menu-delegation");

    let admin_menu = document.getElementsByClassName("js-admin-menu")[0];
    admin_menu.addEventListener("click", callback);
  }

  caffeineList(callback) {
    console.log("caffeine-list");

    let caffeine_list = document.getElementsByClassName("js-caffeine-list")[0];
    caffeine_list.addEventListener("click", callback);
  }

  cafeList(callback) {
    console.log("cafe-list");

    let cafe_list = document.getElementsByClassName("js-cafe-list")[0];
    cafe_list.addEventListener("click", callback);
  }

  // main page(home)

  makeMainPage(result) {
    this.addScript();
    let user_view = new UserView();
    let common_view = new CommonView();
    let admin_view = new AdminView();

    let header = admin_view.makeAdminHeader();
    let caffeine = user_view.makeMainCaffeineList();
    let cafe = user_view.makeMainCafeList();
    let footer = common_view.makeFooter();
    let pop = common_view.makeSearchPop();

    window.document.body.setAttribute("class", "full-height");
    window.document.body.setAttribute("id", "scrollup");
    window.document.body.innerHTML = header + caffeine + cafe + footer + pop;
  }

  // admin page

  makeCafeListPage(result) {

    console.log("asdsad", result);
    this.addScript();
    let admin_view = new AdminView();
    let common_view = new CommonView();

    let header = admin_view.makeAdminHeader();
    let admin_menu = admin_view.makeAdminMenu();
    let saved_cafe_list = admin_view.makeCafeList();
    let cafe_item = admin_view.makeCafeListItem();
    let footer = common_view.makeFooter();
    let search_pop = common_view.makeSearchPop();
    console.log("!@@E@#REJFKDHJHFE" + result);
    // 서버에서 스크롤 안되는 문제 방지
    window.document.body.setAttribute("class", "full-height");
    window.document.body.setAttribute("id", "scrollup");

    window.document.body.innerHTML =
        header + admin_menu + saved_cafe_list + footer + search_pop;
    window.addEventListener("load", () => {
      let dom = document.getElementsByClassName("js-admin-cafelist")[0];
      console.log("dom" + dom);
      // console.log(result[i].cafe_name);

      // for (let i = 0; i < result.length; i++) {
      //   dom += cafe_item(result[i].cafe_name);
      //   // dom += cafe_item(result[i].cafe_locaion);
      // }
      dom.innerHTML += cafe_item;
      dom.innerHTML += cafe_item; //데이터 꺼내서 매개변수에 넣어주는 로직 추후 구현해야함
    });
  }

  makeMemberPage(result) {

    this.addScript();
    let admin_view = new AdminView();
    let common_view = new CommonView();

    let header = admin_view.makeAdminHeader();
    let admin_menu = admin_view.makeAdminMenu();
    let member_list = admin_view.makeMemberList();
    let member_item = admin_view.makeMemberItem();
    let footer = common_view.makeFooter();
    let search_pop = common_view.makeSearchPop();

    // 서버에서 스크롤 안되는 문제 방지
    window.document.body.setAttribute("class", "full-height");
    window.document.body.setAttribute("id", "scrollup");

    window.document.body.innerHTML =
        header + admin_menu + member_list + footer + search_pop;
    window.addEventListener("load", () => {
      let dom = document.getElementsByClassName("js-admin-memberlist")[0];
      console.log("dom" + dom);
      dom.innerHTML += member_item;
      dom.innerHTML += member_item; //데이터 꺼내서 매개변수에 넣어주는 로직 추후 구현해야함

      for (let i = 0, max = result.length; i < max; i++) {
        dom += member_item(result[i]);
      }
    });
  }

  makeAddCafePage() {
    this.addScript();
    let admin_view = new AdminView();
    let common_view = new CommonView();

    let header = admin_view.makeAdminHeader();
    let admin_menu = admin_view.makeAdminMenu();
    let admin_addcafe = admin_view.makeAddCafeForm();
    let footer = common_view.makeFooter();
    let search_pop = common_view.makeSearchPop();

    // 서버에서 스크롤 안되는 문제 방지
    window.document.body.setAttribute("class", "full-height");
    window.document.body.setAttribute("id", "scrollup");

    window.document.body.innerHTML =
        header + admin_menu + admin_addcafe + footer + search_pop;
  }

  makeReviseCafePage(result) {
    this.addScript();
    let admin_view = new AdminView();
    let common_view = new CommonView();

    let header = admin_view.makeAdminHeader();
    let admin_menu = admin_view.makeAdminMenu();
    let admin_revisecafe = admin_view.makeReviseCafeForm();
    let revise_cafe = admin_view.makeReviseCafeList();
    let footer = common_view.makeFooter();
    let search_pop = common_view.makeSearchPop();

    // 서버에서 스크롤 안되는 문제 방지
    window.document.body.setAttribute("class", "full-height");
    window.document.body.setAttribute("id", "scrollup");

    window.document.body.innerHTML =
        header +
        admin_menu +
        admin_revisecafe +
        revise_cafe +
        footer +
        search_pop;

    window.addEventListener("load", () => {
      let dom = document.getElementsByClassName("js-admin-revisecafe-list")[0];
      console.log("dom" + dom);
      dom.innerHTML += revise_cafe;
      dom.innerHTML += revise_cafe; //데이터 꺼내서 매개변수에 넣어주는 로직 추후 구현해야함

      // for (let i = 0, max = result.length; i < max; i++) {
      //   dom += revise_cafe(result[i]);
      // }
    });
  }

  // search & cafeinfo page

  makeSearchResultPage(result) {
    this.addScript();
    let admin_view = new AdminView();
    let common_view = new CommonView();

    let header = admin_view.makeAdminHeader();
    let search_result = common_view.makeSearchResult();
    let search_pop = common_view.makeSearchPop();

    // 서버에서 스크롤 안되는 문제 방지
    window.document.body.setAttribute("class", "full-height");
    window.document.body.setAttribute("id", "scrollup");

    window.document.body.innerHTML = header + search_result + search_pop;
    window.addEventListener("load", () => {
      let dom = document.getElementsByClassName("js-search-result-list")[0];
      console.log(dom);
      dom.innerHTML += item;
      for (let i = 0, max = result.length; i < max; i++) {
        dom.innerHTML += item(result[i]); //result는 나중에 데이터 받아서 구체적으로 바꿔줘야함
      }
    });
  }

  makeCafeInfoPage(result) {
    this.addScript();
    let admin_view = new AdminView();
    let common_view = new CommonView();

    let header = admin_view.makeAdminHeader();
    let cafe_info = common_view.makeCafeInfo();
    let footer = common_view.makeFooter();
    let search_pop = common_view.makeSearchPop();

    // 서버에서 스크롤 안되는 문제 방지
    window.document.body.setAttribute("class", "full-height");
    window.document.body.setAttribute("id", "scrollup");

    window.document.body.innerHTML = header + cafe_info + footer + search_pop;
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

    script1.setAttribute = ("defer", "defer");
    script2.setAttribute = ("defer", "defer");
    script3.setAttribute = ("defer", "defer");
    script4.setAttribute = ("defer", "defer");
    script5.setAttribute = ("defer", "defer");
    script6.setAttribute = ("defer", "defer");
    script7.setAttribute = ("defer", "defer");
    script8.setAttribute = ("defer", "defer");
    script9.setAttribute = ("defer", "defer");
    script10.setAttribute = ("defer", "defer");
    script11.setAttribute = ("defer", "defer");
    script12.setAttribute = ("defer", "defer");
    script13.setAttribute = ("defer", "defer");
    script14.setAttribute = ( "defer", "defer");

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