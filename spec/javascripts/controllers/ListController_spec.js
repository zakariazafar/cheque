describe("ListController", function() {
  var ctrl, httpBackend, location, resource, routeParams, scope, setupController;
  scope = null;
  ctrl = null;
  location = null;
  routeParams = null;
  resource = null;
  httpBackend = null;

  fakeCheques = [{"id":1,"name":"test","date":"2016-02-12","amount_formatted":"2,345.0","number_in_words":"two thousand three hundred and forty five point zero"},
                {"id":2,"name":"test1","date":"2016-02-15","amount_formatted":"1,234.0","number_in_words":"one thousand two hundred and thirty four point zero"},
                {"id":3,"name":"test3","date":"2016-02-15","amount_formatted":"3,456.0","number_in_words":"three thousand four hundred and fifty six point zero"}];

  setupController = function(keywords, results) {
    return inject(function($location, $routeParams, $rootScope, $resource, $httpBackend, $controller) {
      scope = $rootScope.$new();
      location = $location;
      resource = $resource;
      routeParams = $routeParams;
      routeParams.keywords = keywords;
      httpBackend = $httpBackend;
      return ctrl = $controller('ListController', {
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
  

  it('Search all should load all cheques', function() {
    httpBackend.expectGET("/cheques?format=json&keywords=all").respond(200, fakeCheques);
    httpBackend.flush();

    scope.search('all');

    expect(scope.cheques.length).toBe(fakeCheques.length);
  });

  it('Search for specific payee should filter results', function() {
    httpBackend.expectGET("/cheques?format=json&keywords=all").respond(200, fakeCheques);
    httpBackend.flush();

    scope.search('test1');

    expect(scope.cheques.length).toBe(1);
  });
});

