<blockquote class="imgur-embed-pub" lang="en" data-id="a/5XmaU6t" data-context="false" ><a href="//imgur.com/a/5XmaU6t"></a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>
<h1>Getting Started</h1>
<p>This is an carousel for React. It is a component that can be copied and pasted into your project. There are four different props that can be passed into the carousel: images, arrows, dots, and delay.</p>
<b>Before you get started</b>
<p>Be sure to place the 'left-arrow.svg' in your './public/images' folder.</p>
<br/>
<p><b>How To Use: </b></p>
<ul>
  <li><a href='#images'>Set Images</a> <span style='color:red'>- required</span></li>
  <li><a href='#delay'>Set Delay</a></li>
  <li><a href='#arrows'>Toggle Arrows</a></li>
  <li><a href='#dots'>Toggle Dots</a></li>
  <li><a href='#style'>STYLING</a></li>
</ul>

<h2 id='images'>Set Images</h2>
<p>The images property is the only required property. The images property is used for the images. The images property is an array of objects and needs at least two objects. It is required that each object have a key named 'src' and an optional key 'alt'.</p>
<p><b>Example: </b>&#60; Carousel images={ [ { src: 'path-name', alt: 'description of image' }, ..., { src: 'path-name' } ] }/></p>

<h2 id='delay'>Set Delay</h2>
<p>This property determines how much time it takes for the next image to display. If no property is set the default is 3500</p>
<p><b>Example: </b>&#60; Carousel delay={ 5000 } /></p>

<h2 id='arrows'>Toggle Arrows</h2>
<p>Arrows will be displayed by default. They can be toggled off</p>
<p><b>Example:</b> &#60; Carousel arrows={ false } /></p>

<h2 id='dots'>Toggle Dots</h2>
<p>Dots will be displayed by default. They can be toggled off</p>
<p><b>Example: </b> &#60; Carousel dots={ false } /></p>

<h2 id='style'>STYLING</h2>
<p>The carousel will expand to the size of it's container. The images are set to 'object-fit: cover'. This can be changed in the '.img' selector. If you would like to position something between the displayed image and the buttons you may use the 'z-index' values of -700 through (not including) 0. If you'd like to position something over the buttons you may use a z-index greater than 0.</p>
<p>I've included a sass file if you'd like to use that instead of css</p>