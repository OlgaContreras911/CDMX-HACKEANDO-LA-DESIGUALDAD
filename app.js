
//NAV
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
  });

  // Initialize collapsible (uncomment the lines below if you use the dropdown variation)
  // var collapsibleElem = document.querySelector('.collapsible');
  // var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);
  //test

  const InGoogle = () => {
    if (!firebase.auth().currentUser){

        var provider = new firebase.auth.GoogleAuthProvider();
        //provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        provider.addScope('https://www.googleapis.com/auth/plus.login');

        //firebase.auth().signInWithRedirect(provider);
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
            console.log(user);
            
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ....
            if(errorCode === 'auth/account-exists-with-different-credential'){
            alert ('Es el mismo usuario');

            }

          });

        } else {
            firebase.auth().signOut();
        }
      
    }

  document.getElementById('in-google').addEventListener('click', InGoogle, false);

  const InFacebook = () => {
    if (!firebase.auth().currentUser){

        var provider = new firebase.auth.FacebookAuthProvider();
        //provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        //provider.addScope('https://www.googleapis.com/auth/plus.login');

        //firebase.auth().signInWithRedirect(provider);
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
            console.log(user);
            
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ....
            if(errorCode === 'auth/account-exists-with-different-credential'){
            alert ('Es el mismo usuario');

            }

          });

        } else {
            firebase.auth().signOut();
        }
      
    }

  document.getElementById('in-facebook').addEventListener('click', InFacebook, false);
