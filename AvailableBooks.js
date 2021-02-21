// function Book (title, author, ISBN, numCopies)
// {
//     this.title = title;
//     this.author = author;
//     this.ISBN = ISBN;
//     this.numCopies = numCopies;
// }
// Book.prototype.getAvailability = function()
// {
//     if(this.numCopies == 0)
//     {
//         return "Out of stock" ;
//     }
//     else if(this.numCopies<10)
//     {
//         return "Low Stock";
//     }
//     else
//     return " In Stock";
// };

// Book.prototype.sell = function(numCopiesSold = 1)
// {
//     this.numCopies -= numCopiesSold ;
// }
// Book.prototype.restock = function(numCopiesStock = 5)
// {
//     this.numCopies += numCopiesStock ;
// }

class Book
{
  constructor(title, author ,ISBN , numCopies)
  {
      this.title = title;
      this.author = author;
      this. ISBN = ISBN;
      this. numCopies = numCopies;
  }
  get availability()
  {
      return this.getAvailability();
  }
  
  getAvailability()
  {
      if(this.numCopies==0)
      {
           return "Out Of Stock";
      }
      else if(this.numCopies<10)
      {
          return "Low Stock";
      }
      else "In Stock";
  }

  sell(numCopiesSold = 1)
  {
      this.numCopies -= numCopiesSold;
  }
  restock(numCopiesReStock = 5)
  {
      this.numCopies += numCopiesReStock;
  }


}
const HungerGames = new Book ('Hunger Games', 'John Abraham',122222,9);
console.log(HungerGames.getAvailability());

HungerGames.restock(10);
console.log(HungerGames.getAvailability());

HungerGames.sell(19);
console.log(HungerGames.getAvailability());
