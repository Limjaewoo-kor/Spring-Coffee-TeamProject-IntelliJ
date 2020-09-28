export class UserDTO {
  constructor() {
    this.user_pk = user_pk;
    this.user_id = user_id;
    this.user_pw = user_pw;
    this.user_email = user_email;
    this.user_gender = user_gender;
    this.user_birth = user_birth;
    this.user_like = user_like;
    this.user_caffeine = user_caffeine;
    this.count_expose_main = count_expose_main;
    this.count_accepted_cafe = count_accepted_cafe;
    this.is_blocked_user = is_blocked_user;
  }

  getUserPk() {
    return this.user_pk;
  }

  setUserPk(user_pk) {
    this.user_pk = user_pk;
  }

  getUserId() {
    return this.user_id;
  }
  setUserId(user_id) {
    this.user_id = user_id;
  }

  getUserPw() {
    return this.user_pw;
  }
  setUserPw(user_pw) {
    this.user_pw = user_pw;
  }

  getUserEmail() {
    return this.user_email;
  }
  setUserEmail(user_email) {
    this.user_eamail = user_email;
  }

  getUserGender() {
    return this.user_gender;
  }
  setUserGender(user_gender) {
    this.user_gender = user_gender;
  }

  getUserBirth() {
    return this.user_birth;
  }
  setUserBirth(user_birth) {
    this.user_birth = user_birth;
  }
  getUserLike() {
    return this.user_like;
  }
  setUserLike(user_like) {
    this.user_like = user_like;
  }

  getUserCaffeine() {
    return this.user_caffeine;
  }

  setUserCaffeine(user_caffeine) {
    this.user_caffeine = user_caffeine;
  }

  getCountExposeMain() {
    return this.count_expose_main;
  }
  setCountExposeMain(count_expose_main) {
    this.count_expose_main = count_expose_main;
  }

  getCountAcceptedCafe() {
    return this.count_accepted_cafe;
  }
  setCountAcceptedCafe(count_accepted_cafe) {
    this.count_accepted_cafe = count_accepted_cafe;
  }

  getIsBlockedUser() {
    return this.is_blocked_user;
  }
  setIsBlockedUser(is_blocked_user) {
    this.is_blocked_user = is_blocked_user;
  }
}

// User_ID(PK) INT
// User_ID VARCHAR(15)
// User_PW VARCHAR(15)
// User_Email VARCHAR(20)
// User_Gender TINYINT
// User_Birth VARCHAR(10)
// User_Like INT
// User_Caffeine INT
// Count_Expose_Main INT
// Count_Accepted_Cafe INT
// Is_Blocked_User TINYINT
