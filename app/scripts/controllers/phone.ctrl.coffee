'use strict'

(->
  ###
  # @name PhoneController
  # @desc Controller to handle Phone API Services
  ###
  PhoneController = (ApiConfig, Settings, $httpParamSerializer)->

    ###
    # @name initialize
    # @desc Initialize PhoneController
    ###
    @initialize = ()=>
      #Load phone configuration, and settings
      @config = ApiConfig['phone_solutions']
      @settings = Settings

      #Set initial value to the queryString and httpParams values
      for solution in @config
        solution.httpParams = {api_key:Settings.apiKey}
        solution.queryString = $httpParamSerializer(solution.httpParams)

    ###
    # @name updateQueryString
    # @desc Updates the query string when the input changed
    ###
    @updateQueryString = (solution)=>
      solution.queryString = $httpParamSerializer(solution.httpParams)

    @initialize()
    return

  PhoneController
    .$inject = ['ApiConfig', 'Settings', '$httpParamSerializer']

  angular
    .module('app')
    .controller('PhoneController', PhoneController)
)()