<template>
    <div>
        <button @click="initGame()"> Start game</button>
        <Map> </Map>
    </div>

</template>

<script>
    import Game from './../../classes/Game'
    import Map from './../../components/Map'

    export default {
        name: 'App',
        components:{ Map },
        methods: {
            initGame() {
                let newGame = new Game('fdp', 'smb');

            }
        }
    }
</script>

<style>

</style>
