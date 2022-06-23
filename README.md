# Jewelry Brand Landing Page

## Technologies used:
- Gatsby
- Three.js
- React Three Fiber
- React Three Drei
- CSS modules

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