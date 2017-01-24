describe('HomeController - testowanie controllera', function() {

    //Konfiguracja

    var HomeService ,HomeController, scope;

    //Funkcje wywoałane zanim przed przystąpieniem do testów

    beforeEach(module('ui.router'));
    beforeEach(module('app.home'));
    beforeEach(inject(function ($controller, $rootScope, _HomeService_, _$httpBackend_) {
        HomeService = _HomeService_;
        $httpBackend = _$httpBackend_;
        scope = $rootScope.$new();
        HomeController = $controller('HomeController', {
            HomeService: HomeService,
            $scope: scope
        });
    }));

    // Właściwe testy controllera

    it("wykonanie żądania AJAX", function () {
        $httpBackend.verifyNoOutstandingExpectation();
    });

    it('Home Controller powinien być widoczny', function() {
        expect(HomeController).toBeDefined();
    });

    it('Metoda w serwisie powinna zostać wywołana', function () {
        var spy = spyOn(HomeService, 'getPosts').and.callThrough();
        expect(HomeService).toBeDefined();
        expect(spy);
    });

    it("Powinien zwrócić 'Hello'", function() {
        expect(HomeController.message).toBe("Hello");
    });

    it("Powinien odpalić funkcję przy starcie controllera", function() {
        var spy = spyOn(HomeController, 'getPosts').and.callThrough();
        expect(HomeController).toBeDefined();
        expect(spy);
    });

});
