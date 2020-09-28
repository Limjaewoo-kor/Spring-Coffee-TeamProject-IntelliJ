// 카페 검색 : 카페검색 -> 검색결과 ->(클릭시) 카페상세페이지
// search_result : makeUserHeader OR makeAdminHeader + makeSearchResult + makeFooter(common) + makeSearchPop(common)
// cafeInfo : makeUserHeader OR makeAdminHeader + makeCafeInfo(common) + makeFooter(common) + makeSearchPop(common)

export class CommonView {
  constructor() {}

  getContextPath() {
    var hostIndex = location.href.indexOf(location.host) + location.host.length;
    return location.href.substring(
      hostIndex,
      location.href.indexOf("/", hostIndex + 1)
    );
  }

  makeCafeInfo(
    user_id,
    notification,
    cafe_img_main,
    cafe_name,
    cafe_rate,
    cafe_rate_count,
    cafe_location,
    cafe_information,
    cafe_menu,
    cafe_mail,
    cafe_img_gallery,
    review_user_id,
    profile_user_id,
    write_date,
    comment,
    cafe_like
  ) {
    let path = this.getContextPath();
    let cafeinfo = `

    <div class="section_down">

    <div class="block no-padding">
      <div class="container fluid">
        <div class="row">
          <div class="col-lg-12">
            <div class="sl-slider" id="makeslider">
              <div class="slg-box">
                <img src="${path}+'480x350'" alt="cafe_img_main" />
              </div>
              <div class="slg-box">
                <img src="${path}+'480x350'" alt="cafe_img_main" />
              </div>
              <div class="slg-box">
                <img src="${path}+'480x350'" alt="cafe_img_main" />
              </div>
              <div class="slg-box">
                <img src="${path}+'480x350'" alt="cafe_img_main" />
              </div>
              <div class="slg-box">
                <img src="${path}+'480x350'" alt="cafe_img_main" />
              </div>
              <div class="slg-box">
                <img src="${path}+'480x350'" alt="cafe_img_main" />
              </div>
              <div class="slg-box">
                <img src="${path}+'480x350'" alt="cafe_img_main" />
              </div>
              <div class="slg-box">
                <img src="${path}+'480x350'" alt="cafe_img_main" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        <section>
          <div class="block no-padding gray">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="slhead">
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="sltitle">
                          <h1>{cafe_name}</h1>
                          <ul class="listmetas">
                            <li>
                              <span class="rated">{cafe_rate}</span>
                              {cafe_rate_count}
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="slbtnsspans">
                          <span>
                          <i class="flaticon-pin"></i>cafe_location</span>
                          <div class="slbtns">
                            <div class="sharelisting">
                              <a href="">
                                <i class="flaticon-share"></i>
                                Share
                              </a>
                              <div class="sharebtns">
                                <a href="">
                                  <i class="fa fa-facebook"></i>
                                </a>
                                <a href="">
                                  <i class="fa fa-twitter"></i>
                                </a>
                                <a href="">
                                  <i class="fa fa-instagram"></i>
                                </a>
                                <a href="">
                                  <i class="fa fa-pinterest"></i>
                                </a>
                                <a href="">
                                  <i class="fa fa-dribbble"></i>
                                </a>
                                <a href="">
                                  <i class="fa fa-google"></i>
                                </a>
                              </div>
                            </div>
                            <a href="">
                              <i class="flaticon-heart"></i>
                              Bookmark
                            </a>
                            <a href="">
                              <i class="flaticon-note"></i>
                              Add review
                            </a>
                          </div>
                        </div>
                      </div>
                      <a href="">
                        <i class="flaticon-heart"></i>
                        Bookmark
                      </a>
                      <a href="">
                        <i class="flaticon-note"></i>
                        Add review
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="block">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 column">
            <div class="bbox">
              <h3>Description</h3>
              <div class="ldesc">
                <p>{cafe_information}</p>
              </div>
            </div>
            <div class="bbox">
              <h3>Menu</h3>
              <div class="ldesc">
                <p>{cafe_menu}</p>
              </div>
            </div>

            <div class="bbox">
              <h3>Gallery</h3>
              <ul class="gallerylistin">
                <li>
                  <img
                    src="${path}+'cafe_img_gallery'"
                    alt="cafe_img_gallery"
                    class="small_img"
                  />
                </li>
                <li>
                  <img
                    src="${path}+'cafe_img_gallery'"
                    alt="cafe_img_gallery"
                    class="small_img"
                  />
                </li>
                <li>
                  <img
                    src="${path}+'cafe_img_gallery'"
                    alt="cafe_img_gallery"
                    class="small_img"
                  />
                </li>
                <li>
                  <img
                    src="${path}+'cafe_img_gallery'
                    alt="cafe_img_gallery"
                    class="small_img"
                  />
                </li>
                <li>
                  <img
                    src="${path}+'cafe_img_gallery'"
                    alt="cafe_img_gallery"
                    class="small_img"
                  />
                </li>
                <li>
                  <img
                    src="${path}+'cafe_img_gallery'"
                    alt="cafe_img_gallery"
                    class="small_img"
                  />
                </li>
              </ul>
            </div>

            <div class="bbox js-review-list">
            <h3>{cafe_rate_count} Reviews for {cafe_name}</h3>
            <div class="reviewssec js-cafe-review-list">
            
              </div>
            </div>

            <div class="listingcomment">
              <div class="leavecomment">
              <form id="js-cafe-review-form">
                <h3>Rate us and Write a Review</h3>
                <div class="upimg" style="width: 60%">
                  <span>Upload images</span>
                  <a href="">
                    <img src="${path}/images/cloud.png" alt="cloud"/>
                  </a>
                  <input
                    type="file"
                    name="cafe_image"
                    class="js-cafe-review-input"
                    accept="img/*"
                    onChange="uploadReviewImg()"
                    id="js-upload-profile"
                    
                  />
                  <div id="js-thumnail"></div>
                </div>
                <div class="urrating rate_input">
                  <input type="text" name="review_rate" class="js-cafe-review-input" placeholder="점수를 입력하세요." required="required" />
                </div>
                <input type="text" name="review_title" class="js-cafe-review-input" placeholder="Title" />
                <textarea name="review_content" class="js-cafe-review-input" placeholder="Review"></textarea>

                <div class="fieldbtn">
                  <button type="submit" class="js-cafe-review-btn">등록하기</button>
                </div>
              </form>
              </div>
            </div>
          </div>
          <div class="col-lg-4 column">
            <div class="blocation">
              <h3>Location <a href="">Get Direction</a></h3>
              <div class="contact-map">
                <div id="map js-map-mini" style="width: 350px; height: 400px"></div>
              </div>
              <span>{cafe_location}</span>
              <span>{cafe_mail}</span>

              <div class="wsocial">
                <a href=""><i class="fa fa-facebook"></i></a>
                <a href=""><i class="fa fa-twitter"></i></a>
                <a href=""><i class="fa fa-linkedin"></i></a>
                <a href=""><i class="fa fa-pinterest"></i></a>
                <a href=""><i class="fa fa-google"></i></a>
                <a href=""><i class="fa fa-dribbble"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
    return cafeinfo;
  }

  makeReviewItem() {
    let path = this.getContextPath();
    let review = `
    
      <div class="reviewthumb">
        <img src="${path}+'profile_user_id'" alt="profile_user_id" />
      </div>
      <div class="reviewinfo">
        <h3>{review_user_id}</h3>
        <span>{write_date}</span>
        <ul class="listmetas justrate">
          <li>
            <span class="rated">{cafe_rate}</span>
            {cafe_rate_count}
          </li>
        </ul>
        <p>{comment}</p>
        <div class="wasreview">
          <span>Was This Review ...?</span>
          <div class="wasreviewbtn">
            <a href="" class="c3">
              <i class="flaticon-heart"></i>
              Like {cafe_like}
            </a>
          </div>
        </div>
        <div class="reviewaction">
          <a href="">
            <i class="flaticon-back"></i>
            Reply
          </a>
        </div>
      </div>
    `;
    return review;
  }

  makeNoReviewItem() {
    let path = this.getContextPath();
    let review = `
    
      <div class="reviewthumb">
        아직 리뷰가 없습니다...
      </div>
    `;
    return review;
  }

  makeFooter() {
    let footer = `<footer>
    <div class="block">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="footersec">
              <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Partners</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Terms</a></li>
                <li><a href="">Customer Center</a></li>
              </ul>
              <span>Seoul Geumcheon-gu, Gasan-dong, Gasan digital 1-ro</span>
              <span>+82 02-123-4567</span>
              <span>HiddenC@gmail.com</span>
              <div class="social">
                <a href=""><i class="fa fa-facebook"></i></a>
                <a href=""><i class="fa fa-twitter"></i></a>
                <a href=""><i class="fa fa-instagram"></i></a>
                <a href=""><i class="fa fa-google"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottomline">
      <a href="javascript:void(0)scrollup" class="scrollup">
        <i class="fa fa-angle-up"></i>
      </a>
      <span>© 2020 HiddenC All rights reserved.</span>
    </div>
  </footer>`;
    return footer;
  }

  makeSearchPop() {
    let search_pop = `
    <div class="popupsec">
        <div class="popup">
          <div class="accounttabs search_pop_size">
            <span class="closepopup"><i>+</i></span>
            <div id="content">
              <form class="accountform pop_form" id="js-search-form">
                <div class="pop_title">
                  <h5 class="search_title">어떤 카페를 찾으세요?</h5>
                </div>
                <div class="search_bar">
                  <input type="text" name="cafe_name" placeholder="검색어를 입력하세요" required="required"/>
                    <button type="submit"  class="js-search-btn">SEARCH</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>`;
    return search_pop;
  }
  makeSearchResult() {
    let search_result = `
      <section>
        <div class="block no-padding">
          <div class="container fluid">
            <div class="row">
              <div class="col-lg-12">
                <div class="ml-filterslide openall fakeScroll fakeScrolls">
                  <div class="mlfilter-sec">
                    <div class="mfilterform forresponsive">
                      <div class="row">
                        <div class="col-lg-3">
                          <div class="mlfield">
                            <select class="selectbox">
                              <option>Sort By</option>
                              <option>By Date</option>
                              <option>By Location</option>
                              <option>Latest</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-lg-3">
                          <div class="mlfield s2">
                            <select class="selectbox">
                              <option>Categories</option>
                              <option>Category 1</option>
                              <option>Category 2</option>
                              <option>Category 3</option>
                              <option>Category 4</option>
                              <option>Category 5</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-lg-3">
                          <div class="customdropdown">
                            <span>More Filters<i class="fa fa-angle-down"></i></span>
                            <div class="customdrops">
                              <div class="mltags">
                                <div class="row">
                                  <div class="col-lg-6">
                                    <p class="c-label">
                                      <input
                                        name="cb"
                                        id="1"
                                        type="checkbox"
                                      /><label for="1">option 1</label>
                                    </p>
                                    <p class="c-label">
                                      <input
                                        name="cb"
                                        id="2"
                                        type="checkbox"
                                      /><label for="2">option 2</label>
                                    </p>
                                    <p class="c-label">
                                      <input
                                        name="cb"
                                        id="3"
                                        type="checkbox"
                                      /><label for="3">option 3</label>
                                    </p>
                                    <p class="c-label">
                                      <input
                                        name="cb"
                                        id="4"
                                        type="checkbox"
                                      /><label for="4">option 4</label>
                                    </p>
                                  </div>
                                  <div class="col-lg-6">
                                    <p class="c-label">
                                      <input
                                        name="cb"
                                        id="5"
                                        type="checkbox"
                                      /><label for="5">option 5</label>
                                    </p>
                                    <p class="c-label">
                                      <input
                                        name="cb"
                                        id="6"
                                        type="checkbox"
                                      /><label for="6">option 6</label>
                                    </p>
                                    <p class="c-label">
                                      <input
                                        name="cb"
                                        id="7"
                                        type="checkbox"
                                      /><label for="7">option 7</label>
                                    </p>
                                    <p class="c-label">
                                      <input
                                        name="cb"
                                        id="8"
                                        type="checkbox"
                                      /><label for="8">option 8</label>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="ml-listings allset">
                      <div class="ml-filterbar">
                        <h3><i class="flaticon-eye"></i>14 Results Found</h3>
                        <ul>
                          <li class="doubleplaces active">
                            <span><i class="fa fa-th-large"></i></span>
                          </li>
                          <li class="listingplaces">
                            <span><i class="fa fa-th-list"></i></span>
                          </li>
                        </ul>
                      </div>
                      <div class="ml-placessec">
                        <div class="row js-search-result-list js-cafe-list  ">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="half-map s2">
                  <div id="map_div" class="map">&nbsp;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>`;
    return search_result;
  }

  makeSearchItem() {
    let path = this.getContextPath();
    let item = `       
    <div class="col-lg-6">
      <div class="places s2">
        <div class="placethumb">
          <img src="${path}+'360x220'" alt="cafe_img" />
          <div class="placeoptions">
            <span class="pull-left">
              <i class="flaticon-eye"></i> Preview
            </span>
            <span class="pull-right">
              <i class="flaticon-heart"></i> Save
            </span>
          </div>
        </div>
        <div class="boxplaces">
          <div class="placeinfos">
            <h3><a href="" >{cafe_name}</a></h3>
            <hidden value="{value1}"></hidden>
            <ul class="listmetas">
              <li>
                <span class="rated">{cafe_rate}</span>
                {cafe_rate_count}
              </li>
            </ul>
          </div>
          <div class="placedetails">
            <span class="pull-left">
              <i class="flaticon-pin"></i>
              {cafe_location}
              <hidden value="{value1}"></hidden>
            </span>
          </div>
        </div>
      </div>
    </div><!-- Places -->`;
    return item;
  }
}
