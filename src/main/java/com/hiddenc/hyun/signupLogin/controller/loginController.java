package com.hiddenc.hyun.signupLogin.controller;
import com.hiddenc.admin.beans.AdminConnection;
import com.hiddenc.hyun.signupLogin.dto.SimpleUserDto;
import com.hiddenc.model.mapper.CafeMapper;
import com.hiddenc.model.dto.UserDto;
import com.hiddenc.model.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

@CrossOrigin
@Controller
public class loginController {

    @Autowired
    UserMapper userMapper;

    @Autowired
    UserDto userDto;

    @Autowired
    CafeMapper cafeMapper;


    @Resource(name = "adminlogin")
    AdminConnection adminConnection;

    @Resource(name = "adminLoginBean")
    AdminConnection adminlogin;

    // Login
    @PostMapping("/login")
    @ResponseBody
    public Object login(SimpleUserDto simpleUserDto) {

        BCryptPasswordEncoder scpwd = new BCryptPasswordEncoder();

        System.out.println("프론트도 된다.");
        System.out.println(simpleUserDto.getUser_id());
        try {
            userDto.setUser_id(simpleUserDto.getUser_id());
            userDto.setUser_pw(simpleUserDto.getUser_pw());
            String inputpw = userDto.getUser_pw();
            String id = userMapper.selectUserID(userDto);
            String pw = userMapper.selectUserPW(userDto);

            Boolean block = userMapper.loginblockusers(simpleUserDto);
            if(block){
                return "blockUser";
            }else{

         if (simpleUserDto.getUser_id().equals("jam") && scpwd.matches(inputpw,pw)){
             adminlogin.setLoggedIn(true);

             userDto.setUser_idpk(userMapper.selectUserPK(userDto));
             System.out.println(userDto.getUser_idpk());

            return "admin_true"; //다 맞으면

        } else {
//             if (pw.equals(simpleUserDto.getUser_pw())) {
             if(scpwd.matches(inputpw,pw)) {
                 userDto.setUser_id(id);
                 userDto.setUser_idpk(userMapper.selectUserPK(userDto));
                 System.out.println(userDto.getUser_idpk());
                 System.out.println(userDto.getUser_id());
                 userDto.setLoggedIn(true);
                 System.out.println(userDto.isLoggedIn());
                 return true;
             } else {
                 return false;
             }
         }}
        } catch (NullPointerException e) {
            System.out.println("null pointer exception");
            return false;
        }
    }

    // Logout
    @GetMapping("/logout")
    @ResponseBody
    public String logout() {
        userDto.setLoggedIn(false);
        adminlogin.setLoggedIn(false);
        return "SuccessLogOut";
    }
}
