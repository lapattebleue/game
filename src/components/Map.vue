<template>
    <div>
        <div v-for="cell in newMap">
            lol
        </div>
    </div>
</template>

<script>
  import Map from './../classes/Map'

    export default {
        name: "Map",
        data(){
            return{
                newMap: new Map(10,10)
            }
        },
        mounted(){
        }

    }
</script>

<style scoped>

</style>
