package com.hiddenc.hyun.signupLogin.controller;

import com.hiddenc.model.dto.UserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@CrossOrigin
public class CheckSession {

    @Autowired
    UserDto userDto;

    @GetMapping("/login/check")
    @ResponseBody
    public String checkSession() {
        Boolean check = userDto.isLoggedIn();
        System.out.println(check);
        return "hello";
    }

}
