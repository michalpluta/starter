class HomeController {
  constructor($scope, HomeService) {
    console.log('HomeController');
    this.HomeService = HomeService;
    this.message = 'Hello';

    this.getPosts();
  }

  getPosts(){
    this.HomeService.getPosts()
      .then((response) =>{
      this.posts = response;
      console.log(this.posts);
      });
  }
}


export default HomeController;
