use("b2_3pm");

// ?read operations

//?Find movies whose status is "Ended"

// ?find movies whose rating is 9

// ?find movies whose rating is greater than 7 and less than 9

// ?find movies whose genres is Thriller

// ?find movies whose status is Running

//? find movies whose status is Ended and runtime is 60

// ?find movies whose weight is 75 and network country is Canada

// ?find movies whose weight is 96 or runtime is 60

// ? find movies whose rating average is not 9

// ? find movies whose rating average is either 6 or 6.5 or
// ?9 or 8 or 8.5 or 8.6 or 7.7 or 6.1 or 7.8

// ?find students whose hobby is both Gaming and Singing

// db.students.find({$and:[{hobbies:"Gaming"},{hobbies:"Singing"}]})

// db.students.find({hobbies:{$all:["Gaming","Singing"]}})

// ? find students whose hobby is neither Swimming nor Dancing

// db.students.find({$nor:[{hobbies:"Swimming"},{hobbies:"Dancing"}]})

// db.students.find({hobbies:{$nin:["Swimming","Dancing"]}})

// ?find students who have three hobbies
// db.students.find({hobbies:{$size:3}})
// db.students.find({hobbies:{$not:{$size:3}}})

// ?find students whose math score is greater than 50

// db.students.find({scores:{$elemMatch:{sub:"Math",point:{$gt:50}}}})

// ?find students whose score in any subject is greater than 70

// db.students.find({"scores.point":{$gt:70}})

// !db.students.find({$expr:{$gt:["$scores.point",70]}})

// ? find students whose primary id is "656070d2b16daaa31169a51b"
// db.students.find({ _id: ObjectId("656070d2b16daaa31169a51b") });
// ?find movies whose genre includes Action and Crime
// !db.movies.find({genres:"Action",genres:"Crime"},{name:1,genres:1})
// db.movies.find({$and:[{genres:"Action"},{genres:"Crime"}]})

// db.movies.find({genres:{$all:["Action","Crime"]}})

// ! find movies whose genre size is 2
// db.movies.find({genres:{$size:2}})

// ? find movies whose language is not English
// db.movies.find({language:{$ne:"English"}})

// ! find movies whose summary includes "Pacific"
// db.movies.find({summary:{$regex:"Pacific",$options:"i"}},{name:1, summary:1})
