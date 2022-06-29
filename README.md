# Jewelry Brand Landing Page

## Technologies used:
- Gatsby
- Three.js
- React Three Fiber
- React Three Drei
- CSS modules
- [react-colorful](https://github.com/omgovich/react-colorful)

# Really nice fonts used:
[Space Mono](https://fonts.google.com/specimen/Space+Mono?preview.text=Embrace%20an%20opulent%20future.&preview.text_type=custom#standard-styles)
```shell
<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');
font-family: 'Space Mono', monospace;
</style>
```

[Cinzel](https://fonts.google.com/specimen/Cinzel?preview.text=Embrace%20an%20opulent%20future.&preview.text_type=custom)

# Static Image
when using gatsby static image and css modules, doing the after selector thing gotta be a certain way

```shell
.productCard { # container
    background-color: aqua;
    width: 400px;
    height: 400px; 
}

.productCard Img { #this is how you reference <StaticImage />
    width: 100px;
}
```

# css modules
When you're using a css module, if you just try to use a default selector like h1 {} you'll end up affecting all the h1

You want to use classes and specify that way

# background images

To make background images resize properly (especially when zooming out far to emulate ultrawide) use the following technique

```shell
.container {
    # height: 100vh; # 
    
}

.sectionWithImage {
    background: url("../image.jpg") no-repeat center center;
    background-size: cover; # this makes sure that it always covers - the image doesn't resize with the page
    height: 100%;
    
}
```

# accesing file directories

in order to access the images folder from Customizer.js the following is required:
```
src
│      
│
└───Components
│   │   
│   │
│   └───CustomizerFolder
│       │   Customizer.module.css
|       |   background: url("../../images/DotPattern.png");
│   
└───images
    │   DotPattern.png
```


# asset links
[Dot Pattern](https://www.toptal.com/designers/subtlepatterns/dot-grid-pattern/)
[Topography Pattern](https://www.toptal.com/designers/subtlepatterns/topography/)
[css box shadows](https://getcssscan.com/css-box-shadow-examples)

# error messages learned
```shell
# this happened because I imported a color picker and tried to use it inside of my React Three Fiber <Canvas />
Div is not part of the THREE namespace! Did you forget to extend?
```

# misc resources/links
[react-three-fiber by example]("https://onion2k.github.io/r3f-by-example/)
[Unsplash Free Photos](https://unsplash.com/)
[Intro to react three fiber](https://youtu.be/DPl34H2ISsk)
[xr thing](https://levar.io/home)
[google icons png svg](https://fonts.google.com/icons?icon.query=arrow+down)
[Insane r3f example of crytal swarm](https://codesandbox.io/s/r3f-particles-i-q4d2v?file=/src/index.js)
[GLTF drag and drop loader by Don McCurdy](https://gltf-viewer.donmccurdy.com/)

# Getting value from slider to affect R3F object rotation

```shell
# define state for each axis

export default function Customizer3D() {

    # define state for each axis
    const [xRotation, setXRotation] = useState(0)

    return (
        <div>
            <Canvas>
                <mesh rotation={[xRotation, yRotation, zRotation]}> 
                    # <geometry, light, material etc />
                </mesh>
            </Canvas>
            <input 
                id="typeinp" 
                type="range" 
                min="0" max="11" # for whatever reason, this is the value that allows for a "full rotation"
                value={xRotation} # sets the slider to xRotation state default value (0) on load
                onChange={(e) => setXRotation(e.target.value)} # using slider value to drive xRotation
                step=".01" # smaller = smoother
            />
        </div>
    )
```


# React Three Fiber Notes
[This is a sandbox for an obj/gltf/stl exporter which would be amazing to implement in conjunction with the ability to upload files. this allow the user to upload a mode, alter it with my tool, and download the new version. My tool obviously doesn't do anything fancy but if it did yanno](https://codesandbox.io/s/react-three-fiber-to-stl-or-gltf-ey0wt?from-embed=&file=/src/world/exporter/Exporter.tsx)

[really cool emissive example with unreal pass threejs](https://threejs.org/examples/webgl_postprocessing_unreal_bloom.html)