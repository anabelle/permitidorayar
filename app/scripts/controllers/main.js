'use strict';

angular.module('permitidorayarApp')
  .controller('MainCtrl', function ($scope) {

	$scope.orderByField = 'fecha';
	$scope.reverseSort = true;

    $scope.mensajes = [
		{
			'fecha' : '2014/12/27',
			'texto': 'Mensaje 1 Max 140 Caracteres.',
			'autor': 'Firma 1 25 Cars'
		},

		{
			'fecha' : '2014/12/31',
			'texto': 'Mensaje 2 Max 140 Caracteres.',
			'autor': 'Firma 2 25 Cars'
		},

		{
			'fecha' : '2014/12/12',
			'texto': 'Mensaje 3 Max 140 Caracteres.',
			'autor': 'Firma 3 25 Cars'
		}
    ];
  });
