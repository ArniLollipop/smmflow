let isModal = false;
    let isLogIn = false;
    let burgerMenu = false;

    function Burger(){
      if (!burgerMenu){
        document.getElementById("burger1").classList.add("rotate-45","translate-x-[5px]", "-translate-y-[0.5px]")
        document.getElementById("burger2").classList.add("opacity-0", "rotate-360")
        document.getElementById("burger3").classList.add("-rotate-45", "-translate-x-[9px]", "translate-y-1")
        document.getElementById("menu").classList.remove("translate-x-full")
        burgerMenu = !burgerMenu
      }
      else{
        document.getElementById("burger1").classList.remove("rotate-45","translate-x-[5px]", "-translate-y-[0.5px]")
        document.getElementById("burger2").classList.remove("opacity-0", "rotate-360")
        document.getElementById("burger3").classList.remove("-rotate-45", "-translate-x-[9px]", "translate-y-1")
        document.getElementById("menu").classList.add("translate-x-full")
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
        document.getElementById("modal").classList.add("hidden")
        isModal = !isModal
      }
    }
    //

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
    
    let social = [
      {id: 0, img: 'images/Telegram.svg', name: "Telegram"},
      {id: 1, img: 'images/insta.svg', name: "Instagram"},
      {id: 2, img: 'images/Vk.svg', name: "Vk"},
      {id: 3, img: 'images/Tiktok.svg', name: "TikTok"},
      {id: 4, img: 'images/Youtube.svg', name: "YouTube"},
      {id: 5, img: 'images/Twitter.svg', name: "Twitter"},
      {id: 6, img: 'images/Twich.svg', name: "Twitch"},
    ]

    let s = ""

    social.map((element)=>{
      s += `<li onclick="option1(id)" id = "${element.id}" class="flex items-center bg-white z-10 gap-x-[6px] hover:bg-gray px-3 py-[9px]">
              <img src="${element.img}" alt="" class="w-5 h-5">
              <span>${element.name}</span>
            </li>`
    })
    document.getElementById("select1").innerHTML = s;
    
    let isSelect1 = false;
    let isSelect2 = false;
    let isSelect3 = false;
    let isSelect4 = false;

    function select1(){
      if(!isSelect1){
        document.getElementById("select1").classList.remove("hidden")
        document.getElementById("select1Btn").classList.remove("rounded-md")
        isSelect1 = !isSelect1
        if (isSelect2){
          select2()
        }
        if (isSelect3){
          select3()
        }
        if (isSelect4){
          select4()
        }
      }
      else{
        document.getElementById("select1").classList.add("hidden")
        document.getElementById("select1Btn").classList.add("rounded-md")
        isSelect1 = !isSelect1
      }
    }
    function option1(id){
      social.map((element)=>{
        if (element.id == id){
          document.getElementById("select1Btn").innerHTML = `
            <div class="flex items-center gap-x-[6px]">
              <img src="${element.img}" alt="" class="w-5 h-5">
              <span>${element.name}</span>
            </div>
            <span class="text-whiteBlue text-sm">Изменить</span>
          `
        }
      })
      select1()
    }
    s=""
    let services = [
      {id: 7, img: 'images/Person.svg', name: "Подписчики"},
      {id: 8, img: 'images/RedHeart.svg', name: "Лайки"},
      {id: 9, img: 'images/Eyes.svg', name: "Просмотры"},
      {id: 10, img: 'images/Message.svg', name: "Комментарии"},
      {id: 11, img: 'images/Camera.svg', name: "Просмотры"},
      {id: 12, img: 'images/Woman.svg', name: "Зрители в прямой эфир"},
      {id: 13, img: 'images/Statistics.svg', name: "Статистика"},
      {id: 14, img: 'images/Cinema.svg', name: "ITGV"},
      {id: 15, img: 'images/Reels.svg', name: "Reels"},
    ]
    services.map((element)=>{
      s += `<li onclick="option2(id)" id = "${element.id}" class="flex items-center bg-white z-10 gap-x-[6px] hover:bg-gray px-3 py-[9px]">
              <img src="${element.img}" alt="" class="w-5 h-5">
              <span>${element.name}</span>
            </li>`
    })
    document.getElementById("select2").innerHTML = s;

    function select2(){
      if(!isSelect2){
        document.getElementById("select2").classList.remove("hidden")
        document.getElementById("select2Btn").classList.remove("rounded-md")
        document.getElementById("relative2").classList.add("relative")
        isSelect2 = !isSelect2
        if (isSelect3){
          select3()
        }
        if (isSelect4){
          select4()
        }
      }
      else{
        console.log("asd");
        document.getElementById("select2").classList.add("hidden")
        document.getElementById("select2Btn").classList.add("rounded-md")
        document.getElementById("relative2").classList.remove("relative")
        isSelect2 = !isSelect2
      }
    }
    function option2(id){
      services.map((element)=>{
        if (element.id == id){
          document.getElementById("select2Btn").innerHTML = `
            <div class="flex items-center gap-x-[6px]">
              <img src="${element.img}" alt="" class="w-5 h-5">
              <span>${element.name}</span>
            </div>
            <span class="text-whiteBlue text-sm">Изменить</span>
          `
        }
      })
      select2()
    }

    let TarifService = [
      {id: 16, text: 'Русские 🔥 ХИТ'},
      {id: 17, text: 'Боты быстрые'},
      {id: 18, text: 'Живые ⭐️ Гарантия'},
      {id: 19, text: 'Микс + 🇷🇺 ХИТ'},
      {id: 20, text: 'Живые ❤️'},
      {id: 21, text: 'Русские + Микс ⭐️ Гарантия'},
      {id: 22, text: 'Живые из Украины 🇺🇦'},
      {id: 23, text: 'С английскими именами 🇺🇸'},
      {id: 24, text: 'Пранк (читать описание)'},
      {id: 25, text: 'Частично русские ⭐'},
      {id: 26, text: 'REAL ⭐️ Гарантия'},
      {id: 27, text: 'REAL ⭐️ Гарантия'},
    ]
    s=""
    TarifService.map((element)=>{
      s += `<li onclick="option3(id)" id = "${element.id}" class="flex items-center bg-white z-10 gap-x-1 hover:bg-gray px-3 py-[9px]">
              <span>${element.text}</span>
            </li>`
    })
    document.getElementById("select3").innerHTML = s;

    function select3(){
      if(!isSelect3){
        document.getElementById("select3").classList.remove("hidden")
        document.getElementById("select3Btn").classList.remove("rounded-md")
        document.getElementById("relative3").classList.add("relative")
        isSelect3 = !isSelect3
        if (isSelect4){
          select4()
        }
      }
      else{
        document.getElementById("select3").classList.add("hidden")
        document.getElementById("select3Btn").classList.add("rounded-md")
        document.getElementById("relative3").classList.remove("relative")
        isSelect3 = !isSelect3
      }
    }
    function option3(id){
      TarifService.map((element)=>{
        if (element.id == id){
          document.getElementById("select3Btn").innerHTML = `
            <div class="flex items-center gap-x-1">
              <span>${element.text}</span>
            </div>
            <span class="text-whiteBlue text-sm">Изменить</span>
          `
        }
      })
      select3()
    }

    s=""

    let TarifUser = [
      {id: 28, text: 'Русские 🔥 ХИТ'},
      {id: 29, text: 'Боты быстрые'},
      {id: 30, text: 'Живые ⭐️ Гарантия'},
    ]
    TarifUser.map((element)=>{
      s += `<li onclick="option4(id)" id = "${element.id}" class="flex items-center bg-white z-10 gap-x-1 hover:bg-gray px-3 py-[9px]">
              <span>${element.text}</span>
            </li>`
    })

    document.getElementById("select4").innerHTML = s;

    function select4(){
      if(!isSelect4){
        document.getElementById("select4").classList.remove("hidden")
        document.getElementById("select4Btn").classList.remove("rounded-md")
        document.getElementById("relative4").classList.add("relative")
        isSelect4 = !isSelect4
      }
      else{
        document.getElementById("select4").classList.add("hidden")
        document.getElementById("select4Btn").classList.add("rounded-md")
        document.getElementById("relative4").classList.remove("relative")
        isSelect4 = !isSelect4
      }
    }
    function option4(id){
      TarifUser.map((element)=>{
        if (element.id == id){
          document.getElementById("select4Btn").innerHTML = `
            <div class="flex items-center gap-x-1">
              <span>${element.text}</span>
            </div>
            <span class="text-whiteBlue text-sm">Изменить</span>
          `
        }
      })
      select4()
    }