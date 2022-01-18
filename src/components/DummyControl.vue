<template>
  <div id="dummycontrol">
          <dummymenu/>
          <dummy/>
  </div>
</template>

<script>
    import DummyMenu from "@/components/DummyMenu.vue";
    import Dummy3D from "@/components/Dummy3D.vue";

    export default {
        name: 'DummyControl',
        components: {
            dummy: Dummy3D,
            dummymenu: DummyMenu,
        }
    }
</script>