/**
 * Created with IntelliJ IDEA.
 * User: xiaoxiao
 * Date: 2/27/13
 * Time: 9:22 PM
 * To change this template use File | Settings | File Templates.
 */


function HomeController($scope, $timeout) {

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
