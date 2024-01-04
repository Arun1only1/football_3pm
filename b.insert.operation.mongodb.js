use("football_3pm");

// ? Create operation

// ?insertOne
//? => adds single document to db

// db.course.insertOne({
//   name: "MERN",
//   price: 25000,
//   duration: 90, //days
// });

// db.course.insertOne({
//   name: "Spring boot",
//   price: 30000,
//   duration: 100,
// });

// ? insertMany
// ? adds multiple document
// db.course.insertMany([
//   {
//     name: "Devops",
//     price: 45000,
//     duration: 120,
//   },
//   {
//     name: "Django",
//     price: 18000,
//     duration: 75,
//   },
// ]);

db.course.find();
