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
    service.getCellars = function () {
      return restService
        .get(ROUTES.cellar, null, false);
    };

    /**
     * Create a new cellar
     * @param {Object} newCellar
     */
    service.addCellar = function (newCellar) {
      return restService
        .post(ROUTES.cellar, newCellar);
    };

    /**
     * Gets the cellar from the given id
     * @param {number} cellarId The id of the cellar to get
     * @returns {*}
     */
    service.getCellar = function (cellarId) {

      if (!cellarId) {
        throw 'cellarService.getCellar: cellarId must be defined';
      }

      return restService.get(ROUTES.cellar + '/' + cellarId);
    };

    return service;
  }

})();
