angular.module('hackLibsApp.passage', [])

.controller('PassageController', function ($scope) {
  // Your code here
  $scope.words = {};


})
.filter('capitalize', function() {
  return function(input, scope) {
    if (input!==null){
      input = input.toLowerCase();
    }
    return input.substring(0,1).toUpperCase()+input.substring(1);
  };
});