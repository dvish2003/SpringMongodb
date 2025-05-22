# MongoDB Shell Cheat Sheet for Beginners

Essential MongoDB shell commands to get started quickly.

## Basic Commands

```javascript
// Connect to MongoDB
mongosh                          // Connect to default local instance
mongosh "mongodb://localhost:27017" // Connect with connection string
mongosh --username <user> --password <pass> --authenticationDatabase admin

// Show databases
show dbs

// Use a database (creates if doesn't exist)
use myDatabase

// Show current database
db

// Show collections (tables)
show collections

// Insert documents
db.users.insertOne({name: "John", age: 30, hobbies: ["reading", "hiking"]})
db.users.insertMany([{name: "Alice", age: 25}, {name: "Bob", age: 35}])

// Find documents
db.users.find()                      // Find all
db.users.findOne({name: "John"})     // Find one
db.users.find({age: {$gt: 30}})     // Find age > 30
db.users.find().limit(5)             // Limit results
db.users.find().sort({age: 1})       // Sort by age ascending
db.users.find().sort({age: -1})      // Sort by age descending

// Update documents
db.users.updateOne({name: "John"}, {$set: {age: 31}})
db.users.updateMany({age: {$lt: 30}}, {$set: {status: "young"}})
db.users.replaceOne({name: "John"}, {name: "John", age: 31, status: "active"})

// Delete documents
db.users.deleteOne({name: "John"})
db.users.deleteMany({status: "inactive"})

// Create user
db.createUser({
  user: "admin",
  pwd: "password",
  roles: [{role: "userAdminAnyDatabase", db: "admin"}]
})

// Drop database
db.dropDatabase()

// Drop collection
db.users.drop()

// Get collection stats
db.users.stats()

// Get document count
db.users.countDocuments()

```
