let countS = 0;

    let isModal = false;
    let isLogIn = false;
    let burgerMenu = false;
    let isRecovery = false;
    let isPassword = false;


    function recovery(){
      if(!isRecovery){
        document.getElementById("logIn").classList.add("hidden");
        document.getElementById("password").classList.remove("hidden")
        isRecovery = !isRecovery;
      }
      else{
        document.getElementById("logIn").classList.remove("hidden");
        document.getElementById("password").classList.add("hidden")
        isRecovery = !isRecovery;
      }
    }

    function passwordOpen(){
      if (!isPassword){
        document.getElementById("password").classList.add("hidden");
        document.getElementById("recovery").classList.remove("hidden")
        isPassword = !isPassword;
      }
      else{
        document.getElementById("password").classList.remove("hidden");
        document.getElementById("recovery").classList.add("hidden")
        isPassword = !isPassword;
      }
    }

    function Burger(){
      if (!burgerMenu){
        document.getElementById("burger1").classList.add("rotate-45","translate-x-[5px]", "-translate-y-[0.5px]")
        document.getElementById("burger2").classList.add("opacity-0", "rotate-360")
        document.getElementById("burger3").classList.add("-rotate-45", "-translate-x-[9px]", "translate-y-1")
        document.getElementById("menu").classList.remove("translate-x-full")
        document.getElementById("main").classList.add("hidden")
        burgerMenu = !burgerMenu
      }
      else{
        document.getElementById("burger1").classList.remove("rotate-45","translate-x-[5px]", "-translate-y-[0.5px]")
        document.getElementById("burger2").classList.remove("opacity-0", "rotate-360")
        document.getElementById("burger3").classList.remove("-rotate-45", "-translate-x-[9px]", "translate-y-1")
        document.getElementById("menu").classList.add("translate-x-full")
        document.getElementById("main").classList.remove("hidden")
        burgerMenu = !burgerMenu
      }
    }


    function signUp(){
      if (!isLogIn){
        document.getElementById("logIn").classList.add("hidden")
        document.getElementById("signUp").classList.remove("hidden")
        isLogIn = !isLogIn
      }
      else{
        document.getElementById("logIn").classList.remove("hidden")
        document.getElementById("signUp").classList.add("hidden")
        isLogIn = !isLogIn
      }
    }

    function modalOpen(){
      if(!isModal){
        document.getElementById("modal").classList.remove("hidden")
        isModal = !isModal
      }
      else{
        isLogIn = true
        signUp();
        isPassword = true
        passwordOpen();
        isRecovery= true
        recovery();
        document.getElementById("modal").classList.add("hidden")
        isModal = !isModal
      }
    }

    let count = 0;

    let isService = false;

    function openService(){
      if(!isService){
        document.getElementById("service").classList.remove("hidden")
        document.getElementById("service").classList.add("border-b-2")
        isService = !isService
      }
      else{
        document.getElementById("service").classList.add("hidden")
        isService = !isService
      }
    }