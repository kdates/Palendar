
// get the fields from page
var userNameDisplay = document.getElementById('userNameDisplay')
var emailDisplay = document.getElementById('emailDisplay')
var fName = document.getElementById('fName')
var lName = document.getElementById('lName')
var uName = document.getElementById('uName')
var email = document.getElementById('email')
var img = document.getElementById('curpfp')
var image = document.getElementById('url')
var currentUser;

// fetch current user data from database and update UI with user information
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
    // get user from database
    currentUser = user.uid
    database.ref('users/'+ user.uid).on('value',
    function(user){
        userNameDisplay.innerHTML = user.val().userName
        emailDisplay.innerHTML = user.val().email
        fName.value = user.val().firstName
        lName.value = user.val().lastName
        uName.value = user.val().userName
        email.value = user.val().email
        img.src = user.val().photoURL
        image.value = user.val().photoURL

        theme = user.val().theme
        
      })
      
    } 
  });
  
color = localStorage.getItem('theme')
themebutton(color)
  
  

//update changed fields in the database
function onUpdate(){
    var database_ref = database.ref()
  
    // Create User data
    var user_data = {
        email : document.getElementById('email').value,
        firstName: document.getElementById('fName').value,
        lastName: document.getElementById('lName').value,
        userName: document.getElementById('uName').value,
        photoURL: document.getElementById('url').value,
        theme: document.getElementById('themeselect').value
    }
    localStorage.setItem('theme', user_data.theme);
    // Push to Firebase Database
    database_ref.child('users/' + currentUser).update(user_data)
    // DOne
    window.location.href = '../settings/settings.html'
}

function themebutton(color){
  document.getElementById('rowColor').classList.add(color);
  document.getElementById('nameColor').classList.add(color);
  document.getElementById('uColor').classList.add(color);
  if(color == 'Black'){
    document.getElementById('rowColor').style.color = "White";
    document.getElementById("navid").classList.add('nav-bg');
    document.body.style.backgroundColor = "#15202B";
  } else if(color == 'White'){
    console.log("white")
    document.getElementById('rowColor').style.color = "Black";
    document.getElementById("navid").classList.add('Black');
    document.body.style.backgroundColor = "white";
  } else{
    console.log("grey")
    document.body.style.backgroundColor = "#98a3a2";
  }

};