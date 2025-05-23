package com.vish.springmongodb.Service;


import com.vish.springmongodb.Model.Users;

import java.util.List;

public interface UserService {
    String save(Users user);

    List<Users> getAll();
}
