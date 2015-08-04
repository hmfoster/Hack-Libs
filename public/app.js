angular.module('hackLibsApp', ['hackLibsApp.passage','ui.router','hackLibsApp.form'])

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

});

// , function($sceProvider){
//      $sceProvider.enabled(false);
//    }