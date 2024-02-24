
import { useState } from 'react';
import './App.css';
import { CgMenuGridR, CgSearch } from "react-icons/cg";
import { Link } from 'react-router-dom';

function App() {
  const[t,setT]=useState("");

  const url="https://www.google.com/search?q="+t+" porn&sca_esv=df000c20b485358f&sxsrf=ACQVn09uRuj7NPvG7TnFzL5ipFoQ2CD97Q%3A1708767518376&source=hp&ei=HrnZZc3lFJDi2roPk5WG6A0&iflsig=ANes7DEAAAAAZdnHLlI8YMqBYM1p86FVeilG9T3bm31Z&ved=0ahUKEwjN7LyH18OEAxUQsVYBHZOKAd0Q4dUDCBU&uact=5&oq=kiran&gs_lp=Egdnd3Mtd2l6IgVraXJhbjIUEC4YgwEYkQIYsQMYyQMYgAQYigUyDhAAGIAEGIoFGJECGLEDMggQLhiABBixAzILEAAYgAQYigUYkgMyCxAuGIMBGLEDGIAEMggQLhiABBixAzILEC4YgAQYsQMYgwEyCxAuGIAEGLEDGIMBMgsQLhiABBixAxiDATILEC4YgAQYsQMYgwFI2yJQixZYih5wAXgAkAEAmAG5AaABigaqAQMwLjW4AQPIAQD4AQGYAgagAsUGqAIKwgIHECMY6gIYJ8ICDRAuGMcBGNEDGOoCGCfCAhEQLhiABBixAxiDARjHARjRA8ICCxAAGIAEGLEDGIMBwgIIEAAYgAQYsQPCAgUQLhiABMICChAjGIAEGIoFGCfCAgQQIxgnwgILEAAYgAQYigUYkQLCAg4QLhiABBiKBRixAxiDAcICERAAGIAEGIoFGJECGLEDGIMBmAMTkgcDMS41&sclient=gws-wiz"
   return (
    <div>
      <div style={{justifyContent:"end",display:"flex", gap:"1%"}}>
        <h3>Gmail</h3><br/>
        <h3>Images</h3><br/>
        <h3><CgMenuGridR /></h3><br/>

      </div>
      <div style={{justifyContent:"center",display:"flex", gap:"1%"}}>
        <label>Google</label>
        <input style={{width:"30vw",height:"5vh"}} placeholder='please enter your name' type="text" onChange={(e)=>{setT(e.target.value)}}></input>
        {t ? <a href={url}><CgSearch></CgSearch></a>:<CgSearch/>}
        
        
        

      </div>
      <div>

      </div>

    </div>
  );
}

export default App;
