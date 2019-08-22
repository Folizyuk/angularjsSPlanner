(function () {
  angular.module('myApp')
    .filter('dayOfAnotherMonth', dayOfAnotherMonth);

  function dayOfAnotherMonth() {
    return function(date, monthDate) {
      if (moment(date).month() !== moment(monthDate).month()) {
        return moment(date).format('MMM DD');
      }

      return moment(date).format('DD');
    }
  }
})();