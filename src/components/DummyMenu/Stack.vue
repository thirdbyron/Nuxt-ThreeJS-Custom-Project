<template>
    <div>
        <div id="stack"></div>
        <div id="menuleftbuttom">
            <a href="#" class="footerbutton" v-on:click="remove">Удалить все</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Stack',
        data () {
            return {}
        },
        methods: {
            remove: function () {
                alert('Не работает');
            }
        }
    }
</script>

<style scoped>
    #stack {
        width: 100%;
        min-height: calc(100vh - 202px);
        background: #F8F8F8;
        box-shadow: inset 0 -1px 2px rgba(0, 0, 0, 0.25), inset 0 1px 2px rgba(0, 0, 0, 0.25);
    }
    #menuleftbuttom {
        width: 100%;
        height: 44px;
        background: red;
    }
    a.footerbutton {
        display: block;
        text-align: center;
        text-decoration: none;
        height: 100%;
        line-height: 44px;
        font-weight: 600;
    }
</style>