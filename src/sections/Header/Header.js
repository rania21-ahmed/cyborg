import logo from '../../assets/imges/logo.png'
import profile from '../../assets/imges/profile-header.jpg'
import {NavItem,NavItemDropDown} from '../../Components/NavItem/NavItem';
import {Link} from 'react-router-dom'
import './Header.css'
const Header =()=>{
    return(
      <>
        <nav className="navbar navbar-expand-lg  navbar-dark">
           <div className='container'>
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="Bootstrap" />
                </Link>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    
                        <ul className="nav navbar-nav text-center">
                        
                        <li className="nav-item">
                            <Link className="nav-link activee" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/browes">Browse</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/details">Details</Link>
                        </li>
                 
                        <li className="nav-item">
                            <Link className="nav-link " to="/stream">streams</Link>
                        </li>
                        <li className="nav-item profile-btn">
                            <Link to='/Profile' className="nav-link nav-link2">
                                Profile
                                <img src={profile} alt="..." className="imgProfile"/>
                            </Link>
                            
                        </li>
                        </ul>
                </div>
        
           </div>
        

        </nav>


        
      </>
    )
  }
  
export default Header;
{/* <script>
on('click','Link',function(){
    $(this).addClass('activee').siblings().removeClass('activee')
})
</script> */}
