<template>
	<div>
		<div class="row">
					<div class="col l7 push-l2 s12" v-if="AsStudent">
						 <div class="grey-text padd">
					       <p>Please, fill the following Student informations :-</p>
				         </div>
						<el-input placeholder="Name" v-model="inputForm.name" class="padd"></el-input>
						<el-input placeholder="ID" v-model="inputForm.id" class="padd"></el-input>
						<el-input placeholder="Age" v-model="inputForm.age" class="padd"></el-input>
						<el-input placeholder="Faculty" v-model="inputForm.faculty" class="padd"></el-input>
						<div class="padd">
							<el-button type="primary" class="right">SUBMIT</el-button>
						</div>
					</div>
					<div class="col l7 push-l2 s12" v-if="AsTeacher">
						 <div class="grey-text padd">
					       <p>Please, fill the following informations :-</p>
				         </div>
						<el-input placeholder="Name" v-model="inputForm.name" class="padd"></el-input>
						<el-input placeholder="ID" v-model="inputForm.id" class="padd"></el-input>
						<el-input placeholder="Age" v-model="inputForm.age" class="padd"></el-input>
						<el-input placeholder="Faculty" v-model="inputForm.faculty" class="padd"></el-input>
						<div class="padd col">
							<el-button type="primary" class="right">SUBMIT</el-button>
						</div>
					</div>

				</div>
	</div>
</template>

<script>
export default {

  name: 'UserForm',
   props : {
    AsStudent : {
      type : Boolean,
      required : false
    },
    AsTeacher: {
      type : Boolean,
      required : false
    }
  },
  data() {
    return {
     inputForm : {
     	name : '',
     	id : '',
     	age : '',
     	faculty : ''
     }
    };
  },
};
</script>

<style lang="css" scoped>
.padd {
	padding :  5px;
}
</style>
