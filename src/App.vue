<template>
  <div id="app">
    <div class="container">
      <list :myData="myData"></list>
      <!--<div class="row">-->
        <!--<div class="col-10">-->
          <!--<list v-if="stateEl === true" :myData="myData"></list>-->
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

        <!--<ul class="list-group" v-for="groups in groupedEL">-->
          <!--<li class="list-group-item">{{groups[0].name}}</li>-->
        <!--</ul>-->

      <!--</div>-->
    </div>
  </div>
</template>

<script>
import json from './data/data.json'
import list from './components/List'

export default {
  name: 'app',
  data () {
    return {
      myData: json,
      // stateEl: false,
      // groupedEL: {}
    }
  },
  computed: {

  },
  methods: {
    // viewEl() {
    //   this.stateEl = !this.stateEl
    // },
    // groupEL() {
    //   let groupedByType = this._.groupBy(this.myData, 'group');
    //   this.groupedEL = groupedByType; //return
    //   console.log(this.groupedEL['group 1']);
    //   return this.groupedEL['group 1'].forEach(function(item, index, array) {
    //       console.log(item, index);
    //       return item
    //   });
    // },
    sortEl() {
      let source = this.myData;
      // let sortRes = _.sortBy( source, function (item) {
      //   return item.group;
      // })
    }
  },
  components: {
    list
  }
}
</script>

<style lang="scss">
  li {
    button {
      width: 100%;
    }
  }
  input {
    margin: 20px 0;
  }
</style>
