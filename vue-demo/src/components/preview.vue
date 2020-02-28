<template>
<div>
<!--area1_4573 start-->
    <div>
        <!--Breadcrumb start-->
        <Breadcrumb>
            <BreadcrumbItem to="">Home</BreadcrumbItem>
            <BreadcrumbItem>about</BreadcrumbItem>
        </Breadcrumb>
        <!--searchBar start-->
        <SearchBar 
            :searchElems="searchElems" 
            :serachValue="serachValue"
            @search="search"
            @reset="reset"
        />
        <!--table start-->
        <Table :columns="columns1" :data="tableData"></Table>
        <Page 
            v-if="pageTotal"
            show-sizer 
            show-total
            :total="pageTotal" 
            :current="pageData.pageNo" 
            :pageSize="pageData.pageSize" 
            @on-change="pageChange" 
            @on-page-size-change="pageSizeChange"  />
    </div>
<!--area1_4573 end-->


</div>
</template>
<script>
import SearchBar from '@feHelper/searchBar1-base/index.vue';
export default {
  components: {
    SearchBar
  },

  data() {
    return {
      pageData: {
        pageNo: 1,
        pageSize: 20
      },
      pageTotal: 100,
      searchElems: [{
        title: '选项',
        key: 'business',
        type: 'radio',
        items: [{
          label: '选项1',
          value: 1
        }, {
          label: '选项2',
          value: 2
        }]
      }, {
        title: '区域',
        key: 'cityId',
        type: 'select',
        items: [{
          label: '区域1',
          value: 1
        }, {
          label: '区域2',
          value: 2
        }]
      }, {
        key: 'idcName',
        type: 'input',
        title: '机房名称',
        placeholder: '输入关键字进行搜索'
      }],
      serachValue: {
        business: 2
      },
      columns1: [{
        title: 'Name',
        key: 'name'
      }, {
        title: 'Age',
        key: 'age'
      }],
      tableData: [{
        name: 'John Brown',
        age: 18
      }]
    };
  },

  methods: {
    getTableData() {
      let sendData = { ...this.pageData,
        ...this.serachValue
      };
      ajax.post('api', sendData).then(res => {
        this.pageTotal = pageTotal;
        this.tableData = [];
      });
    },

    pageChange(v) {
      this.pageData.pageNo = v;
      this.getTableData();
    },

    pageSizeChange(v) {
      this.pageData.pageSize = v;
      this.pageData.pageNo = 1;
      this.getTableData();
    },

    search(v) {
      this.serachValue = v;
      this.pageData.pageNo = 1;
      this.getTableData();
    },

    reset(v) {
      this.serachValue = v;
      this.pageData.pageNo = 1;
      this.getTableData();
    }

  }
};
</script>
<style>

</style>