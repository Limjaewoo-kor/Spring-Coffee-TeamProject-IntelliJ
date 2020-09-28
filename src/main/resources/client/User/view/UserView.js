/*
 * main -> makeUserHeader + makeMainCaffeineList + makeMainCafeList + makeFooter(common) + makeSearchPop
 * dashboard -> makeUserHeader + makeUserMenu + makeDashboard + makeFooter(common) + makeSearchPop
 * my hidden -> makeUserHeader + makeUserMenu + makeListAndMap + makeHalfListItem(한개씩 추가) + makeFooter + makeSearchPop
 * my subscription -> makeUserHeader + makeUserMenu + makeMySubscription + makeSubscriptionList(한개씩 추가) + makeFooter(common) + makeSearchPop
 * add cafe -> makeUserHeader + makeAddCafe + makeFooter(common) + makeSearchPop
 * setting ->  makeUserHeader + makeUserMenu + makeSettings + makeFooter(common) + makeSearchPop
 * 프로필 세팅에 프로필 이미지미리보기 js-thumnail, js-upload-profile, 백그라운드 미리보기 js-back-img, js-upload-back-img
 */

export class UserView {
  constructor() {}

  getContextPath() {
    var hostIndex = location.href.indexOf(location.host) + location.host.length;
    return location.href.substring(
      hostIndex,
      location.href.indexOf("/", hostIndex + 1)
    );
  }

  makeUserHeader(user_img_mini, user_id, notification) {
    let path = this.getContextPath();
    return `    
    <div class="theme-layout">
    <div class="responsiveheader">
      <div class="rheader">
        <span><img src="${path}/images/ricon.png" alt="menu_icon" /></span>
        <div class="logo">
          <a href="" 
            ><img src="${path}/images/hiddenc_logo.png" alt="hiddenC_logo"
          /></a>
        </div>
      </div>
      <div class="rnaver">
        <span class="closeresmenu"><i>x</i>Close</span>
        <ul class="js-user-header-menu">
          <li>
            <a href=""  class="disabled">Home</a>
          </li>
          <li class="accountbtn">
            <a href=""  class="disabled">Search</a>
          </li>
          <li>
            <a href=""  class="disabled">User</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- Responsive header -->

    <header class="s4 dark">
      <div class="container fluid">
        <div class="logo">
          <a href="" 
            ><img src="${path}/images/hiddenc_logo.png" alt="hiddenC_logo"
          /></a>
        </div>
        <div class="userdropsec">
          <span
            ><img src="${path}http://placehold.it/50x50" alt="user_img" /><span class=""
              >{user_id}</span
            ></span
          >
        </div>
        <a href=""  class="bellicon"
          ><i class="fa fa-bell-o"></i><strong>{notification}</strong></a
        >
        <nav class="js-user-header-menu">
          <ul >
            <li>
              <a href="" class="disabled">Home</a>
            </li>
            <li class="accountbtn" style="float: left">
              <a href="" class="disabled">Search</a>
            </li>
            <li>
              <a href="" class="disabled">User</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  `;
  }

