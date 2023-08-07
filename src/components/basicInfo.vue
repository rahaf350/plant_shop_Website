<template>
    <div class="basicInfo container py-5 d-flex justify-content-center ">
        <div class="basicInfo-content d-flex flex-row justify-content-center align-items-center px-5">
            <div class="info"><h6>تصنيفات</h6><h1>5+</h1></div>
            <div class="info"><h6>نـوع نباتات</h6><h1>80+</h1></div>
            <div class="info"><h6>عـميل سعيد</h6><h1>250+</h1></div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'basicInfo'
  }
  </script>
  
  <style scoped>
  .basicInfo-content{
    background-color: #667c67;
    height: 50px;
    width: 85%;
    border-radius:10px;
    box-shadow: 2px 2px 1px rgba(102, 124, 103, 0.677);

  }
  .info{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 4rem;
    color: white;
    
  }
  .info h6{
    font-size: 1rem ;
  }
  .info h1 {
    margin: 0 0.5rem;
  }

  @media screen and (max-width:990px) {
    .info{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin: 0 0.5rem;
      color: white;
      
    }
    .info h6{
      font-size: 0.7rem ;
    }
    .info h1 {
      font-size: 1.5rem ;
    }
  

  }
  </style>
  