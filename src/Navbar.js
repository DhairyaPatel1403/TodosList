import React, {useState} from 'react'

export default function Navbar(props) {
    const [name, setText] = useState("Dhairya");    //Use {text} in every place we need "Enter".
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const darkbg = ()=>{
        document.body.style.backgroundImage = "url('dark.jpg')"; 
    }
    const lightbg = ()=>{
        document.body.style.backgroundImage = "url('ligh.jpg')"; 
    }
  return (
    <>
    <nav className="navbar navbar-expand-lg border-bottom border-5">
  <div className="container-fluid">
    <a className="navbar-brand" href="">{props.wname}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active border border-1 mx-2" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link border border-1" href="/about">About</a>
        </li>
      </ul>

      <form action="mailto:dpvp1403@gmail.com">
        <button type="submit" className="mx-2 btn btn-primary" aria-expanded="false" data-bs-auto-close="outside">
          Contact Us
        </button>
      </form>


        <div className="dropdown">
</div>
      
      {props.searchbar ? <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>: ""}
    </div>
  </div>
</nav>



</>
  )
}


Navbar.defaultProps = {
  searchbar: "true"
}