  makeMainCaffeineList(
    user_id1,
    user_img1,
    user_id2,
    user_img2,
    user_id3,
    user_img3,
    user_id4,
    user_img4,
    user_id5,
    user_img5,
    user_id6,
    user_img6,
    user_id7,
    user_img7,
    user_id8,
    user_img8,
    user_id9,
    user_img9,
    user_id10,
    user_img10,
    user_id11,
    user_img11,
    user_id12,
    user_img12
  ) {
    let path = this.getContextPath();
    let caffaine = ` <section class="main-section">
      <div class="block less-bottom">
        <div class="container fluid">
          <div class="row">
            <div class="col-lg-12">
              <div class="heading">
                <h2>This Week's Caffeine Ranking</h2>
                <span>이번주 카페인 랭킹 TOP 12</span>
              </div>
              <!-- Heading -->
              <ul class="citieslists js-caffeine-list">
                <li>
                  <div class="cities">
                    <a href="" 
                      ><img src="${path}+${user_img1}" alt="caffeine_ranker"
                    /></a>
                    <div class="cities-title">
                      <h3><a href="" >{user_id1}</a></h3>
                      <hidden value="{value1}"></hidden>
                      <span></span>
                    </div>
                  </div>
                  <!-- Cities -->
                  <div class="cities">
                    <a href="" 
                      ><img src="${path}+${user_img2}" alt="caffeine_ranker"
                    /></a>
                    <div class="cities-title">
                      <h3><a href="" >{user_id2}</a></h3>
                      <hidden value="{value2}"></hidden>
                      <span></span>
                    </div>
                  </div>
                  <!-- Cities -->
                  <div class="cities">
                    <a href="" 
                      ><img src="${path}+${user_img3}" alt="caffeine_ranker"
                    /></a>
                    <div class="cities-title">
                      <h3><a href="" >{user_id3}</a></h3>
                      <hidden value="{value3}"></hidden>
                      <span></span>
                    </div>
                  </div>
                  <!-- Cities -->
                  <div class="cities">
                    <a href="" 
                      ><img src="${path}+${user_img4}" alt="caffeine_ranker"
                    /></a>
                    <div class="cities-title">
                      <h3><a href="" >{user_id4}</a></h3>
                      <hidden value="{value4}"></hidden>
                      <span></span>
                    </div>
                  </div>
                  <!-- Cities -->
                </li>
                <li>
                  <div class="cities">
                    <a href="" 
                      ><img src="${path}+${user_img5}" alt="caffeine_ranker"
                    /></a>
                    <div class="cities-title">
                      <h3><a href="" >{user_id5}</a></h3>
                      <hidden value="{value5}"></hidden>
                      <span></span>
                    </div>
                  </div>
                  <!-- Cities -->
                  <div class="cities">
                    <a href="" 
                      ><img src="${path}+${user_img6}" alt="caffeine_ranker"
                    /></a>
                    <div class="cities-title">
                      <h3><a href="" >{user_id6}</a></h3>
                      <hidden value="{value6}"></hidden>
                      <span></span>
                    </div>
                  </div>
                  <!-- Cities -->
                  <div class="cities">
                    <a href="" 
                      ><img src="${path}+${user_img7}" alt="caffeine_ranker"
                    /></a>
                    <div class="cities-title">
                      <h3><a href="" >{user_id7}</a></h3>
                      <hidden value="{value7}"></hidden>
                      <span></span>
                    </div>
                  </div>
                  <!-- Cities -->
                  <div class="cities">
                    <a href="" 
                      ><img src="${path}+${user_img8}" alt="caffeine_ranker"
                    /></a>
                    <div class="cities-title">
                      <h3><a href="" >{user_id8}</a></h3>
                      <hidden value="{value8}"></hidden>
                      <span></span>
                    </div>
                  </div>
                  <!-- Cities -->
                </li>
                <li>
                  <div class="cities">
                    <a href="" 
                      ><img src="${path}+${user_img9}" alt="caffeine_ranker"
                    /></a>
                    <div class="cities-title">
                      <h3><a href="" >{user_id9}</a></h3>
                      <hidden value="{value9}"></hidden>
                      <span></span>
                    </div>
                  </div>
                  <!-- Cities -->
                  <div class="cities">
                    <a href="" 
                      ><img src="${path}+${user_img10}" alt="caffeine_ranker"
                    /></a>
                    <div class="cities-title">
                      <h3><a href="" >{user_id10}</a></h3>
                      <hidden value="{value10}"></hidden>
                      <span></span>
                    </div>
                  </div>
                  <!-- Cities -->
                  <div class="cities">
                    <a href="" 
                      ><img src="${path}+${user_img11}" alt="caffeine_ranker"
                    /></a>
                    <div class="cities-title">
                      <h3><a href="" >{user_id11}</a></h3>
                      <hidden value="{value11}"></hidden>
                      <span></span>
                    </div>
                  </div>
                  <!-- Cities -->
                  <div class="cities">
                    <a href="" 
                      ><img src="${path}+${user_img12}" alt="caffeine_ranker"
                    /></a>
                    <div class="cities-title">
                      <h3><a href="" >{user_id12}</a></h3>
                      <hidden value="{value12}"></hidden>
                      <span></span>
                    </div>
                  </div>
                  <!-- Cities -->
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>`;
    return caffaine;
  }

