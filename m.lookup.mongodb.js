use("badminton_lookup");

// db.courses.insertMany([
//   {
//     name: "MERN",
//     duration: 90,
//     price: 25000,
//   },
//   {
//     name: "Devops",
//     duration: 75,
//     price: 30000,
//   },
//   {
//     name: "Data science",
//     duration: 60,
//     price: 18000,
//   },
// ]);

// db.students.insertOne({
//   name: "Alish Thapa",
//   email: "alish@gmail.com",
//   courseIds: [ObjectId("65a64eecd61ea348b74d32f2")],
// });

// db.students.find();

// db.students.aggregate([
//   { $match: {} },
//   {
//     $lookup: {
//       from: "courses",
//       localField: "courseIds",
//       foreignField: "_id",
//       as: "courseDetails",
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       courses: "$courseDetails.name",
//     },
//   },
//   {
//     $unwind: {
//       path: "$courses",
//     },
//   },
// ]);

// 65a64eecd61ea348b74d32f3

// db.students.updateOne(
//   { name: "Alish Thapa" },
//   {
//     $push: {
//       courseIds: ObjectId("65a64eecd61ea348b74d32f3"),
//     },
//   }
// );

// ? owner and vehicle example
// db.owners.insertMany([
//   {
//     name: "Prakash Shrestha",
//     address: {
//       temporary: "Ktm",
//       permanent: "Nuwakot",
//     },
//     email: "prakash@gmail.com",
//   },
//   {
//     name: "Sashwot Shrestha",
//     address: {
//       temporary: "Biratnagar",
//       permanent: "Lalitpur",
//     },
//     email: "sashwot@gmail.com",
//   },
// ]);

// db.vehicle.insertOne({
//   brand: "Yamaha",
//   variant: "MT15",
//   price: 2000,
//   engineNumber: "451ME7123",
//   state: "Bagmati",
//   color: "Matte black",
//   volume: "155cc",
//   ownerId: ObjectId("65a6566b23d1d7a6d7c2026a"),
// });

// db.vehicle.find();

// db.vehicle.aggregate([
//   { $match: {} },
//   {
//     $lookup: {
//       from: "owners",
//       localField: "ownerId",
//       foreignField: "_id",
//       as: "ownerDetail",
//     },
//   },
//   {
//     $project: {
//       vehicle: {
//         company: "$brand",
//         variant: "$variant",
//       },
//       owner: {
//         name: { $first: "$ownerDetail.name" },
//         email: { $first: "$ownerDetail.email" },
//       },
//     },
//   },
// ]);

// ? index=> performance
// ? co-ordinate
// ? $group
