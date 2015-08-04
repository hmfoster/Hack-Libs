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
  var passage = $scope.passage;
  console.log('words', wordData);
  console.log('passage', passage);

  $scope.theTitle = $sce.trustAsHtml($interpolate(passage.title)(words));
  $scope.thePassage = $sce.trustAsHtml($interpolate(passage.passage)(words));
  
});


