'use strict';

angular.module('permitidorayarApp')
  .controller('MainCtrl', function ($scope, $http, angularMoment) {

  //$.param($scope.formData),  // pass in data as strings

  $scope.datetime = {time : new Date()};

 $http({method:'GET', url: 'https://api.mongohq.com/databases/vital/collections/messages/documents?_apikey=6pnomhzb6yre2nifkc4u'})
    .success(function(data, status, headers, config){
      console.log('hola');
    $scope.mensajes = data;
  });



  $scope.processForm = function(){
    $scope.formData;
      var doc = JSON.stringify({'document':$scope.formData}, {"_id": -1});
    //var doc = '{"document":{"author":"cmart", "body":"hola mundo"}}';
    $http({method:'POST', url: 'https://api.mongohq.com/databases/vital/collections/messages/documents?_apikey=6pnomhzb6yre2nifkc4u', data:doc});
  }  
});
