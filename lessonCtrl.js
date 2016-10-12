
angular.module('directivePractice').controller('lessonCtrl', function($scope, lessonService) {
    $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];

    $scope.announceDay = function(lesson, day){
      if(typeof day === 'undefined' || day === null) {
        alert(lesson + ' is not scheduled yet! ');
      } else {
        alert(lesson + ' is active on ' + day + '.');
        }
    };

    $scope.removeLesson = function(index) {
      $scope.lessons.splice(index, 1);
    };
});
