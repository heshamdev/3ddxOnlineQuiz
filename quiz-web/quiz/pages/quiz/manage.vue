<template>
	<div>
		<nav-bar/>
		<div class="container" style="padding-top : 50px">	
			<div class="row" v-if="notPublished.length != 0">
				<table>
        <thead>
          <tr>
              <th>Quiz Name</th>
              <th>Teacher Name</th>
              <th>Manage</th>
              <th>Publish</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for = "(quiz,i) in notPublished">
            <td >{{ quiz.name }}</td>
            <td >{{ quiz.teacherName }}</td>
            <td><el-button type="primary" icon="el-icon-edit" @click="dialogVisible = true , setIndex(i)" circle></el-button></td>
            <td><el-button type="success" @click="publish(i)" icon="el-icon-check" circle></el-button></td>
          </tr>
        </tbody>
      </table>
            
			</div>
      <div class="row" v-if="notPublished.length == 0">
        <h3 class="center grey-text">There's No Not Published Quizs.</h3>
      </div>
		</div>
		<el-dialog
		  title=""
		  :visible.sync="dialogVisible"
		  width="90%">
		  <div v-if="dialogVisible == true"><manage-quiz :init="notPublished[index]"/></div>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="dialogVisible = false">Cancel</el-button>
		  </span>
		</el-dialog>
	</div>
</template>

<script>
import NavBar from '~/components/Navbar'
import MakeQuiz from '~/components/MakeQuiz'
import ManageQuiz from '~/components/ManageQuiz'
import config from '~/config'
export default {

  name: 'manage',
  components : {
  	NavBar,
  	MakeQuiz,
  	ManageQuiz
  },
   head() {
    return {
      title: '3DDX | Manage Quiz'
       }
    },
  data() {
    return {
     notPublished : [],
     index : null,
     dialogVisible : false
    };
  },
  methods :{
   publish(index){
       this.$axios({
          url :'/quiz/publish',
          method : 'put',
          data : {_id : this.notPublished[index]._id}
       }).then(response =>{
           this.$notify.success({
		          title: 'Success',
		          message: 'This Quiz was successfully Published',
		          showClose: true
      		  });
            	this.$router.push(`/quiz/${this.notPublished[index]._id}`)
       });
   },
   setIndex(index){
   	this.index = index;
   }
  },
  mounted(){
  	this.$axios({
  		url : '/quiz/not_published',
  		method : 'get'
  	}).then(response => {
  		this.notPublished = response.data
  	});
  }
};
</script>

<style lang="css" scoped>
</style>
