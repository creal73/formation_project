(function() {

  'use strict';

  angular
    .module('uiComponents')
    .directive('bottleDirective', bottleDirective);

  function bottleDirective() {
    return {
      restrict: 'A',
      templateUrl: 'modules/ui-components/bottle-directive/bottle.directive.html',
      scope: {
        bottles: '=bottleDirective',
        displayTrashButton: '=',
        trashAction: '='
      }
    };
  }

})();
