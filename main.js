var nav =  `
<nav>
<div class="logo">
<img src="https://themeatelier.net/site-templates/appiya/img/logo.png" alt="logo">
</div>
<ul>
<li><a href="./index.html">Home</a></li>
<li><a href="./feature.html">Feature</a></li>
<li><a href="./price.html">Price</a></li>
<li><a href="./contact-form.html">Contact</a></li>
</ul>
</nav>
`

var footer = `
<div class="container">
<div class="d-flex footer-inner" style="background-color: rgb(22, 22, 22); color: white;">
&copy;  Copyright All Right Reserved by <span style="color: aqua;"> MindInstall </span> 2023
</div>
</div>
`

document.getElementById("nav").innerHTML = nav


document.getElementById("footer").innerHTML = footer

document.getElementById("link").innerHTML = `<link rel="stylesheet" href="./utility.css">`