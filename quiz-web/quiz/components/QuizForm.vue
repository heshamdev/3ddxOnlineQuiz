<template>
	<div >
				<div class="col l7 push-l2 s12" v-for="(quiz,i) in all">
						 <div class="grey-text padd">
					       <p>Please, asnwer the following Questions:-</p>
				         </div>
				         <div class="row padd" v-for ="(qs,j) in quiz.questions">
				         	<el-card class="box-card">
							  <div slot="header" class="clearfix">
							    <span><h5><strong>{{ j+1 }}. </strong>{{ qs.content }}</h5></span>
							  </div>
							  <div  class="text item" v-if="qs.answers.length != 0">
								 <el-radio-group v-model="answers[j]">
								  <el-radio :label="1">{{ qs.answers[0].content}}</el-radio>
								  <el-radio :label="2">{{ qs.answers[1].content}}</el-radio>
								  <el-radio :label="3">{{ qs.answers[2].content}}</el-radio>
								  <el-radio :label="4">{{ qs.answers[3].content}}</el-radio>
								</el-radio-group>
							  </div>
							</el-card>
				         </div>
						</div>
						<div class="padd">
							<el-button type="primary" class="right" @click="makeCorrection()">SUBMIT</el-button>
							<el-dialog
							  title="Result"
							  :visible.sync="dialogVisible"
							  width="90%">
							  <span>
                                 <table v-if="all.length != 0 && dialogVisible== true">
							        <thead>
							          <tr>
							              <th>Question</th>
							              <th>Your Answer</th>
							              <th>Correct Answer</th>
							          </tr>
							        </thead>

							        <tbody>
							          <tr v-for="(q,i) in correction">
							            <td>{{ i+1 }} - {{ all[0].questions[q.question].content}}</td>
							            <td :class="q.class">{{ all[0].questions[q.question].answers[q.answer-1].content }}</td>
							            <td :class="q.class">{{all[0].questions[q.question].answers[all[0].questions[q.question].answer - 1].content }}</td>
							          </tr>
							        </tbody>
							      </table>
							      <h5>Total Points : {{ points }}</h5>
							  </span>
							  <span slot="footer" class="dialog-footer">
							    <el-button @click="dialogVisible = false">Cancel</el-button>
							    <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
							  </span>
							</el-dialog>
						</div>
					</div>
	</div>
</template>

<script>
export default {

  name: 'QuizForm',
  props : {
    quiz_id : {
    	type : String,
    	required : true
    }
  },
  data() {
    return {
     answers : [],
     correct : [],
     correction : [],
     all : [],
     points : 0,
     dialogVisible : false
    };
  },
  methods : {
    makeCorrection(){
    	this.correction = []
    	this.points = 0
    		let i;   
    		 this.dialogVisible = true
	for (let i = 0; i < this.answers.length; i++) {
    		 if(this.correct[i] == this.answers[i]){
    		 	this.correction.push({question: i, status : 'right' , answer : this.answers[i] , class : 'green white-text'})
    		 	this.points++;
    		 }else{
    		 	this.correction.push({question : i, status : 'wrong' , answer : this.answers[i] , class : 'red white-text' , correctAns : this.correct[i]})
    		 }
    	}
    }
  },
  mounted(){
  	this.$axios({
  		url : '/quiz',
  		method : 'get',
  		params : {_id : this.quiz_id}
  	}).then(response =>{
  		let data = response.data
       this.all.push(data)
       let i;
       for (i = 0; i < data.questions.length; i++) {
       	  this.correct.push(data.questions[i].answer)
       }
  	});
  }
};
</script>

<style lang="css" scoped>
.padd {
	padding :  5px;
}
</style>
