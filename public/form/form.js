angular.module('hackLibsApp.form', [])

.controller('FormController', function ($scope, wordData) {
  // Your code here
  $scope.wordData = wordData;
  var wordTypes = $scope.wordTypes;
  
  $scope.formData = wordTypes;
  // $scope.formData = {};
  // $scope.formData.nouns = wordTypes.nouns;
  // $scope.formData.properNouns = wordTypes.properNouns;
  // $scope.formData.verbs = wordTypes.verbs;
  // $scope.formData.adjectives = wordTypes.adjectives;
  // $scope.formData.numbers = wordTypes.numbers;
});