angular.module('hackLibsApp', ['hackLibsApp.passage','ui.router','hackLibsApp.form'])
.controller('AppController', function($scope){
  $scope.passages = [{
    'title':'One {{ noun1|capitalize }} To {{ verb1|capitalize }} Them All',
    'passage': '{{ number1|capitalize }} {{ noun1 }}s for the Elven-{{ noun2 }}s under the {{ noun3 }},<br>\
      {{ number2|capitalize }} for the Dwarf-{{ noun4 }}s in halls of {{ noun5 }},<br>\
      {{ number3|capitalize }} for {{ adjective1|capitalize }} Men, doomed to {{ verb2 }},<br>\
      One for the {{ adjective2|capitalize }} Lord on his {{ adjective2 }}  {{ noun6 }}<br>\
      In the Land of {{ properNoun1|capitalize }} where the {{ noun7|capitalize }}s {{ verb3 }}.<br>\
      One {{ noun1|capitalize }} to {{ verb1 }} them all, One {{ noun1|capitalize }} to {{ verb4 }} them,<br>\
      One {{ noun1|capitalize }} to {{ verb5 }} them all and in the darkness {{ verb6 }} them.<br>\
      In the Land of {{ properNoun1|capitalize }} where the {{ noun7|capitalize }}s {{ verb3 }}.',
    'wordTypes':{'nouns':7,'verbs':6, 'adjectives':2,'proper nouns':1, 'numbers':3}
  }];
  var getWords = function(wordTypes){
    var types = {};
    for(var type in wordTypes){
      var group = [];
      for(var i = wordTypes[type]; i>0; i--){
        group.push(type.slice(0,type.length-1)+i);
      } types[type]=group;
    } return types;
  };
  $scope.wordTypes = getWords($scope.passages[0].wordTypes);

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
    if (input!==null){
      input = input.toLowerCase();
    }
    return input.substring(0,1).toUpperCase()+input.substring(1);
  };
});
