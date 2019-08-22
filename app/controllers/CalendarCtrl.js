(function () {
  angular.module('myApp')
    .controller('CalendarCtrl', CalendarCtrl);

  function CalendarCtrl($scope) {
    let self = this;
    let days = { 0: 'Sunday', 1: 'Monday'};
    self.startDayOfWeek = 0;
    $scope.dates = [];
    $scope.month = moment().format('MMMM');
    $scope.year = +moment().format('YYYY');

    console.log('ctrl scope', $scope);

    self.init = function() {
      const start = moment().month($scope.month).date(1).day(days[self.startDayOfWeek]);
      const end = moment().month($scope.month).endOf('month').day(7 - (self.startDayOfWeek || 1));
      let curr = moment(start);
      const dates = [];

      while (curr.isSameOrBefore(end)) {
        dates.push(moment(curr));
        curr.add(1, 'days');
      }

      $scope.dates = [];
      while (dates.length) {
        $scope.dates.push(dates.splice(0, 7));
      }
    };

    self.go = function (count) {
      $scope.month = moment().month($scope.month).add(count, "months").format('MMMM');
      $scope.year = moment().month($scope.month).format('YYYY');
      self.init();
    };

    $scope.next = function (count) {
      self.go(count);
    };

    $scope.prev = function (count) {
      self.go(count);
    };

    self.init();
  }
})();