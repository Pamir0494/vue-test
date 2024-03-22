<template>
  <div class=" container pt-5 px-0">
    <div  v-if="collCard" class="collCard">
      <div class="row justify-content-center">

        <div v-if="collEnd" class="text-center ps-5 col-4 p-4 collEnd">
          <div class="col-11 text-end">
            <button @click="modalWin" type="button " class="button-X col-2"></button>
          </div>
          <h1 class="pt-5 mt-5">Спасибо</h1>
          <h1 class="mt-3">за заявку</h1>
          <h2 class="mt-5 pt-5">Я обязательно</h2>
          <h2 class="mt-3">свяжусь с вами</h2>
          <h2 class="mt-3 mb-5 pb-5">в ближайшее время.</h2>
          <div class="text-end col-11">
            <img src="../img/logo.png">
          </div>
        </div>

        <div v-else class="ps-5 col-4 p-4 ">
          <div class="col-11 text-end">
          <button @click="modalWin" type="button " class="button-X col-2"></button>
            </div>
          <h1 class="col-12 ms-3  pt-5 mt-5 ">Закажите обратный звонок</h1>
          <input class="col-11 ms-3 mt-5" type="text" placeholder="ИМЯ">
          <input class="col-11 ms-3 mt-5" type="text" placeholder="ТЕЛЕФОН">
          <div class="d-flex ms-3 pt-5 mt-5">
            <label class="custom-checkbox col-4 mt-2">
              <input type="checkbox" checked>
              <span class="checkmark"></span>
            </label>
            <span class="col-8 ms-4">Согласен на сохранение и обработку персональных данных</span>
          </div>
          <div class="center d-flex ms-3 mt-5 mb-5">
          <button @click="modalEnd" class="col-5 col-7 bg-transparent border_2 center "  type="button">Заказать обратный звонок</button>
          <span class="col border_2 col-1 "><img src="../img/Vector.png"></span>
          </div>
        </div>
      </div>
    </div>
<!--//  Header  //-->
    <div class="row">

      <div class="col-3 col-lg-2 col-md-2  "><img class="img-fluid" src="../img/logo.png"></div>
        <ul class=" col-lg-7 d-flex col-md-7  my-menu">
          <li class="col-sm-auto  col-lg-2 p-1 ps-4 col=">Обо мне</li>
          <li class="col-sm-auto  col-lg-auto p-1">Наставничество</li>
          <li class="col-sm-auto  col-lg-2 p-1">Мероприятия</li>
          <li class="col-sm-auto  col-lg-2 p-1">Кейсы</li>
          <li class="col-sm-auto  col-lg-2 p-1">Отзывы</li>
          <li class="col-sm-auto  col-lg-2 p-1">Контакты</li>
        </ul>
      <div class=" col-3 col-lg-3 col-md-4  d-flex my-menu justify-content-end justify-content-md-start " >
        <img src="../img/icon-phone.png" class="img-fluid"><li><span>8-345-123-34-45</span></li>
      </div>
    </div>
<!--    Center-->
    <div class="row center">
<!--        Center-Left-->
      <div class="col-7 col-md-6 center">
        <h1 class="col center ">Создаю условия для вашего успеха</h1>
        <h2 class="col-10 mt-5 col-md-12 center">Когда ваше время и энергия лучше сфокусированы, стремление к новым возможностям становится реальностью,  ваш успех зависит от ваших действий</h2>
        <div  class="col d-flex mt-5 center ">
          <button @click="modalWin"  class="col-5 bg-white col center border_1  text-center" type="button">Записаться на консультацию</button>
          <span  class="col bg-white border_1"><img src="../img/Vector_2.png"></span>
          <button @click="modalWin" class="col-5 bg-transparent border_2 center ms-5 "  type="button">Бесплатная консультация</button>
          <span class="col border_2 " ><img src="../img/Vector.png"></span>
        </div>
        <div class="col d-flex center_2">
          <div class="col-7  ps-4">
            <h1>{{ itemDate }}+</h1>
            <p>техник для достижения целей</p>
          </div>
          <div class="col-6 ps-4  ">
            <h1>{{rateGBP}}%</h1>
            <p>увеличение личной продуктивности</p>
          </div>
        </div>
      </div>
