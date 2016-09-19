var Cat = function() { 
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.level = ko.computed(function(){
    var clickCount = this.clickCount();
    if ( clickCount < 10 ) {
      return 'Newborn';
    } else if ( clickCount < 100 ) {
      return 'Infant';
    } else { 
      return 'Teen';
    }
  }, this);
  this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');

  this.nicknames = ko.observableArray([
        'Tabtab',
        'T-Bone',
        'Mr. T',
        'Tabitha Tab Tabby Catty Cat'
  ]);
};

var ViewModel = function() {
  var self = this;

  this.currentCat = ko.observable(new Cat());

  this.incrementCounter = function() {
      self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };
};

ko.applyBindings(new ViewModel());
