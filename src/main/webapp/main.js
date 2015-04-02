// main.js
var app = angular.module('myApp', ['ngGrid']);
app.controller('MyCtrl', function($scope,$http) {
    $scope.myData=[];
     $scope.columns1 = [{field: 'categoria', displayName: 'Categoria'}, {field:'totalFacturado', displayName:'Total Facturado'}];
    $scope.columns2 = [{field: 'categoria', displayName: 'Categoria'}, {field:'anio1', displayName:'Año 1996'},{field:'anio2', displayName:'Año 1998'}];
    $scope.columnsSelected = $scope.columns1;
    $scope.add1=function(){
    	$scope.columnsSelected = $scope.columns1;
    	d3.select("svg")
       .remove();
    	var svg = dimple.newSvg("#chartContainer", 590, 500);

    	d3.json("http://localhost:8080/ventasPorCategoria", function(error, data) {
      var myChart = new dimple.chart(svg, data);
      myChart.setBounds(60, 30, 510, 305)
      var x = myChart.addCategoryAxis("x", "categoria");
      x.addOrderRule("categoria");
      myChart.addMeasureAxis("y", "totalFacturado");
      myChart.addSeries(null, dimple.plot.bar);
      myChart.addLegend(65, 10, 510, 20, "right");
      myChart.draw();
   		$scope.myData= data;
    	
      });

    };
    $scope.add2=function(){
    	d3.select("svg")
       .remove();
    	var svg = dimple.newSvg("#chartContainer", 590, 500);
    	$scope.columnsSelected = $scope.columns2;
    d3.json("http://localhost:8080/ventasPorCategoria2", function(error, data) {
    	
      var myChart = new dimple.chart(svg, data);
      myChart.setBounds(60, 30, 510, 305)
      var x = myChart.addCategoryAxis("x", ["categoria","anio1"]);
      myChart.addMeasureAxis("y", "totalFacturado");
      myChart.addSeries("anio1", dimple.plot.bar);
      myChart.addLegend(65, 10, 510, 20, "right");
      myChart.draw();
      
      $http.get("http://localhost:8080/ventasPorCategoria3")
    .success(function(response) {

    	$scope.myData = response;});
      /*
      var groupedData = _.groupBy(data, function(d){return d.categoria});
      console.log(groupedData);
      $scope.myData= groupedData;*/

    });


    };
    


  $scope.gridOptions = { 
        data: 'myData', 
        columnDefs: 'columnsSelected'
      /*  columnDefs: [
    {field:'categoria', displayName:'Categoria'},
    {field:'totalFacturado', displayName:'Total Facturado'},
    
    ]*/

    };
    /*$http.get("http://localhost:8080/ventasPorCategoria")
    .success(function (response) {
      $scope.myData= response;
      });*/
});

