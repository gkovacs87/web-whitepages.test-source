'use strict';
(function() {

  /*
   * @name AppConfig
   * @desc Handles the Routing and LocalStorage Settings
   */
  var AppConfig;
  AppConfig = function($routeProvider, localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix("whitepages_test");
    return $routeProvider.when('/phone', {
      templateUrl: 'templates/phone.html',
      controller: 'PhoneController as vm'
    }).when('/identity', {
      templateUrl: 'templates/identity.html',
      controller: 'IdentityController as vm'
    }).when('/reputation', {
      templateUrl: 'templates/reputation.html',
      controller: 'ReputationController as vm'
    }).when('/settings', {
      templateUrl: 'templates/settings.html',
      controller: 'SettingsController as vm'
    }).otherwise({
      redirectTo: '/phone'
    });
  };
  AppConfig.$inject = ['$routeProvider', 'localStorageServiceProvider'];
  return angular.module('app', ['ngRoute', 'ui.bootstrap', 'ui.bootstrap.tpls', 'LocalStorageModule']).config(AppConfig);
})();
