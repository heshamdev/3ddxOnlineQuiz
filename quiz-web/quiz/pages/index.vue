<template>
  <div class="">
    <nav-bar/>
     <div class="container" style="padding-top : 150px">
       <div class="center grey-text row" >
         <h3>Welcome to 3DDXs | <strong class="blue-text">Q</strong>uiz</h3>
         <p> <ul>
           <li>* Click on "Quiz Maker", which will open the "Create Quiz" page</li>
           <li>* Add a question (the question, the possible answers, the correct answers, and the explanation).</li>
           <li>* Save the quiz and come back later to continue working on it (if necessary).</li>
           <li>* Publish it when it is ready through (Manage Quiz).</li>
         </ul></p>
       </div>
        <div class="row center" style="padding-top : 50px">
          <el-button type="primary" @click= "toQuiz()">Choose Quiz</el-button>
          <el-button type="primary" @click= "quizMaker()">Quiz Maker</el-button>
          <el-button type="primary" plain>Github</el-button>
        </div>
      </div>
  </div>
</template>

<script>
import NavBar from '~/components/Navbar'

export default {
  components: {
    NavBar
  },
   head() {
    return {
      title: '3DDX|Quiz'
    }
  },
  props : {
  },
  data(){
    return {
    }
  },
  methods : {
    toQuiz(){
      this.$router.push('/quiz')
    },
    quizMaker(){
      this.$router.push('/quiz/quiz_maker')
    }
  }
}
</script>

<style>

</style>
