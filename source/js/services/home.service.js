class HomeService {
  constructor($http) {
    console.log('HomeService');
    this.$http = $http;
  }

  getPosts(){
      return this.$http.get('https://jsonplaceholder.typicode.com/posts')
        .then(this.handleSuccess, this.handleError);
  }

    handleSuccess(res) {
        console.log('Success!');
        return res.data;
    }
    handleError(res) {
        console.log('Failure!');
        return res.data;
    }
}


export default HomeService;
