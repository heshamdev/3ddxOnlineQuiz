<template>
	<div>
		<div class="row">
			<h3 class="grey-text ">Quiz Maker</h3>
							
			<div class="col s12">
				<div class="row">
					<div class="col l6 s12">
						<el-form :model="questionForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
							<el-form-item  label="Quiz name" prop="quiz_name">
						    	<el-input autofocus :disabled="hide" v-model="questionForm.quiz_name"></el-input>
						  	 </el-form-item>
							 <el-form-item label="Question" prop="content">
						    	<el-input v-model="questionForm.content"></el-input>
						  	 </el-form-item>
						  	 <el-form-item label="Answer A" prop="answers[0].content">
						    	<el-input v-model="questionForm.answers[0].content"></el-input>
						  	 </el-form-item>
						  	 <el-form-item label="Answer B" prop="answers[1].content">
						    	<el-input v-model="questionForm.answers[1].content"></el-input>
						  	 </el-form-item>
						  	 <el-form-item label="Answer C" prop="answers[2].content">
						    	<el-input v-model="questionForm.answers[2].content"></el-input>
						  	 </el-form-item>
						  	 <el-form-item label="Answer D" prop="answers[3].content">
						    	<el-input v-model="questionForm.answers[3].content"></el-input>
						  	 </el-form-item>
						  	 <el-form-item label="" prop="answer">
						    	<el-select class="" v-model="questionForm.answer" placeholder="Correct Answer">
								    <el-option
								      v-for="item in options"
								      :key="item.value"
								      :label="item.label"
								      :value="item.value">
								    </el-option>
								  </el-select>
								  <el-button type="primary" class="right" @click="addQuestion('ruleForm')" icon = "el-icon-plus">Add</el-button>
						  	 </el-form-item>
						</el-form>
					</div>
					
	                <div class="col l6 s12 padd" v-if = "questions.length != 0" style="overflow:scroll; height : 400px; border : 1px solid #409EFF; border-radius : 5px; width : 400px;">
	                	<div class="right">
					 	 <el-button @click="saveQuiz" v-if = "questions.length != 0" type="primary" class="" icon = "el-icon-plus">Save</el-button>
					 </div>
	                	<el-table
	                	v-if = "questions.length !=0"
					    :data="questions"
					    style="width: 100%">
					    <el-table-column type="expand">
					      <template slot-scope="props">
					        <p><strong>A.</strong> <span :class="[{'green-text' : props.row.answer == 1, } , {'red-text' : props.row.answer != 1}]">{{ props.row.answers[0].content }}</span></p>
					        <p><strong>B.</strong> <span :class="[{'green-text' : props.row.answer == 2, } , {'red-text' : props.row.answer != 2}]">{{ props.row.answers[1].content }}</span></p>
					        <p><strong>C.</strong> <span :class="[{'green-text' : props.row.answer == 3, } , {'red-text' : props.row.answer != 3}]">{{ props.row.answers[2].content }}</span></p>
					        <p><strong>D.</strong> <span :class="[{'green-text' : props.row.answer == 4, } , {'red-text' : props.row.answer != 4}]">{{ props.row.answers[3].content }}</span></p>
					      </template>
					    </el-table-column>
					    <el-table-column
					      label="Question Content"
					      prop="content">
					    </el-table-column>
					  </el-table>
					  <div class="row center grey-text" v-if = "questions.length == 0">
					  	   <h3>There is No Questions.</h3>
					  </div>
	                 </div>
	                </div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import config from '~/config'
export default {

  name: 'MakeQuiz',

  data() {
    return {
    	
    	 questions : [],
    	 hide : false,
    	questionForm : {
    		        quiz_name : '',
		    		content : '',
		    		answer : null,
		    		answers : [
                        { content : '' , number : 1},
                        { content : '' , number : 2},
                        { content : '' , number : 3},
                        { content : '' , number : 4}
		    		],
		    	        },
      options: [{
		          value: 1,
		          label: 'A'
		        }, {
		          value: 2,
		          label: 'B'
		        }, {
		          value: 3,
		          label: 'C'
		        }, {
		          value: 4,
		          label: 'D'
		        }],
		          rules : {
	   	 quiz_name:
                 { 
            	   required: true, message: 'Quiz name is required!', trigger: 'change' 
                 },
    	 content:
                 { 
            	   required: true, message: 'Question content is required!', trigger: 'change' 
                 },
         answer1:
            	  { 
            	   required: true, message: 'Answer content is required', trigger: 'change' 
            	  },
         answer2:
            	  { 
            	   required: true, message: 'Answer content is required', trigger: 'change' 
            	  },
         answer3:
            	  { 
            	   required: true, message: 'Answer content is required', trigger: 'change' 
            	  },
         answer4:
            	  { 
            	   required: true, message: 'Answer content is required', trigger: 'change' 
            	  },
        answer:
            	  { 
            	   required: true, message: 'Answer content is required', trigger: 'change' 
            	  },
    },
        
    };
  },
  computed : {

  },
  methods : {
  	addQuestion(formName){
  		this.$refs[formName].validate((valid) => {
          if (valid) {
            let Obj = this.questionForm
  			this.questions.push(JSON.parse(JSON.stringify(Obj)))
  			this.hide = true
          } else {
                  this.$notify.error({
		          title: 'Error',
		          message: 'This Question Unsuccessfully Added',
		          showClose: true
       			 });
            return false;
          }
        });
  	},
  	saveQuiz(){
  		this.$axios({
  			url : '/quiz',
  			method : 'post',
  			data : {name : this.questionForm.quiz_name , questions : this.questions}
  		}).then(response =>{
            if(response.status == 200)
            {
            	this.$notify.success({
		          title: 'Success',
		          message: 'This Quiz was successfully Saved',
		          showClose: true
      		  });
            	this.$router.push('/')
            }else{
             this.$notify.error({
		          title: 'Error',
		          message: 'This Quiz Unsuccessfully Saved',
		          showClose: true
        });
            }
  		});
  	}
  }
};
</script>

<style lang="css" scoped>
.padd {
	padding :  5px;
}
</style>
