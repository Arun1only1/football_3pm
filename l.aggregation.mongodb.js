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

db.movies.aggregate([
  {
    $match: {
      genres: { $all: ["Drama", "Comedy"] },
    },
  },
  {
    $limit: 3,
  },
  {
    $project: {
      name: 1,
      genres: 1,
    },
  },
]);
