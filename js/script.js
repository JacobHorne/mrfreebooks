 /* js file */

(function( window, undefined ){

//Code for slideout for Movbile Nav.
var slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': 256,
    'tolerance': 70,
});


$('#menu-icon').on('click', function() {
    slideout.toggle();
    $("#menu-icon").hide();
    e.preventDefault();
});

$('#close').on('click', function() {
    slideout.close();
});




//Book Object

var $container = $('#container');

var books = [

  //History
  { title: 'Nikola Tesla', url: 'http://amzn.to/1OE6YSa', category: 'history', img: 'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00CATSONE&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20' },
  { title: 'Darwin', url: 'http://amzn.to/1P3HBgf', category: 'history', img: 'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B008478VE8&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20'},
  { title: 'Meditations', url: 'http://amzn.to/1OE7RtM', category: 'history', img: 'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00IMLL63O&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20' },
  { title: 'The Legend of King Authur', url: 'http://amzn.to/1RyvGsY', category: 'history', img:'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0083ZMP5C&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20'},
  { title: 'The Art of War', url: 'http://amzn.to/1P3T5jF', category: 'history', img: 'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0199LTIKI&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20'},
  { title: 'Lewis and Clark', url: 'http://amzn.to/1KUQ0xe', category: 'history', img: 'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B004TQMFZO&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20' },

  //Mystery 
  { title: 'Once Gone by Blake Pierce', url: 'http://amzn.to/1SLRBgr', category: 'mystery', img: 'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01991O5UG&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20' },
  { title: 'The Grave Man by david archer', url: 'http://amzn.to/1JWO7oL', category: 'mystery', img:'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B014JOV24K&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20'},
  { title: 'Nightmares of Caitlin', url: 'http://amzn.to/1Rywu12', category: 'mystery', img: 'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00E7KTEEW&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20'},

  //Suspence
  { title: 'Squall by Sean Costello', url: 'http://amzn.to/1P3TPpd', category: 'suspence', img: 'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00RPM9MJ6&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20' },
  { title: 'Inheritance by Thomas Wymark', url: 'http://amzn.to/1KH75uB', category: 'suspence', img: 'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B010T2CZOC&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20' },
  { title: 'Blackwater Lake by Maggie James', url: 'http://amzn.to/1SLUaPR', category: 'suspence', img: 'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B015WYIQ4K&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20' },
  { title: 'Miami Requiem by JB turner', url: 'http://amzn.to/1lWlA7o', category: 'suspence', img: 'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00H4IG6EA&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20' },
  { title: 'the war planners by andrew watts', url: 'http://amzn.to/23vGQmp', category: 'suspence', img: 'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00RC2GNCI&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20' },

  //technology
  { title: 'Mastering Excel Macros: Introduction', url: 'http://amzn.to/1JWbTRT', category: 'technology', img: 'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00O2OOJ7A&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20' },
  { title: 'Java: Artificial Intelligence; Made Easy, w/ Java Programming', url: 'http://amzn.to/1KVbj1F', category: 'technology', img: 'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01A766DJS&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20' },
  { title: 'Python for Informatics: Exploring Information: Exploring Information', url: 'http://amzn.to/23vHGzE', category: 'technology', img: 'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00K0O8HFQ&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20' },
  { title: 'Programming For Beginners Box Set: Learn HTML, HTML5 & CSS3, Java, PHP & MySQL, C#', url: 'http://amzn.to/1KVbWIv', category: 'technology', img: 'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B011ETYQ1Y&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20' },
  
  //hobbies
  
  { title: 'Homesteading For Beginners: A Homestead Survival Guide for the Backyard & Urban Farmer', url: 'http://amzn.to/1SLYCxW', category: 'hobbies', img: 'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00OV8QE5C&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20' },


  //education
  { title: 'GRE: What You Need to Know: An Introduction to the GRE Revised General Test (Kaplan Test Prep)', url: 'http://amzn.to/1nAvxsR', category: 'education', img: 'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00A8ME0M4&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20' },
  { title: 'How to Beat a Speeding Ticket Book -Fight that Ticket and Win', url: 'http://amzn.to/1PD0jat', category: 'hobbies', img: 'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00HBUIB7Q&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20' },
];







var filterBooks = function (category) {
  var filteredBooks = books;

  if (category) {//This is based on Truthey Statement, by passing a string it is true and will run. else 
    filteredBooks = books.filter(function (item) { //filter is appart of the array prototype so i can use it. It will look over the array
      return item.category === category; // book.filter was is a function that loops over the arrray. and the annoymous function pulls the books.
    }); 
  } //fitler not only loops array is also, its runs an A. function that returns true of false if retuns true is will push items to a new array.

  return shuffleBooks(filteredBooks);
}

var populateBooks = function (books) {
  var $div;
  var $aNewLink;
  var $img;

  $container.empty();
  
  for (var i = 0; i < books.length; i++) {
    console.log(books[i].img)
    
    $div = $('<div>', {
      class: 'book',
      css: {
        backgroundImage: 'url(' + books[i].img + ')',
      }
    });

    $aNewLink = $('<a/>', {
      href: books[i].url,
      target: '_blank',
      class: 'alink'
    });

    $aNewLink.append($div);

    $container.append($aNewLink);
  }

  setTimeout(function () {
  	$container.find('a').addClass('is-active');
  }, 0);
};

$('[data-category]').on('click', function () {
  var category = $(this).data('category');
  var filteredBooks = filterBooks(category);
  populateBooks(filteredBooks);
});

populateBooks(shuffleBooks(books));

// $('#search').on('keyup', function() {
//   var search = $(this).val().toLowerCase();

//   var searchBooks = books.filter(function(item){
//     if (item.title.toLowerCase().indexOf(search) > -1 ){ //indexOf is position of array.
//       return true;
//     }
//   });

//   populateBooks(searchBooks);

// });

function arrUnique(arr) {
  var result = [];

  arr.filter(function (item) {
    if (result.indexOf(item) === -1) {
      result.push(item);
    }
  })

  return result;
}

$('#search-button').on('click', function () {
  var results = [];

  var searchSplit = $('#search')
    .val()
    .toLowerCase()
    .split(/[ ,]/);

  searchSplit.forEach(function (search) {
    var categoryBooks = books.filter(function (item) {
      return item.category.toLowerCase().indexOf(search) > -1;
    });

    var searchBooks = books.filter(function(item){
      if (item.title.toLowerCase().indexOf(search) > -1) { //indexOf is position of array.
        return true;
      }
    });

    results = results.concat(categoryBooks, searchBooks);
  });

  populateBooks(arrUnique(results));
});

function shuffleBooks(array) {
  var currentIndex = array.length;
  var temporaryValue;
  var randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}


})( window, undefined );




var myApp = {

  counter: 0,

  increment: function () {
    this.counter++;
  },

  start: function () {
    window.addEventListener('click', this.increment.bind(this));
  }

};
