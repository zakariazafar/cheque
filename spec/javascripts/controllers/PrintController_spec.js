describe("PrintController", function() {
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

      routeParams.chequeId = fakeCheque.id;

      routeParams.keywords = keywords;
      httpBackend = $httpBackend;
      ChequeService = Cheque;
      return ctrl = $controller('PrintController', {
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
  


  it('Should call api to get a cheque', function() {

  	httpBackend.expectGET("/cheques/" + fakeCheque.id + "?format=json").respond(200, fakeCheque);
  	httpBackend.flush();  	

  	expect(scope.cheque.id).toBe(fakeCheque.id);
  	expect(scope.cheque.name).toBe(fakeCheque.name);
  	expect(scope.cheque.date).toBe(fakeCheque.date);
  	expect(scope.cheque.amount).toBe(fakeCheque.amount);

  });

  
});

