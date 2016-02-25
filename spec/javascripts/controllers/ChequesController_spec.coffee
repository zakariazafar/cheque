describe "ChequesController", ->
  scope        = null
  ctrl         = null
  location     = null
  routeParams  = null
  resource     = null

  setupController =(keywords)->
    inject(($location, $routeParams, $rootScope, $resource, $controller)->
      scope       = $rootScope.$new()
      location    = $location
      resource    = $resource
      routeParams = $routeParams
      routeParams.keywords = keywords

      ctrl        = $controller('ChequesController',
                                $scope: scope
                                $location: location)
    )

  beforeEach(module("cheque"))
  beforeEach(setupController())

  it 'defaults to no cheques', ->
    expect(scope.cheques).toEqualData([])