<template>
  <div class="header">
    <div class="flex-column">
    <div class="headerContent flex-lg-row  flex-column d-flex justify-content-center  align-items-center ">
      <div class="nav-dots">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
      <div class="left d-flex align-items-center justify-content-center">
        <img class="img-fluid col-lg-12 col-5" src="@/assets/img/headerImg1.png" alt="Header image">
      </div>
      <div class="right flex-column col-lg-5 col-9 px-sm-5 d-flex align-items-lg-end">
        <h1  style="color:#1c2e0d">نباتاتك الخضراء في انتظارك</h1>
        <p class="text-lg-end text-center"  style="color:#667c67">نحن نفتخر بتوفير أجود أنواع النباتات التي تأتي من مصادر ذات جودة عالية، ونحرص على توفير خدمة عملاء ممتازة وتجربة تسوق رائعة. تتوفر لدينا أيضاً مجموعة متنوعة من الأواني والحاويات التي يمكن استخدامها لعرض النباتات بشكل جميل وأنيق.</p>
        <button>إكـتـشـف</button>
      </div>
      <div class="media2">
        <span class="med2"><i class="fa-brands fa-whatsapp"></i></span>
        <span class="med2"><i class="fa-brands fa-instagram"></i></span>
        <span class="med2"><i class="fa-brands fa-twitter"></i></span>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped>
.header {
  width: 100%;
  height:83vh;
  overflow: hidden;
}
.headerContent{
  background-color:rgb(255, 255, 255);
  height:100vh;
}
.nav-dots {
  top: 50%;
  left: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  margin-left: 30px;
}
.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #d4d2d2;
  margin: 5px 0;
}
.media2 {
  top: 47%;
  right: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  margin-right: 30px;
}
.med2 {
  color: #667c67;
  margin: 5px 0;
  font-size: 20px;

}
.arrow {
  top: 90%;
  position: absolute;
  font-size: 30px;
  color: #1c2e0d;
  margin-left: 120px;
}
.right button {
  background-color: #667c67;
  border: 1px solid #667c67;
  box-shadow: 2px 2px 1px rgba(102, 124, 103, 0.677);
  border-radius: 5px;
  padding: 10px 50px;
  color: white;
  font-weight: bold;
}
.right h1{
font-size:3 rem;
text-align: end;}

@media screen and (max-width:990px) {

  .right h1{
    text-align: center;
  }
  
}
@media screen and (max-width:600px) {
  .media2{display: none;}
  .nav-dots{display: none;}
}
@media screen and (max-width:500px) {
  .right h1{
    font-size: 1.2rem;
  }
  .right p{
    font-size: 12px;
  }
}
</style>
