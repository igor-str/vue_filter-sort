<template>
  <div id="list">
    <!--<div class="row">-->
      <!--<div class="col-10">-->
        <!--<h3 class="text-center">List:</h3>-->
        <!--<input v-model="searchString" type="text" class="form-control" placeholder="search person">-->
        <!--<ul class="list-group"-->
            <!--v-if="stateEl === true"-->
            <!--v-for="person in searchPerson">-->
          <!--<li class="list-group-item">-->
            <!--{{person.name}};-->
            <!--{{person.age}} years old-->
          <!--</li>-->
        <!--</ul>-->
        <!--<div class="">-->
          <!--<h3 class="text-center">Grouped:</h3>-->
          <!--<ul class="list-group" v-for="groups in groupedEL">-->
            <!--<li class="list-group-item">{{groups.name}} - {{groups.group}}</li> &lt;!&ndash;[0].name&ndash;&gt;-->
          <!--</ul>-->
        <!--</div>-->
        <!--<div class="">-->
          <!--<h3 class="text-center">Sorted:</h3>-->
          <!--<ul class="list-group" v-for="item in sortedEL">-->
            <!--<li class="list-group-item">{{item.name}}</li>-->
          <!--</ul>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="col-2">-->
        <!--<h3 class="text-center">Events:</h3>-->
        <!--<ul class="list-group">-->
          <!--<li class="list-group-item">-->
            <!--<button type="button" class="btn btn-primary" @click="viewEl">List</button>-->
          <!--</li>-->
          <!--<li class="list-group-item">-->
            <!--<button type="button" class="btn btn-primary" @click="groupEL">Group</button>-->
          <!--</li>-->
          <!--<li class="list-group-item">-->
            <!--<button type="button" class="btn btn-primary" @click="sortEl">Sort</button>-->
          <!--</li>-->
        <!--</ul>-->
      <!--</div>-->
    <!--</div>-->
    <ul class="list-group" v-for="item in dataJson">
      <li class="list-group-item">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "list",
    // props: ['myData'],
    data() {
      return {
        // dataJson: this.myData,
        // searchString: '',
        stateEl: false,
        groupedEL: {},
        sortedEL: {}
      }
    },
    // computed: {
    //   searchPerson() {
    //     let dataArr = this.dataJson.filter((person) => {
    //       return person.name.toLowerCase().includes(this.searchString.toLowerCase());
    //     });
    //     return dataArr
    //   }
    // },
    computed: mapState({
      dataJson: 'myData'
    }),
    methods: {
      // updatename: function() {
      //   this.myname = "new name" ;
      //   this.$emit("nameupdated", this.myname);
      // }
      viewEl() {
        this.stateEl = !this.stateEl
      },
      groupEL() {
        let groupedByType = this._.groupBy(this.dataJson, 'group');
        this.groupedEL = groupedByType['group 1'];
      },
      sortEl() {
        let sortRes = this._.sortBy(this.dataJson, 'name');
        this.sortedEL = sortRes;
      }
    }
  }
</script>

<style scoped>

</style>
