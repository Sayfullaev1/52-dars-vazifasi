import './main.style.css';

import product from '../img/logo_product/image 2.svg';
import fire from '../img/logo_product/ant-design_fire-filled.svg'




function Main() {
    

    return(


        <main className='main'>



            <div className='main_reclamCard'>


                <div className='main_reclamCard_info'>

                    <div className='main_reclamCard_info_text'>
                        <h1 className='main_reclamCard_info_text_h1'>SEEDRA Basil Seeds for Indoor and Outdoor Planting</h1>
                        <p className='main_reclamCard_info_text_p'>Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. Your easy growing experience is our guarantee</p>
                    </div>

                    <div className='main_reclamCard_info_price'>
                        <img className='main_reclamCard_info_price_img' src={fire} alt="" />
                        <h1 className='main_reclamCard_info_price_h1'>$12.56</h1>          
                        <h2 className='main_reclamCard_info_price_h2'>$15.56</h2>
                    </div>

                    <div className='main_reclamCard_price_info_btn'>
                        <button className='main_reclamCard_info_price_click_btn_button1' type="button">Add to card</button>
                        <button className='main_reclamCard_info_price_click_btn_button2' type="button">Discover</button>
                    </div>
                    
                </div>


                <div className='main_reclamCard_img'>

                    <img src={product} alt="" />      

                </div>


            </div>



            <div className='main_reclamCard_card'>


                <div className='main_reclamCard_card_text'>
                    <h1 className='main_reclamCard_card_text_h1'>We sell seeds</h1>
                    <p className='main_reclamCard_card_text_p'>that always sprout and gardening supplies which never break</p>
                </div>


            </div>



        </main>

    );
}


export default Main;