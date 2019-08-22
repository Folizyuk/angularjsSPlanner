(function () {
  angular.module('myApp')
    .factory('calendarService', calendarService);

  function calendarService() {
    const self = this;

    self.data = [
      {
        date: moment().format('YYYY-MM-DD'),
        events: [
          {
            name: 'event 1',
            isAllDay: false,
            start: moment().set('hour', 12),
            end: moment().set('hour', 13)
          }
        ]
      }
    ];

    self.getData = function(fromDate, toDate) {
      return self.data.filter(item => moment(item.date).isBetween(fromDate, toDate));
    };

    self.getAllData = function() {
      return self.data;
    };

    self.addEvent = function ({ date, name, isAllDay, start, end }) {
      const existDate = self.data.find(item => item.date === moment(date).format('YYYY-MM-DD'));
      const event = { name, isAllDay, start, end };
      if (existDate) {
        existDate.events.push(event);
      } else {
        self.data.push({
          date: moment(date).format('YYYY-MM-DD'),
          events: [ event ]
        });
      }
    };

    return {
      getData: self.getData,
      getAllData: self.getAllData,
      addEvent: self.addEvent
    }
  }
})();