  document.body.style.backgroundColor = "rgb(152, 163, 162)";
  
  // Set up our register function
  function register () {
    // Get all our input fields
    email = document.getElementById('emailRegister').value
    password = document.getElementById('passwordRegister').value
    firstName = document.getElementById('first_name').value
    lastName = document.getElementById('last_name').value
    userName = document.getElementById('user_name').value
    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Email or Password is Outta Line!!')
      return
      // Don't continue running the code
    }
    if (validate_field(firstName) == false || validate_field(lastName) == false || validate_field(userName) == false) {
      alert('Name Field is Outta Line!!')
      return
    }
   
    // Move on with Auth
    auth.createUserWithEmailAndPassword(email, password)
    .then(function() {
      // Declare user variable
      var user = auth.currentUser
  
      // Add this user to Firebase Database
      var database_ref = database.ref()
  
      // Create User data
      var user_data = {
        email : email,
        firstName : firstName,
        lastName : lastName,
        userName : userName,
        last_login : Date.now(),
        photoURL: 'https://miro.medium.com/fit/c/1360/1360/1*DzilzYyhUEv7Rr9kzpHxIA.jpeg',
        theme: "Grey"

      }
  
      console.log("fdsfsd")
      // Push to Firebase Database
      database_ref.child('users/' + user.uid).set(user_data).then( () => {
        window.location.href = '../login/login.html'
      })
      }

    )
    .catch(function(error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message
  
      alert(error_message)
    })
  }
  
  
  
  
  // Validate Functions
  function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
      // Email is good
      return true
    } else {
      // Email is not good
      return false
    }
  }
  
  function validate_password(password) {
    // Firebase only accepts lengths greater than 6
    if (password < 6) {
      return false
    } else {
      return true
    }
  }
  
  function validate_field(field) {
    if (field == null) {
      return false
    }
  
    if (field.length <= 0) {
      return false
    } else {
      return true
    }
  }