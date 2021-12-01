package com.dao.daoserver.controller;

import com.fasterxml.jackson.databind.Module;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import java.util.Locale;

@Controller
public class WebController {

    @RequestMapping("/")
    String getMain(Model model,HttpServletRequest request)
    {
        String pro="http";
       String p=request.getProtocol().toLowerCase();
       System.out.println(p);
       if(p.startsWith("https")) pro="https";
        String u=pro+ "://" + request.getServerName() + ":" + request.getServerPort()+"/";
      //  System.out.println(u);
        model.addAttribute("url",u);
        return "main";
    }



}
