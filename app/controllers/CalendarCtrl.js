(function () {
  angular.module('myApp')
    .controller('CalendarCtrl', CalendarCtrl);

  function CalendarCtrl($scope) {
    let self = this;
    let days = { 0: 'Sunday', 1: 'Monday'};
    self.startDayOfWeek = 0;
    $scope.dates = [];
    $scope.startFrom = moment();

    console.log('ctrl scope', $scope);

    self.init = function() {
      const start = moment($scope.startFrom).date(1).day(days[self.startDayOfWeek]);
      const end = moment($scope.startFrom).endOf('month').day(self.startDayOfWeek ? 7 : 6);
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
      $scope.startFrom = moment($scope.startFrom).add(count, "months");
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