  makeMainCafeList(
    cafe_name1,
    cafe_rate1,
    cafe_rate_count1,
    cafe_location1,
    cafe_name2,
    cafe_rate2,
    cafe_rate_count2,
    cafe_location2,
    cafe_name3,
    cafe_rate3,
    cafe_rate_count3,
    cafe_location3
  ) {
    let path = this.getContextPath();
    let list = ` <section>
      <div class="block">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="heading">
                <h2>This Week's New Hidden Cafes</h2>
                <span>이번주 새로 등록된 카페입니다.</span>
              </div>
              <div class="carouselplaces">
                <ul id="carouselsec" class="js-cafe-list">
                  <li>
                    <div class="places">
                      <div class="placethumb">
                        <img src="${path}+'360x220'" alt="new_cafe" />
                        <div class="placeoptions">
                          <span class="pull-left">
                            <i class="flaticon-eye"></i> Preview
                          </span>
                          <span class="pull-right">
                            <i class="flaticon-heart"></i> Save
                          </span>
                        </div>
                      </div>
                      <div class="placeinfos">
                        <h3><a href="" >{cafe_name1}</a></h3>
                        <hidden value="{value1}"></hidden>
  
                        <ul class="listmetas">
                          <li>
                            <span class="rated">{cafe_rate1}</span
                            >{cafe_rate_count1}
                            <hidden value="{value1}"></hidden>
                          </li>
                        </ul>
                      </div>
                      <div class="placedetails">
                        <span class="pull-left"
                          ><i class="flaticon-pin"></i>{cafe_location1}</span
                        >
                      </div>
                    </div>
                    <!-- Places -->
                  </li>
                  <li>
                    <div class="places">
                      <div class="placethumb">
                        <img src="${path}+'360x220'" alt="new_cafe" />
                        <div class="placeoptions">
                          <span class="pull-left">
                            <i class="flaticon-eye"></i> Preview
                          </span>
                          <span class="pull-right">
                            <i class="flaticon-heart"></i> Save
                          </span>
                        </div>
                      </div>
                      <div class="placeinfos">
                        <h3><a href="" >{cafe_name2}</a></h3>
                        <hidden value="{value2}"></hidden>
  
                        <ul class="listmetas">
                          <li>
                            <span class="rated">{cafe_rate2}</span
                            >{cafe_rate_count2}
                            <hidden value="{value2}"></hidden>
                          </li>
                        </ul>
                      </div>
                      <div class="placedetails">
                        <span class="pull-left"
                          ><i class="flaticon-pin"></i>{cafe_location2}</span
                        >
                      </div>
                    </div>
                    <!-- Places -->
                  </li>
                  <li>
                    <div class="places">
                      <div class="placethumb">
                        <img src="${path}+'360x220'" alt="new_cafe" />
                        <div class="placeoptions">
                          <span class="pull-left">
                            <i class="flaticon-eye"></i> Preview
                          </span>
                          <span class="pull-right">
                            <i class="flaticon-heart"></i> Save
                          </span>
                        </div>
                      </div>
                      <div class="placeinfos">
                        <h3><a href="" >{cafe_name3}</a></h3>
                        <hidden value="{value3}"></hidden>
  
                        <ul class="listmetas">
                          <li>
                            <span class="rated">{cafe_rate3}</span
                            >{cafe_rate_count3}
                            <hidden value="{value3}"></hidden>
                          </li>
                        </ul>
                      </div>
                      <div class="placedetails">
                        <span class="pull-left"
                          ><i class="flaticon-pin"></i>{cafe_location3}</span
                        >
                      </div>
                    </div>
                    <!-- Places -->
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`;
    return list;
  }

