<template>
    <div id="sexcheker">
        <label class="checkbox-green">
            <input type="checkbox" v-on:change="sexchange" v-model="sexcheck">
            <span class="checkbox-green-switch" data-label-on="Женщина" data-label-off="Мужчина"></span>
        </label>
    </div>
</template>

<script>
    export default {
        name: 'SexChecker',
        data () {
            return {
                sexcheck: false,
            }
        },
        methods: {
            sexchange: function () {
                /* Вызовем событие смены манекена */
                this.$eventHub.$emit('sexchecker', (this.sexcheck ? 'woman' : 'man'));
            }
        }
    }
</script>

<style scoped>
#sexcheker {
    width: 229px;
    height: 69px;
    /*background: red;*/
    text-align: center;
    padding-top: 21.5px;
}

.checkbox-green {
    display: inline-block;
    height: 26px;
    line-height: 26px;
    width: 182px;
    position: relative;
    vertical-align: middle;
    user-select: none;
    text-align: left;
}
.checkbox-green .checkbox-green-switch {
    display: inline-block;
    height: 26px;
    width: 100%;
    position: relative;
    background: #419FE3;
    transition: background-color 0.3s cubic-bezier(0, 1, 0.5, 1);
    border: 0.5px solid #202122;
    border-radius: 13px;
}
.checkbox-green .checkbox-green-switch:before {
    content: attr(data-label-on);
    display: inline-block;
    width: 50%;
    position: absolute;
    left: 43%;
    text-align: center;
    color: #fff;
    font-size: 14px;
    line-height: 24px;
    font-style: normal;
    font-weight: 600;
    padding-left: 10px;
}
.checkbox-green .checkbox-green-switch:after {
    content: attr(data-label-off);
    display: inline-block;
    width: 50%;
    position: absolute;
    z-index: 5;
    text-align: center;
    line-height: 24px;
    font-size: 14px;
    font-weight: 600;
    color: #000;
    transition: transform 0.3s cubic-bezier(0, 1, 0.5, 1);
    background: #FFFFFF;
    border-radius: 12px;
}
.checkbox-green input[type="checkbox"] {
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    z-index: -1;
    opacity: 0;
}
.checkbox-green input[type="checkbox"]:checked + .checkbox-green-switch:before {
    content: attr(data-label-off);
    left: 0;
    padding-left: 0;
}
.checkbox-green input[type="checkbox"]:checked + .checkbox-green-switch:after {
    content: attr(data-label-on);
    color: #000;
    transform: translate3d(100%, 0, 0);
}

/* Hover */
.checkbox-green input[type="checkbox"]:not(:disabled) + .checkbox-green-switch:hover {
    cursor: pointer;
}


/* Disabled */
.checkbox-green input[type=checkbox]:disabled + .checkbox-green-switch {
    opacity: 0.6;
    filter: grayscale(50%);
}
</style>