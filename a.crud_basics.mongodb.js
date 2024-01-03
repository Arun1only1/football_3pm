use("football_3pm");

//? insert new data
// db.student.insertOne({
//   name: "Dinesh",
//   age: 21,
// });

//? multiple data insert
// db.student.insertMany([
//   {
//     name: "Prakash",
//     age: 22,
//   },
//   {
//     name: "Sujal",
//     age: 22,
//   },
//   {
//     name: "Shashwot",
//     age: 22,
//   },
// ]);

// to read single data
// db.student.findOne({ name: "Dinesh" });

//? get student list
db.student.find();

// ?update one
// db.student.updateOne(
//   { name: "Dinesh" },
//   {
//     $set: {
//       age: 25,
//       name:"Umesh"
//     },
//   }
// );

// ? delete removes whole document
// ?delete one
// db.student.deleteOne({ country: "Nepal" });

// ?deleteMany
// db.student.deleteMany({ age: 22 });