  makeUserMenu(
    user_img_background,
    user_img_profile,
    user_id,
    status,
    user_caffeine,
    user_like,
    total_cafe,
    subscription,
    favorite
  ) {
    let path = this.getContextPath();
    let menu = `        <div class="block remove-bottom double-gap-top">
      <div class="layer blackish">
          <div data-velocity="-.1" style="background: url(${path}+${user_img_background}) repeat scroll 50% 422.28px transparent;" class="no-parallax parallax scrolly-invisible"></div><!-- PARALLAX BACKGROUND IMAGE -->	
          <div class="container">
              <div class="row">
                  <div class="col-lg-12">
                      <div class="iamusersec">
                          <div class="iamuser">
                              <div class="userimg"><img src="${path}+${user_img_profile}" alt="user_img" /></div>
                              <div class="userinfos">
                                  <h3>{user_id}</h3>
                                  <span>{status}</span>
                              </div>
                          </div>
                          <div class="iamuserstats">
                              <span><i class="fa fa-coffee" aria-hidden="true"></i>Caffeine {user_caffeine}</span>
                              <span><i class="flaticon-avatar"></i>Subscriber {user_like}</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <div class="menubarsec">
      <div class="container">
          <div class="row">
              <div class="col-lg-12 js-user-menu">
                
                <a href="" class="disabled"><i class="flaticon-credit-card"></i>Dashboard</a>
                <a href="" class="disabled"><i class="fa fa-map-pin" aria-hidden="true"></i>My Hidden Cafe({total_cafe})</a>
                <a href="" class="disabled"><i class="fa fa-users" aria-hidden="true"></i>My Subscription({subscription}) </a>
                <a href="" class="disabled"><i class="fa fa-plus" aria-hidden="true"></i>Add New Hidden Cafe</a>
                <a href="" class="disabled"><i class="flaticon-heart"></i> Bookmark({favorite})</a>
                <a href="" class="disabled"><i class="fa fa-cog" aria-hidden="true"></i>Settings</a>
                
              </div>
          </div>
      </div>
  </div>
  </div>`;
    return menu;
  }

  makeDashboard(total_cafe, total_add, total_favorite) {
    let path = this.getContextPath();
    let dash = `<section>
      <div class="block gray">
          <div class="container">
              <div class="row">
                  <div class="col-lg-12">
                      <div class="dashboradsec">
                          <h3>Dashboard</h3>
                          <div class="dashbadgesec">
                              <div class="row">
                                  <div class="col-lg-4">
                                      <div class="dashbadge clr1">
                                          <a href=""  class="dashnum"> <span><i>{total_cafe}</i></span> <strong>I   visited</strong></a>
                                      </div>
                                  </div>
                                  <div class="col-lg-4">
                                      <div class="dashbadge clr2">
                                          <a href=""  class="dashnum"> <span><i>{total_add}</i></span> <>I added</  strong></a>
                                      </div>
                                  </div>
                                  <div class="col-lg-4">
                                      <div class="dashbadge clr3">
                                          <a href=""  class="dashnum"> <span><i>{total_favorite}</i></span>   <strong>Total Bookmark</strong></a>
                                      </div>
                                  </div> 
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>`;
    return dash;
  }

