function tabs(id){
  if(id === "story"){
    document.getElementById("story").classList.remove("after:opacity-0", "after:w-0")
    document.getElementById("balance").classList.add("after:opacity-0", "after:w-0")
    document.getElementById("settings").classList.add("after:opacity-0", "after:w-0")
    document.getElementById("leave").classList.add("after:opacity-0", "after:w-0")
    document.getElementById("story2").classList.remove("after:opacity-0", "after:w-0")
    document.getElementById("balance2").classList.add("after:opacity-0", "after:w-0")
    document.getElementById("settings2").classList.add("after:opacity-0", "after:w-0")
    document.getElementById("leave2").classList.add("after:opacity-0", "after:w-0")
    document.getElementById("storyContent").classList.remove("hidden")
    document.getElementById("balanceContent").classList.add("hidden")
    document.getElementById("settingsContent").classList.add("hidden")
    document.getElementById("leaveContent").classList.add("hidden")
  }
  else if (id === "balance"){
    document.getElementById("story").classList.add("after:opacity-0", "after:w-0")
    document.getElementById("balance").classList.remove("after:opacity-0", "after:w-0")
    document.getElementById("settings").classList.add("after:opacity-0", "after:w-0")
    document.getElementById("leave").classList.add("after:opacity-0", "after:w-0")
    document.getElementById("story2").classList.add("after:opacity-0", "after:w-0")
    document.getElementById("balance2").classList.remove("after:opacity-0", "after:w-0")
    document.getElementById("settings2").classList.add("after:opacity-0", "after:w-0")
    document.getElementById("leave2").classList.add("after:opacity-0", "after:w-0")
    document.getElementById("storyContent").classList.add("hidden")
    document.getElementById("balanceContent").classList.remove("hidden")
    document.getElementById("settingsContent").classList.add("hidden")
    document.getElementById("leaveContent").classList.add("hidden")
  }
  else if (id === "settings"){
    document.getElementById("story").classList.add("after:opacity-0", "after:w-0")
    document.getElementById("balance").classList.add("after:opacity-0", "after:w-0")
    document.getElementById("settings").classList.remove("after:opacity-0", "after:w-0")
    document.getElementById("leave").classList.add("after:opacity-0", "after:w-0")
    document.getElementById("story2").classList.add("after:opacity-0", "after:w-0")
    document.getElementById("balance2").classList.add("after:opacity-0", "after:w-0")
    document.getElementById("settings2").classList.remove("after:opacity-0", "after:w-0")
    document.getElementById("leave2").classList.add("after:opacity-0", "after:w-0")
    document.getElementById("storyContent").classList.add("hidden")
    document.getElementById("balanceContent").classList.add("hidden")
    document.getElementById("settingsContent").classList.remove("hidden")
    document.getElementById("leaveContent").classList.add("hidden")
  }
  else if (id === "leave"){
    document.getElementById("story").classList.add("after:opacity-0", "after:w-0")
    document.getElementById("balance").classList.add("after:opacity-0", "after:w-0")
    document.getElementById("settings").classList.add("after:opacity-0", "after:w-0")
    document.getElementById("leave").classList.remove("after:opacity-0", "after:w-0")
    document.getElementById("story2").classList.add("after:opacity-0", "after:w-0")
    document.getElementById("balance2").classList.add("after:opacity-0", "after:w-0")
    document.getElementById("settings2").classList.add("after:opacity-0", "after:w-0")
    document.getElementById("leave2").classList.remove("after:opacity-0", "after:w-0")
    document.getElementById("storyContent").classList.add("hidden")
    document.getElementById("balanceContent").classList.add("hidden")
    document.getElementById("settingsContent").classList.add("hidden")
    document.getElementById("leaveContent").classList.remove("hidden")
  }
}


