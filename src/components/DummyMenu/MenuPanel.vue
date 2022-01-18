<template>
    
    <div id="menupanel">
    <div class="grpobf" v-bind:class="{ active: group === 'three-projected-material' }" v-on:click="group=''"></div>
        <div id="panel">
            <strong class="header">Футболка «Прямая»</strong>
            <span class="info">100% хлопок</span>
            <ul class="tabs">
                <li v-bind:class="{ active: activeTab === 'variants' }" v-on:click="setTabActive('variants')">Элементы</li>
                <li v-bind:class="{ active: activeTab === 'colors' }" v-on:click="setTabActive('colors')">Цвет</li>
                <li v-bind:class="{ active: activeTab === 'prints' }" v-on:click="setTabActive('prints')">Принты</li>
            </ul>
            <div id="variants" class="subtabs" v-bind:class="{ active: activeTab === 'variants' }">
                <div class="elements">
                    <span class="elements-header">Вырез</span>
                    <div class="elements_value">
                        <div class="element" v-bind:class="{ active: neckline === 'virez0mal' }" v-on:click="necklinereload('virez0mal')">
                            <img src="@/assets/demo-e.png" width="124" height="122" alt="Стандарт узкий">
                            <span>Вырез 1</span>
                        </div>
                        <div class="element" v-bind:class="{ active: neckline === 'virezvmin' }" v-on:click="necklinereload('virezvmin')" >
                            <img src="@/assets/demo-e.png" width="124" height="122" alt="Стандарт узкий">
                            <span>Вырез 2</span>
                        </div>
                    </div>
                    <a href="#" class="showall" v-on:click="remove">+ Показать все</a>
                </div>
                <div class="elements">
                    <span class="elements-header">Рукава</span>
                    <div class="elements_value">
                        <div class="element" v-bind:class="{ active: sleeves === 'rykavabolpramiye' }" v-on:click="sleevesreload('rykavabolpramiye')">
                            <img src="@/assets/demo-e.png" width="124" height="122" alt="Стандарт узкий">
                            <span>Большие прямые</span>
                        </div>
                        <div class="element" v-bind:class="{ active: sleeves === 'rykavabolyzkiye' }" v-on:click="sleevesreload('rykavabolyzkiye')">
                            <img src="@/assets/demo-e.png" width="124" height="122" alt="Стандарт узкий">
                            <span>Большие узкие</span>
                        </div>
                        <div class="element" v-bind:class="{ active: sleeves === 'rykavamalpramiye' }" v-on:click="sleevesreload('rykavamalpramiye')">
                            <img src="@/assets/demo-e.png" width="124" height="122" alt="Стандарт узкий">
                            <span>Маленькие прямые</span>
                        </div>
                    </div>
                    <a href="#" class="showall" v-on:click="remove">+ Показать все</a>
                </div>
            </div>

            <div id="colors" class="subtabs" v-bind:class="{ active: activeTab === 'colors' }">
                <div id="colorsblock">
                    <span id="colors_header" class="elements-header">
                        {{ colorelementlist[this.colorchanger].title }}
                    </span>
                    <ul id="colorchecker">
                        <li v-for="item in colorlist" :key="item.color">
                            <a href="#" v-bind:style="{ 'background-color': item.color }" :title="item.title" v-bind:class="{ active: isActiveColor(item.color) }" v-on:click="changecolor(item.color)"></a>
                        </li>
                    </ul>
                </div>
                <div class="elements">
                    <div class="elements_value">
                        <div class="element" v-for="(value, index) in colorelementlist" :key="index" v-bind:class="{ active: index === colorchanger }" v-on:click="changecolorchanger(index)">
                            <img :src="value.image" width="124" height="122" :alt="value.title">
                            <span>{{ value.name }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div id="prints" class="subtabs" v-bind:class="{ active: activeTab === 'prints' }">
                <div class="elements prints">
                    <div class="controls">
                        <span class="c-header" style="float:left">Место размещения: </span>
                        <span class="c-control"><v-select :clearable="false" :searchable="false" :options="print_direction_options" :get-option-label="(option) => option.title" :value="print_direction"  @input="setSelectedPrintDir" /></span>
                    </div>
                    <div class="elements_value">
                        <span style="position: relative;">
                        <div class="element"  v-on:click="group = 'three-projected-material'"  v-bind:class="{ active: print[print_direction.value] === 'three-projected-material.png' || print === 'three-projected-material-5.png' || print === 'three-projected-material-6.png' }">
                            <img src="/prints/three-projected-material.png" alt="Стандарт узкий">
                            <span>+800 р</span>
                        </div>
                        <div class="group" v-click-outside="onClickOutside('three-projected-material')" v-bind:class="{ active: group === 'three-projected-material' }">
                            <svg  class="close" v-on:click="group = ''" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.6574 12.6567L1.34367 1.34297" stroke="#202122" stroke-linecap="round"/>
                            <path d="M12.6563 1.34297L1.34262 12.6567" stroke="#202122" stroke-linecap="round"/>
                            </svg>


                            <span class="header">Варианты отображения</span>
                            <div class="elements_value">
                                <div class="element" v-bind:class="{ active: print[print_direction.value] === 'three-projected-material.png' }" v-on:click="setprint('three-projected-material.png')">
                                    <img src="/prints/three-projected-material.png" alt="Стандарт узкий">
                                    <span>+800 р</span>
                                </div>
                                <div class="element" v-bind:class="{ active: print[print_direction.value] === 'three-projected-material-5.png' }"  v-on:click="setprint('three-projected-material-5.png')" >
                                    <img src="/prints/three-projected-material-5.png" alt="Стандарт узкий">
                                    <span>+800 р</span>
                                </div>
                                <div class="element" v-bind:class="{ active: print[print_direction.value] === 'three-projected-material-6.png' }"  v-on:click="setprint('three-projected-material-6.png')" >
                                    <img src="/prints/three-projected-material-6.png" alt="Стандарт узкий">
                                    <span>+800 р</span>
                                </div>
                            </div>
                        </div>
                        </span>
                        
                        <div class="element" v-bind:class="{ active: print[print_direction.value] === 'uv.jpg' }"  v-on:click="setprint('uv.jpg')" >
                            <img src="/prints/uv.jpg" alt="Стандарт узкий">
                            <span>+800 р</span>
                        </div>
                        
                    </div>
                    <a href="#" class="showall" v-on:click="remove">+ Показать все</a>
                </div>
            </div>

        </div>
        <div id="menufooter">
            <a href="#" class="footerbutton" v-on:click="setprint('')" v-bind:class="{ active: activeTab === 'prints' }">Сбросить принт</a>
            <a href="#" class="footerbutton" v-on:click="remove" v-bind:class="{ active: activeTab === 'variants' }">Сбросить элементы</a>
            <a href="#" class="footerbutton" v-on:click="removeColor" v-bind:class="{ active: activeTab === 'colors' }">Сбросить цвета</a>
        </div>
    </div>
</template>

<script>
    import vSelect from 'vue-select';
    import { directive } from "vue3-click-away";
    export default {
        name: 'MenuPanel',
        components: {
            'v-select': vSelect
        },
        directives: {
            'click-outside': {
                beforeMount(el, binding, vnode) {
                    el.clickOutsideEvent = function(event) {
                    if (!(el === event.target || el.contains(event.target)) && !el.classList.contains('active')) {
                        binding.value(event, el);
                    }
                    };
                    document.body.addEventListener('click', el.clickOutsideEvent);
                },
                unmounted(el) {
                    document.body.removeEventListener('click', el.clickOutsideEvent);
                }
                }
        },
        data () {
            return {
                activeTab: 'variants', //Активная вкладка табов
                sleeves: 'rykavabolpramiye', //Активные рукава
                neckline: 'virez0mal', //Активный вырез
                
                //Цвета
                colorelementlist: {
                    all: { name: 'Основной', title: 'Основной цвет', image: require('@/assets/demo-e.png'), activecolor: '#ffffff', is_base_color: true },
                    body: { name: 'Тело', title: 'Цвет тела', image: require('@/assets/demo-e.png'), activecolor: '#ffffff', is_base_color: true },
                    sleeves: { name: 'Рукава', title: 'Цвет рукавов', image: require('@/assets/demo-e.png'), activecolor: '#ffffff', is_base_color: true },
                    neckline: { name: 'Вырез', title: 'Цвет выреза', image: require('@/assets/demo-e.png'), activecolor: '#ffffff', is_base_color: true },
                },
                colorlist: [
                    { color: '#ffffff', title: 'Белый'},
                    { color: '#000000', title: 'Чёрный'},
                    { color: '#ff0000', title: 'Красный'},
                    { color: '#0038FF', title: 'Синий'},
                    { color: '#00FF29', title: 'Зелёный'},
                    { color: '#FFF61B', title: 'Жёлтый'},
                    { color: '#FF1BE8', title: 'Фиолетовый'},
                ],
                colorchanger: 'all', //Активный блок смены цветов
                print_direction_options: [
                    { value: 'front', title: 'Передний' }, 
                    { value: 'back', title: 'Задний' },
                    { value: 'left', title: 'Левый' },
                    { value: 'right', title: 'Правый' },
                ],
                print_direction: { value: 'front', title: 'Передний' },
                print: {
                    front: 'ww',
                    back: '',
                    left: '',
                    right: ''
                },
                group: ''
            }
        },
        methods: {
            onClickOutside (event, grp) {
                //alert(this.group);
               // if(this.group === grp)
                    //this.group = "";
            },
            setSelectedPrintDir: function(value) {
                if(!value) return;
               this.print_direction = value;
            },
            setprint: function(printname)
            {
                this.group = '';
                if(this.print[this.print_direction.value] === printname)
                    this.print[this.print_direction.value] = '';
                else
                    this.print[this.print_direction.value] = printname;
                this.$eventHub.$emit('dummy:dummy_setprint', this.print_direction.value, this.print[this.print_direction.value]);
            },
            remove: function () { //TODO
                alert('Не работает');
            },
            sleevesreload: function (model) { //Смена активных рукавов
                this.sleeves = model;
                this.$eventHub.$emit('dummy:dummy_reload_tshirt', 'sleeves', this.sleeves);
            },
            necklinereload: function (model) { //Смена активного выреза
                this.neckline = model;
                this.$eventHub.$emit('dummy:dummy_reload_tshirt', 'neckline', this.neckline);
            },
            setTabActive: function (tab) { //Переключение табов
                this.activeTab = tab;
            },
            isActiveColor: function (color) { //Активный цвет
                return this.colorelementlist[this.colorchanger].activecolor === color;
            },
            changecolor: function (color) { //Смена цвета
                if (this.colorchanger === 'all') {
                    this.changeAllColor(color);
                }
                else {
                    if (this.colorelementlist[this.colorchanger].activecolor !== color) {
                        this.colorelementlist[this.colorchanger].is_base_color = false;
                    }
                    this.colorelementlist[this.colorchanger].activecolor = color;
                    this.$eventHub.$emit('dummy:changecolor_tshirt', this.colorchanger, color);
                }
            },
            changeAllColor: function (color) { //Смена цвета всех элементов
                for (var model in this.colorelementlist) {
                    if (model === 'all') {
                        continue;
                    }
                    if (this.colorelementlist[model].is_base_color) {
                        this.colorelementlist[model].activecolor = color;
                        this.$eventHub.$emit('dummy:changecolor_tshirt', model, color);
                    }
                }
                this.colorelementlist['all'].activecolor = color;
            },
            changecolorchanger: function (model) { //Переключение модели для смены цвета
                this.colorchanger = model;
            },
            removeColor: function () { //Сброс цветов
                let color = '#ffffff';
                for (var model in this.colorelementlist) {
                    this.colorelementlist[model].is_base_color = true;
                    this.colorelementlist[model].activecolor = color;
                    if (model !== 'all') {
                        this.$eventHub.$emit('dummy:changecolor_tshirt', model, color);
                    }
                }
            }
        }
    }
    

    import 'vue-select/dist/vue-select.css';
</script>

<style>
.grpobf {
    position: absolute; 
    left: 0; 
    right: 0; 
    top: 0;
    bottom: 0;
    display: none;
    z-index: 998;
}
.grpobf.active {
    display: block;
}
    .vs__dropdown-toggle {
        border: 0;
    }
    .controls {
        vertical-align: middle;
    }
    .c-header {
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 25px;
    }
    #menupanel {
        width: 66%;
        display: inline-block;
        vertical-align: top;
        position: relative;
        height: calc(100vh - 89px);
    }

    a.showall {
        display: block;
        text-align: center;
        background: #FFFFFF;
        border: 0.5px solid #202122;
        box-sizing: border-box;
        border-radius: 10px;
        line-height: 30px;
        height: 30px;
        text-decoration: none;
        margin: 0 22px;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
    }

    #panel {
        padding-top: 25px;
    }
    #panel .header {
        display: block;
        text-align: center;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 21px;
    }
    #panel .info {
        display: block;
        text-align: center;
    }
    a.footerbutton {
        display: none;
        text-align: center;
        text-decoration: none;
        height: 100%;
        line-height: 44px;
        font-weight: 600;
    }
    a.footerbutton.active {
        display: block;
    }
    ul.tabs {
        display: block;
        width: 100%;
        background: #419FE3;
        padding: 0;
        margin-bottom: 25px;
    }
    ul.tabs li {
        display: inline-block;
        font-weight: 600;
        font-size: 18px;
        color: #fff;
        width: 33.3%;
        margin-top: 1px;
        line-height: 45px;
        text-align: center;
        cursor: pointer;
    }
    ul.tabs li.active {
        background: #fff;
        color: #000;
        border-radius: 10px 10px 0 0;
    }
    ul.tabs li:not(.active):hover {
        color: #000;
    }
    ul.tabs li:first-child.active {
        border-radius: 0 10px 0 0;
    }
    ul.tabs li:last-child.active {
        border-radius: 10px 0 0 0;
    }

    .subtabs {
        display: none;
        height: calc(100vh - 284px);
        overflow-y: auto;
        overflow-x: hidden;
        -webkit-overflow-scrolling: touch;
        -moz-overflow-scrolling: touch;
        -ms-overflow-scrolling: touch;
        -o-overflow-scrolling: touch;
        overflow-scrolling: touch;
    }
    .subtabs.active {
        display: block;
    }
    .subtabs::-webkit-scrollbar {
        -webkit-appearance: none;
        width: 7px;
        height: 204px;
    }
    .subtabs::-webkit-scrollbar-thumb {
        background-color: rgba(208, 203, 190, 0.25);
        border-radius: 25px;
    }

    .elements {
        margin-bottom: 22px;
        cursor: pointer;
    }
    .elements-header {
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 25px;
        padding-left: 30px;
        display: block;
        margin-bottom: 5px;
    }


    .elements_value {
        padding-left: 11px;
        padding-bottom: 11px;
    }

    .elements_value .element {
        width: 187px;
        height: 209px;
        /*background: yellow;*/
        border: 1px solid rgba(96, 93, 89, 0.5);
        border-radius: 10px;
        margin: 11px;
        text-align: center;
        display: inline-block;
    }

    .prints .elements_value .element {
        width: 94px;
        height: 105px;
        position: relative;
        display: inline-flex;
        overflow: hidden;
    }
    .elements_value .element.active {
        border: 1px solid #419FE3;
    }
    .elements_value .element:not(.active):hover {
        border: 1px solid #202122;
    }
    .elements_value .element img {
        display: block;
        margin: 15px auto 25px;
        width: 124px;
        height: 122px;
    }

    .prints .group {
        display: none;
        position: absolute;
        width: 270px;
        padding-top: 18px;
        border: 1px solid #605D5980;
        background: white;
        border-radius: 10px;
        top: -43px;
        left: 50px;
        z-index: 999;
    }
    .group .close {
        position: absolute;
        right: 8px;
        top: 5px;
    }

    .prints .group.active {
        display: block;
    }

    .prints .elements_value .element img {
        max-width: 100%;
        height: auto;
        margin: auto;
        display: inline;
        
    }

    .prints .elements_value .element span {
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        text-align: center;
    } 

    #colors .elements_value .element {
        width: 123px;
        height: 160px;
        margin: 13px 7px;
    }
    #colors .elements_value .element img {
        width: 106px;
        height: 113px;
        margin: 12px auto 7px;
    }

    #colorsblock,
    #menufooter {
        background: #fff;
        filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.25));
    }
    #colorchecker {
        display: block;
        padding-left: 25px;
        width: 100%;
        padding-bottom: 15px;
    }
    #colorchecker li {
        display: inline-block;
        margin-right: 10px;
    }
    #colorchecker li a {
        display: block;
        width: 32px;
        height: 32px;
        background: red;
        border: 1px solid rgba(96, 93, 89, 0.5);
        border-radius: 50%;
    }
    #colorchecker li a.active {
        border: 2px solid #419FE3;
        position: relative;
    }
    #colorchecker li a.active:before {
        content: "";
        display: block;
        width: 11px;
        height: 9px;
        position: absolute;
        top: 10px;
        left: 8px;
        background-image: url('~@/assets/icon.svg');
        background-size: contain;
    }


</style>