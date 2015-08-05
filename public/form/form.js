angular.module('hackLibsApp.form', [])

.controller('FormController', function ($scope, wordData, $window, $location) {
  $scope.wordData = wordData;
  var wordTypes = $scope.wordTypes;
  $scope.formData = wordTypes;
  console.log($scope.wordTypes);
});