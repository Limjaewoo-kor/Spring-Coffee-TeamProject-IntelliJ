export class CafeDTO {
  constructor() {
    this.cafe_id = cafe_id;
    this.cafe_name = cafe_name;
    this.cafe_location = cafe_location;
    this.cafe_menu = cafe_menu;
    this.cafe_information = cafe_information;
    this.cafe_mood = cafe_mood;
    this.is_enable_buy_bean = is_enable_buy_bean;
    this.is_enable_bean_choice = is_enable_bean_choice;
    this.is_enable_handdrip = is_enable_handdrip;
    this.is_checked = is_checked;
    this.user_id_int = user_id_int;
  }
  getCafeId() {
    return this.cafe_id;
  }

  setCafeId(cafe_id) {
    this.cafe_id = cafe_id;
  }

  getCafeName() {
    return this.cafe_name;
  }
  setCafeName(cafe_name) {
    this.cafe_name = cafe_name;
  }

  getCafeLocation() {
    return this.cafe_loaction;
  }

  setCafeLocation(cafe_location) {
    this.cafe_location = cafe_location;
  }
  getCafeMenu() {
    return this.cafe_menu;
  }
  setCafeMenu(cafe_menu) {
    this.cafe_menu = cafe_menu;
  }

  getCafeInformation() {
    return this.cafe_information;
  }
  setCafeInformation(cafe_information) {
    this.cafe_information = cafe_information;
  }

  getCafeMood() {
    return this.cafe_mood;
  }
  setCafeMood(cafe_mood) {
    this.cafe_mood = cafe_mood;
  }

  getIsEnableBuyBean() {
    return this.is_enable_buy_bean;
  }
  setIsEnableBuyBean(is_enable_buy_bean) {
    this.is_enable_buy_bean = is_enable_buy_bean;
  }

  getIsEnableBeanChoice() {
    return this.is_enable_bean_choice;
  }
  setIsEnableBeanChoice(is_enable_bean_choice) {
    this.is_enable_bean_choice = is_enable_bean_choice;
  }

  getIsEnableHanddrip() {
    return this.is_enable_handdrip;
  }
  setIsEnableHanddrip(is_enable_handdrip) {
    this.is_enable_handdrip = is_enable_handdrip;
  }

  getIsChecked() {
    return this.is_checked;
  }
  setIsChecked(is_checked) {
    this.is_checked = is_checked;
  }
  getUserIdInt() {
    return this.user_id_int;
  }
  setUserIdInt(user_id_int) {
    this.user_id_int = user_id_int;
  }
}
