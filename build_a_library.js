class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    set isCheckedOut(checkedOut) {
        return this._isCheckedOut = checkedOut;
    }

    get ratings() {
        return this._ratings;
    }

    getAverageRating() {
        let ratingsSum = this.ratings.reduce((accumulator, rating) => accumulator + rating) 
        
        return ratingsSum/ this.ratings.length;
    }
    
    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }

    addRating(newRate) {
        this._ratings.push(newRate);
    }
}

class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }

}

class Movie extends Media {
    constructor(director, title, runTime, movieCast){
        super(title);
        this._director = director;
        this._runTime = runTime;
        this._movieCast = [];
    }

    get director() {
        return this._director;
    }

    get runTime() {
        return this._runTime;
    }
    
    get movieCast() {
        return this._movieCast;
    }

    addCast(newMember) {
        this._movieCast.push(newMember);
    }
}

class CD extends Media {
    constructor(artist, title, songs){
        super(title);
        this._artist = artist;
        this._songs = [];
    }

    get artist() {
        return this._artist;
    }

    get songs() {
        this._songs;
    }

    addNewSong(song) {
        this._songs.push(song);
    }
}

//Testing if the code is working

console.log('\nBOOKS\n')

const thePerksofBeingAWallflower = new Book('Stephen Chbosky', 'The Perks of Being a Wallflower', 256);
thePerksofBeingAWallflower.toggleCheckOutStatus();
thePerksofBeingAWallflower.addRating(5);
thePerksofBeingAWallflower.addRating(4);
console.log(thePerksofBeingAWallflower);
console.log(`The avarage rating for this book is: ${thePerksofBeingAWallflower.getAverageRating()}`);

console.log('\nMOVIES\n')

const wallE = new Movie('Andrew Stanton', 'WALL-E', 98);
wallE.toggleCheckOutStatus();
wallE.addRating(4);
wallE.addRating(4);
wallE.addCast('Ben Burtt');
wallE.addCast('Elissa Knight');
console.log(wallE);
console.log(`The avarage rating for this movie is: ${wallE.getAverageRating()}`);

console.log('\nCDs\n')

const nightVisions = new CD("Imagine Dragons", "Night Visions");
nightVisions.toggleCheckOutStatus();
nightVisions.addNewSong('Radioactive');
nightVisions.addNewSong('Tiptoe');
nightVisions.addNewSong("It's Time");
nightVisions.addNewSong('Demons');
nightVisions.addNewSong('On Top of the World');
nightVisions.addNewSong('Amsterdam');
nightVisions.addNewSong('Hear Me');
nightVisions.addNewSong('Every Night');
nightVisions.addNewSong('Bleeding Out');
nightVisions.addNewSong('Underdog');
nightVisions.addNewSong('Nothing Left to Say / Rocks');
nightVisions.addRating(5);
nightVisions.addRating(3);
console.log(nightVisions);
console.log(`The avarage rating for this album is: ${nightVisions.getAverageRating()}\n`);