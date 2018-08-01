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

Cinema.prototype.findFilmByYear = function (searchYear) {
  return this.films.filter((film) => {
    return film.year == searchYear;
  });
}

Cinema.prototype.checkFilmsOverLength = function (input_length) {
  return this.films.filter((film) => {
    return film.length > input_length;
  });
}






















module.exports = Cinema;
