var ViewModel = function() {
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

  this.cats = ko.observableArray([
        { nickname: 'Tabtab' },
        { nickname: 'T-Bone' },
        { nickname: 'Mr. T'},
        { nickname: 'Tabitha Tab Tabby Catty Cat'}
  ]);

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };
};

ko.applyBindings(new ViewModel());
