import React from 'react';
import Navbar from '../navbar';
import Footer from './footer';
import '../stylesSheets/styles.css';
function home() {
  return (
    <div>
    <div>
    <div class="background">  
    <div class="box">
    <Navbar></Navbar>
   
    <section className=' top'>
    <div style={{opacity:"none"}}>
   <h5>Welcome to</h5>
   <h1 class="topheading">Sri Sri Radha Rasabihari Temple</h1>
   <div className='text-center  contentbox'>
     <div style={{display:"flex",justifyContent:"center"}}>
      <span style={{
        color:"#1c9779",
        paddingRight:"5px",
        fontSize:"20px"
        
      }}>&bull;</span>
      <h3>OPEN - Ongoing Usthapana Arati</h3>
      </div>
   
     <p className='topInnerText'>
      Open all days from
      4:30 am - 1 pm | 4:15 pm - 9 pm IST
      </p>
      <button type="button" class="btn btn-light text-primary btnL">View Temple Schedule</button>
      <div className='groupButton'>
     <a href='...'> <button type="button" class="btn btnPur  "><i class="fa-solid fa-phone"></i> Call us</button></a>
      <a href='...'><button type="button" class="btn btnPur  "><i class="fa-solid fa-diamond-turn-right"></i> Navigate</button></a>
      <a href='...'><button type="button" class="btn btnPur   "><i class="fa-solid fa-circle-play"></i> Watch Live</button></a>
      </div>
      </div>
      </div>
    </section>

     </div>
   {/* </section> */}
   </div>
</div>
    {/* What to visit at the temple? section */}
    <section className="marTop" >
      <h1 style={
        {
          color:"#43296a",
         
        }
      }>What to visit at the temple?</h1>
      <p className='middleText'>
      Sri Sri Radha Rasabihari Temple is a magnificent marble temple complex which is 
      a spiritual oasis in the dry and demanding material life of Mumbai - the financial
       and commercial capital of India.
       It is a stone throw away from Juhu beach.
      </p>
      
    </section>
    <div className='templeCard'>
        <div className='container '>
        <img className='templeCardImg' src='https://api.iskconmumbai.com/api/gallery/6041ac05d157f.JPG' alt='Temple Hall'></img>
        <div class="centered">Temple Hall</div>
        </div>
        
        <div className='container'>
        <img className='templeCardImg' src="https://api.iskconmumbai.com/api/gallery/6041aded02199.JPG" 
        alt='Books & Gift'></img>
        <div class="centered">Books & Gift</div>
        </div>
        <div className='container'>
        <img className='templeCardImg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqEU0qna04EY49lF-JjmlLX_UmTL1RhS2IsA&usqp=CAU"
         alt='Prasadam'></img>
         <div class="centered">Prasadam</div>
         </div>
      </div>

      {/* Events */}
      <section className='event'>
        <div>
          <h1 style={
        {
          color:"#43296a"
        }
      }>Events & Festivals</h1>
      <p className='middleText'>Upcoming events and celebrations in the temple</p> </div>

      <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div>
    <div class="card" style={{width: "60%",padding:"20px 15px",margin:"0 auto"}}>
  <div class="card-body " style={{display:"flex"}}>
  <img style={{width:"100px"}}
  src="https://iskconjuhu.s3.ap-south-1.amazonaws.com/Sri-Gaur-Purnima-Celebration-2023-963ef6c0c823ef.jpeg" alt=""></img>
    <p class="card-text text-dark">
    <h3>Sri Gaur Purnima Celebration 2023</h3>
    <p styles={{color:"rgba(47,52,63,.56)!important"}}>  Gaura Purnima is the celebrations of most auspicious and adorable advent of Sri Chaitanya Mahaprabhu – The Golden Avatara.
     Who appeared for spreading Sankirtan Yajna- the yuga dharma of Kali Yuga.</p>
    </p>
  </div>
 <div className='dates'><i class="fa-solid fa-calendar-days"> 7 Mar 2023</i> </div>
 <div className='right'><a href="...">KNOW MORE</a></div>
</div>
    </div>
    </div>
    <div class="carousel-item">
    <div>
    <div>
    <div class="card" style={{width: "60%",padding:"20px 15px",margin:"0 auto"}}>
  <div class="card-body " style={{display:"flex"}}>
  <img style={{width:"100px"}}
  src=
  "https://iskconjuhu.s3.ap-south-1.amazonaws.com/Radharani%27s%3Cbr-/%3E-Kitchen-Seva-1162e22e65d0a76.jpeg"
   alt=""></img>
    <p class="card-text text-dark">
    <h3>Donate for Radharani's Kitchen Seva</h3>
    <p styles={{color:"rgba(47,52,63,.56)!important"}}> 
    Krishna is most pleased when He honours foodstuff prepared by Srimati Radharani. Receive the blessings
     of Sri Sri Radha Krishna by signing up for Radharani Kitchen Seva.
    </p>
    </p>
  </div>
 <div className='dates'><i class="fa-solid fa-calendar-days"> Donation</i> </div>
 <div className='right'><a href="...">KNOW MORE</a></div>
</div>
    </div>
    </div>
    </div>
    <div class="carousel-item">
      <div>
      <div>
    <div class="card" style={{width: "60%",padding:"20px 15px",margin:"0 auto"}}>
  <div class="card-body " style={{display:"flex"}}>
  <img style={{width:"100px"}}
  src=
  "https://iskconjuhu.s3.ap-south-1.amazonaws.com/Radharani%27s%3Cbr-/%3E-Kitchen-Seva-1162e22e65d0a76.jpeg"
   alt=""></img>
    <p class="card-text text-dark">
    <h3>Donate for Radharani's Kitchen Seva</h3>
    <p styles={{color:"rgba(47,52,63,.56)!important"}}> 
    Krishna is most pleased when He honours foodstuff prepared by Srimati Radharani. Receive the blessings
     of Sri Sri Radha Krishna by signing up for Radharani Kitchen Seva.
    </p>
    </p>
  </div>
 <div className='dates'><i class="fa-solid fa-calendar-days"> Donation</i> </div>
 <div className='right'><a href="...">KNOW MORE</a></div>
</div>
    </div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

      </section>
      <div><Footer/></div>
    </div>
   
   
  )
}

export default home