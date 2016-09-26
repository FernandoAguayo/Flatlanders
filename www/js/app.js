(function(){
  var gems = [{ name: 'Gema 1',
              description: 'ksljdkajsdklajsklajsd',
              price: 2.95,
              canPurchase:true,
              soldOut: false,
              images: [
				{id:0, url:'img/gem-01.gif'},
				{id:1, url:'img/gem-02.gif'},
				{id:2, url:'img/gem-03.gif'}
              ],
              reviews: [{
                stars: 5,
                body: "I love this gem!",
                author: "joe@example.org",
                createdOn: 1397490980837
            }]},
            
            { name: 'Gema 2',
              description: 'm,zcnmzxnckjsdnclknc',
              price: 2.95,
              canPurchase:true,
              soldOut: false,
              images: [
				{id:3, url:'img/gem-04.gif'},
				{id:4, url:'img/gem-05.gif'},
				{id:5, url:'img/gem-06.gif'}
			],
              reviews: [{
                stars: 5,
                body: "I love this gem!",
                author: "joe@example.org",
                createdOn: 1397490980837
            }]},
             
            { name: 'Gema 3',
              description: 'lñlñlñqlñalñlñlpqlñalsñal',
              price: 2.95,
              canPurchase:true,
              soldOut: false,
              images: [
				{id:6, url:'img/gem-07.gif'},
				{id:7, url:'img/gem-08.gif'},
				{id:8, url:'img/gem-09.gif'}
			],
              reviews: [{
                stars: 5,
                body: "I love this gem!",
                author: "joe@example.org",
                createdOn: 1397490980837
            }]}];
    
  var app = angular.module('gemStore', []);
  
  app.controller('StoreController', function(){
    this.products = gems;          
  });

 
  app.controller('TabController', function(){
    this.tab = 1;

    this.setTab = function(setTab){
      this.tab = setTab;
    };

    this.isSet = function(checkTab){
      return this.tab === checkTab;
    };
  });
    
  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);

      this.review = {};
    };
  });
    
   app.directive('productDescription',function(){
    return{
    restrict: 'E',
    templateUrl: "product-description.html"  
    };
  });
    
  	app.controller('GalleryController', function(){
		this.current = 0;

		this.setCurrent = function(imageNumber){
			this.current = imageNumber || 0;
		}
	});

                 
})();