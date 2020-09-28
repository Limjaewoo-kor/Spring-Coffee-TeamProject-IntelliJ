package com.hiddenc.hyun.signupLogin.controller;

import com.hiddenc.hyun.signupLogin.dto.ErrorMessage;
import com.hiddenc.hyun.signupLogin.dto.SimpleUserDto;
import com.hiddenc.model.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@Controller
public class signupController {

    @Autowired
    UserMapper userMapper;

    @Autowired
    SimpleUserDto simpleUserDto;


    // 회원가입
    @PostMapping("/signup")
    @ResponseBody
    public Object UserSignUp(@Validated SimpleUserDto simpleUserDto, BindingResult bindingResult) {

        try {
            System.out.println("회원가입");
            System.out.println(simpleUserDto);
            BCryptPasswordEncoder scpwd = new BCryptPasswordEncoder();
            String password = scpwd.encode(simpleUserDto.getUser_pw());
            simpleUserDto.setUser_pw(password);
            System.out.println(password);
            ResponseEntity responseEntity;

            // 유효성검사
            if (bindingResult.hasErrors()) {
                List<ObjectError> allErrors = bindingResult.getAllErrors();
                List<ErrorMessage> errorMessagesList = new ArrayList<>();

                for (ObjectError objectError : allErrors) {
                    String defaultMessage = objectError.getDefaultMessage();
                    String code = objectError.getCode();
                    ErrorMessage errorMessage = new ErrorMessage(defaultMessage, code);
                    errorMessagesList.add(errorMessage);
                }
                return new ResponseEntity(errorMessagesList, HttpStatus.BAD_REQUEST);

            } else {
                int isAlreadyExistId = userMapper.duplicateInspection(simpleUserDto);

                // ID가 중복일 시 아래 메시지 리턴
                if (isAlreadyExistId == 1) {
                    return "Sorry, That 'User_ID' is already Used by Someone :( ";

                } else {
                    userMapper.insertUser(simpleUserDto);
                    responseEntity = new ResponseEntity(simpleUserDto, HttpStatus.OK);
                }
            }
            return responseEntity;

        } catch (DuplicateKeyException e) {
            return "Sorry, That 'User_ID' is already Used by Someone :( ";
        }
    }
}
