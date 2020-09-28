package com.hiddenc.admin.controller;


import com.hiddenc.admin.beans.*;


import com.hiddenc.model.dto.UserDto;
import com.hiddenc.model.mapper.CafeMapper;
import com.hiddenc.model.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.kafka.KafkaProperties;
import org.springframework.context.annotation.PropertySource;
import org.springframework.http.*;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import javax.validation.Valid;
import java.io.*;
import java.util.*;


@RestController
@PropertySource("/WEB-INF/properties/Admin.properties")
@CrossOrigin
public class RestExampleController {


    @Resource(name = "adminlogin")
    AdminConnection adminConnection;

    @Resource(name = "adminLoginBean")
    AdminConnection adminLogin;

    @Autowired
    SimpleAdminBean simpleAdminBean;

    @Autowired
    SimpleCafeBean simpleCafeBean;

    @Autowired
    SimpleUserCafeBean simpleUserCafeBean;
    @Autowired
    CafeMapper cafeMapper;
    @Autowired
    UserMapper userMapper;

    @Autowired
    UserDto userDto;
    @Autowired
    adminAmontBean adminAmontBean;



//// 어드민 로그인 전
//
//    @PostMapping("/login")
//    public String adminlogin(@Valid SimpleAdminBean simpleAdminBean) {
//
//
//        String admin_id = simpleAdminBean.getAdmin_id();
//        String admin_pw = simpleAdminBean.getAdmin_pw();
//        String id = adminConnection.getAdmin_id();
//        String pw = adminConnection.getAdmin_pw();
//
//
//        if (id.equals(admin_id) && pw.equals(admin_pw)) {
//            adminLogin.setLoggedIn(true);
//
//            return "admin_true"; //다 맞으면
//
//        } else if (!(id.equals(admin_id))) {
//            return "id_false";  //아이디가 틀리면
//        } else if (!(pw.equals(admin_pw))) {
//            return "pw_false";   //패스워드가 틀리면
//        } else {
//            return "all_false";  //다 틀리면
//        }
//    }


//    //어드민 카페 정보1
//
//    @GetMapping("/admin/cafe")
//    public AllCafeBean selectAllCafes(AllCafeBean allCafeBean){
//    CafeBean cafeBean = new CafeBean();
//    CafeImg cafeImg = new CafeImg();
//    Review review = new Review();
//
//    allCafeBean.setCafebean(cafeMapper.selectAllCafes(cafeBean));
//    allCafeBean.setCafeimg(cafeMapper.selectAllCafeimg(cafeImg));
//    allCafeBean.setReview(cafeMapper.selectAllReview(review));
//
//        return allCafeBean;
//    }
    //어드민 카페 정보2

    @GetMapping("/admin/cafe")
    public List<getCafeBean> getCafe(getCafeBean getCafeBean){




        return  cafeMapper.getCafe(getCafeBean);
    }
    //어드민 회원 관리

    @GetMapping("/admin/user")
    public List<AdminUserBean> adminuser() {

        return userMapper.selectUsers();
    }



//  어드민 카페 등록

    @PostMapping(value = "admin/addcafe")

    public ResponseEntity addCafe(@Valid SimpleCafeBean simpleCafeBean, simpleCafeImg simpleCafeImg, BindingResult bindingResult) {
        ResponseEntity responseEntity;
        if (bindingResult.hasErrors()) {
            List<ObjectError> allErrors = bindingResult.getAllErrors();
            List<ErrorMessages> errorMessagesList = new ArrayList<>();
            for (ObjectError objectError : allErrors) {
                String defaultMessage = objectError.getDefaultMessage();
                String code = objectError.getCode();
                com.hiddenc.admin.beans.ErrorMessages errorMessages = new com.hiddenc.admin.beans.ErrorMessages(defaultMessage, code);
                errorMessagesList.add(errorMessages);
            }
            return new ResponseEntity(errorMessagesList, HttpStatus.BAD_REQUEST);
        } else {
            System.out.println(userDto.getUser_idpk());

            CafeImg cafeImg = new CafeImg();
            CafeBean cafeBean = new CafeBean();
//            CafeBean.createCafeBean(simpleCafeBean);
            cafeBean.setUser_id(1);
            cafeBean.setCafe_name(simpleCafeBean.getCafe_name());
            cafeBean.setCafe_location(simpleCafeBean.getCafe_location());
            cafeBean.setCafe_menu(simpleCafeBean.getCafe_menu());
            cafeBean.setCafe_information(simpleCafeBean.getCafe_information());
            cafeBean.setIs_enable_bean_choice(simpleCafeBean.getIs_enable_bean_choice());
            cafeBean.setCafe_mood(simpleCafeBean.getCafe_mood());
            cafeBean.setIs_checked(true);
            cafeBean.setIs_enable_buy_bean(simpleCafeBean.getIs_enable_buy_bean());
            cafeBean.setIs_enable_handdrip(simpleCafeBean.getIs_enable_handdrip());
            cafeBean.setCafe_sns(simpleCafeBean.getCafe_sns());
            cafeMapper.addCafe(cafeBean);


            cafeImg.setCafe_id(cafeMapper.cafeid(cafeBean));
            cafeImg.setIs_checked(true);

            List<MultipartFile> files = simpleCafeImg.getCafe_image();
            List<String> uploadFileNames = new ArrayList<String>();
            System.out.println("update Ajax post....");
            String uploadFolder = "/Users/limjaewoo/IdeaProjects/tempproject/src/main/webapp/resources/cafeimage/";
            System.out.println(simpleCafeImg.getCafe_image());

            if(null != files && files.size() > 0){
                for(MultipartFile multipartFile : files){
                    String uploadFileName = multipartFile.getOriginalFilename();
                    uploadFileName = uploadFileName.substring(uploadFileName.lastIndexOf("\\") + 1);
                    UUID uuid = UUID.randomUUID();
                    String filen = uuid.toString() + "_" + uploadFileName;
                    File saveFile = new File(uploadFolder, filen);
                    String fi = "resources/cafeimage/";
                    String filedb = fi+filen;
                    uploadFileNames.add(uploadFileName);
                    try {
                        multipartFile.transferTo(saveFile);

                    } catch (Exception e) {
                        System.out.println(e.getMessage());
                    }
                    cafeImg.setCafe_image(filedb);
                    cafeMapper.addCafeImage(cafeImg);

                }
            }

            return new ResponseEntity(cafeBean, HttpStatus.OK);

        }
    }



