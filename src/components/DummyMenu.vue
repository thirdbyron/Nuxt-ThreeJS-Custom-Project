<template>
    <div id="leftmenu">
        <div id="menuleft">
            <sexchecker/>
            <stack/>
        </div>
        <menupanel/>
    </div>
</template>

<script>
    import SexChecker from "@/components/DummyMenu/SexChecker.vue";
    import Stack from "@/components/DummyMenu/Stack.vue";
    import MenuPanel from "@/components/DummyMenu/MenuPanel.vue";

    export default {
        name: 'Fitting',
        data () {
            return {}
        },
        components: {
            sexchecker: SexChecker,
            stack: Stack,
            menupanel: MenuPanel,
        }
    }
</script>

<style>
    #menuleft {
        width: 34%;
        display: inline-block;
        vertical-align: top;
    }
</style>