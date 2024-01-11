use("football_imdb");

// delete
// delete whole document

// ?deleteOne
// db.movies.deleteOne({ name: "Under the Dome" });

// ? deleteMany
// db.movies.deleteMany({ "rating.average": 9 });
// db.movies.find({ "rating.average": 9 });

// db.movies.find();

//? delete movies whose summary includes 'Pacific'

// db.movies.deleteMany({ summary: { $regex: "Pacific", $options: "i" } });

// ? delete movies whose genres size is 2
// db.movies.deleteMany({ genres: { $size: 2 } });

// ? delete movies whose genres includes both Drama and Horror
// db.movies.deleteMany({ genres: { $all: ["Drama", "Horror"] } });

// ? delete movies whose network country is Canada
// db.movies.deleteMany({ "network.country.name": "Canada" });

// ?delete movies whose rating is less tha 5 and greater than 2

// ?db.movies.find({ "rating.average": { $lt: 5, $gt: 2 } });
// db.movies.deleteMany({
//   $and: [{ "rating.average": { $lt: 5 } }, { "rating.average": { $gt: 2 } }],
// });