let Stories = [
  {date : '11.12.2022', img: 'images/insta.svg', service: 'Подписчики “Живые”', emoji: 'images/RedHeart.svg', link: 'https://www.instagram.com/durov/', count: 10000, price:'1000₽', status: 'В обработке', statusColor: 'text-blue'},
  {date : '11.12.2022', img: 'images/insta.svg', service: 'Подписчики “Живые”', emoji: 'images/RedHeart.svg', link: 'https://www.instagram.com/durov/', count: 10000, price:'1000₽', status: 'Выполняется', statusColor: 'text-blue'},
  {date : '11.12.2022', img: 'images/insta.svg', service: 'Подписчики “Живые”', emoji: 'images/RedHeart.svg', link: 'https://www.instagram.com/durov/', count: 10000, price:'1000₽', status: 'Завершен', statusColor: 'text-green'},
  {date : '11.12.2022', img: 'images/insta.svg', service: 'Подписчики “Живые”', emoji: 'images/RedHeart.svg', link: 'https://www.instagram.com/durov/', count: 10000, price:'1000₽', status: 'Отменен', statusColor: 'text-red'},
  {date : '11.12.2022', img: 'images/insta.svg', service: 'Подписчики “Живые”', emoji: 'images/RedHeart.svg', link: 'https://www.instagram.com/durov/', count: 10000, price:'1000₽', status: 'Выполнен частично', statusColor: 'text-yellow'},
  {date : '11.12.2022', img: 'images/insta.svg', service: 'Подписчики “Живые”', emoji: 'images/RedHeart.svg', link: 'https://www.instagram.com/durov/', count: 10000, price:'1000₽', status: '', statusColor: ''},
]

let htmlStory = ""

if (Stories.length === 0){
  htmlStory = `
    <div class = "max-w-[415px] block mx-auto my-20">
      <img src="images/Saly-17.png" alt="" class="mb-[30px] w-fit block mx-auto">
      <p class="font-medium text-[#4F4F4F] text-center">Заказов нет</p>
      <p class="text-center text-[#4F4F4F] block mx-auto leading-5 mt-[10px]">Вы ещё ни разу ничего не заказывали. Пополните баланс и сделайте свой первый заказ!</p>
      <button class="w-[50%] block mx-auto text-center py-3 hover:shadow-lg text-white font-medium bg-blue rounded-md mt-5" >Сделать заказ</button>
    </div>
    `
    
  
}
else{
  Stories.map((str)=>{
    if(str.status !== ''){
      htmlStory += `
              <div class="rounded-md py-[14px] story-back mt-[14px]">
                <div class="lg:grid lg:grid-cols-6 grid-cols-1 pl-5 items-center hidden">
                  <div class="col-span-1">
                    ${str.date}
                  </div>
                  <div class="col-span-2 lg:block hidden">
                    <div class="flex items-center gap-x-[5px]">
                      <img src="${str.img}" alt="" class="w-[18px] h-[18px]">
                      <div class = "flex items-center gap-x-1">
                        <p class="font-medium text-base">${str.service}</p>
                        <img src = "${str.emoji}" alt = "" class = "h-5">
                      </div>
                    </div>
                    <button class="text-blue text-base">${str.link}</button>
                  </div>
                  <div class="col-span-1 ">
                    ${str.count}
                  </div>
                  <div class="col-span-1 ">
                    ${str.price}
                  </div>
                  <div class="${str.statusColor} col-span-1 ">
                    ${str.status}
                  </div>

                </div>
                <div class = "pl-5 lg:hidden">
                  <div class = "flex items-center gap-x-[10px] text-base font-medium">
                    <img src="${str.img}" alt="" class="h-[34px]">
                    <div class = "flex flex-col gap-x-0">
                      <p class="w-[100px] leading-5">
                        Подписчики
                        <span class = "flex items-center gap-x-1">Живые <img src="images/RedHeart.svg" alt="" class = "w-4 h-4"></span>
                      </p>
                    </div>
                  </div>
                  <p class="text-blue mt-3">
                    https://www.instagram.com/durov/
                  </p>
                  <p class = "text-base mt-[10px]">
                    ${str.count} за ${str.price}  
                  </p>
                  <p class = "text-base mt-[10px]">
                    Дата: ${str.date}
                  </p>  
                  <p class = "text-base mt-[10px]">
                    Статус: <span class = "${str.statusColor}">${str.status}</span>
                  </p>
                </div>
              </div>`
    }
    else{
      htmlStory += `
              <div class="rounded-md py-[14px] story-back mt-[14px]">
                <div class="lg:grid lg:grid-cols-6 grid-cols-1 pl-5 items-center hidden">
                  <div class="col-span-1">
                    ${str.date}
                  </div>
                  <div class="col-span-2 hidden lg:flex items-center gap-x-[10px]">
                    <img src="${str.img}" alt="" class="h-8">
                    <div class="">
                      <div class = "flex items-center gap-x-1">
                        <p class="font-medium text-base">${str.service}</p>
                        <img src = "${str.emoji}" alt = "" class = "h-5">
                      </div>
                      <button class="text-blue text-base">${str.link}</button>
                    </div>
                  </div>
                  <div class="col-span-1 ">
                    ${str.count}
                  </div>
                  <div class="col-span-1 ">
                    ${str.price}
                  </div>
                  <div class="${str.statusColor} col-span-1 ">
                    ${str.status}
                  </div>

                </div>
                <div class = "pl-5 lg:hidden">
                  <div class = "flex items-center gap-x-[10px] text-base font-medium">
                    <img src="${str.img}" alt="" class="h-[34px]">
                    <div class = "flex flex-col gap-x-0">
                      <p class="w-[100px] leading-5">
                        Подписчики
                        <span class = "flex items-center gap-x-1">Живые <img src="images/RedHeart.svg" alt="" class = "w-4 h-4"></span>
                      </p>
                    </div>
                  </div>
                  <p class="text-blue mt-3">
                    https://www.instagram.com/durov/
                  </p>
                  <p class = "text-base mt-[10px]">
                    ${str.count} за ${str.price}  
                  </p>
                  <p class = "text-base mt-[10px]">
                    Дата: ${str.date}
                  </p>  
                  <p class = "text-base mt-[10px]">
                    Статус: <span class = "${str.statusColor}">${str.status}</span>
                  </p>
                </div>
              </div>`
    }
  })
}
document.getElementById("stories").innerHTML = htmlStory;

