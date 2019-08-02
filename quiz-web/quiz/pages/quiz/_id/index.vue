<template>
	<div>
		<nav-bar/>
      <div class="container" style="padding-top : 50px">
      	<quiz-form :quiz_id = "this.$route.params.id"/>
      </div>
	</div>
</template>

<script>
import NavBar from '~/components/Navbar'
import QuizForm from '~/components/QuizForm'
export default {

  name: 'index',
  components : { NavBar , QuizForm },
   head() {
    return {
      title: '3DDX | Quiz'
        }
    },
  data() {
    return {
    };
  },
  mounted(){
  }
};
</script>

<style lang="css" scoped>
</style>
