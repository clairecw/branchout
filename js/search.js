function toggleSignOut() {
  if (firebase.auth().currentUser) {
    // [START signout]
    firebase.auth().signOut();
    // [END signout]
  }
}

function addUser() {
  var addId = localStorage.getItem("uid");
  var database = firebase.database();
  var userId = "";
  var user = firebase.auth().currentUser;
  if (user != null) {
    userId = user.uid;
  }

  database.ref('/users/' + userId).once('value').then(function(snapshot) {
    followinglist = snapshot.val().following;
    if (followinglist == null) followinglist = [];

    if (followinglist.indexOf(addId) == -1) followinglist.push(addId);
    var updatedtags = {};
    updatedtags["following"] = followinglist;
    database.ref().child("users").child(userId).update(updatedtags);

    var btn = document.getElementById('add-user');
    btn.disabled = true;
    btn.innerHTML = "added as counselee";
  });

}

function setUser(uid) {
  var database = firebase.database();
  localStorage.setItem("uid", uid);

  document.getElementById('user-gallery').innerHTML = "<img class=\"img-responsive\" id=\"user-pic\"/>";

  var user = firebase.auth().currentUser;
  var userId = "";
  if (user != null) {
    userId = user.uid;
  }

  database.ref('/users/' + userId).once('value').then(function(snapshot) {
    followinglist = snapshot.val().following;
    if (followinglist == null) followinglist = [];

    var btn = document.getElementById('add-user');
    if (followinglist.indexOf(uid) != -1) {
      btn.disabled = true;
      btn.innerHTML = "added as counselee";
    }
    else {
      btn.disabled = false;
      btn.innerHTML = "add as counselee";

    }

  });

  database.ref('/users/' + uid).once('value').then(function(snapshot) {
    document.getElementById('avatar').src = snapshot.val().profPic;
    document.getElementById('name').innerHTML = snapshot.val().firstName + " " + snapshot.val().lastName;
    document.getElementById('description').innerHTML = snapshot.val().description;

    var taglist = snapshot.val().tags;
    var tagstring = "";
    for (count = 0; count < taglist.length; count++) {
      tagstring += taglist[count];
      if (count < taglist.length - 1) tagstring += ", ";
    }
    document.getElementById('tags').innerHTML = tagstring;
  });

  var postlist = [];
  database.ref('/users/' + uid + '/files').once('value').then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childKey = childSnapshot.key;
      database.ref('/users/' + uid + '/files/' + childKey).once('value').then(function(snapshott) {
        var url = snapshott.val().url;
        postlist.push(url);
        var imgdiv = document.getElementById('user-pic');
        if (postlist.length == 1) {
          imgdiv.src = postlist[0];
        }
        else {
        //if (postlist.length > 1) {
          imgclone = imgdiv.cloneNode(true);
          imgclone.src = url;
          var target = document.getElementById("user-gallery");
          target.appendChild(imgclone);
        }
        //}
      });
    });
  });
}


function initApp() {
  var database = firebase.database();
  var userId = "";
  var userlist = [];

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {

      database.ref('/users/').once('value').then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var childKey = childSnapshot.key;
          database.ref('/users/' + childKey).once('value').then(function(snapshott) {
            if (!snapshott.val().recruiter) {
              var pp = snapshott.val().profPic;
              userlist.push(childKey);

              var imgdiv = document.getElementById('pic');

              if (userlist.length > 1) {
                var div = document.getElementById('post');
                clone = div.cloneNode(false);

                var adiv = document.getElementById('squmb');
                aclone = adiv.cloneNode(false);
                aclone.onclick = function() { setUser(childKey); };

                imgdiv = document.getElementById('pic');
                imgclone = imgdiv.cloneNode(true);
                imgclone.src = pp;
                aclone.appendChild(imgclone);
                clone.appendChild(aclone);
                var target = document.getElementById("gallery");
                target.appendChild(clone);
              }
              else {
                imgdiv.src = pp;
                document.getElementById('squmb').onclick = function() { setUser(childKey); };
              }
            }
          });
        });
      });

      
    } else {
      window.location = 'register.html';
    }
        // [END_EXCLUDE]
  });

  document.getElementById('sign-out').addEventListener('click', toggleSignOut, false);
  document.getElementById('add-user').addEventListener('click', addUser, false);
}

window.onload = function() {
  initApp();
};