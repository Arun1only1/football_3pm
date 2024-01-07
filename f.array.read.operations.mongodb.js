use("football_imdb");

// array
//? $all
//? $elemMatch
//? $size

// db.student.insertMany([
//   {
//     name: "Dinesh",
//     favoriteSinger: ["Jayn Malik", "Harry", "Arijit"],
//     hobbies: [
//       {
//         name: "Badminton",
//         frequency: 3,
//       },
//       {
//         name: "Volleyball",
//         frequency: 5,
//       },
//     ],
//   },
//   {
//     name: "Alish",
//     favoriteSinger: ["Sujan", "Harry", "Arijit"],
//     hobbies: [
//       {
//         name: "Lawn tennis",
//         frequency: 2,
//       },
//       {
//         name: "Fifa",
//         frequency: 7,
//       },
//       {
//         name: "Volleyball",
//         frequency: 3,
//       },
//     ],
//   },
//   {
//     name: "Shaswot",
//     favoriteSinger: ["Narayan", "Sajan", "Arijit"],
//     hobbies: [
//       {
//         name: "Futsal",
//         frequency: 4,
//       },
//       {
//         name: "Coding",
//         frequency: 7,
//       },
//       {
//         name: "Basketball",
//         frequency: 3,
//       },
//     ],
//   },
// ]);

db.student.find();

//? find students whose fav. singer is Sujan
// db.student.find({ favoriteSinger: "Sujan" });

//? find students whose fav.singer is both Narayan and Arijit
// db.student.find({
//   $and: [{ favoriteSinger: "Narayan" }, { favoriteSinger: "Arijit" }],
// });

// alternative code
// ?$all
// db.student.find({ favoriteSinger: { $all: ["Narayan", "Arijit"] } });

// !does not work here
// db.student.find({ favoriteSinger: "Narayan", favoriteSinger: "Arijit" });

// find students whose hobbies include Volleyball and frequency must be greater than 3

// db.student.find();

// db.student.find({ hobbies: { name: "Volleyball", frequency: { $gt: 3 } } });

// db.student.find({
//   "hobbies.name": "Volleyball",
//   "hobbies.frequency": { $gt: 3 },
// });

// ?$elemMatch
// db.student.find({
//   hobbies: { $elemMatch: { name: "Volleyball", frequency: { $gt: 3 } } },
// });

// $size
db.student.find({ hobbies: { $size: 3 } });
