import React from 'react'
import"./Home.css";
import Product from"./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
         <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/malar/RevAprGW/Train-2_PC_Hero_3000x1200_March._CB636988359_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
          id="11911290"
          title='INEFABLE Mi Band Strap 3 & 4 Wristband'
           price={25.99} 
           image={"https://m.media-amazon.com/images/I/51TkeCi4ToL._SL1000_.jpg"}
           rating={4}
           />
          <Product
          id="11911291"
          title='boAt Flash Edition Smart Watch with Multiple Sports Modes(Lightning Black)'
           price={30} 
           image={"https://m.media-amazon.com/images/I/61xBnF7kD5L._SL1500_.jpg"}
           rating={5}
           />
           <Product
           id="11911292"
           title='OnePlus 9 Pro 5G (Morning Mist, 8GB RAM, 128GB Storage)'
           price={800} 
           image={"https://m.media-amazon.com/images/I/61LvUvbZGlL._SL1500_.jpg"}
           rating={4}
           />
        </div>
        <div className="home__row">
          <Product
           id="11911293"
           title='Sony DSC-W800 20.1 MP Point and Shoot Digital Camera with 5X Optical Zoom (Black)'
           price={500} 
           image={"https://m.media-amazon.com/images/I/81vOp8COpAL._SX679_.jpg"}
           rating={4}
           />
           <Product
           id="11911294"
           title='VEEPRO DSLR Camera Backpack Bag'
           price={120} 
           image={"https://m.media-amazon.com/images/I/61nECeEDktL._SX679_.jpg"}
           rating={4}
           />
           <Product 
           id="11911295"
           title='Ring Light with stand - New 10 inch (26 CM) Ring (7 Feet Tripod Stand)'
           price={90} 
           image={"https://m.media-amazon.com/images/I/61t8gUH2S-L._SX679_.jpg"}
           rating={4}
           />
        
        </div>
        <div className="home__row">
        
           <Product  
           id="11911296"
           title='Mi Notebook 3K Resolution Display Intel Core i5-11300H 11th Gen 15.6-inch'
           price={900} 
           image={"https://m.media-amazon.com/images/I/81RHHnGydgL._SL1500_.jpg"}
           rating={4}
           />

           <Product 
           id="11911297"
           title='Echo Flex– Plug-in Echo for smart home control'
           price={200} 
           image={"https://m.media-amazon.com/images/I/41ky9Q83ePL._SX679_.jpg"}
           rating={5}
           />
           <Product  
           id="11911298"
           title='VEEPRO DSLR Camera Backpack Bag Waterproof (Black)'
           price={150} 
           image={"https://m.media-amazon.com/images/I/61nECeEDktL._SL1500_.jpg"}
           rating={4}
           />

        </div>
        
       
       
      </div>  
</div>
  )
}

export default Home
