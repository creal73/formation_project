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

    init();

    /*
     * Internal
     */

    /**
     * Init controller.
     */
    function init() {
      logger.log('init');

      vm.cellars = cellarService.getCellars();

      vm.isLoading = false;
    }

  }

})();
