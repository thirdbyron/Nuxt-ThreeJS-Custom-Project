<template>
    <div id="cscene"></div>
</template>

<script>
import * as THREE from "three-full";

export default {
        name: 'CScene',
        data() {
            return {
                renderer: null,
                scene: null,
                camera: null,
                controls: null,
                loader: null,
                dummy_man: null,
                dummy_woman: null,
            }
        },
        methods: {
            init: function() {
                this.scene = new THREE.Scene();
                const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444 );
                hemiLight.position.set( 0, 20, 0 );
                this.scene.add( hemiLight );
                this.camera = new THREE.PerspectiveCamera(
                    45,
                    this.$el.offsetWidth / this.$el.offsetHeight,
                    1,
                    100
                );
                this.camera.position.set( 0, 3.7, 1 );
                this.scene.background = new THREE.Color(0xc4c4c4);

                this.renderer = new THREE.WebGLRenderer( { antialias: true } )
                this.renderer.setSize(this.$el.offsetWidth, this.$el.offsetHeight)
                this.renderer.shadowMap.enabled = true;
                this.$el.appendChild(this.renderer.domElement);

                this.controls = new THREE.OrbitControls( this.camera, this.renderer.domElement );
                this.controls.enablePan = true;
                this.controls.screenSpacePanning = true;
                this.controls.enableZoom = true;
                this.controls.enableRotate = true;
                this.controls.minPolarAngle = Math.PI / 2.2; //Math.PI/2;
                this.controls.maxPolarAngle = Math.PI / 1.8; //Math.PI/2;
                this.controls.target.set( 0, 1, 0 );


                this.controls.update();

            },
           
        },
        mounted() {
                this.init();
        }
}


</script>

<style>
    #cscene {
        position: absolute;
        right: 0;
        top: 51px;
        left:0;
        bottom: 33px;
    }

</style>