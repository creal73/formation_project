(function () {

  'use strict';

  angular
    .module('webServices')
    .factory('cellarService', cellarService);

  function cellarService(restService) {

    /*
     * Constants
     */

    var ROUTES = {
      cellars: '/cellars'
    };

    /*
     * Public interface
     */

    var service = {};

    service.getCellars = function () {
      return restService
        .get(ROUTES.cellars, null, true);
    };

    return service;

  }

})();
