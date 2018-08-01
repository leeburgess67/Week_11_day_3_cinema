const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getTitles = function () {
  return this.films.map((film) => film.title);
};


Cinema.prototype.findFilmByTitle = function (searchTitle) {
  return this.films.filter((film) => {
    return film.title == searchTitle;
  });
}

Cinema.prototype.findFilmByGenre = function (searchGenre) {
  return this.films.filter((film) => {
    return film.genre == searchGenre;
  });
}


















module.exports = Cinema;
