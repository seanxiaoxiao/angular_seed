/**
 * Created with IntelliJ IDEA.
 * User: xiaoxiao
 * Date: 3/1/13
 * Time: 4:34 PM
 * To change this template use File | Settings | File Templates.
 */



function AuthController($scope, $cookieStore) {
    var authClient = new FirebaseAuthClient(Banter.forums, function(error, user) {
        if (error) {
            // an error occurred while attempting login
            console.log(error);
        } else if (user) {
            // user authenticated with Firebase
            $cookieStore.put('user', user);
            console.log(user);
        } else {
            $cookieStore.remove('user');

        }
    });

    var currentUser = $cookieStore.get('user');
    if (!currentUser) {
        authClient.login('facebook', {
            rememberMe: true,
            scope: 'email,user_likes'
        });
    }

    $scope.logOut = function() {
        authClient.logout();
    }
}
