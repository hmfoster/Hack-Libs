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
});