'use strict';

angular.module('permitidorayarApp')
  .controller('MainCtrl', function ($scope) {
    $scope.mensajes = [
		{
			'fecha' : '03/04/2014',
			'texto': 'Mensaje 1 Max 140 Caracteres.',
			'autor': 'Firma 1 25 Cars'
		},

		{
			'fecha' : '03/04/2014',
			'texto': 'Mensaje 2 Max 140 Caracteres.',
			'autor': 'Firma 2 25 Cars'
		},

		{
			'fecha' : '03/04/2014',
			'texto': 'Mensaje 3 Max 140 Caracteres.',
			'autor': 'Firma 3 25 Cars'
		}
    ];
  });
