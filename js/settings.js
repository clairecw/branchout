function sendPasswordReset() {
  var user = firebase.auth().currentUser;
  var email = "";
  var uid = "";  // check auth

  if (user != null) {
    email = user.email;
    uid = user.uid;
  }
  if (document.getElementById('passwordinput').value != localStorage.getItem("pass")) {
    alert("Incorrect password.");
  }
  else {
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
        });
  }
        
  
}

function submitChanges() {
  var database = firebase.database();
  var userId = "";
  var user = firebase.auth().currentUser;
  if (user != null) {
    userId = user.uid;
  }

  var selected = getSelectValues(document.getElementById('example-getting-started'));
  var desc = document.getElementById('description').value;

  var updatedtags = {};
  updatedtags["tags"] = selected;
  database.ref().child("users").child(userId).update(updatedtags);

  var updateddesc = {};
  updateddesc["description"] = desc;
  return database.ref().child("users").child(userId).update(updateddesc);
}

function uploadPic(url) {
  var database = firebase.database();
  var userId = "";
  var user = firebase.auth().currentUser;
  if (user != null) {
    userId = user.uid;
  }

  var updatedpic = {};
  updatedpic["profPic"] = url;
  return database.ref().child("users").child(userId).update(updatedpic);
}

function getSelectValues(select) {
  var result = [];
  var options = select && select.options;
  var opt;

  for (var i=0, iLen=options.length; i<iLen; i++) {
    opt = options[i];

    if (opt.selected) {
      result.push(opt.value || opt.text);
    }
  }
  return result;
}

function deleteAccount() {
  if (document.getElementById('delete-password').value != localStorage.getItem("pass")) {
    alert("Incorrect password.");
  }
  else {
    var user = firebase.auth().currentUser;

    user.delete().then(function() {
      alert("We're sorry to see you go. :(");
      window.location = "register.html";
    }, function(error) {
      alert("Error deleting user.");
    });
  }
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
  var taglist = [];

  firebase.auth().onAuthStateChanged(function(user) {
        // [START_EXCLUDE silent]
        // [END_EXCLUDE]
    if (user) {
            // User is signed in.
      userId = user.uid;
      var providerData = user.providerData;
      var recruiter = false;

      database.ref('/users/' + userId).once('value').then(function(snapshot) {

        var profpic = snapshot.val().profPic;
        if (profpic != null) document.getElementById("avatar").src = profpic;

        var desc = snapshot.val().description;
        var email = snapshot.val().email;
        taglist = snapshot.val().tags;

        if (taglist != null) {
          $('#example-getting-started').multiselect('select', taglist);
        }
        if (desc != null) document.getElementById("description").value = desc;

        var pass = snapshot.val().provider;
        localStorage.setItem("pass", pass);
        
      });

      
  } else {
    window.location = 'register.html';
  }
  });

  document.getElementById('sign-out').addEventListener('click', toggleSignOut, false);
  document.getElementById('resetbutton').addEventListener('click', sendPasswordReset, false);
  document.getElementById('submitbutton').addEventListener('click', submitChanges, false);
  document.getElementById('deletebutton').addEventListener('click', deleteAccount, false);
}

window.onload = function() {
  initApp();
};