    //어드민 유저카페등록 요청

    @GetMapping("admin/addcafe/byuser")
    public AllByUser byuser(AllByUser allByUser) {

        ByUserBean byUserBean = new ByUserBean();
        CafeImg cafeImg = new CafeImg();

        allByUser.setByuser(cafeMapper.selectbyusers(byUserBean));

        System.out.println(byUserBean.getCafe_id());
        allByUser.setCafeImgList(cafeMapper.selectbyuserimage(cafeImg));
         return allByUser;
    }


    //어드민 유저 카페등록 수락

    @PostMapping("admin/addcafe/byuser")
    public ResponseEntity updateCafe(@Valid SimpleUserCafeBean simpleUserCafeBean,simpleCafeImg simpleCafeImg, BindingResult bindingResult) {
        ResponseEntity responseEntity;
        if (bindingResult.hasErrors()) {
            List<ObjectError> allErrors = bindingResult.getAllErrors();
            List<ErrorMessages> errorMessagesList = new ArrayList<>();
            for (ObjectError objectError : allErrors) {
                String defaultMessage = objectError.getDefaultMessage();
                String code = objectError.getCode();
                com.hiddenc.admin.beans.ErrorMessages errorMessages = new com.hiddenc.admin.beans.ErrorMessages(defaultMessage, code);
                errorMessagesList.add(errorMessages);
            }
            return new ResponseEntity(errorMessagesList, HttpStatus.BAD_REQUEST);
        } else {
            Cafe_id cafe_id = new Cafe_id();
            // 데이터 베이스 처리를 현재 위치에서 처리
            CafeImg cafeImg = new CafeImg();
            CafeBean cafeBean = new CafeBean();
            cafeBean.setUser_id(simpleUserCafeBean.getUser_id());
            cafeBean.setCafe_id(simpleUserCafeBean.getCafe_id());
            cafeBean.setCafe_name(simpleUserCafeBean.getCafe_name());
            cafeBean.setCafe_location(simpleUserCafeBean.getCafe_location());
            cafeBean.setCafe_menu(simpleUserCafeBean.getCafe_menu());
            cafeBean.setCafe_information(simpleUserCafeBean.getCafe_information());
            cafeBean.setIs_enable_bean_choice(simpleUserCafeBean.getIs_enable_bean_choice());
            cafeBean.setCafe_mood(simpleUserCafeBean.getCafe_mood());
            cafeBean.setIs_enable_buy_bean(simpleUserCafeBean.getIs_enable_buy_bean());
            cafeBean.setIs_enable_handdrip(simpleUserCafeBean.getIs_enable_handdrip());
            cafeBean.setIs_checked(true);
            cafeBean.setCafe_sns(simpleUserCafeBean.getCafe_sns());
            cafeMapper.updatebyuser(cafeBean);


            cafe_id.setCafe_id(cafeBean.getCafe_id());
            cafeImg.setCafe_id(cafe_id.getCafe_id());
            cafeImg.setIs_checked(true);


            List<OnlyCafeimg> cafenames = cafeMapper.selimg(cafeImg);

            System.out.println(cafenames);

            for(int i = 0; i < cafenames.size(); i++ ){
                    String cafename = String.valueOf(cafenames.get(i));
                System.out.println(cafename);
                    String filePath = "/Users/limjaewoo/IdeaProjects/tempproject/src/main/webapp/"+cafename;
                    File deleteFile = new File(filePath);

                    if(deleteFile.exists()){
                        deleteFile.delete();
                        System.out.println("파일삭제");

                    }else {
                        System.out.println("파일존재하지않는다");
                    }
                }


            cafeMapper.delimg(cafeImg);


            List<MultipartFile> files = simpleCafeImg.getCafe_image();
            List<String> uploadFileNames = new ArrayList<String>();
            System.out.println("update Ajax post....");
            String uploadFolder = "/Users/limjaewoo/IdeaProjects/tempproject/src/main/webapp/resources/cafeimage/";
            System.out.println(simpleCafeImg.getCafe_image());

            if(null != files && files.size() > 0){
                for(MultipartFile multipartFile : files){
                    String uploadFileName = multipartFile.getOriginalFilename();
                    uploadFileName = uploadFileName.substring(uploadFileName.lastIndexOf("\\") + 1);
                    UUID uuid = UUID.randomUUID();
                    String filen = uuid.toString() + "_" + uploadFileName;
                    File saveFile = new File(uploadFolder, filen);
                    String fi = "resources/cafeimage/";
                    String filedb = fi+filen;
                    uploadFileNames.add(uploadFileName);
                    try {
                        multipartFile.transferTo(saveFile);

                    } catch (Exception e) {
                        System.out.println(e.getMessage());
                    }
                    cafeImg.setCafe_image(filedb);
                    cafeMapper.inimg(cafeImg);

                }
            }

            responseEntity = new ResponseEntity(cafeBean, HttpStatus.OK);
        }



        int totalAddcafe2 = (adminAmontBean.getTotalAddcafe2());

        if(totalAddcafe2 == 0)
            totalAddcafe2 = 30;

        userDto.setUser_idpk(simpleUserCafeBean.getUser_id());
        userDto.setUser_caffeine(totalAddcafe2);
        userMapper.updateCaffeine(userDto);


        return responseEntity;
    }

