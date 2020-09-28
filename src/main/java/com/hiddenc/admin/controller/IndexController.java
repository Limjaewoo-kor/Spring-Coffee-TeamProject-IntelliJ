package com.hiddenc.admin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class IndexController {

    // 메인페이지 설정
    @GetMapping("/")
    public String home() {
        return "index";
    }
}





