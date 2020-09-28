export class LikeDTO {
  constructor() {
    this.like_id = like_id;
    this.push_user = push_user;
    this.got_like = got_like;
  }
  getLikeId() {
    return this.like_id;
  }
  setLikeId(like_id) {
    this.like_id = like_id;
  }

  getPushUser() {
    return this.push_user;
  }
  setPushUser(push_user) {
    this.push_user = push_user;
  }

  getGotLike() {
    return this.gotLike;
  }
  setGotLike(got_like) {
    this.got_like = got_like;
  }
}

// Like_ID INT
// Push_User INT
// Got_Like INT
