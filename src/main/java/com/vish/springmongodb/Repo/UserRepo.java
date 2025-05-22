package com.vish.springmongodb.Repo;

import com.vish.springmongodb.Model.Users;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends MongoRepository<Users, String> {
}
