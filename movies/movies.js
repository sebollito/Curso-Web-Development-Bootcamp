let movies = [
  { title: "Laputa's Castle in the Sky", rating: 5, hasWatched: true },
  { title: "Ponyo", rating: "?", hasWatched: false },
  { title: "Howl's Moving Castle", rating: 5, hasWatched: true },
];

function printMovies(movies) {
  movies.forEach(function (element) {
    if (element.hasWatched === true) {
      console.log(
        'You have watched "' +
          element.title +
          '" ' +
          "- " +
          element.rating +
          " stars"
      );
    } else {
      console.log(
        'You have not seen "' +
          element.title +
          '" ' +
          "- " +
          element.rating +
          " stars"
      );
    }
  });
}
