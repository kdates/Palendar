//get the fields of the user Info
var userNameDisplay = document.getElementById('userNameDisplay')
var emailDisplay = document.getElementById('emailDisplay')
var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');
var userName = document.getElementById('userName');
var email = document.getElementById('email');
var img = document.getElementById('curpfp')
var theme = document.getElementById('theme')
// fetch current user data from database and update UI with user information
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
    // get user from database
      database.ref('users/'+ user.uid).on('value',
      function(user){
        userNameDisplay.innerHTML = user.val().userName
        emailDisplay.innerHTML = user.val().email
        firstName.value = user.val().firstName
        lastName.value = user.val().lastName
        userName.value = user.val().userName
        email.value = user.val().email
        img.src = user.val().photoURL
        theme.value = user.val().theme

        theme = user.val().theme
        
      })
      
    } 
  });

color = localStorage.getItem('theme')
console.log('color')
themebutton(color)

  function themebutton(color){
    document.getElementById('rowColor').classList.add(color);
    document.getElementById('nameColor').classList.add(color);
    document.getElementById('uColor').classList.add(color);
    if(color == 'Black'){

      document.getElementById('rowColor').style.color = "White";
      document.getElementById("navid").classList.add('nav-bg');
      document.body.style.backgroundColor = "#15202B";
    } else if(color == 'White'){
      document.getElementById('rowColor').style.color = "Black";
      document.getElementById("navid").classList.add('Black');
      document.body.style.backgroundColor = "white";
    } else{
      document.body.style.backgroundColor = "#98a3a2";
    }
  
  };

 