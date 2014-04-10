'use strict';

angular.module('permitidorayarApp')
  .controller('MainCtrl', function ($scope, $http) {

  //$.param($scope.formData),  // pass in data as strings

  $scope.datetime = {time : new Date()};

 $http({method:'GET', url: 'https://api.mongohq.com/databases/vital/collections/messages/documents?_apikey=6pnomhzb6yre2nifkc4u&sort={"date":-1}&limit=10'})
    .success(function(data, status, headers, config){
      console.log(data);
    $scope.mensajes = data;
  });



  $scope.processForm = function(){
    $scope.formData;

    $scope.formData.date = Date.now()

    var doc = JSON.stringify({'document':$scope.formData}, {"_id": -1});

    //var doc = '{"document":{"author":"cmart", "body":"hola mundo"}}';
    $http({method:'POST', url: 'https://api.mongohq.com/databases/vital/collections/messages/documents?_apikey=6pnomhzb6yre2nifkc4u', data:doc});
  }
});
