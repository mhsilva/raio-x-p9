package com.p9;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@Controller
@SpringBootApplication
public class RaioXP9Application {

	@GetMapping("/")
	public String hello() {
		return "index.html";
	}

	public static void main(String[] args) {
		SpringApplication.run(RaioXP9Application.class, args);
	}

}
