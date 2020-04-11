<h1>Getting Started</h1>
<p>This is an image carousel for React. It is a component that can be copied and pasted into your project. There are four different props that can be passed into the carousel: paths, arrows, dots, and delay.</p>
<ul>
  <li><a href='#paths'>paths</a> <span style='color:red'>- required</span></li>
  <li><a href='#delay'>delay</a></li>
  <li><a href='#arrows'>arrows</a></li>
  <li><a href='#dots'>dots</a></li>
</ul>

<h4 id='paths'>Paths</h4>
<p>The path property is the only required property. The path property is used for the images. The path property is an array of objects and needs at least two objects. It is required that each object have a key named 'src' and an optional key named 'alt'.</p>
<p>Example:</p>
<p>&#60; Carousel path={ [ { src: 'path-to-image', alt: 'description of image' }, ..., { src: 'path-to-image' } ] }/></p>

<h4 id='Delay'>Delay</h4>
<p>This property determines how much time it takes for the next image to display. If no property is set the default is 3500</p>
<p>Example:</p> 
<p>&#60; Carousel delay={ 5000 } /></p>

<h4 id='arrows'>Arrows</h4>
<p>Arrows will be displayed by default. They can be toggled off</p>
<p>Example:</p> 
<p>&#60; Carousel arrows={ false } /></p>

<h4 id='dots'>Dots</h4>
<p>Dots will be displayed by default. They can be toggled off</p>
<p>Example:</p> 
<p>&#60; Carousel dots={ false } /></p>