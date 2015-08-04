angular.module('hackLibsApp.passage', [])

.controller('PassageController', function ($scope, $interpolate) {
  // Your code here
  var passages = [{
    'title':'One {{ noun1|capitalize }} To {{ verb1|capitalize }} Them All',
    'passage': '{{ number1|capitalize }} {{ noun1 }}s for the Elven-{{ noun2 }}s under the {{ noun3 }}, \
  {{ number2|capitalize }} for the Dwarf-{{ noun4 }}s in halls of {{ noun5 }}, \
  {{ number3|capitalize }} for {{ adjective1|capitalize }} Men, doomed to {{ verb2 }}, \
  One for the {{ adjective2|capitalize }} Lord on his {{ adjective2 }}  {{ noun6 }} \
  In the Land of {{ properNoun1|capitalize }} where the {{ noun7|capitalize }}s {{ verb3 }}. \
  One {{ noun1|capitalize }} to {{ verb1 }} them all, One {{ noun1|capitalize }} to {{ verb4 }} them, \
  One {{ noun1|capitalize }} to {{ verb5 }} them all and in the darkness {{ verb6 }} them. \
    In the Land of {{ properNoun1|capitalize }} where the {{ noun7|capitalize }}s {{ verb3 }}.',
    'words':{'noun1':'cat', 
    'noun2':'dog',
    'noun3':'dog',
    'noun4':'dog',
    'noun5':'dog',
    'noun6':'dog',
    'noun7':'dog',
    'verb1':'run',
    'verb2':'run',
    'verb3':'run',
    'verb4':'run',
    'verb5':'run',
    'verb6':'run',
    'number1':'one',
    'number2':'two',
    'number3':'two',
    'adjective1':'happy',
    'adjective2':'sad',
    'properNoun1':'Luna'
  }, 
  }];
  $scope.title = $interpolate(passages[0].title)(passages[0].words);
  $scope.passage = $interpolate(passages[0].passage)(passages[0].words);

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
