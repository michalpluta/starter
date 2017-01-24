class HomeService {
    constructor($http) {
        console.log('HomeService');
        this.$http = $http;
    }

    getPost(){
      return this.$http.get('http://jsonplaceholder.typicode.com/posts/1')
        .then(this.handleSuccess, this.handleError);
    }


    getPosts(){
        return this.$http.get('http://jsonplaceholder.typicode.com/posts')
            .then(this.handleSuccess, this.handleError);
    }

    savePost(data){
        return this.$http.post('http://jsonplaceholder.typicode.com/posts', data)
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
