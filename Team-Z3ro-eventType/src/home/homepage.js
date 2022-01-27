
var theme = localStorage.getItem('theme')
var user = localStorage.getItem('user')
var button = document.getElementById('buttonHome')
var welcome = document.getElementById('welcome')
console.log("fdfsdfd")
themeChange(theme)

if(user){
  button.innerHTML = `<a href="../calendar/calendar.html" class="btn btn-primary btn-lg" role="button">Go to your calendar</a>`
} else{
  button.innerHTML = `<a href="../login/login.html" class="btn btn-primary btn-lg" role="button">Login to your account</a>`
}







// function to set theme
  function themeChange(color){
    if(color == 'Black'){
      console.log("fdfsdfd")
      document.body.style.color = "white";
      document.getElementById("navid").classList.add('nav-bg');
      document.body.style.backgroundColor = "#15202B";
    } else if(color == 'White'){
      document.getElementById("navid").classList.add('Black');
      document.body.style.backgroundColor = "white";
    } else{
      document.body.style.backgroundColor = "#98a3a2";
    }
  
  };

