    
<template>
   <div>
   <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">rencycle</a>
      <img src="@/assets/sdsd.png" alt="">
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><router-link to="/">Home</router-link></li>
      <li><router-link to="/member-list">리스트</router-link></li>
      <li><router-link to="/join-form">상품등록</router-link></li>
      <li><router-link to="/update-form">상품정보수정</router-link></li>

    </ul>
  </div>
</nav>
   </div> 
</template>

<script>
export default {
  
}
</script>
<style scoped>

</style>
