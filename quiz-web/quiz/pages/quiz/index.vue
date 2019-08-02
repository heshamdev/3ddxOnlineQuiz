<template>
	<div>
		<nav-bar/>
			<div class="container" style="padding-top : 50px">
			<div class="row" v-if="allQuizes.length != 0">
            <h3 class="grey-text center">Choose Quiz</h3>
        <div class="row" v-for = "(quiz,i) in allQuizes">
          <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>{{ quiz.name }}</span>
            <el-button @click="takeMeToQuiz(quiz._id)" style="float: right; padding: 3px 0" type="text">Take this Quiz</el-button>
          </div>
        </el-card>
        </div>   
      </div>
      <div class="row center grey-text" v-if="allQuizes.length == 0">
          <h3>There is No Published Quizs.</h3>
      </div>
			</div>
	</div>
</template>

<script>
import NavBar from '~/components/Navbar'
import UserForm from '~/components/UserForm'
import QuizForm from '~/components/QuizForm'
import MakeQuiz from '~/components/MakeQuiz'
export default {
  name: 'index',
  components : {
  	NavBar,
  	UserForm,
  	QuizForm,
  	MakeQuiz
  },
   head() {
    return {
      title: '3DDX | Quiz List'
       }
    },
  data() {
    return {
    	allQuizes : []
    };
  },
  methods : {
      takeMeToQuiz(id){
      	this.$router.push(`quiz/${id}`);
      }
  },
  mounted(){
  	this.$axios({
  		url : '/quiz/published',
  		method : 'get'
  	}).then(response => {
  		this.allQuizes = response.data
  	});
  }
};
</script>

<style lang="css" scoped>
.el-card__body {
    padding: 0px !important;
}
</style>