    //관리자 카페 삭제
    @PostMapping("/admin/deletecafe")
    public ResponseEntity deleteFile(Cafe_id cafe_id){
        CafeImg cafeImg = new CafeImg();

        cafeImg.setCafe_id(cafe_id.getCafe_id());
        cafeImg.setIs_checked(true);

        List<OnlyCafeimg> cafenames = cafeMapper.selimg(cafeImg);

        System.out.println(cafenames);

        for(int i = 0; i < cafenames.size(); i++ ){
            String cafename = String.valueOf(cafenames.get(i));
            System.out.println(cafename);
            String filePath = "/Users/limjaewoo/IdeaProjects/tempproject/src/main/webapp/"+cafename;
            File deleteFile = new File(filePath);

            if(deleteFile.exists()){
                deleteFile.delete();
                System.out.println("파일삭제");


            }else {
                System.out.println("파일존재하지않는다");
            }
        }
        cafeMapper.delcafe(cafeImg);
        System.out.println("카페 삭제 완료");

        return new ResponseEntity("카페 삭제 완료", HttpStatus.OK);
    }

//관리자 카페인 기준 변경
    @PostMapping("/admin/caffeineStandard")
    public ResponseEntity admincaffeineStandard(adminAmontBean2 adminAmontBean2){

        adminAmontBean.setTotalAddcafe2(adminAmontBean2.getTotalAddcafe2());
        adminAmontBean.setUserlike2(adminAmontBean2.getUserlike2());


        return new ResponseEntity("caffeineStandard complite", HttpStatus.OK);
    }


    //관리자 유저 블락
    @PostMapping("admin/userblock")
    public ResponseEntity adminUserBlock(AdminUserDto adminUserDto){

        userMapper.blockUser(adminUserDto);

        return new ResponseEntity("block complite", HttpStatus.OK);
    }


    //관리자 유저 블락 해제
    @PostMapping("admin/userunlock")
    public ResponseEntity unlockUser(AdminUserDto adminUserDto){

        userMapper.unlockUser(adminUserDto);

        return new ResponseEntity("unLock complite", HttpStatus.OK);
    }

    //관리자 블락 유저 조회
    @GetMapping("admin/blockusers")
    public ResponseEntity adminblockusers(AdminUserDto adminUserDto){

        return new ResponseEntity(userMapper.selectblockusers(),HttpStatus.OK);
    }

    //관리자 특별한 사용자 지정
    @PostMapping("admin/specialuserdesignation")
    public ResponseEntity specialuserdesignation(AdminUserDto adminUserDto){

        userMapper.specialuserdesignation(adminUserDto);

        return new ResponseEntity("specialuser complite",HttpStatus.OK);
    }

    //관리자 특별한 사용자 지정 해제
    @PostMapping("admin/unspecialusers")
    public ResponseEntity unspecialusers(AdminUserDto adminUserDto){
        userMapper.unspecialusers(adminUserDto);

        return new ResponseEntity("unspecialusers complite",HttpStatus.OK);
    }

    //관리자 특별한 사용자 조회
    @GetMapping("admin/specialusers")
    public ResponseEntity selectspecialuser(AdminUserDto adminUserDto){

        return new ResponseEntity(userMapper.selectspecialuser(),HttpStatus.OK);
    }
    

}








