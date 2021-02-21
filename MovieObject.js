// JavaScript uses objects to construct inheritance. Each object has a private property which links to another object. This object is known as its prototype. This prototype object has a prototype of its own, and this chain continues until an object with a null prototype has been reached.

function Movie(title,director,genre,releaseYear,rating)
{
    // we'll use the this keyword to assign these arguments to the object instance. This is known as a constructor function, and we can think of it like a blueprint for JavaScript objects. Every time I create a new movie, I tell
    //   the constructor function, these are the values I want to assign to this instance of the movie object. Now we're ready to add our get overview function on the prototype.
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
}

Movie.prototype.getOverview = function()
{
    return ` ${this.title}, a ${this.genre} film directed by ${this.director} was released by in
    ${this.releaseYear}.Its received a rating of ${this.rating}
    `;
}

const Spiderman = new Movie("spiderman","Sam Raimi","Action",2002,88);
const Batrman = new Movie("Batman","Sam Raimp","Action",2002,80);

console.log(Spiderman);
console.log(Spiderman.getOverview());
console.log(Batrman.getOverview());
