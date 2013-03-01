/**
 * Created with JetBrains WebStorm.
 * User: xiaoxiao
 * Date: 2/28/13
 * Time: 11:20 PM
 * To change this template use File | Settings | File Templates.
 */
'use strict';

/* Controllers */

var Banter = Banter || {};

Banter.createForum = function() {

}

Banter.updateForum = function() {

}

Banter.deleteForum = function() {

}

function ForumController($scope, $routeParams, $timeout, $location) {
    var forum = Banter.forums.get($routeParams.forumId);
    $scope.forumId = $routeParams.forumId;

    forum.on('value', function(snapshot) {
        $timeout(function() {
            $scope.forum = snapshot.val();
        }, 0);
    });

    $scope.toEditForum = function(forumId) {
        $location.path("/forum/" + forumId + "/edit/");
    };
}

function ForumEditController($scope, $routeParams, $timeout, $location) {
    var forum = Banter.forums.get($routeParams.forumId);
    var forumId = $routeParams.forumId;
    $scope.forumId = forumId;

    forum.on('value', function(snapshot) {
        $timeout(function() {
            $scope.forum = snapshot.val();
        }, 0);
    });

    $scope.updateForum = function() {
        forum.update({name: $scope.name});
        $location.path("/forum/" + forumId);
    }
}



