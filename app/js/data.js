/**
 * Created with IntelliJ IDEA.
 * User: xiaoxiao
 * Date: 2/27/13
 * Time: 7:38 PM
 * To change this template use File | Settings | File Templates.
 */


var Banter = Banter || {};

Banter.data = new Firebase("https://sean-firebase.firebaseio.com");
Banter.forums = new Firebase("https://sean-firebase.firebaseio.com/forums");
Banter.users = new Firebase("https://sean-firebase.firebaseio.com/users");

var Model = function() {

}



Banter.forums.get = function(id) {
  return new Firebase("https://sean-firebase.firebaseio.com/forums/" + id);
};
