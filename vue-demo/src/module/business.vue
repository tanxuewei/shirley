<template>
<div>
    {{ msg }} {{ count }} {{ doneTodoCount }}
    <button @click="increment">我是业务button</button>
    <button @click="incrementAsync">action BTN</button>
    <button @click="showModal">弹框</button>
    <sl-tabs v-model="activeName">
      <sl-tab-panel label="tab1" name="first">
        tab1
      </sl-tab-panel>
      <sl-tab-panel label="tab2" name="second">
        tab2
      </sl-tab-panel>
      <sl-tab-panel label="tab3" name="third">
        tab3
      </sl-tab-panel>
    </sl-tabs>
    <sl-modal
      title="我是一个弹框"
      @input="open"
      ref="modal">
      body1
    </sl-modal>
  <!--button1 start-->
	<Button>Default</Button>
<!--button1 end-->

<!--breadcrumb1 start-->
	<Breadcrumb>
	    <BreadcrumbItem to="">Home</BreadcrumbItem>
	    <BreadcrumbItem to="">Components</BreadcrumbItem>
	    <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
	</Breadcrumb>
<!--breadcrumb1 end-->

<!--area1 start-->
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
<!--area1 end-->

</div>
</template>




<script>
import SearchBar from '@feHelper/searchBar1-base/index.vue';
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
export default {
  name: 'business',
  computed: { // ...mapState({
    //   count: state => state.count
    // })
    // 如果不改变名称就用下面的写法
    ...mapState(['count']),
    ...mapGetters(['doneTodoCount'])
  },

  data() {
    return {
      msg: '大家好，我是业务',
      activeName: 'second',
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

  methods: { // 直接映射为store.commit
    // ...mapMutations([
    //   'INCREMENT_COUNT'
    // ]),
    // incrementAsync () {
    //   this.$store.dispatch('incrementAsync')
    // },
    ...mapActions(['increment', 'incrementAsync']),

    showModal() {
      this.$refs.modal.show();
    },

    open(flag) {
      console.log(flag);
    },

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

  },

  mounted() {
    let self = this;
  },

  components: {
    SearchBar
  }
};
</script>

