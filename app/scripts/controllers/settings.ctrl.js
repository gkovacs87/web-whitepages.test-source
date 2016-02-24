'use strict';
(function() {

  /*
   * @name SettingsController
   * @desc Controller of the Settings page
   */
  var SettingsController;
  SettingsController = function(Settings) {

    /*
     * @name initialize
     * @desc Initialize SettingsController
     */
    this.initialize = (function(_this) {
      return function() {
        _this.timeout = Settings.timeout;
        return _this.apiKeys = Settings.apiKeys;
      };
    })(this);

    /*
     * @name save
     * @desc Save the settings values to local storage
     */
    this.save = (function(_this) {
      return function() {
        Settings.saveTimeout(_this.timeout);
        return Settings.saveApiKeys(_this.apiKeys);
      };
    })(this);
    this.initialize();
  };
  SettingsController.$inject = ['Settings'];
  return angular.module('app').controller('SettingsController', SettingsController);
})();
