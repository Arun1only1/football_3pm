use("football_imdb");

// exact match with provided object
// ?provided condition must be  fully satisfied by at least one element
// db.students.find({ scores: { sub: "Math", point: 45 } });

// db.students.find({ "scores.sub": "Math", "scores.point": { $gt: 50 } });

// db.students.find({
//   scores: { $elemMatch: { sub: "Math", point: { $gt: 50 } } },
// });

// db.marks.insertMany([
//   {
//     name: "Alish",
//     scores: [55, 65, 75],
//   },
//   {
//     name: "Prakash",
//     scores: [25, 35, 45],
//   },
// ]);

db.marks.find();

// find all students whose score is greater than 50
// and less than 70
