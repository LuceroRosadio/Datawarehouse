var app = angular.module('app', ['ngGrid']);
app.controller('ventasController', function($scope, $http) {
  $scope.nombre="lucero";
  $scope.myData=[];
  $scope.gridOptions = { 
        data: 'myData',
        columnDefs: [
    {field:'categoria', displayName:'Categoria'},
    {field:'totalFacturado', displayName:'Total Facturado'},
    
    ]

    };
    $http.get("http://localhost:8080/ventasPorCategoria")
    .success(function (response) {
      $scope.myData= response;
      });
});