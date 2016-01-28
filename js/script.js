/* js file */

(function( window, undefined ){













//Book Object and Algorithm

var $container = $('#container');

var books = [

//History
  { title: 'Nikola Tesla', url: 'http://amzn.to/1OE6YSa', category: 'history', img: 'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00CATSONE&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20' },
  { title: 'Lewis and Clark', url: 'http://amzn.to/1JgbBF9', category: 'history', img:'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0194QVC7A&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20" ></a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=thoughtsharkc-20&l=as2&o=1&a=B0194QVC7A'},
  { title: 'Darwin', url: 'http://amzn.to/1P3HBgf', category: 'history', img: 'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B008478VE8&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20" ></a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=thoughtsharkc-20&l=as2&o=1&a=B008478VE8' },
  { title: 'Meditations', url: 'http://amzn.to/1OE7RtM', category: 'history', img: 'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00IMLL63O&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20' },
  { title: 'The Legend of King Authur', url: 'http://amzn.to/1RyvGsY', category: 'history', img:'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0083ZMP5C&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20'},
  { title: 'The Art of War', url: 'http://amzn.to/1P3T5jF', category: 'history', img: 'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0199LTIKI&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20" ></a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=thoughtsharkc-20&l=as2&o=1&a=B0199LTIKI' },
  

//Mystery 
  { title: 'Once Gone by Blake Pierce', url: 'http://amzn.to/1SLRBgr', category: 'mystery', img: 'http://ir-na.amazon-adsystem.com/e/ir?t=thoughtsharkc-20&l=as2&o=1&a=B00RPM9MJ6' },
  { title: 'The Grave Man by david archer', url: 'http://amzn.to/1JWO7oL', category: 'mystery', img:'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B014JOV24K&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20" ></a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=thoughtsharkc-20&l=as2&o=1&a=B014JOV24K'},
  { title: 'Nightmares of Caitlin', url: 'http://amzn.to/1Rywu12', category: 'mystery', img: 'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00E7KTEEW&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20" ></a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=thoughtsharkc-20&l=as2&o=1&a=B00E7KTEEW' },

  //Suspence
  { title: 'Squall by Sean Costello', url: 'http://amzn.to/1P3TPpd', category: 'suspence', img: 'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00RPM9MJ6&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20' },
  { title: 'Inheritance by Thomas Wymark', url: 'http://amzn.to/1KH75uB', category: 'suspence', img: 'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B010T2CZOC&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20' },
  { title: 'Blackwater Lake by Maggie James', url: 'http://amzn.to/1SLUaPR', category: 'suspence', img: 'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B015WYIQ4K&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20' },
  { title: 'Miami Requiem by JB turner', url: 'http://amzn.to/1lWlA7o', category: 'suspence', img: 'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00H4IG6EA&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20' },
  { title: 'Dracula by Bram Stoker', url: 'http://amzn.to/1lWlPzb', category: 'suspence', img: 'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0084B5TK8&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20' },
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
    
    $div = $('<div>', {
      
    }); 

    $aNewLink = $('<a/>', {
      href: books[i].url,
      target: '_blank',
      class: 'alink'
    });

    $img = $('<img/>', {
      src: books[i].img,
      class: 'book'
    });

    $div.append($aNewLink);

    $aNewLink.append($img);

    $container.append($div);
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
