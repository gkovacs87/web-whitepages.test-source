'use strict'

(->
  ###
  # @name SettingsController
  # @desc Controller of the Settings page
  ###
  SettingsController = (Settings)->

    ###
    # @name initialize
    # @desc Initialize SettingsController
    ###
    @initialize = ()=>
      @timeout = Settings.timeout
      @apiKeys = Settings.apiKeys

    ###
    # @name save
    # @desc Save the settings values to local storage
    ###
    @save = ()=>
      Settings.saveTimeout(@timeout)
      Settings.saveApiKeys(@apiKeys)

    @initialize()
    return

  SettingsController
    .$inject = ['Settings']

  angular
    .module('app')
    .controller('SettingsController', SettingsController)
)()