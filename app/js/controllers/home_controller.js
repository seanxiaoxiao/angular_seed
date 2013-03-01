/**
 * Created with IntelliJ IDEA.
 * User: xiaoxiao
 * Date: 2/27/13
 * Time: 9:22 PM
 * To change this template use File | Settings | File Templates.
 */

var authClient = new FirebaseAuthClient(Banter.forums, function(error, user) {
    if (error) {
        // an error occurred while attempting login
        console.log(error);
    } else if (user) {
        // user authenticated with Firebase
        console.log('User ID: ' + user.id + ', Provider: ' + user.provider);
    } else {
        // user is logged out
    }
});

authClient.login('facebook', {
    rememberMe: true,
    scope: 'email,user_likes'
});

function HomeController($scope, $timeout) {

    authClient.login('facebook', {
        rememberMe: true,
        scope: 'email,user_likes'
    });

    Banter.forums.on('value', function(snapshot) {
        $timeout(function() {
            $scope.forums = snapshot.val();
        }, 0);
    });

    $scope.createForum = function() {

        Banter.forums.push({name: $scope.name});
        $scope.name = '';
    };

    $scope.deleteForum = function(id) {
        console.log();

        var obj = Banter.forums.get(id);
        obj.remove();
    };
}

HomeController.$inject = ['$scope', '$timeout'];
