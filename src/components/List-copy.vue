<template>
  <div>
    <input v-model="searchString" type="text" class="form-control">

    <ul class="list-group" v-for="person in searchPerson">
      <li class="list-group-item">
        {{person.name}};
        {{person.age}} years old
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "list",
        props: ['myData'],
        data () {
          return {
            dataJson : this.myData,
            searchString: ''
          }
        },
        computed: {
          searchPerson() {
            let dataArr = this.dataJson.filter((person) => {
              return person.name.toLowerCase().includes(this.searchString.toLowerCase());
            });
            return dataArr
          }
        },
        methods: {
          updatename: function() {
            this.myname = "new name" ;
            this.$emit("nameupdated", this.myname);
          }
        }
    }
</script>

<style scoped>

</style>
