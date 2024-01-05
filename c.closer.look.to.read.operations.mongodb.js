use("football_imdb");

// ? Read
// ?find() => returns multiple documents
// returns array

// ?findOne() => returns single document

//? returns number of matching documents
// db.movies.find().count();

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

// ? logical operators
// ? $and , $or, $not , $nor

// ? $and
// {language:"English"}
// {rating.average :6.5}

// db.movies.find({
//   $and: [{ language: "English" }, { "rating.average": 6.5 }],
// });

// equivalent code
// db.movies.find({ language: "English", "rating.average": 7 });

// ? $or

// db.movies.find({ $or: [{ name: "Graceland" }, { "rating.average": 8 }] });

// db.movies.find({ $or: [{ "rating.average": 7 }, { "rating.average": 9 }] });

// ? $in
// db.movies.find({ "rating.average": { $in: [7, 9, 8, 6.5, 6.6] } });

//? $not
// db.movies.find({ "rating.average": { $not: { $eq: 7 } } });
// rating.average !== 9
// db.movies.find(
//   { "rating.average": { $ne: 9 } },
//   {
//     name: 1,
//     rating: 1,
//   }
// );

// ? $nor
// db.movies.find(
//   { $nor: [{ language: "English" }, { "rating.average": 9 }] },
//   {
//     language: 1,
//     rating: 1,
//     name: 1,
//   }
// );

// db.movies.find(
//   {
//     $nor: [
//       { "rating.average": 9 },
//       { "rating.average": 7 },
//       { "rating.average": 6 },
//     ],
//   },
//   {
//     name: 1,
//     rating: 1,
//   }
// );

// ? $nin
// db.movies.find(
//   { "rating.average": { $nin: [9, 7, 6, 6.5, 7.6] } },
//   {
//     name: 1,
//     rating: 1,
//   }
// );
