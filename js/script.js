/* js file */

(function( window, undefined ){

var $container = $('#container');

var books = [

//History
  { title: 'Nikola Tesla', url: 'http://amzn.to/1OE6YSa', category: 'history', img: 'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00CATSONE&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20' },
  { title: 'Lewis and Clark', url: 'http://amzn.to/1JgbBF9', category: 'history', img:'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0194QVC7A&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20" ></a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=thoughtsharkc-20&l=as2&o=1&a=B0194QVC7A'},
  { title: 'Darwin', url: 'http://amzn.to/1P3HBgf', category: 'history', img: 'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B008478VE8&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20" ></a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=thoughtsharkc-20&l=as2&o=1&a=B008478VE8' },
  { title: 'Meditations', url: 'http://amzn.to/1OE7RtM', category: 'history', img: 'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00IMLL63O&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20' },
  { title: 'The Legend of King Authur', url: 'http://amzn.to/1RyvGsY', category: 'history', img:'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0083ZMP5C&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20'},
  { title: 'The Art of War', url: 'http://amzn.to/1P3T5jF', category: 'history', img: 'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0199LTIKI&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20" ></a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=thoughtsharkc-20&l=as2&o=1&a=B0199LTIKI' },
  { title: 'Nikola Tesla', url: 'http://amzn.to/1OE6YSa', category: 'history', img: 'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00CATSONE&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20' },
  { title: 'Lewis and Clark', url: 'http://amzn.to/1JgbBF9', category: 'history', img:'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0194QVC7A&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20" ></a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=thoughtsharkc-20&l=as2&o=1&a=B0194QVC7A'},
  { title: 'Darwin', url: 'http://amzn.to/1P3HBgf', category: 'history', img: 'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B008478VE8&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20" ></a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=thoughtsharkc-20&l=as2&o=1&a=B008478VE8' },
  { title: 'Meditations', url: 'http://amzn.to/1OE7RtM', category: 'history', img: 'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00IMLL63O&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20' },
  { title: 'Lewis and Clark', url: 'http://amzn.to/1JgbBF9', category: 'history', img:'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0194QVC7A&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20" ></a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=thoughtsharkc-20&l=as2&o=1&a=B0194QVC7A'},
  { title: 'Darwin', url: 'http://amzn.to/1P3HBgf', category: 'history', img: 'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B008478VE8&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20" ></a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=thoughtsharkc-20&l=as2&o=1&a=B008478VE8' },

//Mystery
  { title: 'Once Gone', url: 'http://amzn.to/1P3TPpd', category: 'mystery', img: 'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01991O5UG&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20" ></a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=thoughtsharkc-20&l=as2&o=1&a=B01991O5UG' },
  { title: 'The Grave Man', url: 'http://amzn.to/1JWO7oL', category: 'mystery', img:'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B014JOV24K&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20" ></a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=thoughtsharkc-20&l=as2&o=1&a=B014JOV24K'},
  { title: 'Nightmares of Caitlin', url: 'http://amzn.to/1Rywu12', category: 'mystery', img: 'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00E7KTEEW&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20" ></a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=thoughtsharkc-20&l=as2&o=1&a=B00E7KTEEW' },
  { title: 'Once Gone', url: 'http://amzn.to/1P3TPpd', category: 'mystery', img: 'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01991O5UG&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20" ></a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=thoughtsharkc-20&l=as2&o=1&a=B01991O5UG' },
  { title: 'The Grave Man', url: 'http://amzn.to/1JWO7oL', category: 'mystery', img:'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B014JOV24K&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20" ></a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=thoughtsharkc-20&l=as2&o=1&a=B014JOV24K'},
  { title: 'Nightmares of Caitlin', url: 'http://amzn.to/1Rywu12', category: 'mystery', img: 'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00E7KTEEW&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20" ></a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=thoughtsharkc-20&l=as2&o=1&a=B00E7KTEEW' },
  { title: 'Once Gone', url: 'http://amzn.to/1P3TPpd', category: 'mystery', img: 'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01991O5UG&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20" ></a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=thoughtsharkc-20&l=as2&o=1&a=B01991O5UG' },
  { title: 'The Grave Man', url: 'http://amzn.to/1JWO7oL', category: 'mystery', img:'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B014JOV24K&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20" ></a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=thoughtsharkc-20&l=as2&o=1&a=B014JOV24K'},
  { title: 'Nightmares of Caitlin', url: 'http://amzn.to/1Rywu12', category: 'mystery', img: 'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00E7KTEEW&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20" ></a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=thoughtsharkc-20&l=as2&o=1&a=B00E7KTEEW' },
];



var populateBooks = function (category) {

  var filteredBooks = books;
  var $aNewLink;
  var $img;
  
  $container.empty();
  
  if (category) {//This is based on Truthey Statement, by passing a string it is true and will run. else 
    filteredBooks = books.filter(function (item) { //filter is appart of the array prototype so i can use it. It will look over the array
      return item.category === category; // book.filter was is a function that loops over the arrray. and the annoymous function pulls the books.
    }); 
  } //fitler not only loops array is also, its runs an A. function that returns true of false if retuns true is will push items to a new array.

  filteredBooks = shuffleBooks(filteredBooks);
  
  for (var i = 0; i < filteredBooks.length; i++) {
    
    $aNewLink= $('<a/>', {
      href: filteredBooks[i].url,
      target: '_blank',
      class: 'book'
    });

    $img = $('<img/>', {
      src: filteredBooks[i].img
    })
    $aNewLink.append($img);
    $container.append($aNewLink);
  }

  setTimeout(function () {
  	$container.find('a').addClass('is-active');
  }, 0);
};

$('[data-category]').on('click', function () {
  var category = $(this).data('category');
  populateBooks(category);
});

populateBooks();



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