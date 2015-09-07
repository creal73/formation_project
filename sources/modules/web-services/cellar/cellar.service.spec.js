'use strict';

describe('cellarService', function () {

  var $q;
  var restService;
  var cellarService;

  beforeEach(function () {
    module('webServices');

    inject(function (_$q_,
                     _cellarService_,
                     _restService_) {

      $q = _$q_;
      cellarService = _cellarService_;
      restService = _restService_;
    });

    spyOn(restService, 'get').and.callFake(function () {
      var deferred = $q.defer();
      deferred.resolve({});
      return deferred.promise;
    });

    spyOn(restService, 'post').and.callFake(function () {
      var deferred = $q.defer();
      deferred.resolve({});
      return deferred.promise;
    });

    spyOn(restService, 'delete').and.callFake(function () {
      var deferred = $q.defer();
      deferred.resolve({});
      return deferred.promise;
    });
  });

  it('should have a getCellar method', function () {
    expect(typeof (cellarService.getCellar)).toBe('function');
  });

  describe('getCellar', function () {

    it('should call rest service get method', function () {
      // Act
      cellarService.getCellar();

      // Assert
      expect(restService.get).toHaveBeenCalled();
    });

  });

  it('should have a addCellar method', function () {
    expect(typeof (cellarService.addCellar)).toBe('function');
  });

  describe('addCellar', function () {

    it('should call rest service post method', function () {
      // Act
      cellarService.addCellar({name: 'cellar'});

      // Assert
      expect(restService.post).toHaveBeenCalledWith('/cellar', {name: 'cellar'});

    });
  });
});
