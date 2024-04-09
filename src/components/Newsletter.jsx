import React from "react";
import './styles/newsletter.css';

const Slider = () => {
  return (
    <div className="newsletter-div">
    <div >
      <div class="max-w-4xl w-full mx-auto text-center">
        <h2 className="newsletter-h1" >Subscribe to <br></br> Our Newsletter</h2>
        <p className="newsletter-p">Stay updated with our latest news <br></br>and exclusive offers. Join our community today!</p>
        <div class="mt-10 bg-white flex items-center sm:p-4 p-2 max-w-xl mx-auto rounded-2xl border border-gray-300">
          <input type="email" placeholder="Enter your email" class="w-full bg-transparent py-4 px-2 text-[#333] text-base border-none outline-none" />
          <button className="btn-newsletter">
            Subscribe
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Slider;