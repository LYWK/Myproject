<template>
<div>
  <Nav></Nav>
  <form>
    <div class="form-group">
      <label for="email"> 가격:</label>
      <input type="text" class="form-control" id="email" placeholder="Enter email">
    </div>
    <div class="form-group">
      <label for="pwd">대여 여부:</label>
      <input type="password" class="form-control" id="pwd" placeholder="Enter password">
    </div>
   
    <button class="btn btn-default" @click="put">수 정</button>

  </form>
  <Footer></Footer>
</div>
</template>

<script>
import Nav from '@/components/common/Nav.vue'
import Footer from '@/components/common/Footer.vue'
import axios from 'axios'
export default {
  components: {
    Nav, Footer
  },

}
</script>

<style scoped>
</style>