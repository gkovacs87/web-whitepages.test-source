(->
  ###
  # @name Settings
  # @desc Handles the application settings like api keys, urls
  ###
  Settings = ()->

    return {
      apiKey: "23434"
      baseUrl: "https://proapi.whitepages.com"
    }

  angular
  .module('app')
  .factory('Settings', Settings);

)()