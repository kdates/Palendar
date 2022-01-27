// Export the Header for it to be reused in different pages without rewriting the entire html

var Url;
function funs(){

    document.getElementById('login').style.display ='none'
    document.getElementById('register').style.display ='none'
    document.getElementById('profile').style.display ='none'
    document.getElementById('calendar').style.display ='none'
    document.getElementById('logout').style.display ='none'
  firebase.auth().onAuthStateChanged( user => {
    if (user) {
        
        document.getElementById('calendar').style.display ='block'
        document.getElementById('profile').style.display ='flex'
        document.getElementById('logout').style.display ='block'
        database.ref('users/'+ user.uid).on('value',
        function(user){
            document.getElementById('pfp').src = user.val().photoURL
        })
    } else{
        document.getElementById('login').style.display ='block'
        document.getElementById('register').style.display ='block'
        
    }
});
}
class Header extends HTMLElement {
    constructor() {
      super();
      
    }
    
    connectedCallback() {
        
        this.innerHTML = `
        
        <nav id = "navid" class= 'shadow'>
                    
            <img id="logo" src="../../images/images/palendar.png" alt="logo">
                </div>
                    <ul class="navlist">
                        <li class="nli"><a href="../home/homepage.html">Home</a></li>
                        <li class="nli" id='calendar'><a href="../calendar/calendar.html">Calendar</a></li>
                        <li class="nli"><a href="../about/aboutpalendar.html">About Palendar</a></li>
                        <li class="nli" id='login'><a href="../login/login.html">Login</a></li>
                        <li class="nli" id='register'><a href="../register/register.html">Register</a></li>
                        <li class="nli" id='logout'><a href="#" onClick='signOut()'>logout</a></li>
                        <li class="imgli" id="profile">
                            <a id="settings" href="../settings/settings.html"><span class='txt'>Profile<span/>
                            <img id="pfp" src="" alt="Picture of user"></a>
                        </li>
                    </ul>
                </div>
        </nav>`;
        funs()
        }
    }
  
  customElements.define('header-component', Header);