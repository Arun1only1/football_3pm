use("football_imdb");

// update on array
// ? $push,$pop, $pull, $pullAll, $addToSet

// ? $push
// db.students.updateOne(
//   { name: "Alish" },
//   {
//     $push: { hobbies: "Drinking" },
//   }
// );

// db.students.updateOne(
//   { name: "Unique" },
//   {
//     $push: {
//       scores: { sub: "C Programming", point: 35 },
//     },
//   }
// );

// ? $each, $sort, $slice, $position => modifier
// db.students.updateOne(
//   { name: "Unique" },
//   {
//     $push: {
//       hobbies: { $each: ["Singing", "Dancing"] },
//     },
//   }
// );

// ? $addToSet

// db.students.updateOne(
//   { _id: ObjectId("656070d2b16daaa31169a51a") },
//   {
//     $addToSet: {
//       hobbies: { $each: ["Swimming", "E-gaming"] },
//     },
//   }
// );

db.students.updateOne(
  { name: "Alish" },
  {
    $addToSet: {
      scores: { sub: "Math" },
    },
  }
);

// ?$pop
// 1 => removes  last item from array
// -1 => removes first item from arrray

// db.students.updateOne(
//   { name: "Alish" },
//   {
//     $pop: {
//       hobbies: -1,
//     },
//   }
// );

// ? remove last item from hobbies of Alish or Unique

// db.students.updateMany(
//   { name: { $in: ["Alish", "Unique"] } },
//   {
//     $pop: {
//       hobbies: 1,
//     },
//   }
// );

// ?$pull => removes item from array based upon condition

// db.students.updateOne(
//   { name: "Unique" },
//   {
//     $pull: {
//       hobbies: "Singing",
//     },
//   }
// );

// db.students.updateOne(
//   { name: "Unique" },
//   {
//     $pull: {
//       scores: { point: { $lt: 40 } },
//     },
//   }
// );

// ?$pullAll => removes all matching values from an array.
// db.students.updateOne(
//   { name: "Nischal" },
//   { $pullAll: { hobbies: ["Trekking", "Bikes"] } }
// );
db.students.find();
