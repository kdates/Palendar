var theme = localStorage.getItem('theme')
themeChange(theme)







// function to set theme
  function themeChange(color){
    if(color == 'Black'){
      document.getElementById("navid").classList.add('nav-bg');
      document.body.style.backgroundColor = "#15202B";
    } else if(color == 'White'){
      document.getElementById("navid").classList.add('Black');
      document.body.style.backgroundColor = "white";
    } else{
      document.body.style.backgroundColor = "#98a3a2";
    }
  
  };
