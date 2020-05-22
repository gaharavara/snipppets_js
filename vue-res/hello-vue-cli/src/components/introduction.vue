<template>
    <p>This is {{ name }} !</p>
</template>

<script>
    export default {
        name:"introduction",
        data: function(){
            return {
                name: "Abhishek"
            }
        }
    }
</script>

<style scoped>

p {
    color: orange;
}

</style>