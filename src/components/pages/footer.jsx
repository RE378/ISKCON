import React from 'react';
import { Link } from "react-router-dom";
import '../pages/footer.css'
function footer() {
  return (
    <div>
  
  <div style={{background: "#2b2e33",padding:"20px"}}>
  <div id="grid2">
      <div class="item-set2 " style={{paddingLeft:"10px"}}>
      <div className='footerbox1'>
      <img src="https://iskconmumbai.com/images/logo-black.png"
       alt="" className="footerImg"></img>
       <div style={{paddingLeft:"10px"}}>
      <h4 >ISKCON Juhu, Mumbai</h4>
      <p>
      International Society for Krishna Consciousness
      <br></br>
       Hare Krishna land, Juhu, Mumbai - 400049
      </p></div>
      </div>
          </div>



      <div class="item-set2 " >
      <div className='footerbox2'>
          <h5>Registered Head Office</h5>
           <h6>ISKCON Juhu</h6>
              <p class="footerbox2Details">
             <p>Hare Krishna Land, Juhu, Mumbai-400049, India
                Registered under Maharashtra Public Trust Act 1950
                vide Registration No. F-2179 (Bom)</p>
             </p>
             </div>
      </div>


      <div class="item-set2">
      <div className='footerbox3'>
      <img src="https://iskconmumbai.com/images/author-iskcon.jpg" alt='' className='lefthid'></img>
       
      <div>
      <h5>Founder-Acharya</h5>
      <p style={{width:"75%"}}>
      His Divine Grace
      Founder-Acharya
      His Divine Grace
      A.C. Bhaktivedanta Swami Prabhupada
      </p>
      </div>
      <img src="https://iskconmumbai.com/images/author-iskcon.jpg" alt='' className='righthid'></img>
        
      </div>
          
      </div>
      </div>
       
       <div className='bottomDetials'>
         <div>
          <p><sup>&copy;</sup>2022 ISKCON Juhu, Mumbai</p>
         </div>
         <div><a href='...' className='bottomDetialsText'>info@iskconmumbai.com</a></div>
         <div><a href='...' className='bottomDetialsText'>Policies of Usage</a></div>
         <div style={{display:"flex"}}>
          <div><a href='...' className='bottomDetialsIcons'><i class="fa-brands fa-facebook-f"></i></a></div>
          <div><a href='...' className='bottomDetialsIcons'><i class="fa-brands fa-twitter"></i></a></div>
          <div><a href='...' className='bottomDetialsIcons'><i class="fa-brands fa-youtube"></i></a></div>
          <div><a href='...' className='bottomDetialsIcons'> <i class="fa-brands fa-instagram"></i></a></div>
         </div>
         
       </div>
{/* Soical Icons */}

      <div style={{color:"#fff",textAlign:"center"}}>
 
          <p > Webpage recreated by Reeva Singh <sup>&copy;</sup> 2023 
       </p>
       </div>
  </div>




    <div className='sticky-bottom footerLayout '>
      <div>
      <Link to="/temple" className='FootorIcons'><i class="fa-solid fa-gopuram"></i></Link>
      </div>
      <div>
      <Link to="/donate" className='FootorIcons'><i class="fa-solid fa-gift"></i></Link>
      </div>
      <div>
      <Link to="/" className='FootorIcons'><i class="fa-solid fa-house"></i></Link>
      </div>
      <div>
      <Link to="/media" className='FootorIcons'><i class="fa-solid fa-video"></i></Link>
      </div>
      <div>
      <Link to="/contact" className='FootorIcons'><i class="fa-solid fa-phone"></i></Link>
      </div>
    </div>


</div>
  )
}

export default footer