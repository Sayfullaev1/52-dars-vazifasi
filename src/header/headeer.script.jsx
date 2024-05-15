import "./header.style.css";

import logo from '../img/logo/Frame (1).svg';
import logo_instagram from '../img/logo_social_sites/ant-design_instagram-filled.svg';
import logo_fecebook from '../img/logo_social_sites/akar-icons_facebook-fill.svg';
import logo_like from '..//img/logo_click_functionality/Outline.svg';
import logo_buy from '../img/logo_click_functionality/icon_cart_simple.svg';


function Header() {


    const menu = ["ALL PRODUCTS","ABOUT SEEDRA","OUR BLOG","CONTACTS",];
    

    return(

        <header className='header'>




            <div className="header_elements">



                <div className="header_elements_menu">


                    <div className="header_elements_menu_logo">

                        <a className="header_elements_menu_logo_link" href="#">
                            <img src={logo} alt="" />
                        </a>

                    </div>


                    <div className="header_elements_menu_components">
                        <ul className="header_elements_menu_components_list">
                            {menu.map( (element,item) => {
                                return(
                                    <li key={item} className="header_elements_menu_components_list_item">
                                        <a className="header_elements_menu_components_list_item_link"  href="#">{element}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>


                </div>



                <div className="header_elements_functionality">


                    <div className="header_elements_functionality_div">

                        <dir className="header_elements_functionality_div_img">
                            <img src={logo_instagram} alt="" />
                        </dir>

                        <div className="header_elements_functionality_div_img">
                            <img src={logo_fecebook} alt="" />
                        </div>

                    </div>


                    <div className="header_elements_functionality_input">
                        <input type="text" />
                    </div>


                    <div className="header_elements_functionality_logo">

                        <div className="header_elements_functionality_logo_click">
                            <img src={logo_like} alt="" />
                        </div>

                        <div className="header_elements_functionality_logo_click">
                            <img src={logo_buy} alt="" />
                        </div>

                    </div>
                    

                </div>



            </div>




        </header>

    );
}


export default Header;
