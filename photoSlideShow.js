
// The object should have properties for:
const photoSlideShow = {
  photoList: ["picture1", "picture2", "picture3", "picture4", "picture5"], // An array called photoList that contains the names of the photos as strings
  currentPhotoIndex: 0,                            // An integer currentPhotoIndex that represents which photo in the photoList is currently displayed
  nextPhoto: function () {                         // A nextPhoto() function that
    if (this.currentPhotoIndex < this.photoList.length-1) { // moves currentPhotoIndex to the next index if there is one, //if no -1, it goes undefined. 
      this.currentPhotoIndex++;                    // Go up +1
      console.log("Photo After: " + this.photoList[this.currentPhotoIndex]); // logs the current photo name.
    } else {                                       // Otherwise,
      console.log("End of Slideshow");             // log "End of slideshow";
    }
  },

  prevPhoto: function () {                         // A prevPhoto() function that does the same thing,
    if (this.currentPhotoIndex > 0) {              // but backwards. //no need to go more than 0. 0 is the end.
      this.currentPhotoIndex--;                    // Go down -1, put this before the console log. If console log is above, the number is off. *note I kept getting it wrong because I put it under the console log lol. Went crazy for 30 minutes since I didnt read the directions.
      console.log("Photo " + this.photoList[this.currentPhotoIndex]);
    } else {
      console.log("Beginning of Slideshow ");      //copy above but set to the beginning
    }
  },

  getCurrentPhoto: function () {                   // A function getCurrentPhoto()
    return this.photoList[this.currentPhotoIndex]; // that returns the current photo from the list.
  }
};



// console.log(photoSlideShow.getCurrentPhoto()); // photo1
// photoSlideShow.nextPhoto(); // photo 2
// photoSlideShow.getCurrentPhoto(); // photo 2
// photoSlideShow.nextPhoto(); // photo 3
// photoSlideShow.prevPhoto(); // photo 2
// photoSlideShow.getCurrentPhoto(); // photo 2
// photoSlideShow.prevPhoto(); // photo 1
// photoSlideShow.getCurrentPhoto(); // photo 1

console.log("Start Next Photo: ");
console.log(photoSlideShow.getCurrentPhoto());
photoSlideShow.getCurrentPhoto();
photoSlideShow.nextPhoto();
photoSlideShow.getCurrentPhoto();
photoSlideShow.nextPhoto();
photoSlideShow.getCurrentPhoto();
photoSlideShow.nextPhoto();
photoSlideShow.getCurrentPhoto();
photoSlideShow.nextPhoto();
photoSlideShow.getCurrentPhoto();
photoSlideShow.nextPhoto();
photoSlideShow.getCurrentPhoto();
photoSlideShow.nextPhoto();
photoSlideShow.getCurrentPhoto();
photoSlideShow.nextPhoto();
photoSlideShow.getCurrentPhoto();


console.log("Previous Photos: ");
console.log(photoSlideShow.getCurrentPhoto());
photoSlideShow.prevPhoto();
photoSlideShow.getCurrentPhoto();
photoSlideShow.prevPhoto();
photoSlideShow.getCurrentPhoto();
photoSlideShow.prevPhoto();
photoSlideShow.getCurrentPhoto();
photoSlideShow.prevPhoto();
photoSlideShow.getCurrentPhoto();
photoSlideShow.prevPhoto();
photoSlideShow.getCurrentPhoto();
photoSlideShow.prevPhoto();
photoSlideShow.getCurrentPhoto();
photoSlideShow.prevPhoto();
photoSlideShow.getCurrentPhoto();

// console.log("next");


// photoSlideShow.getCurrentPhoto();
// photoSlideShow.nextPhoto();
// photoSlideShow.getCurrentPhoto();
// photoSlideShow.nextPhoto();
// photoSlideShow.getCurrentPhoto();
// photoSlideShow.nextPhoto();
// photoSlideShow.getCurrentPhoto();
// photoSlideShow.nextPhoto();
// photoSlideShow.getCurrentPhoto();
// photoSlideShow.nextPhoto();
// photoSlideShow.getCurrentPhoto();
// photoSlideShow.nextPhoto();
// photoSlideShow.getCurrentPhoto();
// photoSlideShow.nextPhoto();
// photoSlideShow.getCurrentPhoto();



// Method is a function associated with an object
    // const myObj = {
    //     myMethod: function (params) {
    //       // do something
    //     },
    
    //     // this works too!
    //     myOtherMethod(params) {
    //       // do something else
    //     },
    //   };

// You can then call the method in the context of the object as follows:
    // objectName.methodName(params);