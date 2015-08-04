angular.module('hackLibsApp.passage', [])

.controller('PassageController', function ($scope) {
  // Your code here
  $scope.words = {noun:['stool', 'ocean', 'butt'],
    verb:['wiggle'],
    number:['ten', 'three']
     };
  $scope.capitalize = function(word){
    return word.charAt(0).toUpperCase + word.slice(1);
  };
})
.filter('capitalize', function() {
  return function(input, scope) {
    if (input!==null){
      input = input.toLowerCase();
    }
    return input.substring(0,1).toUpperCase()+input.substring(1);
  };
});