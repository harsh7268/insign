import React from 'react';
import download from '../images/download.png'
import '../css/Download.css'

export default function Download() {
  return (
    <div>
      <section class="download">
    <div class="download-content">
        <h1>Download Our App</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptatibus! Quasi, illo iste quidem repudiandae cupiditate voluptates quam omnis reiciendis.<br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt enim debitis obcaecati officiis placeat recusandae illum consequatur sit, voluptas dolore in iure accusantium quae iusto expedita nesciunt maxime excepturi eius vitae quas odio laborum.</p>
        <div class="request">Download</div>
    </div>
    <div class="download-img">
    <img src={download} alt="" />
    </div>
</section>
    </div>
  )
}