  makeListAndMap(search_count) {
    let path = this.getContextPath();
    let list = `<section>
      <div class="block no-padding">
        <div class="container fluid">
          <div class="row">
            <div class="col-lg-12" style="display: flex;">
              <div class="ml-filterslide openall " style="position:static">
                <div class="mlfilter-sec">
                  <div class="mfilterform forresponsive">
                    <div class="row">
                         <div class="col-lg-3">
                    <div class="mlfield drop">
                      <input type="text" placeholder="Price" />
                      <i class="fa fa-money"></i>
                      <div class="prices-dropsec">
                        <div class="prices-drop">
                          <p>What is the price range?</p>
                          <span><i>Prices</i>$</span><span><i>Prices</i>$$</span><span><i>Prices</i>$$$</span><span><i>Prices</i>$$$$</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="mlfield">
                      <input type="text" placeholder="Near Me" />
                      <i class="fa fa-flag-o"></i>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="mlfield">
                      <input type="text" placeholder="Open Now" />
                      <i class="fa fa-clock-o"></i>
                    </div>
                  </div>
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
                        <option>All Categories</option>
                        <option>원두 구입 가능</option>
                        <option>주문시, 원두선택가능</option>
                        <option>핸드드립 메뉴</option>
                        <option>지역별</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="customdropdown">
                      <span>More Filters <i class="fa fa-angle-down"></i></span>
                      <div class="customdrops">	
                        <div class="mltags">
                          <div class="row">
                            <div class="col-lg-6">
                              <p class="c-label"><input name="cb" id="1" type="checkbox"><label for="1">Smoking Allow</label></p>
                              <p class="c-label"><input name="cb" id="2" type="checkbox"><label for="2">Parking str</label></p>
                              <p class="c-label"><input name="cb" id="3" type="checkbox"><label for="3">Daily Specials</label></p>
                              <p class="c-label"><input name="cb" id="4" type="checkbox"><label for="4">Card Payment</label></p>
                            </div>
                            <div class="col-lg-6">
                              <p class="c-label"><input name="cb" id="5" type="checkbox"><label for="5">Wireless Inter</label></p>
                              <p class="c-label"><input name="cb" id="6" type="checkbox"><label for="6">Wheelchair</label></p>
                              <p class="c-label"><input name="cb" id="7" type="checkbox"><label for="7">Pet Friendly</label></p>
                              <p class="c-label"><input name="cb" id="8" type="checkbox"><label for="8">Smoking Allow</label></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="customdropdown">
                      <span>Distance Radius <i class="fa fa-angle-down"></i></span>
                      <div class="customdrops">
                        <div class="rangedrops">
                          <span>Radius around selected destination</span>
                          <div class="rslider">
                            <amino-slider class="slider" data-min="0" data-max="100" data-value="10"></amino-slider>
                          </div>
                          <a href=""  class="btn1 pull-left">Disable</a>
                          <a href=""  class="btn2 pull-right">Apply</a>
                        </div>
                      </div>
                    </div>
                  </div>
                    </div>
                  </div>
                  <div class="ml-listings allset">
                    <div class="ml-filterbar">
                      <h3><i class="flaticon-eye"></i>{search_count} Results Found</h3>
                      <ul>
                        <li class="doubleplaces active"><span><i class="fa fa-th-large"></i></span></li>
                        <li class="listingplaces"><span><i class="fa fa-th-list"></i></span></li>
                      </ul>
                    </div>
                    <div class="ml-placessec "> 
                      <div class="row js-user-myhiddencafe-list">
        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="half_map_custom" style ="position: static;">
                <div id="js-map-half" class="map" style="height:100%">&nbsp;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`;
    return list;
  }

  makeHalfListItem(cafe_name, cafe_rate, cafe_rate_count, cafe_location) {
    let path = this.getContextPath();
    let item = `       <!--여기서 부터 1개의 카페-->
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
          <h3><a href="">{cafe_name}</a></h3>
          <hidden value="{value}"></hidden>
          <ul class="listmetas">
            <li><span class="rated">{cafe_rate}</span>{cafe_rate_count}</li>
          </ul>
        </div>
        <div class="placedetails">
          <span class="pull-left"
            ><i class="flaticon-pin"></i>{cafe_location}</span
          >
        </div>
      </div>
    </div>
  </div>
  <!-- Places -->`;
    return item;
  }

