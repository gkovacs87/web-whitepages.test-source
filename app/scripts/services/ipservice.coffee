(->
  ###
  # @name IPService
  # @desc Handles IP info requests
  ###
  IPService = ($http, Settings)->

    ###
    # @name lookup
    # @desc Search for the IP address on ipinfo.io
    # @param {String} ipAddress The IP address
    # @param {Function} callback The callback
    ###
    @lookup = (ipAddress, callback)->
      $http
        method: 'GET',
        url: "http://ipinfo.io/#{ipAddress}",
        timeout: Settings.timeout
      .then (response)=>
        callback(false, response)
      , (error)=>
        callback(true, error)

    return

  IPService
    .$inject = ['$http', 'Settings']

  angular
    .module('app')
    .service('IPService', IPService);

)()