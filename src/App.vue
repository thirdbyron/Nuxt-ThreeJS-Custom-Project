<template>
  <div id="app">
      <div id="control">
          <header>
                <div class="wrapper">
                  <div class="navs">
                    <router-link to="/">dummy</router-link>
                    <router-link to="/newsc">scene</router-link>
                  </div>
                  <a href="/" id="logo"></a>
                </div>
          </header>
          <div class="b-content">
            <router-view></router-view>
          </div>  
          <footer>
              <span>© 2022 Enjecy. Все права защищены.</span>
          </footer>
      </div>
  </div>
</template>

<script>
    import DummyControl from "@/components/DummyControl.vue";

    export default {
        name: 'App'
    }
</script>

<style>
.navs {
    float: right;
    text-align: right;
}
.b-content {
    min-height: calc(100vh - 89px)
}
.navs a {
    margin-left: 10px;
}
* {
    box-sizing: border-box;
    font-family: 'Open Sans';
    color: #202122;
    letter-spacing: 0.005em;
    font-size: 14px;
    line-height: 19px;
}
*:focus {
    outline: none;
}
body {
    margin: 0;
    padding: 0;
}
#control {
    width: 39%;
}
.wrapper {
    width: 100%;
    padding: 10px;
}
header {
    width: 100%;
    height: 56px;
    background: #2F2F2F;
}
#logo {
    display: block;
    width: 22px;
    height: 31px;
    background-image: url('~@/assets/logo.svg');
    background-size: contain;
    margin-left: 18px;
}

footer {
    width: 100%;
    height: 33px;
    background: #2F2F2F;
    text-align: center;
}
footer span {
    color: #FFFFFF;
    line-height: 33px;
    opacity: 0.5;
}


@media (max-width: 1700px) {
    #control,
    #dummy {
        width: 50%;
    }
}
</style>