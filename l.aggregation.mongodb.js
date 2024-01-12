use("football_imdb");
// aggregation
// powerful query tool
// ? stages
// ?$match => filter
// ?$unwind
// ?$lookup
// ?$limit => number of documents
// ?$skip
// ?$project => select field
// ?$group

// ? pagination => $skip, $limit
// page => 1
// page =>2
// skip= (page-1) * limit
// let page = 2;
// let limit = 2;
// db.movies.aggregate([
//   {
//     $match: {
//       summary: { $regex: "Pacific", $options: "i" },
//     },
//   },
//   {
//     $skip: (page - 1) * limit,
//   },
//   { $limit: limit },
//   {
//     $project: {
//       name: 1,
//       id: 1,
//     },
//   },
// ]);

// ?$project
// db.movies.aggregate([
//   {
//     $match: {},
//   },
//   {
//     $project: {
//       name: 1,
//       genres: 1,
//       imdbRating: "$rating.average",
//       networkCountry: "$network.country.name",
//     },
//   },
//   {
//     $project: {
//       imdbRating: 1,
//     },
//   },
// ]);

// ? $unwind => array field
//? => Deconstructs an array field from the
// ?input documents to output a document for each element.

// db.friends.insertOne({
//   name: "Abhishek",
//   hobbies: [],
// });

// db.friends.find();

// db.friends.aggregate([
//   {
//     $match: {},
//   },
//   {
//     $unwind: {
//       path: "$hobbies",
//       includeArrayIndex: "index",
//       preserveNullAndEmptyArrays: true,
//     },
//   },
// ]);
