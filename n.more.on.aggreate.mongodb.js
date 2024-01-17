use("football_imdb");

// db.movies.find();

// $sort
// 1 => ascending(small to big)
// -1 => descending(big to small)

// db.movies.aggregate([
//   {
//     $match: {
//       "rating.average": { $ne: null },
//     },
//   },

//   {
//     $sort: {
//       "rating.average": -1,
//     },
//   },

//   {
//     $project: {
//       movieName: "$name",
//       imdbRating: "$rating.average",
//       //   movieAndRating: ["$name", "$rating.average"],
//       url: 1,
//     },
//   },
// ]);

// text sorting => number, capital letter,small letter(small to big)

// db.movies.aggregate([
//   {
//     $match: {},
//   },

//   {
//     $project: {
//       movieName: { $toLower: "$name" },
//     },
//   },

//   {
//     $sort: {
//       movieName: 1,
//     },
//   },
// ]);
