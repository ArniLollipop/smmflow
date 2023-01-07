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

    let isSocial = [
      {id:0, head: 'Instagram', open: true, img: 'images/insta.svg', info: [
        {id: 0, img: 'images/Person.svg', text: 'Подписчики'},
        {id: 1, img: 'images/RedHeart.svg', text: 'Лайки'},
        {id: 2, img: 'images/Eyes.svg', text: 'Просмотры'},
        {id: 3, img: 'images/Message.svg', text: 'Комментарии'},
        {id: 4, img: 'images/Camera.svg', text: 'Просмотры '},
        {id: 5, img: 'images/Woman.svg', text: 'Зрители в прямой эфир'},
        {id: 6, img: 'images/Statistics.svg', text: 'Статистика'},
        {id: 7, img: 'images/Cinema.svg', text: 'Статистика'},
        {id: 8, img: 'images/Reels.svg', text: 'Reels'}
      ]},
      {id:1, head: 'Vk', open: false, img: 'images/Vk.svg', info: []},
      {id:2, head: 'TikTok', open: false, img: 'images/Tiktok.svg', info: []},
      {id:3, head: 'Telegram', open: false, img: 'images/Telegram.svg', info:[
        {id: 0, img: 'images/Person.svg', text: 'Подписчики'},
        {id: 1, img: 'images/Eyes.svg', text: 'Просмотры'},
        {id: 2, img: 'images/Reaction.svg', text: 'Реакции'},
        {id: 3, img: 'images/Message.svg', text: 'Комментарии'},
        {id: 4, img: 'images/Eyes.svg', text: 'Авто-просмотры'},
        {id: 5, img: 'images/AutoReact.svg', text: 'Авто-реакции'},
      ]},
      {id:4, head: 'YouTube', open: false, img: 'images/Youtube.svg', info:[]},
      {id:5, head: 'FaceBook', open: false, img: 'images/Facebook.svg', info:[]},
      {id:6, head: 'Twitter', open: false, img: 'images/Twitter.svg', info:[]},
      {id:7, head: 'Twitch', open: false, img: 'images/Twich.svg', info:[]},
      {id:8, head: 'YouTube', open: false, img: 'images/Youtube.svg', info:[]},
      {id:9, head: 'FaceBook', open: false, img: 'images/Facebook.svg', info:[]},
      {id:10, head: 'Twitter', open: false, img: 'images/Twitter.svg', info:[]},
      {id:11, head: 'Twitch', open: false, img: 'images/Twich.svg', info:[]},
    ]
    //
    isSocial.map((element)=>{
      if(element.open){
        document.getElementById("slider").innerHTML += `
          <button id = "${element.id}" onclick="sliderService(${element.id})" class="id${element.id} swiper-slide z-0 ring-inset hover:bg-pressed pressed">
            <div class=" md:py-3 py-[9px] md:px-4 px-2 flex items-center gap-x-2 w-fit mx-auto">
              <img src="${element.img}" alt="" class="md:h-8 h-[28px]">
              <h5 class=" text-lg ">${element.head}</h5>
            </div>
          </button>`
        element.info.map((info)=>{
          document.getElementById("slider-service").innerHTML += `
            <button class="col-span-1 md:px-4 px-2 md:h-[170px] h-[111px] h-auto flex-row gap-y-1 hover:-translate-y-1 transition-all duration-300 items-center justify-center bg-white rounded-[10px]">
              <img src="${info.img}" alt="" class="md:w-[38px] md:h-[38px] w-[30px] h-[30px] mx-auto">
              <p class=" lg:text-xl md:text-base text-sm font-medium mt-[6px]">${info.text}</p>
            </button>
          `
        })
      }
      else{
        document.getElementById("slider").innerHTML += `
          <button id = "${element.id}" onclick="sliderService(${element.id})" class="id${element.id} swiper-slide z-0 ring-inset hover:bg-pressed ">
            <div class=" md:py-3 py-[9px] md:px-4 px-2 flex items-center gap-x-2 w-fit mx-auto">
              <img src="${element.img}" alt="" class="md:h-8 h-[28px]">
              <h5 class=" text-lg ">${element.head}</h5>
            </div>
          </button>`
      }
    })

    let count = 0;

    function sliderService(getId){
      let s = ""
      let buttons = ""
      console.log(getId);
      isSocial.map((element)=>{
        if(element.id === getId){
          element.open = true;
          let loops = document.querySelectorAll(`.id${element.id}`)
          for (let i = 0; i < loops.length; i++){
            loops[i].classList.add("pressed")
          }
          element.info.map((info)=>{
            s += `
              <button class="col-span-1 md:px-4 px-2 md:h-[170px] h-[111px] h-auto gap-y-1 flex-row hover:-translate-y-1 transition-all duration-300 items-center justify-center bg-white rounded-[10px]">
                <img src="${info.img}" alt="" class="md:w-[38px] md:h-[38px] w-[30px] h-[30px] mx-auto">
                <p class=" lg:text-xl md:text-base text-sm font-medium">${info.text}</p>
              </button>
            `
          })
        }
        else{
          element.open = false;
          let loops = document.querySelectorAll(`.id${element.id}`)
          for (let i = 0; i < loops.length; i++){
            loops[i].classList.remove("pressed")
          }
        }
        console.log(document.getElementById(`${element.id}`));
      })
      document.getElementById("slider-service").innerHTML = s;
    }

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

    let Questions = [
      {id: 8, isQuestion: false, answerId: 'answer1', arrow: 'arrow1',  question: 'Почему цены на ваши услуги ниже, чем у конкурентов?', answer:'Мы стремимся предложить наши услуги по наиболее конкурентоспособным ценам, чтобы обеспечить удобство и доступность для наших клиентов.'},
      {id: 9, isQuestion: false, answerId: 'answer2', arrow: 'arrow2',  question: 'Какие способы оплаты вы принимаете?', answer : 'Мы принимаем оплату различными способами, такими как банковские карты, Qiwi-кошелек, Payeer и криптовалюты.'},
      {id: 10, isQuestion: false, answerId: 'answer3', arrow: 'arrow3',  question: 'Как вы гарантируете качество услуг?', answer : 'Мы используем только безопасные и эффективные методы, которые позволяют нам гарантировать высокое качество наших услуг.'},
      {id: 11, isQuestion: false, answerId: 'answer4', arrow: 'arrow4',  question: 'Меня не заблокируют?', answer : 'Мы используем только безопасные и этичные методы привлечения подписчиков и лайков, которые не нарушают условия использования социальных сетей.'},
      {id: 12, isQuestion: false, answerId: 'answer5', arrow: 'arrow5',  question: 'Как я могу узнать о статусе моего заказа?', answer : 'Вы можете отслеживать статус своего заказа через свой личный кабинет на нашем сайте.'},
      {id: 13, isQuestion: false, answerId: 'answer6', arrow: 'arrow6',  question: 'Как я могу связаться с вами?', answer : 'Вы можете связаться с нами через онлайн-чат на сайте или через социальные сети.'},
      {id: 14, isQuestion: false, answerId: 'answer7', arrow: 'arrow7',  question: 'Как быстро выполняется заказ?', answer : 'Срок выполнения заказа зависит от типа и объема услуги, которую вы заказываете. Обычно мы указываем срок выполнения в описании услуги.'},
      {id: 15, isQuestion: false, answerId: 'answer8', arrow: 'arrow8',  question: 'Что произойдет, если мои подписчики или лайки уйдут?', answer : 'Мы предлагаем гарантию возврата денег на баланс в случае удаления подписчиков или лайков, а так же предоставляем гарантию от списаний по некоторым услугам в течение 1 месяца.'},
    ]

    Questions.map((q)=>{
      document.getElementById("questionAnswer").innerHTML += `
        <button onclick="Question(${q.id})" class="col-span-1 text-start h-fit rounded-[10px] overflow-hidden">
          <div id="${q.id}" class="flex rounded-[10px] items-center justify-between bg-whiteGray lg:py-[22px] lg:pl-[15px] lg:pr-6 py-[17px] px-[14px]">
            <p class="font-medium md:w-full w-[90%] text-base">${q.question}</p>
            <div class="w-fit h-auto">
              <img id="${q.arrow}" src="images/ArrowDown.svg" alt="" class="transition-all duration-150">
            </div>
          </div>
          <div id="${q.answerId}" class="hidden bg-whiteGray border-t z-20 border-border border-opacity-40 px-3 py-4 text-start">${q.answer}</div>
        </button>
      `
    })

    function Question(asd){
      Questions.map((q)=>{
        if (asd == q.id){
          if (!q.isQuestion){
            document.getElementById(`${q.id}`).classList.remove("rounded-[10px]")
            document.getElementById(`${q.answerId}`).classList.remove("hidden")
            document.getElementById(`${q.arrow}`).classList.add("rotate-180")
            q.isQuestion = !q.isQuestion
          }
          else{
            document.getElementById(`${q.id}`).classList.add("rounded-[10px]")
            document.getElementById(`${q.answerId}`).classList.add("hidden")
            document.getElementById(`${q.arrow}`).classList.remove("rotate-180")
            q.isQuestion = !q.isQuestion
          }
        }
      })
    }

    let reviews = [
      {name: 'Антон', text: 'Купил лайки на YouTube через SMMFLOW и не пожалел. Качественное обслуживание, спасибо.'},
      {name: 'Екатерина', text: 'SMMFLOW помог мне увеличить просмотры на TikTok. Быстро, качественно, удобно. Обязательно снова обращусь.'},
      {name: 'Ольга', text: 'Я заказывала у SMMFLOW разные услуги для своего Instagram аккаунта, в том числе покупку лайков и подписчиков. Все было быстро и качественно.'},
      {name: 'Егор', text: 'Купил подписчиков и комментарии в свой телеграм канал, уже через несколько часов заметил результат. Очень доволен, спасибо!'},
      {name: 'Мария', text: 'Купила подписчиков в Instagram через SMMFLOW, очень довольна результатом. Поступали плавно и незаметно, что важно для меня. '},
      {name: 'Александр', text: 'SMMFLOW помог мне продвинуть канал на YouTube. Заказывал подписчиков и лайки, все прошло быстро и качественно, всем рекомендую!'},
      {name: 'Анна', text: 'Я не ожидала, что продвижение в Instagram может быть таким простым. Заказала подписчиков через SMMFLOW и очень довольна результатом.'},
      {name: 'Дмитрий', text: 'Приобрел подписчиков и лайки на TikTok, результат превзошел все ожидания. Быстро, качественно, оправдало свои деньги. Рекомендую!'},
      {name: 'Ксения', text: 'Воспользовалась услугами SMMFLOW для продвижения своего TikTok аккаунта. Очень рада результату, получила множество новых подписчиков и просмотров. '},
      {name: 'Елена', text: 'Как и многие другие, я хотела продвинуть свой бизнес в VK. Но самостоятельно мне это было сложно. Наткнулась на этот сайт и буквально за пару дней решила эту проблему.'},
      {name: 'Олег', text: 'Я продвигаю свой бизнес в Instagram. Купил подписчиков и лайки, и уже через несколько дней заметил рост активности. Спасибо!'},
      {name: 'Наталья', text: 'Была очень удивлена результатами, я ожидала что процесс будет долгим, но число лайков и просмотров в Тик Токе увеличилось уже через несколько дней. '},

    ]

    s = ""
    reviews.map((review)=>{
      s += `
        <div class="swiper-slide w-full">
          <div class="md:p-7 p-4 bg-whiteGray md:w-[323px] w-[260px] md:h-[296px] h-[260px] text-sm rounded-2xl block mx-auto">
            <div class="flex items-center gap-x-[10px] md:mb-[21px] mb-[14px]">
              <img src="images/Review.svg" alt="" class="w-[50px] h-[50px]">
              <div class="">
                <p class="font-medium text-lg">${review.name}</p>
                <div class="flex gap-x-1 mt-[6.5px]">
                  <img src="images/Star.svg" alt="" class = "w-[14px] h-[14px]">
                  <img src="images/Star.svg" alt="" class = "w-[14px] h-[14px]">
                  <img src="images/Star.svg" alt="" class = "w-[14px] h-[14px]">
                  <img src="images/Star.svg" alt="" class = "w-[14px] h-[14px]">
                  <img src="images/Star.svg" alt="" class = "w-[14px] h-[14px]">
                </div>
              </div>
            </div>
            <p class="leading-6 md:text-lg text-base font-normal text-textGray">
              ${review.text}
            </p>
          </div>
        </div>`
    })
    document.getElementById("wrapper-reviews").innerHTML = s