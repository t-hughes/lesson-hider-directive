angular.module('directivePractice').directive('lessonHider', function() {

  return {
    templateUrl: 'lessonHider.html',
    restrict: 'E',
    scope: {
      lesson: '=',
      dayAlert: '&',
    },
    controller: function($scope, lessonService) {
        $scope.getSchedule = lessonService.getSchedule();
    },
    link: function(scope, element, attributes) {
        scope.getSchedule.then(function(response){
          scope.schedule = response.data;

//function to toggle line-through when checkbox is checked or unchecked
          var checked = false;
          scope.checked = false;
          scope.clicked = function(){
            if (checked) {
              element.css('text-decoration', 'none');
          checked= false;
          scope.check = false;
        }
        else {
          element.css('text-decoration', 'line-through');
          checked = true;
          scope.check = true;
        }
          };

          scope.schedule.forEach(function(scheduleDay){
            if(scheduleDay.lesson === scope.lesson) {
              element.css('text-decoration', 'line-through');
              checked = true;
              scope.check = true;
              scope.lessonDay = scheduleDay.weekday;
              return;
            }
          });

          scope.removeLesson = function(){
            element.remove();
          };
        });
    }
  };
});
