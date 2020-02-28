
<template>
	<div>
		<Breadcrumb :style="{margin: '24px 0'}">
			<BreadcrumbItem>Home</BreadcrumbItem>
		</Breadcrumb>
		<Content>
			index
	    </Content>
	</div>
</template>

<script>
import ajax from 'js/ajax'
export default {
  components:{
    
  },
  mounted(){
  	//ajax.get('af', {}, {loading: true})
  }
}
</script>

<style>


</style>