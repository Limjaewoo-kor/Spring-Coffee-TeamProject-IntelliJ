package com.hiddenc.hyun.mypage.controller;


import com.hiddenc.admin.beans.*;
import com.hiddenc.hyun.mypage.dto.CafeAddBean;
import com.hiddenc.hyun.mypage.dto.SimpleUserAdd;
import com.hiddenc.model.dto.UserDto;
import com.hiddenc.model.mapper.CafeMapper;
import com.hiddenc.model.mapper.MypageMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin
public class RestMypageController {


    @Autowired
    MypageMapper mypageMapper;

    @Autowired
    CafeAddBean cafeAddBean;

    @Autowired
    UserDto userDto;

    @Autowired
    CafeMapper cafeMapper;


    //개인 페이지 카페 신규 등록 요청

    @PostMapping("/user/addcafe")
    public ResponseEntity userAddCafe(@Valid SimpleUserAdd simpleUserAdd,simpleCafeImg simpleCafeImg, BindingResult bindingResult) {
        ResponseEntity responseEntity;
        if (bindingResult.hasErrors()) {
            List<ObjectError> allErrors = bindingResult.getAllErrors();
            List<ErrorMessages> errorMessagesList = new ArrayList<>();
            for (ObjectError objectError : allErrors) {
                String defaultMessage = objectError.getDefaultMessage();
                String code = objectError.getCode();
                ErrorMessages errorMessages = new ErrorMessages(defaultMessage, code);
                errorMessagesList.add(errorMessages);
            }
            return new ResponseEntity(errorMessagesList, HttpStatus.BAD_REQUEST);
        } else {
            CafeImg cafeImg = new CafeImg();
            CafeBean cafeBean = new CafeBean();

            // 데이터 베이스 처리를 현재 위치에서 처리
            cafeAddBean.setCafe_name(simpleUserAdd.getCafe_name());
            cafeAddBean.setCafe_location(simpleUserAdd.getCafe_location());
            cafeAddBean.setCafe_menu(simpleUserAdd.getCafe_menu());
            cafeAddBean.setCafe_information(simpleUserAdd.getCafe_information());
            cafeAddBean.setIs_enable_bean_choice(simpleUserAdd.getIs_enable_bean_choice());
            cafeAddBean.setCafe_mood(simpleUserAdd.getCafe_mood());
            cafeAddBean.setIs_enable_buy_bean(simpleUserAdd.getIs_enable_buy_bean());
            cafeAddBean.setIs_enable_handdrip(simpleUserAdd.getIs_enable_handdrip());
            cafeAddBean.setUser_id(userDto.getUser_idpk());//userDTO에서 가져오기
            Boolean special = mypageMapper.special(cafeAddBean);
            if(special){
                cafeAddBean.setIs_checked(true);
            }else{
                cafeAddBean.setIs_checked(false);
            }
            cafeAddBean.setCafe_sns(simpleUserAdd.getCafe_sns());
            mypageMapper.addCafe(cafeAddBean);


            System.out.println(special);
            cafeImg.setCafe_id(mypageMapper.cafeid2(cafeAddBean));
            if(special){
                cafeImg.setIs_checked(true);
            }else{
                cafeImg.setIs_checked(false);}

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

            responseEntity = new ResponseEntity(cafeAddBean, HttpStatus.OK);
        }
        return responseEntity;

    }
}