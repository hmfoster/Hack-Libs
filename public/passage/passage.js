angular.module('hackLibsApp.passage', [])

.controller('PassageController', function ($scope, $interpolate, $sce, wordData, wordTypes) {

  //-------Create passage view---------//
  var wordExtract = function(words){
    var wordStore = {};
    for(var wordType in words){
      for(var word in words[wordType]){
        wordStore[word]=words[wordType][word];
      }
    } return wordStore;
  };

  //extract words for template from wordData object from form
  var words = wordExtract(wordData);
  var passages = $scope.passages;
  //interpolate words into passage
  $scope.title = $interpolate(passages[0].title)(words);
  $scope.passage = $sce.trustAsHtml($interpolate(passages[0].passage)(words));
  
});


