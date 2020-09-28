export class AdminDTO {
  constructor() {
    this.admin_id = admin_id;
    this.admin_pw = admin_pw;
    this.admin_pk = admin_pk;

    this.admin_name = admin_name; //키인가?
  }

  getAdminPk() {
    return this.admin_pk;
  }

  setAdminPk(admin_pk) {
    this.admin_pk = admin_pk;
  }

  getAdminId() {
    return this.admin_id;
  }
  setAdminId(admin_id) {
    this.admin_id = admin_id;
  }

  getAdminPw() {
    return this.admin_pw;
  }
  setAdminPw(admin_pw) {
    this.admin_pw = admin_pw;
  }

  getAdminName() {
    return this.admin_name;
  }
  setAdminName(admin_name) {
    this.admin_name = admin_name;
  }
}
