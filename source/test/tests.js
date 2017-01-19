describe("test",function(){
    it("should be true",function(){
        expect(true).toBe(true);
    });
});

describe('HomeController', function() {

    var controller;
    var $scope;

    beforeEach(module('ui.router'));

    beforeEach(function() {

        module("app.home");

        inject(function(_$rootScope_, $controller) {

            $scope = _$rootScope_.$new();
            controller = $controller("HomeController", {$scope: $scope});

        });

    });

    it("Should say hello", function() {
        expect(controller.message).toBe("Hello");
    });
});