var app = angular.module('myApp', ['ngGrid']);
app.controller('MyCtrl', function($scope,$http) {
    $scope.myData=[];
     $scope.columns1 = [{field: 'categoria', displayName: 'Categoria'}, {field:'totalFacturado', displayName:'Total Facturado'}];
    $scope.columns2 = [{field: 'categoria', displayName: 'Categoria'}, {field:'anio1', displayName:'Año 1996'},{field:'anio2', displayName:'Año 1998'}];
    $scope.columnsSelected = [];
    $scope.data1=[];
    $scope.data2=[];
    $scope.data3=[];
    $http.get("js/data1.js")
    .success(function(response) {
        $scope.data1=response;
        
      });
    $http.get("js/data2.js")
    .success(function(response) {
        $scope.data2=response;
        

      });
    $http.get("js/data3.js")
    .success(function(response) {
        $scope.data3=response;
       

      });

    $scope.add1=function(){
      $scope.columnsSelected = $scope.columns1;
      d3.select("svg")
       .remove();
      var svg = dimple.newSvg("#chartContainer", 590, 500);

      d3.json("http://localhost:8080/ventasPorCategoria", function(error, data) {
        if (error) {
          data=$scope.data1;
        
      }
      

        $scope.$apply(function () {
            $scope.myData= data;
        });
      
      var myChart = new dimple.chart(svg, data);
      myChart.setBounds(60, 30, 510, 305)
      var x = myChart.addCategoryAxis("x", "categoria");
      x.addOrderRule("categoria");
      myChart.addMeasureAxis("y", "totalFacturado");
      myChart.addSeries(null, dimple.plot.bar);
      myChart.addLegend(65, 10, 510, 20, "right");
      myChart.draw();
      
      
      });
}
    
    $scope.add2=function(){
      d3.select("svg")
       .remove();
      var svg = dimple.newSvg("#chartContainer", 590, 500);
      $scope.columnsSelected = $scope.columns2;
    d3.json("http://localhost:8080/ventasPorCategoria2", function(error, data) {
      
        if (error) {
          data=$scope.data2;
        
      }
  
      var myChart = new dimple.chart(svg, data);
      myChart.setBounds(60, 30, 510, 305)
      var x = myChart.addCategoryAxis("x", ["categoria","anio1"]);
      myChart.addMeasureAxis("y", "totalFacturado");
      myChart.addSeries("anio1", dimple.plot.bar);
      myChart.addLegend(65, 10, 510, 20, "right");
      myChart.draw();
      
      $http.get("http://localhost:8080/ventasPorCategoria3")
    .success(function(response) {    
      $scope.myData = response;}).
    error(function(data, status, headers, config) {
    

        $scope.myData = $scope.data3;
        $scope.$apply(function () {
            $scope.myData= $scope.data3s;
        });

    });

  });

}
 
  $scope.gridOptions = { 
        data: 'myData', 
        columnDefs: 'columnsSelected'


    };

});
