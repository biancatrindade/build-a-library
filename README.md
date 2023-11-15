# Project: Build a Library by Codecademy

Hello!

I'm Bianca, and this project is part of the Codecademy course **"Learn Intermediate JavaScript".**

I created a library to organize three types of media: **books, CDs, and movies**. The challenge was to create a parent class named Media with three subclasses: Book, Movie, and CD. Each subclass has specific properties and methods:

### Book
- Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), ratings (array, initially empty)
- Getters: all properties
- Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

### Movie
- Properties: director (string), title (string), runTime (number), isCheckedOut (boolean, initially false), ratings (array, initially empty)
- Getters: all properties
- Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

### CD
- Properties: artist (string), title (string), isCheckedOut (boolean, initially false), ratings (array, initially empty), songs (array of strings)
- Getters: all properties
- Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

You can check the result in [`build_a_library.js`](https://github.com/biancatrindade/build-a-library/blob/main/build_a_library.js).

**See you there!**
