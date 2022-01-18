<template>
    <div id="dummy"></div>
</template>

<script>
    import {
        Scene,
        HemisphereLight,
        PerspectiveCamera,
        Color,
        WebGLRenderer,
        CameraHelper,
        OrbitControls,
        MeshStandardMaterial,
        GLTFLoader,
        TextureLoader,
        BufferGeometryUtils,
        Vector2,
        Mesh,
        ImageUtils
    } from "three-full";

    import *    as THREE from "three-full";
    import ProjectedMaterial from 'three-projected-material';
    export default {
        name: 'Dummy3D',
        data() {
            return {
                renderer: null,
                scene: null,
                camera: null,
               
                controls: null,
                loader: null,
                dummy_man: null,
                dummy_woman: null,
               
                body: null,
                dummy_tshirt: {
                    sleeves_models: {},
                    sleeves: null,
                    sleeves_color: null,
                    neckline_models: {},
                    neckline: null,
                    neckline_color: null,
                    body_models: {},
                    body: null,
                    body_color: null,
                    sleeves_print: 'uv.jpg',
                    body_print: 'uv.jpg',
                    back_print: 'uv.jpg',
                    body_pcamera: null,
                    back_pcamera: null,
                    left_pcamera: null,
                    right_pcamera: null
                },
            }
        },
        methods: {
            init: function () {
                this.scene = new Scene()

                const hemiLight = new HemisphereLight( 0xffffff, 0x444444 );
                hemiLight.position.set( 0, 20, 0 );
                this.scene.add( hemiLight );

                this.loader = new GLTFLoader();

                this.loader.load( 'models/chel.glb', function ( gltf ) {
                    t.dummy_man = gltf.scene;
                    t.$eventHub.$emit('dummy:dummy_load');
                    /*t.loader.load( 'models/Xbot.glb', function ( gltf ) {
                        t.dummy_woman = gltf.scene;
                        t.$eventHub.$emit('dummy:dummy_load');
                    });*/
                });


                var t = this;
                var acon = console;

                this.camera = new PerspectiveCamera(
                    45,
                    this.$el.offsetWidth / this.$el.offsetHeight,
                    1,
                    100
                );

               

                this.camera.position.set( 0, 3.7, 1 );
                
                this.scene.background = new Color(0xc4c4c4); //new THREE.TextureLoader().load(require('@/assets/dummy-bg.png'));
                this.renderer = new WebGLRenderer( { antialias: true } )
                this.renderer.setSize(this.$el.offsetWidth, this.$el.offsetHeight)
                //this.renderer.outputEncoding = 3001; //THREE.sRGBEncoding;
                this.renderer.shadowMap.enabled = true;
                this.$el.appendChild(this.renderer.domElement)
                
                this.dummy_tshirt.body_pcamera = new PerspectiveCamera(
                    20,
                    1 / 1,
                    1,
                    5
                );

                this.dummy_tshirt.body_pcamera.position.set( 0.01, 1.25, 1 );
                this.dummy_tshirt.body_pcamera.updateProjectionMatrix();
                this.scene.add(this.dummy_tshirt.body_pcamera);


                this.dummy_tshirt.back_pcamera = new PerspectiveCamera(
                    20,
                    1 / 1,
                    1,
                    5
                );

                this.dummy_tshirt.back_pcamera.position.set( 0.01, 1.25, -1 );
                this.dummy_tshirt.back_pcamera.rotation.y = Math.PI;
                this.dummy_tshirt.back_pcamera.updateProjectionMatrix();
                this.scene.add(this.dummy_tshirt.back_pcamera);




                this.dummy_tshirt.left_pcamera = new PerspectiveCamera(
                    8,
                    1 / 1,
                    .5,
                   1.1
                );
                this.dummy_tshirt.left_pcamera.position.set( -1, 1.3, -0.06 );
                this.dummy_tshirt.left_pcamera.lookAt(1, 1, 0);
                this.dummy_tshirt.left_pcamera.updateProjectionMatrix();
                this.scene.add(this.dummy_tshirt.left_pcamera);


                this.dummy_tshirt.right_pcamera = new PerspectiveCamera(
                    8,
                    1 / 1,
                    .5,
                   1.1
                );

                this.dummy_tshirt.right_pcamera.position.set( 1, 1.3, -0.06 );
                this.dummy_tshirt.right_pcamera.lookAt(0, 1.15, 0);
                this.dummy_tshirt.right_pcamera.updateProjectionMatrix();
                this.scene.add(this.dummy_tshirt.right_pcamera);
               

                //let helper = new CameraHelper(this.dummy_tshirt.back_pcamera);
                //this.scene.add(helper);
                this.controls = new OrbitControls( this.camera, this.renderer.domElement );
                this.controls.enablePan = true;
                this.controls.screenSpacePanning = true;
                this.controls.enableZoom = true;
                this.controls.enableRotate = true;
                this.controls.minPolarAngle = Math.PI / 2.2; //Math.PI/2;
                this.controls.maxPolarAngle = Math.PI / 1.8; //Math.PI/2;
                this.controls.target.set( 0, 1, 0 );


                this.controls.update();
            },
            aconsole : function() {return console },
            animate: function () {
                requestAnimationFrame(this.animate)
                this.renderer.render(this.scene, this.camera)
            },
            resize: function () {
                this.renderer.setSize(this.$el.offsetWidth, this.$el.offsetHeight);
                this.camera.aspect = this.$el.offsetWidth / this.$el.offsetHeight;
                this.camera.updateProjectionMatrix();
                this.renderer.render(this.scene, this.camera);
            },
            reloadsex: function (sex) {
                if (this.body) {
                    this.scene.remove(this.body);
                }
                if (sex === 'man') {
                    this.body = this.dummy_man;
                }
                else {
                    this.body = this.dummy_woman;
                }
                this.scene.add( this.body );
            },
            reloadtshirt: async function (element, newmodel, color = false) {
                 if (!(element in this.dummy_tshirt)) return;
                 let t = this;
                 if (!(newmodel in this.dummy_tshirt[element + '_models'])) {
                        var gltf =await new Promise((resolve, reject) => {
                                this.loader.load('models/' + newmodel + '.glb', data=> resolve(data), null, reject);
                            });
                         t.dummy_tshirt[element + '_models'][newmodel] = gltf.scene;
                 }
                this.scene.remove(this.dummy_tshirt[element]);
                this.dummy_tshirt[element] = this.dummy_tshirt[element + '_models'][newmodel];
                this.scene.add(this.dummy_tshirt[element]);
                if (color) {
                    this.dummy_tshirt[element + '_color'] = color;
                }
                if(element == "neckline")
                {
                    if (this.dummy_tshirt[element + '_color']) {
                        this.changecolor(element, this.dummy_tshirt[element + '_color']);
                    }
                }
                else
                {
                    if(element === "body")
                        this.setprint('back', this.dummy_tshirt[element + '_print'], false);
                    if(element === "sleeves")
                        this.setprint('right', this.dummy_tshirt[element + '_print'], false);
                }            
            },
            changecolor: function (element, color) {
                this.dummy_tshirt[element + '_color'] = color;
                let newcolor = new MeshStandardMaterial({color: Number(this.dummy_tshirt[element + '_color'].replace('#', '0x'))});
                this.dummy_tshirt[element].traverse(function (object3D){
                    if (object3D.isMesh) {
                        object3D.material.color.set(color );
                    }
                });
            },
            setprint: function(position, printname, unload = true) {
                if(unload && printname === this.print)
                {
                    this.print = '';
                }
                else
                {
                    this.print = printname;
                }
                let t = this;
                //todo find a better way to load texture to this material on the fly
                let printpath = this.print === '' ? '' : "prints/" + this.print;
                let texture = new TextureLoader().load(printpath);
                let camera = null;
                let element = 'body';
                let cam = this.dummy_tshirt.body_pcamera;
                let matindex = 0;
                switch (position) {
                    case 'front':
                        break;
                    case 'back':
                        cam = this.dummy_tshirt.back_pcamera;
                        break;
                    case 'left':
                        cam = this.dummy_tshirt.left_pcamera;
                        element = 'sleeves';
                        break;
                    case 'right':
                        cam = this.dummy_tshirt.right_pcamera;
                        element = 'sleeves';
                        break;
                    default:
                        return;
                }
                let material = new ProjectedMaterial({
                        camera: cam,
                        texture,
                        textureScale: .8,
                        flatShading: false,
                        });
                    this.dummy_tshirt[element].material = material;

                    this.dummy_tshirt[element].traverse(function (object3D){
                        if (object3D.isMesh) {
                            object3D.material = material;
                            if(t.dummy_tshirt[element + '_color'])
                            {
                                object3D.material.color.set(t.dummy_tshirt[element + '_color']);
                            }
                            material.project(object3D);
                        }
                    });
            }
        },
        mounted() {
            this.init();
            this.animate();
            window.addEventListener(
                "resize",
                () => {
                    this.resize();
                },
                true
            );
            this.$eventHub.$on('dummy:dummy_load', () => {
                this.reloadsex('man');
                this.reloadtshirt('body', 'body', '#ffffff');
                this.reloadtshirt('neckline', 'virez0mal', '#ffffff');
                this.reloadtshirt('sleeves', 'rykavabolpramiye', '#ffffff');
            }).$on('sexchecker', (value) => {
                this.reloadsex(value);
            }).$on('dummy:dummy_reload_tshirt', (element, newmodel) => {
                this.reloadtshirt(element, newmodel);
            }).$on('dummy:changecolor_tshirt', (element, color) => {
                this.changecolor(element, color);
            }).$on('dummy:dummy_setprint', (element, printname) => {
                this.setprint(element, printname);
            });
        }
    }
</script>

<style>
    #dummy {
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        width: 61%;
    }
    #dummy:before {
        position: absolute;
        top: 21px;
        content: "";
        margin: 0 auto;
        display: block;
        left: 0;
        right: 0;
        width: 163px;
        height: 50px;
        background-image: url('~@/assets/logo-dummy.png');
        background-size: contain;
    }
</style>
