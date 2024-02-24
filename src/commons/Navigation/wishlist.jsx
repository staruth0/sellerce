import React from "react";
import './cart.css'

const NavWishlist = () => {
	return (
		<div className="main-cart-body">
			<div className="cart-item-container">
                <div className="cart-header">
                    <h2>Wishlist</h2>
                    <hr />
                </div>
                <div className="cart-item">
					<div className="product-img">
						<img
							src={require("../../assets/images/category_images/iphone.png")}
							alt="alt"
						/>
					</div>
					<ul className="product-details">
						<li className="product-name">iPhone 15 Pro</li>
						<li className="color-container">
							<span>Color: </span>
							<div className="color"></div>
						</li>
					</ul>
					<span className="subtotal">$99.9</span>
					<svg className="remove-cart-item"
						xmlns="http://www.w3.org/2000/svg"
						id="Outline"
						viewBox="0 0 24 24"
						width="512"
						height="512">
						<path d="M16,8a1,1,0,0,0-1.414,0L12,10.586,9.414,8A1,1,0,0,0,8,9.414L10.586,12,8,14.586A1,1,0,0,0,9.414,16L12,13.414,14.586,16A1,1,0,0,0,16,14.586L13.414,12,16,9.414A1,1,0,0,0,16,8Z" />
						<path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z" />
					</svg>
				</div>
                <div className="cart-item">
					<div className="product-img">
						<img
							src={require("../../assets/images/category_images/iMac.png")}
							alt="alt"
						/>
					</div>
					<ul className="product-details">
						<li className="product-name">iMac mini</li>
						<li className="color-container">
							<span>Color: </span>
							<div className="color"></div>
						</li>
					</ul>
					<span className="subtotal">$99.9</span>
					<svg className="remove-cart-item"
						xmlns="http://www.w3.org/2000/svg"
						id="Outline"
						viewBox="0 0 24 24"
						width="512"
						height="512">
						<path d="M16,8a1,1,0,0,0-1.414,0L12,10.586,9.414,8A1,1,0,0,0,8,9.414L10.586,12,8,14.586A1,1,0,0,0,9.414,16L12,13.414,14.586,16A1,1,0,0,0,16,14.586L13.414,12,16,9.414A1,1,0,0,0,16,8Z" />
						<path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z" />
					</svg>
				</div>
			</div>
            <div className="cart-footer">
			<div>Total: <span id="total">$300</span></div>
			<button className="primary-btn proceed-btn">Add products to cart</button>
            </div>
		</div>
	);
};

export default NavWishlist;
