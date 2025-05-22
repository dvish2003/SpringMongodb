package com.vish.springmongodb.Contoller;


import com.vish.springmongodb.Model.Users;
import com.vish.springmongodb.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/users")
@CrossOrigin
public class UserController {
   @Autowired
   private UserService userService;

   @PostMapping(value = "/userSave")
    public String save(@RequestBody Users user) {
       System.out.println("Badu awooooooooooo");
       return userService.save(user);
    }
}