<!--      Center-Right-->
      <div class="col  pt-4  col-md-6  text-end"><img class="img-fluid ms-5 ps-5 float" src="../img/df53e2.png"></div>
    </div>
  </div>
</template>

<script>
const post = await fetch(`https://www.cbr-xml-daily.ru/daily_json.js`).then((r) => r.json());
let rateGBP=Math.round(post.Valute.GBP.Value);

import { format } from "date-fns";
let today = Date.now();
let formatedDate = format(today, 'yyyyMMdd');
let itemDate =0;
for (let i=0;i<formatedDate.length;i++ ){
  itemDate += Number(formatedDate[i])
}



export default {
  data(){
    return{
      rateGBP,
      itemDate,
      collCard:false,
      collEnd:false
    }
  },
  methods:{
    modalWin(){
      this.collCard =!this.collCard
      this.collEnd=false
    },
    modalEnd(){
      this.collEnd =false
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Subrayada:wght@400;700&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');
.my-menu>li{
  list-style: none;
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  color: white;
  text-align: center;
  font-weight: 400;
}
.my-menu {
  margin: 0;
  height: 40px;
  align-items: center;
  font-weight: 600;
}
.my-menu>img{
  margin-right: 15px;
}
.my-menu>li>span{
  font-size: 18px;
  font-weight: 600;
  letter-spacing: .02rem;
}
.center>h1{
  font-size: 65px;
  text-transform: uppercase;
  font-family: "Raleway", sans-serif;
  line-height: 88px;
  font-weight: 600;
}
.center{
  font-family: Raleway sans-serif;
  color: white;
}
.center>h2{
  font-size: 16px;
  font-weight: 400;
  letter-spacing: .02rem;
  border-left: 1px solid white;
  color: rgba(255, 255, 255, 0.5);
  padding-left: 20px;
}
.center>button{
  height: 71px;
}
.center>span{
  min-width: 71px;
}
.center>span>img{
  margin-top: 35px;
  margin-left: 35px;
}
.border_1, .border_2{
  font-size: 18px;
  font-weight: 600;
}
.border_1{
  color: #07305D;
  border: solid 1px #07305D;
}
.border_2{
  color: white;
  border: solid 1px white;
}
.center_2>div{
  border-left:solid 1px white ;
}
.center_2>div>h1{
  font-family: Montserrat, sans-serif;
  font-size: 40px;
  font-weight: 600;
}
.center_2>div>p{
  color: rgba(255, 255, 255, 0.5);
}
.center_2{
  margin-top: 80px;
}
.collCard {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  background-color: rgb(7 57 110 / 89%);
  top: 0;
}
.collCard>div>div>h1 {
  font-family: "Raleway", sans-serif;
  color: white;
  font-weight: 600;
  font-size: 50px;
}
.collCard>div>div>h2 {
  font-family: "Raleway", sans-serif;
  color: white;
  font-weight: 600;
  font-size: 40px;
}
.collCard>div>div>input{
  font-family: Montserrat, sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
  background: none;
  border:0;
  border-bottom: 1px solid white;
}
.collCard>div>div>div>span{
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.collCard>div>label{
  color: rgba(255, 255, 255, 1);
}
.custom-checkbox{
  width: 30px;
  height: 30px;
  cursor: pointer;
}
.custom-checkbox .checkmark{
  width: 100%;
  height: 100%;
  border: 1px solid rgba(255, 255, 255, 1);
  display:inline-block;
  background: no-repeat center 90% url("../img/checkbox.png") ;
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  font-weight: 400;
}
.custom-checkbox input:checked + .checkmark{
  background-size: 1px;
}
.custom-checkbox input{
   display: none;
 }
.collCard>div>div{
  background-color: #0f1d45;
}
.button-X{
  background: no-repeat 100% center url("../img/button-x.png");
  width: 30px;
  height: 30px;
  border: none;
}

/*media<1140*/
@media screen and (max-width: 1140px) {
  .center>h1{
    margin-top: 70px;
    font-size: 40px;
    line-height: 50px;
  }
}
/*media<1440*/
@media screen and (max-width: 1440px) {
  .center>h1{
    margin-top: 70px;
  }
}
/*media<768*/
@media screen and (max-width: 768px) {
  .center>h1{
    margin-top: 10px;
    font-size: 32px;
  }
  .center_2[data-v-770affdd] {
    margin-top: 13px;
  }
}

</style>