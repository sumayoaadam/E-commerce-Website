import "./Footer.css"
import footer_logo from "../assetes/logo_big.png"
import instagram_icon from "../assetes/instagram_icon.png"
import pintester_icon from "../assetes/pintester_icon.png"
import whatsapp_icon from "../assetes/whatsapp_icon.png"


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className='footer-link'>
            <li>Company</li>
            <li>Product</li>
            <li>Offices</li>
            <li>AbouT</li>
            <li>contact</li>
         </ul>
   <div className="footer-social-icon">
    <div className="footer-icons-container">
        <img src={instagram_icon} alt="" />
    </div>

    <div className="footer-icons-container">
        <img src={pintester_icon} alt="" />
    </div>

    <div className="footer-icons-container">
        <img src={whatsapp_icon} alt="" />
    </div>
   </div>
   <div className="footer-copyright">
    <hr />
    <p>Copyright @2024 - All Right Reserved </p>

   </div>


    </div>
  )
}

export default Footer