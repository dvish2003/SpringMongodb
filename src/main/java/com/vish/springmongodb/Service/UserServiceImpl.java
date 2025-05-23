package com.vish.springmongodb.Service;


import com.vish.springmongodb.Model.Users;
import com.vish.springmongodb.Repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class UserServiceImpl  implements UserService {
    @Autowired
    private UserRepo userRepo;

    @Override
    public String save(Users user) {
        return userRepo.save(user).getId();
    }

    @Override
    public List<Users> getAll(){
        return userRepo.findAll();
    }
}
