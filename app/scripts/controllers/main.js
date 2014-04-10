'use strict';

angular.module('permitidorayarApp')
  .controller('MainCtrl', function ($scope, $http) {

  $scope.datetime = {time : new Date()};



  $scope.pullData = function(){
    $http({method:'GET', url: 'https://api.mongohq.com/databases/vital/collections/messages/documents?_apikey=6pnomhzb6yre2nifkc4u&sort={"date":-1}&limit=10'})
      .success(function(data, status, headers, config){
        console.log(data);
        $scope.mensajes = data;
      });
  };

  $scope.pullData();


  $scope.processForm = function(){
    $scope.formData;

    $scope.formData.date = Date.now()

    var doc = JSON.stringify({'document':$scope.formData}, {"_id": -1});
    $http({method:'POST', url: 'https://api.mongohq.com/databases/vital/collections/messages/documents?_apikey=6pnomhzb6yre2nifkc4u', data:doc})
      .success(function(data, status, headers, config){
        console.log("success in save: " + data);
        $scope.pullData();
        $scope.$apply();
      });
  }
});
