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
     * @param cellarId
     * @param newBottle
     */
    service.addBottle = function (cellarId, newBottle) {

      if (!newBottle) {
        throw 'bottleService.addBottle: newBottle must be defined';
      }

      return restService
        .post(ROUTES.bottle, {
          cellarId: cellarId,
          name: newBottle.name,
          price: newBottle.price
        });
    };

    return service;
  }

})();
