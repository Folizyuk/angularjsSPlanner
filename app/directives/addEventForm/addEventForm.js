(function () {
  angular.module('myApp')
    .directive('addEventForm', addEventForm);

  function addEventForm(calendarService) {
    return {
      restrict: 'E',
      templateUrl: 'directives/addEventForm/addEventForm.html',
      link: function (scope, element, attrs) {
        scope.eventName = '';

        scope.save = function (eventForm) {
          if (eventForm.$valid) {
            console.log('save', calendarService);
            calendarService.addEvent({
              name: scope.eventName,
              date: moment('2019-08-23'),
              isAllDay: false
            });
            console.log(calendarService.getAllData());
          }
        };
      }
    }
  }
})();