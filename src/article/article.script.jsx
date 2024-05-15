import '../article/article.style.css';


function Article() {
    return(

        <article className='article'>



            <div className='article_info'>


                <div className='article_info_text'>

                    <h1 className='article_info_text_h1'>Our products.</h1>

                </div>


                <div className='article_info_text_btn'>

                    <button className='article_info_text_btn_button' type="button">View all (12)</button>
                
                </div>


            </div>



        </article>

    );
}


export default Article;

