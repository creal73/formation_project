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
      cellar: '/cellar'
    };

    /*
     * Public interface
     */

    var service = {};

    /**
     * Gets the list of cellars
     * @returns {*}
     */
    service.getCellar = function () {
      return restService
        .get(ROUTES.cellar, null, false);
    };

    /**
     * Create a new cellar
     * @param newCellar
     */
    service.addCellar = function (newCellar) {
      return restService
        .post(ROUTES.cellar, newCellar);
    };

    return service;

  }

})();
