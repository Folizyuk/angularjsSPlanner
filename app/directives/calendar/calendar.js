(function () {
  angular.module('myApp')
    .directive('calendar', calendar);

  function calendar() {
    return {
      restrict: 'E',
      templateUrl: 'directives/calendar/calendar.html',
      link: function (scope, element, attrs) {
      }
    }
  }
})();