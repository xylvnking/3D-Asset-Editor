# 3D asset editor and material creator 

React | Three.js | Gatsby

[Visit the live site](www.thiswillbearealwebsite.com)

![](/src/images/3DSS2.png)

# About

As a hobbyist 3D artist, I immediately knew I had to learn Three.js and include it in my projects whenever appropriate. I knew how intensive 3D rendering could be, so I chose to do a small project which focused more on data and ui than on something more 3D intensive like an rpg game or ar experience.

This program allows you to manipulate a 3D model I made of a ring. I made it using Blender and included a default realistic texture I made for it using Adobe Substance Painter. I converted the asset to JSX and after some fiddling was able to get it looking great within a Three.js canvas.

You can rotate the object, the camera, select the ambient light color & intensity, and for each of the 4 meshes you're able to show their wireframes, hide them, display the default texture, or create your own by using react-colourful's picker and sliders for roughness and metalness.

# Learned how to:

- Convert models created in Blender into valid JSX allowing them to be used like react components using React Three Fiber
- Control the rotation of the object and camera orbit
- Manage performance costs of certain features and decide what needs to be included vs what can
- Add background stars with drei to give the scene some non-performance-intensive depth
- Use react-colourful to get and set hex colour data
- Control an objects material using state being set from a complex ui
- Work with CSS modules
- Implement a loader to make it obvious the 3D model is loading in and that the app isn't just broken

# Next steps:

- Allowing users to upload their own models would take this to the next level. Right now all it can do is show models that I convert and include within the source files myself, which has very limited utility. It was my first Three.js project, so I kept the scope small.

- During the process of building this I was doing some 3D work for an advertising company and it would have been extremely handy to let them position and render the model to show me exactly what angles and framing they wanted, so that I could go back into Blender and do that in full quality. Enabling users to download a png of the canvas would be great.