function signOut(){
    firebase.auth().signOut().then(function() {
      localStorage.clear()
      window.location.href = '../home/homepage.html';
    }, function(error) {
      console.error('Sign Out Error', error);
    });
  }