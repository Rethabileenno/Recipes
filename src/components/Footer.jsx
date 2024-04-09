import './styles/footer-style.css';
import Image from "../assets/footerLogo.png";

const Footer = () => {
    return ( 
    <>
<footer id='footer-Div' class="bg-[#ff6f01] py-8 px-10 font-[sans-serif]">
      <div class="md:max-w-[50%] mx-auto text-center">
        <a href='javascript:void(0)' class="inline-block"> <img src={Image} alt="Logo" className="footerlogo" /> </a>
        <h1 className='logoText' >Mama's Traditional Mzansi Cuisine</h1>
        <p class="text-sm mt-8" id='footer-p'>We are a team of passionate foodies and storytellers dedicated to preserving and sharing the rich culinary heritage of our beloved Mzansi.
 </p>



      </div>
      
      <hr class=" my-8" id='hrFooter' />
      <div class="md:flex md:item-center">
        <ul class="flex flex-wrap gap-4">
          <li class="text-sm">
            <a  class=' font-semibold hover:underline' id='text'>Terms of Service</a>
          </li>
          <li class="text-sm">
            <a class='font-semibold hover:underline' id='text'>Privacy Policy</a>
          </li>
          <li class="text-sm">
            <a  class=' font-semibold hover:underline' id='text' >Security</a>
          </li>
        </ul>
        <p class='text-sm  ml-auto max-md:mt-4' id='copyright-text'>Copyright © 2024 Mama's Traditional Mzansi Cuisine.<a target='_blank' class="hover:underline mx-1">  </a></p>
      </div>
    </footer>
    </>
     );
}
 
export default Footer;