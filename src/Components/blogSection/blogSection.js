import React from 'react'
import "./blogSection.css"
export default function blogSection() {
  return (
    <div id="blog" class="title">
		<h2 class="text-center">Blog <span>Section</span></h2>
		<p class="text-center">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum <br />Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum <br />Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum <br />Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum <br />Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.</p>
	    <div class="blog-content">
			<div class="box">
				<img src="imgs/one.jpg" alt="" />
				<p>Fast Delivery</p>
				<h5>Use Coupons to get Free Delivery</h5>
			</div>
	
				<div class="box">
					<img src="../../../imgs/two.jpg" alt="" />
					<p>7 Days Return</p>
					<h5>If goods have problems</h5>
				</div>
                
				<div class="box">
					<img src="imgs/three.jpg" alt="" />
					<p>Secure Payment</p>
					<h5>100% secure payment</h5>
				</div>
	
				<div class="box">
					<img src="D:\Final Project\Booklet-Project--Spartan-Duo\src\imgs\four.jpg" alt="" />
					<p>24/7 Support</p>
					<h5>Dedicated support</h5>
				</div>
			</div>
		</div>
  )
}
