(function () {

  'use strict';

  angular
    .module('cellar')
    .controller('cellarController', CellarController);

  /**
   * Displays the cellar screen.
   * @constructor
   */
  function CellarController(logger,
                            cellarService) {

    logger = logger.getLogger('cellar');

    /*
     * View model
     */

    var vm = this;

    vm.isLoading = true;
    vm.cellars = [];
    vm.newCellar = {};

    vm.addCellar = function (newCellar) {
      cellarService.addCellar(angular.copy(newCellar)).then(function () {
        init();
        vm.newCellar = {};
      });
    };

    vm.deleteCellar = function (cellarId) {
      cellarService.deleteCellar(cellarId).then(function () {
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

      cellarService.getCellars().then(function (response) {
        vm.cellars = angular.copy(response.data);
      });

      vm.isLoading = false;
    }

  }

})();
