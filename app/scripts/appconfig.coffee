'use strict'

(->
  ###
  # @name AppConfig
  # @desc Handles the Routing and LocalStorage Settings
  ###
  AppConfig = ($routeProvider, localStorageServiceProvider)->
    #Set LocalStorage prefix
    localStorageServiceProvider.setPrefix("whitepages_test")

    #Routing
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
      })
      .when('/settings', {
        templateUrl: 'templates/settings.html'
        controller: 'SettingsController as vm'
      })
      .otherwise({
        redirectTo: '/phone'
      })

  AppConfig
    .$inject = ['$routeProvider', 'localStorageServiceProvider']

  angular
    .module('app', ['ngRoute', 'ui.bootstrap', 'ui.bootstrap.tpls', 'LocalStorageModule'])
    .config(AppConfig)
)()