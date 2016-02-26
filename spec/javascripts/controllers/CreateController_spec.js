describe("CreateController", function() {
  var ctrl, httpBackend, location, resource, routeParams, scope, setupController;
  scope = null;
  ctrl = null;
  location = null;
  routeParams = null;
  resource = null;
  httpBackend = null;
  ChequeService = null;

  fakeCheque = {"id":1,"name":"test","date":"2016-02-12","amount_formatted":"2,345.0","number_in_words":"two thousand three hundred and forty five point zero"};

  setupController = function(keywords, results) {
    return inject(function($location, $routeParams, $rootScope, $resource, $httpBackend, $controller, Cheque) {
      scope = $rootScope.$new();
      location = $location;
      resource = $resource;
      routeParams = $routeParams;
      routeParams.keywords = keywords;
      httpBackend = $httpBackend;
      ChequeService = Cheque;
      return ctrl = $controller('CreateController', {
        $scope: scope,
        $location: location
      });
    });
  };
  beforeEach(module("cheque"));
  beforeEach(setupController());
  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    return httpBackend.verifyNoOutstandingRequest();
  });
  


  it('Should post to api & go to print location', function() {

  	var spyChequeService = spyOn(ChequeService, "create");

  	scope.save();

  	expect(spyChequeService).toHaveBeenCalled();  	

  });

  
});