function inputPrice(price){
  document.getElementById("input-price").value = price;
}

let balance = [
  {date:'11.12.2022 в 12:43', price:1000, status: 'Оплачен', statusColor: 'text-[#009A3E]'}
]

if(balance.length === 0){
  document.getElementById("story-balance").innerHTML =
   `<img src="images/Saly-17.png" alt="" class="my-[30px] w-fit block mx-auto">
    <p class="font-medium text-[#4F4F4F] text-center">Пополнений ещё не было</p>
    <p class="text-center text-[#4F4F4F] w-[80%] block mx-auto leading-5 mt-[10px]">Вы ещё ни разу не пополняли баланс . Пополните баланс и сделайте свой первый заказ!</p>
    `
}
else{
  balance.map((element)=>{
  document.getElementById("story-balance").innerHTML += `
  <div class="story-back rounded-md py-[14px] px-5 my-[14px] grid grid-cols-5">
    <div class="sm:col-span-2 col-span-4">
      ${element.date}
    </div>
    <div class="sm:col-span-2 col-span-1 -ml-1 justify-start flex items-center gap-x-[5px]">
      ${element.price}₽
      <img src = "images/check.svg" alt = "" class = "sm:hidden">
    </div>
    <div class="col-span-1 sm:block hidden text-end ${element.statusColor}">
      ${element.status}
    </div>
  </div>  
  `
})
}
function shadow(){
  console.log("askmda;mdsa");
  if (document.getElementById("nextEl").classList.contains("swiper-button-disabled")){
    console.log("aaaaaaaaaaaaaaaaa");
    document.getElementById("swiper").classList.remove("story-shadow")
  }
  else if(!document.getElementById("nextEl").classList.contains("swiper-button-disabled")){
    document.getElementById("swiper").classList.add("story-shadow")
  }
}