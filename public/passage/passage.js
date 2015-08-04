angular.module('hackLibsApp.passage', [])

.controller('PassageController', function ($scope, $interpolate, $sce, wordData, wordTypes) {
  // Your code here
  // var passages = [{
  //   'title':'One {{ noun1|capitalize }} To {{ verb1|capitalize }} Them All',
  //   'passage': '{{ number1|capitalize }} {{ noun1 }}s for the Elven-{{ noun2 }}s under the {{ noun3 }},<br>\
  //     {{ number2|capitalize }} for the Dwarf-{{ noun4 }}s in halls of {{ noun5 }},<br>\
  //     {{ number3|capitalize }} for {{ adjective1|capitalize }} Men, doomed to {{ verb2 }},<br>\
  //     One for the {{ adjective2|capitalize }} Lord on his {{ adjective2 }}  {{ noun6 }}<br>\
  //     In the Land of {{ properNoun1|capitalize }} where the {{ noun7|capitalize }}s {{ verb3 }}.<br>\
  //     One {{ noun1|capitalize }} to {{ verb1 }} them all, One {{ noun1|capitalize }} to {{ verb4 }} them,<br>\
  //     One {{ noun1|capitalize }} to {{ verb5 }} them all and in the darkness {{ verb6 }} them.<br>\
  //     In the Land of {{ properNoun1|capitalize }} where the {{ noun7|capitalize }}s {{ verb3 }}.',
  //   'wordTypes':{'nouns':7,'verbs':6, 'adjectives':2,'properNouns':1, 'numbers':3}
  // }];

  //-----Send word types to form ----//
  // var getWords = function(wordTypes){
  //   var types = {};
  //   for(var type in wordTypes){
  //     var group = [];
  //     for(var i = wordTypes[type]; i>0; i--){
  //       group.push(type.slice(0,type.length-1)+i);
  //     } types[type]=group;
  //   } return types;
  // };

  // $scope.wordTypes = wordTypes;
  // wordTypes.types = getWords(passages[0].wordTypes);
  // console.log(wordTypes);

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
  
})
.factory('wordTypes',function(){
  var wordTypes = {};
  wordTypes.types = {};
  return wordTypes;
})
//capitalize first letter of input word as needed
.filter('capitalize', function() {
  return function(input, scope) {
    if (input!==null){
      input = input.toLowerCase();
    }
    return input.substring(0,1).toUpperCase()+input.substring(1);
  };
});
