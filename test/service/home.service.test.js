describe('HomeService - Testowanie serwisu', function(){

    beforeEach(module('ui.router'));
    beforeEach(module('app.home'));

    
    //getPost
    describe('when I call HomeService.getPost', function(){

        beforeEach(angular.mock.inject(function($httpBackend){
            var resp;
            $httpBackend.expectGET('http://jsonplaceholder.typicode.com/posts/1').respond([
                {
                    "userId": 1,
                    "id": 1,
                    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                }
            ]);
        }));


        it('zwraca jeden wpis', inject(function(HomeService, $httpBackend){
            HomeService.getPost('http://jsonplaceholder.typicode.com/posts/1').then(function(response){
                resp = response;
                console.log(resp.length);
            });
            $httpBackend.flush();

            expect(resp.length).toEqual(1);
        }));

        it('sprawdza poprawność pierwszego tutyłu', inject(function(HomeService, $httpBackend) {
            HomeService.getPost('http://jsonplaceholder.typicode.com/posts/1').then(function(response){
                resp = response[0];
                console.log(response[0].id);
            });
            $httpBackend.flush();

            expect(resp.title).toEqual("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
        }));
    });
    
    //getPosts
    describe('when I call HomeService.getPosts', function () {

        beforeEach(angular.mock.inject(function($httpBackend){
            var resp;
            var valid_respond = readJSON('json/getPosts.json');

            $httpBackend.expectGET('http://jsonplaceholder.typicode.com/posts').respond(valid_respond);

        }));


        it('zwraca 100 wpisów', inject(function(HomeService, $httpBackend){

            HomeService.getPosts('http://jsonplaceholder.typicode.com/posts').then(function(response){
                resp = response;
            });
            $httpBackend.flush();

            expect(resp.length).toEqual(100);
        }));
        
    });
});
