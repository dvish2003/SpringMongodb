package com.vish.springmongodb.Service;

import com.vish.SpringMongo.Model.Users;
import com.vish.SpringMongo.Repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class UserServiceImpl  implements UserService {
    @Autowired
    private UserRepo userRepo;

    @Override
    public String save(Users user) {
        return userRepo.save(user).getId();
    }
}
