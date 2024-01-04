use("football_imdb");

// ? Read
// ?find() => returns multiple documents
// returns array

// ?findOne() => returns single document

//? returns number of matching documents
// db.movies.find().count();

db.movies.find();

// operator
// comparison operator
// ?$eq,$gt, $gte, $lt, $lte, $ne, $in, $nin

// ?  $eq
// name ==="Bitten"

// db.movies.find({ name: { $eq: "Bitten" } });

// db.movies.find({ name: "Under the Dome" });

// ? $gt
// weight>90
// db.movies.find({ weight: { $gt: 90 } },{name:1,weight:1,_id:0});

// ?$lt
// weight< 60
// db.movies.find({ weight: { $lt: 60 } }, { name: 1, weight: 1, url: 1 });

// ? not equals
// name !=="Under the dome"
// db.movies.find({ name: { $not: { $eq: "Under the Dome" } } });
// db.movies.find({ name: { $ne: "Under the Dome" } });

// db.movies.find({ "rating.average": 6.5 });
// db.movies.find({ "network.country.name": { $ne: "United States" } });

//? genres must be array and include "Drama"
// db.movies.find({ genres: "Drama" }, { name: 1, genres: 1 });

// genres must be array and should have "Drama" only
// db.movies.find({ genres: ["Drama"] }, { name: 1, genres: 1 });
