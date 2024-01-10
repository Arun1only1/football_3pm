use("football_imdb");

// update on array
// ? $push,$pop, $pull, $pullAll, $addToSet, $, $[],$[identifier]

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

// db.students.updateOne(
//   { name: "Alish" },
//   {
//     $addToSet: {
//       scores: { sub: "Math" },
//     },
//   }
// );

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

// db.movies.find()

// genre => Drama and Action and rating 9

// db.movies.find(
//   {
//     $and: [{ genres: { $all: ["Drama", "Action"] } }, { "rating.average": 9 }],
//   },
//   {
//     name: 1,
//     genres: 1,
//     rating: 1,
//   }
// );

// ? add three hobbies to Alish and
//?  sort the hobbies in ascending order and
// ?  keep top two hobbies

// db.students.updateOne(
//   { name: "Alish" },
//   {
//     $push: {
//       hobbies: {
//         $each: [],
//         $sort: -1,
//         $slice: 2,
//       },
//     },
//   }
// );

// db.students.updateOne(
//   { name: "Nischal", "scores.sub": "Math" },
//   {
//     $set: {
//       "scores.$.sub": "Political Science",
//     },
//   }
// );

// db.students.updateOne(
//   { name: "Nischal", "scores.sub": "Social" },
//   {
//     $inc: {
//       "scores.$.point": 10,
//     },
//   }
// );

// db.students.updateOne(
//   { name: "Alish", hobbies: "Zumba" },
//   {
//     $set: {
//       "hobbies.$": "Cardio",
//     },
//   }
// );

// db.students.updateOne(
//   { name: "Alish" },
//   {
//     $set: {
//       "scores.$[].point": 65,
//     },
//   }
// );

// db.students.updateOne(
//   { name: "Alish" },
//   {
//     $set: {
//       "scores.$[element].point": 50,
//     },
//   },
//   {
//     arrayFilters: [{ "element.sub": "Math" }],
//   }
// );

db.students.updateOne(
  { name: "Unique" },
  {
    $inc: {
      "scores.$[item].point": 10,
    },
  },
  {
    arrayFilters: [{ "item.point": { $lt: 60 } }],
  }
);
db.students.find();
