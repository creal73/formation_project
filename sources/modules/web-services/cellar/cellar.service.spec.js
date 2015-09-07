'use strict';

describe('cellarService', function () {

  var $q;
  var restService;
  var cellarService;

  beforeEach(function() {
    module('webServices');

    inject(function(_$q_,
                    _cellarService_,
                    _restService_) {

      $q = _$q_;
      cellarService = _cellarService_;
      restService = _restService_;
    });

    spyOn(restService, 'get').and.callFake(function() {
      var deferred = $q.defer();
      deferred.resolve({});
      return deferred.promise;
    });
  });

  it('should have a getCellars method', function() {
    expect(typeof (cellarService.getCellars)).toBe('function');
  });

  describe('getCellars', function() {

    it('should call rest service get method', function() {
      // Act
      cellarService.getCellars();

      // Assert
      expect(restService.get).toHaveBeenCalled();
    });

  });

});
