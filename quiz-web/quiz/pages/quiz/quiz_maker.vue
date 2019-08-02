<template>
	<div>
		<nav-bar/>
		<div class="container" style="padding-top : 50px">	
			<make-quiz/>
		</div>
	</div>
</template>

<script>
import NavBar from '~/components/Navbar'
import MakeQuiz from '~/components/MakeQuiz'
export default {

  name: 'quizMaker',
  components : {
  	NavBar,
  	MakeQuiz
  },
   head() {
    return {
      title: '3DDX | Quiz Maker'
     }
    },
  data() {
    return {

    };
  },
};
</script>

<style lang="css" scoped>
</style>
