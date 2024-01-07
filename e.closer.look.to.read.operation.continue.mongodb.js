use("football_imdb");

// evaluation operator
// $regex, $expr

// ? $regex
// db.movies.find({ name: "Dome" });

// db.movies.find({ name: { $regex: "dOMe", $options: "i" } });

// db.movies.find({ summary: { $regex: "billionaire playboy", $options: "i" } });

// ? $expr

// db.sales.insertMany([
//   {
//     volume: 100,
//     order: 50,
//   },
//   {
//     volume: 500,
//     order: 700,
//   },
//   {
//     volume: 250,
//     order: 145,
//   },
//   {
//     volume: 750,
//     order: 230,
//   },
//   {
//     volume: 777,
//     order: 1045,
//   },
// ]);

// ? order> volume
// db.sales.find({
//   $expr: { $gt: ["$order", "$volume"] },
// });

// db.sales.find({
//   $expr: { $lt: ["$order", "$volume"] },
// });
