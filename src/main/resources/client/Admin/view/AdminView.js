// adminpage(cafe management) = makeAdminHeader + makeAdminMenu + makeCafeList + makeFooter (common) + makeSearchPop(common)
// admin - user management = 아직 구현안됨.
// admin - addcafe : makeAdminHeader + makeAdminMenu +  makeAddCafeForm + makeFooter(common) + makeSearchPop(common)
// admin - revisecafe : makeAdminHeader +  makeReviseCafeForm + makeFooter(common) +makeSearchPop(common)
// main(home) : makeAdminHeader + makeMainCaffeineList + makeMainCafeList + makeFooter(common) + makeSearchPop(common)
// search_result : makeAdminHeader + makeSearchResult + makeFooter(common) + makeSearchPop(common)
// cafeInfo : makeAdminHeader + makeCafeInfo(common) + makeFooter(common) + makeSearchPop(common)

export class AdminView {
  constructor() {}

  getContextPath() {
    var hostIndex = location.href.indexOf(location.host) + location.host.length;
    return location.href.substring(
      hostIndex,
      location.href.indexOf("/", hostIndex + 1)
    );
  }

  makeAdminHeader(admin_id) {
    let path = this.getContextPath();
    let admin_header = `
    <div class="theme-layout">
    <div class="responsiveheader">
    <div class="rheader">
      <span><img src="${path}/images/ricon.png" alt="menu_icon" /></span>
      <div class="logo">
        <a href="">
        <img src="${path}/images/hiddenc_logo.png" alt="hiddenC_logo"
        /></a>
      </div>
    </div>
    <div class="rnaver">
      <span class="closeresmenu"><i>x</i>Close</span>
      <ul class="js-admin-header-menu">
        <li>
          <a href="" class="disabled">Home</a>
        </li>
        <li class="accountbtn">
          <a href="" class="disabled">Search</a>
        </li>
        <li>
          <a href="" class="disabled">Admin</a>
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
          >${admin_id}</span
          ></span>
      </div>
      <a href="" class="bellicon"
        ><i class="fa fa-bell-o"></i><strong>{notification}</strong></a>
      <nav>
        <ul class="js-admin-header-menu">
          <li>
          <a href="" class="disabled">Home</a>
          </li>
          <li class="accountbtn" style="float: left" >
          <a href="" class="disabled">Search</a>
          </li>
          <li>
          <a href="" class="disabled" >Admin</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>`;
    return admin_header;
  }

  makeAdminMenu() {
    let admin_menu = `
    <div class="menubarsec">
      <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-12">
            <ul class="js-admin-menu"">
              <li>
               <a href=""><i class="fa fa-coffee" aria-hidden="true"></i>Hidden Cafe List</a>
              </li>
              <li>
              <a href=""><i class="fa fa-address-card-o" aria-hidden="true"></i>Member Management</a>
              </li>
              <li>
              <a href=""><i class="fa fa-plus" aria-hidden="true"></i>Add New Hidden Cafe</a>
              </li>
              <li>
              <a href=""><i class="fa fa-user-plus"></i> Revise Hidden Cafe</a>
              </li>
              </ul>
            </div>
        </div>
      </div>
    </div>`;
    return admin_menu;
  }