  makeMySubscription(user_img_mini, user_id) {
    let path = this.getContextPath();
    let subscription = ` <div class="block remove-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="userdropsec sub_profile">
              <span
                ><img
                  src="${path}+${user_img_mini}"
                  alt="subscription_user_img"
                />{user_id}</span
              >
            </div>
            <div class="ml-placessec">
              <div class="row js-user-myhiddencafe-list js-cafe-list">
     
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
    return subscription;
  }

  makeSubscriptionItem(cafe_name, cafe_rate, cafe_rate_count, cafe_location) {
    let path = this.getContextPath();
    let list = `      <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
    <div class="places">
      <div class="placethumb">
        <img src="${path}+'360x220'" alt="subscription_cafe" />
        <div class="placeoptions">
          <span class="pull-left">
            <i class="flaticon-eye"></i> Preview
          </span>
          <hidden value="{value}"></hidden>
          <span class="pull-right">
            <i class="flaticon-heart"></i> Save
          </span>
        </div>
      </div>
      <div class="boxplaces">
        <div class="placeinfos">
          <h3><a href="">{cafe_name}</a></h3>
          <hidden value="{value}"></hidden>
          <ul class="listmetas">
            <li><span class="rated">{cafe_rate}</span>{cafe_rate_count}</li>
          </ul>
        </div>
        <div class="placedetails">
          <span class="pull-left"
            ><i class="flaticon-pin"></i>{cafe_location}</span
          >
        </div>
      </div>
    </div>
  </div>`;
    return list;
  }

  makeAddCafe() {
    let path = this.getContextPath();
    let add = `    <section>
    <div class="block gray">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <!-- PBox -->
            <div class="pbox">
              <form class="addlistingform" id="js-addcafe-user-form">
                <div class="add_cafe_title">카페 추가하기</div>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="fieldformy">
                      <span>카페 이름 *</span>
                      <input type="text"  name="cafe_name" required="required"/>
                    </div>
                    <div class="fieldformy">
                      <span
                        >카페 메뉴 (본인이 구매한 메뉴라도 적어주세요)</span
                      >
                      <input
                        placeholder="ex) 아메리카노 4000 , 라떼 4500"
                        type="text" name="cafe_menu"
                      />
                    </div>
                    <div class="fieldformy">
                      <span>카테고리</span>
                      <select class="cdropshere" name="category">
                        <option value="">select option</option>
                        <option value="">option1</option>
                        <option value="">option2</option>
                        <option value="">option3</option>
                        <option value="">option4</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="fieldformy">
                      <span>카페 주소 *</span>
                      <input
                        placeholder="ex) Seoul, Jongno-gu, Gwancheol-dong, 5-8 카페 뎀셀브즈"
                        type="text"  name="cafe_loaction" required="required"
                      />
                    </div>
                    <div class="fieldformy">
                      <span>카페 SNS </span>
                      <input
                        placeholder="https://www.instagram.com/starbucks"
                        type="text"  name="cafe_sns"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <a  class="uploadfile">
                      <img src="images/cloud.png" alt="upload_img" multiple="multiple"/>
                      <span>이미지를 업로드 하려면 클릭해주세요.</span>
                      <input
                        type="file"
                        accept="img/*"
                        onChange="uploadImgPreview()"
                        id="js-upload" class="js-user-addcafe-img" name="cafe_image"
                      />
                    </a>
                    <div class="pbox">
                      <h3>Gallery</h3>
                      <div class="slistinggallery">
                        <div class="sgallery img_preview" >
                          <div id="js-thumnail" style="display: flex"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                 <button type="submit" class="js-user-addcafe-btn" >등록하기</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
    return add;
  }

  makeSettings() {
    let path = this.getContextPath();
    let profile = `      <section>
    <div class="block gray">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <form id="js-user-settings-form">
              <h3>Profile</h3>
              <div class="profileimageaction">
                <div class="row">
                  <div class="col-lg-5 " >
                    <div class="changeimg">
                      <h3>Change Profile Image</h3>

                      <div class="uploadimage">
                        <div
                          id="js-thumnail"
                          style="display: flex"
                          src=""
                        ></div>
                        <a href="">Cancel</a>

                        <div class="jstinput">
                          <a href="" class="browsephoto">Browse</a>
                          <input
                            type="file"
                            accept="img/*"
                            id="js-upload-profile"
                            
                            name="user_profile_img"
                          />
                        </div>

                        <p>
                          Max file size is 1MB, Minimum dimension:
                          <br />270x210 And Suitable
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-7" >
                    <div class="changeimg">
                      <h3>Change Background</h3>

                      <div class="uploadimage">
                        <div
                          id="js-back-img"
                          style="display: flex"
                          src=""
                        ></div>
                        <a href="">Cancel</a>
                      </div>

                      <div class="jstinput">
                        <a href="" class="browsephoto">Browse</a>
                        <input
                          type="file"
                          accept="img/*"
                        
                          id="js-upload-back-img"
                          name="user_back_img"
                        />
                      </div>

                      <p>
                        Max file size is 1MB, Minimum dimension: 1920x400 And
                        Suitable <br />files are .jpg & .png
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="pbox">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="fieldformy">
                      <span>status message</span>
                      <input type="text" name="user_status" />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="fieldformy">
                      <span>Email </span>
                      <input type="email" name="user_email" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="pbox">
                <h3>Change Password</h3>

                <div class="row">
                  <div class="col-lg-12">
                    <div class="fieldformy">
                      <span>New Password</span>
                      <input type="password" name="user_changed_pw1" />
                    </div>
                    <div class="fieldformy">
                      <span>Confirm New Password</span>
                      <input type="password" name="user_changed_pw2" />
                    </div>
                  </div>
                </div>
              </div>
              <button type="submit" class="js-user-pwchange-btn">
                업데이트
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>`;
    return profile;
  }

  //리스트의 ul에클래스를 주고 컴포넌트에서 li를 추가
}
