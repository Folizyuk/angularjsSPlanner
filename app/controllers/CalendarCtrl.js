(function () {
  angular.module('myApp')
    .controller('CalendarCtrl', CalendarCtrl);

  function CalendarCtrl($scope) {
    let self = this;
    $scope.dates = [];
    $scope.month = moment().format('MMMM');
    $scope.year = +moment().format('YYYY');

    console.log('ctrl scope', $scope);

    this.init = function() {
      const start = moment().month($scope.month).date(1);
      const end = moment().month($scope.month).endOf('month');
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

    this.go = function (count) {
      $scope.month = moment().month($scope.month).add(count, "months").format('MMMM');
      this.init();
    };

    $scope.next = function (count) {
      self.go(count);
    };

    $scope.prev = function (count) {
      self.go(count);
    };

    this.init();
  }
})();