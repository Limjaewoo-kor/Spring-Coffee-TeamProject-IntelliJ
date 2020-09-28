export class ReviewDTO {
  constructor() {
    this.review = review;
    this.rate = rate;
    this.image = image;
    this.cafe_id = cafe_id;
    this.user_id = user_id;
  }

  getReview() {
    return this.review;
  }
  setReview(review) {
    this.review = review;
  }

  getRate() {
    return this.rate;
  }
  setRate(rate) {
    this.rate = rate;
  }
  getImage() {
    return this.image;
  }
  setImage(image) {
    this.image = image;
  }
  getCafeId() {
    return this.cafe_id;
  }
  setCafeId(cafe_id) {
    this.cafe_id = cafe_id;
  }
  getUserId() {
    return this.user_id;
  }
  setUserId(user_id) {
    this.user_id = user_id;
  }
}

// Review VARCHAR(45)
// Rate VARCHAR(45)
// image VARCHAR(45)
// Cafe_ID INT
// User_ID INT
