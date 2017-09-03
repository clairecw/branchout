function sendPasswordReset() {
      var email = document.getElementById('email').value;
      // [START sendpasswordemail]
      firebase.auth().sendPasswordResetEmail(email).then(function() {
        // Password Reset Email Sent!
        // [START_EXCLUDE]
        alert('Password Reset Email Sent!');
        // [END_EXCLUDE]
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/invalid-email') {
          alert(errorMessage);
        } else if (errorCode == 'auth/user-not-found') {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
      // [END sendpasswordemail];
}

function toggleSignOut() {
  if (firebase.auth().currentUser) {
    // [START signout]
    firebase.auth().signOut();
    // [END signout]
  }
}


function initApp() {
  var database = firebase.database();
  var userId = "";
  var postlist = [];

  firebase.auth().onAuthStateChanged(function(user) {
        // [START_EXCLUDE silent]
        // [END_EXCLUDE]
    if (user) {
            // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      userId = user.uid;
      var providerData = user.providerData;
      var recruiter = false;

      if (localStorage.getItem("map") != null) {
        var map = JSON.parse(localStorage.getItem("map"));
        if (map != null) { 
          database.ref('/users/' + userId).set(map);
          localStorage.removeItem("map");
        }
      }

      database.ref('/users/' + userId).once('value').then(function(snapshot) {
        var firstname = snapshot.val().firstName;
        document.getElementById('name').innerHTML = "Hello, " + firstname + ".";

        var profpic = snapshot.val().profPic;
        if (profpic != null) document.getElementById("avatar").src = profpic;


        recruiter = snapshot.val().recruiter;
        if (recruiter) {
          var followinglist = snapshot.val().following;
          for (count = 0; count < followinglist.length; count++) {

            const u = followinglist[count];
            
            if (count == 0) {
              database.ref('/users/' + u).once('value').then(function(snapshot1) {
                var fn = snapshot1.val().firstName;
                var ln = snapshot1.val().lastName;
                document.getElementById("followingname").innerHTML = fn + " " + ln;
              });

              database.ref('/users/' + u + '/files').once('value').then(function(snapshot2) {
                snapshot2.forEach(function(childSnapshot) {
                  var childKey = childSnapshot.key;
                  database.ref('/users/' + u + '/files/' + childKey).once('value').then(function(snapshott) {
                    var url = snapshott.val().url;
                    postlist.push(url);

                    var imgdiv = document.getElementById('pic');
                    imgdiv.src = postlist[0];

                    if (postlist.length > 1) {
                      var div = document.getElementById('post');
                      var clone = div.cloneNode(false);

                      var adiv = document.getElementById('squmb');
                      var aclone = adiv.cloneNode(false);

                      imgdiv = document.getElementById('pic');
                      var imgclone = imgdiv.cloneNode(true);
                      imgclone.src = url;
                      aclone.appendChild(imgclone);
                      clone.appendChild(aclone);
                      var target = document.getElementById("gallery");
                      target.appendChild(clone);
                    }
                  });
                });
              });
            }
            else {
              var gallery = document.getElementById('gallery');
              var galleryclone = gallery.cloneNode(false);

              var div = document.getElementById('followingname');
              var nameclone = div.cloneNode(true);
              nameclone.id = "name" + u;
              database.ref('/users/' + u).once('value').then(function(snapshot1) {
                var fn = snapshot1.val().firstName;
                var ln = snapshot1.val().lastName;
                document.getElementById("name" + u).innerHTML = "<hr>" + fn + " " + ln;
              });
              galleryclone.appendChild(nameclone);
              galleryclone.id = u;
              document.body.appendChild(galleryclone);  

              database.ref('/users/' + u + '/files').once('value').then(function(snapshot2) {
                snapshot2.forEach(function(childSnapshot) {
                  var childKey = childSnapshot.key;
                  database.ref('/users/' + u + '/files/' + childKey).once('value').then(function(snapshott) {
                    var url = snapshott.val().url;
                    postlist.push(url);
                    var div = document.getElementById('post');
                    var clone = div.cloneNode(false);

                    var adiv = document.getElementById('squmb');
                    var aclone = adiv.cloneNode(false);

                    imgdiv = document.getElementById('pic');
                    var imgclone = imgdiv.cloneNode(true);
                    imgclone.src = url;
                    aclone.appendChild(imgclone);
                    clone.appendChild(aclone);
                    document.getElementById(u).appendChild(clone);
                  });
                });
              });
            }
          }
          var button = document.getElementById("button");
          button.innerHTML = "<a href=\"search.html\" class=\"btn btn-primary btn-xl\">+ Add students</a>";
          return;
        }
      });

      database.ref('/users/' + userId + '/files').once('value').then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var childKey = childSnapshot.key;
          database.ref('/users/' + userId + '/files/' + childKey).once('value').then(function(snapshott) {
            var url = snapshott.val().url;
            if (postlist.indexOf(url) == -1) postlist.push(url);
            var imgdiv = document.getElementById('pic');
            imgdiv.src = postlist[0];

            if (postlist.length > 1) {
              var div = document.getElementById('post');
              clone = div.cloneNode(false);

              var adiv = document.getElementById('squmb');
              aclone = adiv.cloneNode(false);

              imgdiv = document.getElementById('pic');
              imgclone = imgdiv.cloneNode(true);
              imgclone.src = url;
              aclone.appendChild(imgclone);
              clone.appendChild(aclone);
              var target = document.getElementById("gallery");
              target.appendChild(clone);
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
  document.body.addEventListener('click', print, false);
}

window.onload = function() {
  initApp();
};