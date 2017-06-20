var app = angular.module('lemonsCostCalc', [])

app.controller('TheController', function ($scope) {
  $scope.driverRegoVal = 880
  $scope.carRegoVal = 660
  $scope.carPurchaseVal = 999
  $scope.safetyCostVal = 4000
  $scope.fuelVal = 200
  $scope.foodVal = 100
  var hoursOfRacing = 24
  $scope.doCalc = function () {
    var drivers = [5,6,7,8,9,10,11,12,13]
    var results = []
    for (var i = 0; i < drivers.length; i++) {
      var driverCount = drivers[i]
      var row = {drivers: driverCount}
      row.cost = $scope.driverRegoVal + $scope.foodVal +
        (($scope.carRegoVal + $scope.carPurchaseVal + $scope.safetyCostVal + $scope.fuelVal) / driverCount)
      row.seatTime = hoursOfRacing / driverCount
      results.push(row)
    }
    $scope.results = results
  }
  $scope.doCalc()
})
