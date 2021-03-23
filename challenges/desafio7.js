db.movies.aggregate([
  {
    $match: {
      $and: [
        { cast: { $exists: true }},
        { languages: { $eq: "English" } }
      ]
    }
  },
  { $unwind : "$cast" },
  {
    $group: {
      _id: "$cast",
      numeroFilmes: { $sum: 1 },
      mediaIMDB: { $avg: "$imdb.rating" }
    }
  },
  {
    $project: {
      _id:1,
      numeroFilmes: 1,
      mediaIMDB: {$round: [ "$mediaIMDB", 1] }
    }
  }
]);

