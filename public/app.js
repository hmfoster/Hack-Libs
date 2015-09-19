angular.module('hackLibsApp', ['hackLibsApp.passage','ui.router','hackLibsApp.form'])
.controller('AppController', function($scope, $sce, $window, $location){
  var passages = [

  {
    'title':'One {{ noun1|capitalize }} To {{ verb1|capitalize }} Them All',
    'passage': '{{ number1|capitalize }} {{ noun1 }}s for the Elven-{{ noun2 }}s under the {{ noun3 }},<br>\
      {{ number2|capitalize }} for the Dwarf-{{ noun4 }}s in halls of {{ noun5 }},<br>\
      {{ number3|capitalize }} for {{ adjective1|capitalize }} Men, doomed to {{ verb2 }},<br>\
      One for the {{ adjective2|capitalize }} Lord on his {{ adjective2 }}  {{ noun6 }}<br>\
      In the Land of {{ properNoun1|capitalize }} where the {{ noun7|capitalize }}s {{ verb3 }}.<br>\
      One {{ noun1|capitalize }} to {{ verb1 }} them all, One {{ noun1|capitalize }} to {{ verb4 }} them,<br>\
      One {{ noun1|capitalize }} to {{ verb5 }} them all and in the darkness {{ verb6 }} them.<br>\
      In the Land of {{ properNoun1|capitalize }} where the {{ noun7|capitalize }}s {{ verb3 }}.',
    'wordTypes':{'nouns':7,'verbs':6, 'adjectives':2,'properNouns':1, 'numbers':3}
  },

  {
    'title':'{{ firstName1|capitalize }} {{ lastName1|capitalize }} Of {{ properNoun1|capitalize }}',
    'passage':'{{ firstName1|capitalize }} {{ lastName1|capitalize }} was {{ progressiveVerb1 }} \
    at his {{ noun1 }} after breakfast smoking a/n \
    {{ adverb1 }} {{ adjective1 }} wooden {{ noun2 }} that reached \
    nearly down to his {{ adjective2 }} {{ noun3 }} \
    ({{ adverb2 }} {{ pastTenseVerb1 }})— {{ firstName2|capitalize }} came by.',
    'wordTypes':{'firstNames': 2, 'lastNames': 1, 'properNouns': 1, 'pastTenseVerbs':1,'adverbs':2,'nouns':3,'adjectives':2,'progressiveVerbs':1}
  },

  {'title':'The {{ noun1|capitalize }} King',
  'passage':'In a {{ adjective1 }} {{ noun2 }} with {{ noun3 }}s hewn out of the \
  {{ adjective2 }} {{ noun4 }} sat the {{ adjective3|capitalize }}king on a \
  {{ noun5 }} of carven {{ noun6 }}. On his {{ bodyPart1 }} was a {{ noun7 }} of \
  {{ noun8 }}s and {{ adjective4 }} leaves, for the autumn was come again. \
  In the spring he wore a {{ noun7 }} of {{ adjective5 }} flowers. In his \
  {{ bodyPart2}} he held a carven {{ noun9 }} of oak',
  'wordTypes':{'nouns':9,'bodyParts':2, 'adjectives':5}
  }];

  var passagePicker = function(){
    return Math.floor(Math.random()*passages.length);
  };
  var getWords = function(wordTypes){
    var types = {};
    for(var type in wordTypes){
      var group = [];
      for (var i = 1; i <= wordTypes[type]; i++) {
        group.push(type.slice(0,type.length-1)+i);
      } 
      types[type] = group;

    } console.log(types);
    return types;
  };
  $scope.passage = passages[passagePicker()];
  $scope.wordTypes = getWords($scope.passage.wordTypes);

  $scope.newLib = function() {
    $window.location.reload();
    $location.path('/prompts');
  };

})
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/prompts');
  $stateProvider
    .state('prompts', {
      url:'/prompts',
      templateUrl: 'form/form.html',
      controller: 'FormController'
    })
    .state('passage', {
      url:'/passage',
      templateUrl: 'passage/passage.html',
      controller: 'PassageController'
    });
  }
])
.factory('wordData',function(){
  var words ={};
  return words;
})
.factory('wordTypes',function(){
  var types ={};
  return types;
})
.filter('capitalize', function() {
  return function(input, scope) {
    var result = input.replace( /([A-Z])/g, " $1" );
    var finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult;
  };
});
