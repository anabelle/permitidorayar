'use strict';

angular.module('permitidorayarApp')
  .controller('MainCtrl', function ($scope, $http, cornercouch) {


  $scope.server = cornercouch('https://decolector.iriscouch.com');
  $scope.db = $scope.server.getDB('messages');
  
  /*
  $scope.db.queryAll({ include_docs: false, descending: true, limit: 8 })
  .success(function(data){
    console.log("data " + data);
  })
  .error(function(error){
    console.log("err " + JSON.stringify(error));

  });
*/
  $scope.orderByField = 'fecha';
  $scope.reverseSort = true;
  $scope.formData = {};


  $scope.processForm = function(){
    console.log('aqui procesamos la forma');
    $scope.server.getUUIDs(1).success(function(){
      console.log($scope.server.uuids);
      //var id = $scope.server.uuids[0];
      $scope.newdoc = $scope.db.newDoc();
      $scope.newdoc.author = 'fulano';
      $scope.newdoc.body = 'este es el mensaje';
      $scope.newdoc.save()
      .success(function(){
        console.log();
      });
    });
    
  };

  //$.param($scope.formData),  // pass in data as strings

  $scope.mensajes = [
    {
      'fecha' : '2014/12/27',
      'texto': 'Mensaje 1 Max 140 Caracteres.',
      'autor': 'Firma 1 25 Cars'
    },

    {
      'fecha' : '2014/12/31',
      'texto': 'Mensaje 2 Max 140 Caracteres Mensaje 2 Max 140 Caracteres Mensaje 2 Max 140 Caracteres.Mensaje 2 Max 140 Caracteres Mensaje 2 Max 140 Caract',
      'autor': 'Firma 2 25 Cars'
    },

    {
      'fecha' : '2014/12/12',
      'texto': 'Mensaje 3 Max 140 Caracteres.',
      'autor': 'Firma 3 25 Cars'
    }
  ];
});
