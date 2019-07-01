<template>
<div>
<Nav></Nav>
    <table class="w3-table w3-bordered w3-striped w3-border test w3-hoverable">
     <tbody>
        <tr class="w3-green">
            <th>모델명</th>
            <th>종류</th>
            <th>대여가격</th>
            <th>브랜드</th>
            <th>대여여부</th>
        </tr>
      </tbody>
      <tbody>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>삭제버튼 </td>
        <td>수정버튼 </td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
      <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
   <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
     <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      </tbody>
    </table>
    <Footer></Footer>
</div>
</template>
<script>
import Nav from '@/components/common/Nav.vue'
import Footer from '@/components/common/Footer.vue'
export default {
  components: {
    Nav, Footer
  }
}
</script>
<style scoped>
</style>