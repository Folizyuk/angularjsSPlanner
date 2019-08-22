(function () {
  angular.module('myApp')
    .directive('monthDayItem', monthDayItem);

  function monthDayItem() {
    return {
      restrict: 'E',
      templateUrl: '/directives/calendar/monthDayItem/monthDayItem.html',
      replace: true,
      scope: {
        date: '=',
        data: '=',
        startFrom: '='
      },
      link: function (scope, element, attrs) {
        scope.eventData = scope.data.find(item => item.date === moment(scope.date).format('YYYY-MM-DD'));

        scope.onDayClick = function () {
          console.log('onDayClick', scope, scope.date.toDate());
        };

        scope.getEvents = function () {
          console.log('get events', scope.data);
          return scope.data.find(item => item.date === moment(scope.date).format('YYYY-MM-DD'));
        };

      }
    }
  }
})();