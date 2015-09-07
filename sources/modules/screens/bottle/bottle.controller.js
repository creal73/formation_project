(function () {

  'use strict';

  angular
    .module('bottle')
    .controller('bottleController', BottleController);

  function BottleController(logger,
                            $stateParams,
                            cellarService,
                            bottleService) {

    logger = logger.getLogger('bottle');

    /*
     * View model
     */

    var vm = this;

    vm.isLoading = true;
    vm.cellar = {};
    vm.newBottle = {};

    vm.addBottle = function (newBottle) {
      bottleService.addBottle($stateParams.cellarId, newBottle).then(function () {
        init();
      });
    };

    init();

    /*
     * Internal
     */

    /**
     * Init controller.
     */
    function init() {
      logger.log('init');

      cellarService.getCellar($stateParams.cellarId).then(function (response) {
        vm.cellar = angular.copy(response.data);
      });

      vm.isLoading = false;
    }
  }

})();
