
cheque.factory('ChequeService', ['$resource', function($resource) {
  return $resource('/cheques/:chequeId', 
  {
    chequeId: "@id",
    format: 'json'
  }
  , {
    'update': { method:'PUT' },
    'save': { method:'PUT' },
    'create': { method:'POST' },
    'show': { method:'GET' }
  });
  }]);