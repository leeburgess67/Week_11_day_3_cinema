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


















module.exports = Cinema;
