angular.module('hackLibsApp.passage', [])

.controller('PassageController', function ($scope, $interpolate, $sce) {
  // Your code here
  var passages = [{
    'title':'One {{ noun1|capitalize }} To {{ verb1|capitalize }} Them All',
    'passage': '{{ number1|capitalize }} {{ noun1 }}s for the Elven-{{ noun2 }}s under the {{ noun3 }},<br>\
  {{ number2|capitalize }} for the Dwarf-{{ noun4 }}s in halls of {{ noun5 }},<br>\
  {{ number3|capitalize }} for {{ adjective1|capitalize }} Men, doomed to {{ verb2 }},<br>\
  One for the {{ adjective2|capitalize }} Lord on his {{ adjective2 }}  {{ noun6 }}<br>\
  In the Land of {{ properNoun1|capitalize }} where the {{ noun7|capitalize }}s {{ verb3 }}.<br>\
  One {{ noun1|capitalize }} to {{ verb1 }} them all, One {{ noun1|capitalize }} to {{ verb4 }} them,<br>\
  One {{ noun1|capitalize }} to {{ verb5 }} them all and in the darkness {{ verb6 }} them.<br>\
    In the Land of {{ properNoun1|capitalize }} where the {{ noun7|capitalize }}s {{ verb3 }}.',
    'words':{'nouns':{'noun1':'cat', 
        'noun2':'dog',
        'noun3':'dog',
        'noun4':'dog',
        'noun5':'dog',
        'noun6':'dog',
        'noun7':'dog'},
      'verbs':{'verb1':'run',
        'verb2':'run',
        'verb3':'run',
        'verb4':'run',
        'verb5':'run',
        'verb6':'run',},
      'numbers':{'number1':'one',
        'number2':'two',
        'number3':'two',},
      'adjectives':{'adjective1':'happy',
        'adjective2':'sad',},
      'properNouns':{'properNoun1':'Luna'}
    }
  }];
  
  var wordExtract = function(words){
    var wordArr = {};
    for(var wordType in words){
      for(var word in words[wordType]){
        wordArr[word]=words[wordType][word];
      }
    } 
    console.log(wordArr);
    return wordArr;
  };

  var words = wordExtract(passages[0].words);
  $scope.title = $interpolate(passages[0].title)(words);
  $scope.passage = $sce.trustAsHtml($interpolate(passages[0].passage)(words));
  
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

//words.noun1|capitalize
//words.verb1|capitalize
