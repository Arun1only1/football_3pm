use("football_imdb");
// update
// ? $set
// ? update field
// ?if field does not exist, it adds that field

// db.students.updateOne(
//   { name: "Sagar" },
//   {
//     $set: {
//       age: 21,
//       phoneNumber: 9845613,
//     },
//   }
// );

// db.students.updateMany(
//   {},
//   {
//     $set: {
//       age: 26,
//     },
//   }
// );

// db.students.updateMany(
//   {},
//   {
//     $set: {
//       isGraduated: false,
//     },
//   }
// );

// ? $inc
// ? increases or decreases the value

// db.students.updateMany(
//   {},
//   {
//     $inc: {
//       age: 4,
//     },
//   }
// );

// db.students.updateOne(
//   { name: "Dilip" },
//   {
//     $inc: {
//       age: 2,
//       phoneNumber: -100,
//     },
//   }
// );

// ?$mul
// multiplies or divides the value
// db.students.updateOne(
//   { name: "Prasoon", age: 30 },
//   {
//     $mul: {
//       age: 2,
//     },
//   }
// );

// db.students.updateOne(
//   { name: "Sagar" },
//   {
//     $mul: {
//       age: 0.25,
//     },
//   }
// );
db.students.find();
