import React from 'react'
import Headset from './images.jpg'
import Stars from './1828884.png'
import './index.css'


function App() {

  return (
    <div class="h-screen w-screen">
      <div>
      <div class="flex justify-center items-center flex-shrink h-screen w-screen bg-gradient-to-r from-green-400 to-blue-500 ... " >
        <div class=" w-96 h-90 bg-white drop-shadow-2xl rounded-md ">
        <img class="w-96 rounded-t-lg" src={Headset}/>
        <div class="relative font=['Mukta'] ">
          <p class="font-bold indent-4 text-xl" >Fantastic HeadSet</p>
          <p class="text-slate-500 indent-4 text-xs">by Henry Phang in MRGA</p>
          <p class="leading-loose font-bold indent-4 text-lg">$50</p>
          <div class="flex flex-row px-4 py-2">
              <div>★</div>
              <div>★</div>
              <div>★</div>
              <div>★</div>
              <div>★</div>
              <h8 class ="text-slate-500  ">(86)</h8>
              <div class="h-10 w-10 absolute right-3 bg-sky-500 rounded-lg bottom-5 ">
              
                  <svg class="flex justify-center items-center m-2"className="w-6 h-6" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" /></svg>

              </div>
            </div>
          </div>  
          
        </div>
        
      </div>
      <div class=" flex justify-center items-end text-slate-500 ">
          Made with 💛by MRGA. All right reserved
      </div>
      </div>
      
    </div>
  )
}

export default App