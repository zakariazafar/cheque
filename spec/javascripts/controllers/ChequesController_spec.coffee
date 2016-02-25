describe "ChequesController", ->
  scope        = null
  ctrl         = null
  location     = null
  routeParams  = null
  resource     = null
  
  # access injected service later
  httpBackend  = null
  
  setupController =(keywords,results)->
    inject(($location, $routeParams, $rootScope, $resource, $httpBackend, $controller)->
      scope       = $rootScope.$new()
      location    = $location
      resource    = $resource
      routeParams = $routeParams
      routeParams.keywords = keywords

      # capture the injected service
      httpBackend = $httpBackend 

      ctrl        = $controller('ChequesController',
                                $scope: scope
                                $location: location)
    )

  beforeEach(module("cheque"))
  beforeEach(setupController())

  afterEach ->
    httpBackend.verifyNoOutstandingExpectation()
    httpBackend.verifyNoOutstandingRequest()

  it 'defaults to no cheques', ->
    expect(scope.cheques).toEqualData([])