  makeCafeList() {
    let saved_cafe_list = `
    <section>
    <div class="block gray">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="pbox">
              <div class="addlistingform">
                <div class="add_cafe_title">카페 등록 현황</div>
                   <div class="row js-admin-cafelist">
                      <div class="col-lg-6">
                        <div class="fieldformy">
                         <div>카페명</div>
                       </div>
                      </div>
                      <div class="col-lg-6">
                       <div class="fieldformy">
                         <div> 주소 </div>
                       </div>
                      </div>
                    
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
    return saved_cafe_list;
  }

  makeCafeListItem(cafe_name, cafe_location) {
    let item = `
    <div class="col-lg-6">
      <div class="fieldformy">
        <span>${cafe_name} </span>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="fieldformy">
        <span>${cafe_location} </span>
      </div>
    </div>`;
    return item;
  }

  makeMemberList() {
    let member_list = `
    <section>
    <div class="block gray">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="pbox">
              <div class="addlistingform">
                <div class="add_cafe_title">회원 관리</div>
                  <div class="row js-admin-memberlist">
                  <div class="col-lg-4">
                    <div class="fieldformy">
                    <div> ID</div>
                    </div>
                  </div>
                  <div class="col-lg-4">
                   <div class="fieldformy">
                     <div>이름</div>
                   </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="fieldformy">
                     <div>카페인 지수</div>
                   </div> 
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
    `;
    return member_list;
  }
  makeMemberItem(user_id, user_name, user_caffeine) {
    let member_item = `
    <div class="col-lg-4">
      <div class="fieldformy">
        <span>${user_id}</span>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="fieldformy">
       <span>${user_name}</span>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="fieldformy">
       <span>${user_caffeine}</span>
      </div>
    </div> `;
    return member_item;
  }
  makeReviseCafeForm() {
    let admin_revisecafe = `
    <section>
        <div class="block gray">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-10">
                <!-- PBox -->
                <div class="pbox">
                  <div class="addlistingform">
                    <div class="add_cafe_title">카페 수정하기</div>
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="saved_cafe_list">
                          <h5 id="cafe_list_title">
                            카페 리스트:
                            <select name="cafe_list" class="js-admin-revisecafe-list" id="saved_cafe_list">
                              <option value="0">select</option>
                            </select>
                          </h5>
                        </div>
                        <div class="fieldbtn">
                          <button type="submit" class="js-admin-revisecafe-btn">불러오기</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="pbox">
                  <form enctype="multipart/form-data" class="addlistingform" id="js-admin-revisecafe-form">
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="fieldformy">
                          <span>카페 이름 *</span>
                          <input type="text" name="cafe_name" required/>
                        </div>
                        <div class="fieldformy">
                          <span>카페 메뉴 </span>
                          <input type="text" name="cafe_menu" placeholder="" />
                        </div>
                        <div class="fieldformy">
                          <span>카테고리</span>
                          <select class="cdropshere">
                            <option>select option</option>
                            <option>option1</option>
                            <option>option2</option>
                            <option>option3</option>
                            <option>option4</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="fieldformy">
                          <span>카페 주소 *</span>
                          <input type="text" name="cafe_location" placeholder="ex)서울시 종로구 관철동 5-8, 카페 뎀셀브즈"
                          required />
                        </div>
                        <div class="fieldformy">
                          <span>카페 SNS </span>
                          <input type="text" name="cafe_sns" placeholder="" />
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="fieldformy">
                          <span>카페 기타 정보 사항</span>
                          <textarea
                            name="cafe_information"
                            class="js-admin-revisecafe-input"
                            placeholder="예) 여기는 라떼맛집이에요! 핸드드립 메뉴도 있어요"
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <a class="uploadfile">
                          <img src="images/cloud.png" alt="" />
                          <span>이미지를 업로드 하려면 클릭해주세요.</span>
                          <input
                            type="file"
                            name="cafe_image"
                            multiple="multiple"
                            class="js-admin-revisecafe-img"
                            accept="img/*"
                            onChange="uploadImgPreview()"
                            id="js-upload"
                          />
                        </a>
                        <div class="pbox">
                          <h3>Gallery</h3>
                          <div class="slistinggallery">
                            <div class="sgallery img_preview">
                              <div id="js-thumnail" style="display: flex"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                      <button type="submit" class="js-submit js-admin-revisecafe-btn">등록하기</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>`;
    return admin_revisecafe;
  }

  makeReviseCafeList(cafe_name) {
    let revise_cafe_name = `
    <option value="">${cafe_name}</option>`;
    return revise_cafe_name;
  }
  makeAddCafeForm() {
    let admin_addcafe = `
    <div class="block gray">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-10">
                <div class="pbox">
                  <form enctype="multipart/form-data" class="addlistingform" id="js-admin-addcafe-form" >
                    <div class="add_cafe_title">카페 추가하기</div>
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="fieldformy">
                          <span>카페 이름 *</span>
                          <input type="text" name="cafe_name" required />
                        </div>
                        <div class="fieldformy">
                          <span
                            >카페 메뉴</span
                          >
                          <input
                            type="text"
                            name="cafe_menu" 
                            placeholder="ex) 아메리카노 4000 , 라떼 4500"
                          />
                        </div>
                        <div class="fieldformy">
                          <span>카테고리</span>
                          <select class="cdropshere">
                            <option>select option</option>
                            <option>option1</option>
                            <option>option2</option>
                            <option>option3</option>
                            <option>option4</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="fieldformy">
                          <span>카페 주소 *</span>
                          <input
                            type="text"
                            name="cafe_location"
                            placeholder="ex) Seoul, Jongno-gu, Gwancheol-dong, 5-8 카페 뎀셀브즈"
                            required
                          />
                        </div>
                        <div class="fieldformy">
                          <span>카페 SNS </span>
                          <input
                          type="text"
                          name="cafe_sns"
                          placeholder="https://www.instagram.com/starbucks"
                          />
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="fieldformy">
                          <span>카페 기타 정보 사항</span>
                          <textarea
                            name="cafe_information"
                            placeholder="예) 여기는 라떼맛집이에요! 핸드드립 메뉴도 있어요"
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <a class="uploadfile">
                          <img src="images/cloud.png" alt="" />
                          <span>이미지를 업로드 하려면 클릭해주세요.</span>
                          <input
                            type="file"
                            multiple="multiple"
                            name="cafe_image"
                            class="js-admin-addcafe-img"
                            accept="img/*"
                            onChange="uploadImgPreview()"
                            id="js-upload"
                          />
                        </a>
                        <div class="pbox">
                          <h3>Gallery</h3>
                          <div class="slistinggallery">
                            <div class="sgallery img_preview">
                              <div id="js-thumnail" style="display: flex"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                    <button type="submit" class="js-submit js-admin-addcafe-btn">등록하기</button>
                    </form>
                </div>
              </div>
            </div>
          </div>
        </div>`;
    return admin_addcafe;
  }
}
