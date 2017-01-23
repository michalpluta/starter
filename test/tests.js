describe("test",function(){
    it("should be true",function(){
        expect(true).toBe(true);
    });
});

describe('Practice on HomeController', function() {

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

    // Właściwe testy

    it('Home Controller powinien być widoczny', function() {
        expect(HomeController).toBeDefined();
    });

    it('metoda w serwisie powinna zostać wywołana', function () {
        var spy = spyOn(HomeService, 'getPosts').and.callThrough();
        expect(HomeService).toBeDefined();
        expect(spy);
    });

    it("Should say hello", function() {
        expect(HomeController.message).toBe("Hello");
    });

    it("Should start function after immediately", function() {
        var spy = spyOn(HomeController, 'getPosts').and.callThrough();
        expect(HomeController).toBeDefined();
        expect(spy);
    });

});

// describe("reddit api service", function () {
//     var HomeService, httpBackend;
//
//     beforeEach(module('ui.router'));
//     beforeEach(module("app.home"));
//
//     beforeEach(inject(function (_HomeService_, $httpBackend) {
//         HomeService = _HomeService_;
//         httpBackend = $httpBackend;
//     }));
//
//     it("should do something", function () {
//         httpBackend.whenGET("http://api.reddit.com/user/yoitsnate/submitted.json").respond({
//             data: {
//                 children: [
//                     {
//                         data: {
//                             subreddit: "golang"
//                         }
//                     },
//                     {
//                         data: {
//                             subreddit: "javascript"
//                         }
//                     },
//                     {
//                         data: {
//                             subreddit: "golang"
//                         }
//                     },
//                     {
//                         data: {
//                             subreddit: "javascript"
//                         }
//                     }
//                 ]
//             }
//         });
//         HomeService.getPosts().then(function(result) {
//             expect(result).toEqual(["golang", "javascript"]);
//         });
//         httpBackend.flush();
//     });
//
// });