(function() {

  /*
   * @name Settings
   * @desc Handles the application settings like api keys, urls
   */
  var Settings;
  Settings = function() {
    return {
      apiKey: "23434",
      baseUrl: "https://proapi.whitepages.com"
    };
  };
  return angular.module('app').factory('Settings', Settings);
})();
