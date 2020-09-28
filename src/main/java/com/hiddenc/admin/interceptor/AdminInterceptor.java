//package com.hiddenc.admin.interceptor;
//
//
//import com.hiddenc.admin.beans.AdminConnection;
//import org.springframework.web.servlet.HandlerInterceptor;
//
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//
//public class AdminInterceptor implements HandlerInterceptor{
//
//    AdminConnection adminConnection;
//
//    public AdminInterceptor(AdminConnection adminConnection) {
//        this.adminConnection = adminConnection;
//    }
//
//
//    @Override
//    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
//
//      if (!adminConnection.isLoggedIn()) {
//        System.out.println("어드민인터셉터발동!");
//        return false;
//    }
//        System.out.println("어드민인터셉터트루!");
//        return true;
//}
//}
