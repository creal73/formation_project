(function () {

  'use strict';

  angular
    .module('webServices')
    .factory('bottleService', bottleService);

  function bottleService(restService) {

    /*
     * Constants
     */

    var ROUTES = {
      bottle: '/bottle'
    };

    /*
     * Public interface
     */

    var service = {};

    /**
     * Create a new bottle
     * @param {number} cellarId
     * @param {object} newBottle
     */
    service.addBottle = function (cellarId, newBottle) {

      if (!newBottle) {
        throw 'bottleService.addBottle: newBottle must be defined';
      }

      return restService
        .post(ROUTES.bottle,
        {
          cellarId: cellarId,
          name: newBottle.name,
          price: newBottle.price
        });
    };

    service.deleteBottle = function (bottleId) {

      if (!bottleId && bottleId !== 0) {
        throw 'bottleService.deleteBottle: bottleId must be defined';
      }

      return restService.delete(ROUTES.bottle + '/' + bottleId);
    };

    return service;
  }

})();
