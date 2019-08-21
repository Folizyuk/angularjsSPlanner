(function () {
  angular.module('myApp')
    .controller('CalendarCtrl', CalendarCtrl);

  function CalendarCtrl($scope) {
    $scope.name = 'CalendarCtrl';
    console.log('ctrl scope', $scope)
  }
})();