(function() {
	app.factory('UsersFact', ['$resource', function($resource) {
        return $resource('http://localhost/iscoolappserver/api/schools/users/:id', {},
          {
            get : {method: 'GET'},
            update: {
                method: 'PUT',
                params: {id: '@id'},
                interceptor: {
                    response: function(response) {      
                        var result = response.resource;        
                        result.$status = response.status;
                        return result;
                    }
                }
            },
            query: {method: 'GET', isArray: true}
          });
    }])
})()