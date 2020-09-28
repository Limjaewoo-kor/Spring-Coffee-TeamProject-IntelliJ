//package com.hiddenc.admin.interceptor;
//
//import com.hiddenc.model.dto.UserDto;
//import org.springframework.web.servlet.HandlerInterceptor;
//
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//
//public class LoginInterceptor implements HandlerInterceptor {
//    UserDto userDto;
//
//    public LoginInterceptor(UserDto userDto) {
//        this.userDto = userDto;
//    }
//
//    @Override
//    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
//        if (!userDto.isLoggedIn()) {
//            System.out.println("인터셉터발동!");
//            return false;
//        }
//        System.out.println("인터셉터트루!");
//        return true;
//    }
//}
