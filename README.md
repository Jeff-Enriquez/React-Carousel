<h1>Getting Started</h1>
<p>This is an carousel for React. It is a component that can be copied and pasted into your project. There are four different props that can be passed into the carousel: images, arrows, dots, and delay.</p>
<b>Before you get started</b>
Be sure to place the 'left-arrow.svg' in your './public/images' folder. For more information <a href='#style-arrows'>click here</a>
<ul>
  <li><a href='#images'>Set Images</a> <span style='color:red'>- required</span></li>
  <li><a href='#delay'>Set Delay</a></li>
  <li><a href='#arrows'>Toggle Arrows</a></li>
  <li><a href='#dots'>Toggle Dots</a></li>
  <li><a href='#style'>STYLING</a></li>
</ul>

<h4 id='images'>Set Images</h4>
<p>The images property is the only required property. The images property is used for the images. The images property is an array of objects and needs at least two objects. It is required that each object have a key named 'src' and an optional key 'alt'.</p>
<p>Example:</p>
<p>&#60; Carousel images={ [ { src: 'path-name', alt: 'description of image' }, ..., { src: 'path-name' } ] }/></p>

<h4 id='delay'>Set Delay</h4>
<p>This property determines how much time it takes for the next image to display. If no property is set the default is 3500</p>
<p>Example:</p> 
<p>&#60; Carousel delay={ 5000 } /></p>

<h4 id='arrows'>Toggle Arrows</h4>
<p>Arrows will be displayed by default. They can be toggled off</p>
<p>Example:</p> 
<p>&#60; Carousel arrows={ false } /></p>

<h4 id='dots'>Toggle Dots</h4>
<p>Dots will be displayed by default. They can be toggled off</p>
<p>Example:</p> 
<p>&#60; Carousel dots={ false } /></p>

<h4 id='style'>STYLING</h4>
<p>The carousel will expand to the size of it's container. The images are set to 'object-fit: cover'. This can be changed in the '.img' selector. If you would like to position something between the displayed image and the buttons you may use the 'z-index' values of -700 through (not including) 0. If you'd like to position something over the buttons you may use a z-index greater than 0.</p>
<p>I've included a sass file if you'd like to use that instead of css</p>