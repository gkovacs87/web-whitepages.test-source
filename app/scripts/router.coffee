'use strict'

(->
  ###
  # @name Router
  # @desc Handles the routing of the application
  ###
  Router = ($routeProvider)->
    $routeProvider
      .when('/phone', {
        templateUrl: 'templates/phone.html'
        controller: 'PhoneController as vm'
      })
      .when('/identity', {
        templateUrl: 'templates/identity.html'
        controller: 'IdentityController as vm'
      })
      .when('/reputation', {
        templateUrl: 'templates/reputation.html'
        controller: 'ReputationController as vm'
      })
      .otherwise({
        redirectTo: '/identity'
      })

  angular
    .module('app', ['ngRoute', 'ui.bootstrap', 'ui.bootstrap.tpls'])
    .config(Router)
)()