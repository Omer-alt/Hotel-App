import React from 'react'
import '../../styles/hotelNew.css'
import iconLink from '../../conponents/assets/images/icon-link.png'
import postFood from '../../conponents/assets/images/post-food.jpg'
import postRoom from '../../conponents/assets/images/post-room.jpg'
import postAccueil from '../../conponents/assets/images/post-accueil.jpg'
import avartar from '../../conponents/assets/images/avatar1.jpeg'
import comment from '../../conponents/assets/images/comment.png'
import hall from '../../conponents/assets/images/Hall.jpg'
import quote from '../../conponents/assets/images/quote-icon.png'

const HotelNew = () => {
  return (
    <div className='new'>
        <div className='newHeader'>
            <div>
                <h5 className='newH5'>stay sturned</h5>
            </div>
            <div>
                <h1 className='newH1'>hotel news</h1>
            </div>
            <div>
                <p className='newP'>
                    Quisque vitae posuere libero. Phasellus feugiat erat sit amet dui condimentum 
                    <u>ligula fringilla dictum sit amet</u>imperdiet. Ut at libero nec id dui. Integer gravida dolor elit, sit amet vestibulum mi elementum eget. 
                </p>
            </div>
        </div>
        <div className='newFeedBack'>
            <div className='FeedBack'>
                <div className='newMail'>
                    <div style={{ letterSpacing:"1px", fontSize:"23px", marginTop:"80px"}}><strong>www.nicdark.com</strong></div>
                    <img style={{heigth:"25px", width:"25px", margin:"20px"}} src={iconLink} alt="adresse mail du service marketing " />
                </div>
                <div className='newPost postBottom'>
                    <img src={postFood} alt="post" style={{ height:"381px"}} className='postImg'/>
                    <div className='Postover'>
                        <div style={{fontWeight:"600", fontSize:"23px"}}>26</div>
                        <div>MAR</div>
                    </div>
                    <div className='textPost'>
                        <div className='ref'>suites</div>
                        <h2 className='postTitle'>room service</h2>
                        <div className='PostDescription'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra, risus ac hendrerit consectetur, elit nisl luctus est.
                            </p>
                        </div>
                        <div className='postOwner'>
                            <div className='center'>
                                <img src={avartar} className="avatarImg" alt="avatar of post owner"/>
                                <span style={{marginLeft:"10px"}}>nicdark</span>
                            </div>
                            <div className='center'>
                                <img src={comment} className="commentImg" alt="comments of post"/>
                                <span style={{marginLeft:"10px"}}>2 Comments</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='FeedBack '>
                <div className='newPost postTop'>
                    <img src={postAccueil} alt="post accueil" className='postImg'/>
                    <div className='Postover'>
                        <div style={{fontWeight:"600", fontSize:"23px"}}>26</div>
                        <div>MAR</div>
                    </div>
                    <div className='textPost'>
                        <div className='ref'>suites</div>
                        <h2 className='postTitle'>24h Reception </h2>
                        <div className='PostDescription'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra, risus ac hendrerit consectetur, elit nisl luctus est.
                            </p>
                        </div>
                        <div className='postOwner'>
                            <div className='center'>
                                <img src={avartar} className="avatarImg" alt="avatar of post owner"/>
                                <span style={{marginLeft:"10px"}}>nicdark</span>
                            </div>
                            <div className='center'>
                                <img src={comment} className="commentImg" alt="comments of post"/>
                                <span style={{marginLeft:"10px"}}>2 Comments</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hallOverlay'>
                    <img src={hall} className="newHall" alt='main hall'/>
                    <div className='OverBottom'>
                        <span>rooms</span><br/>
                        <span style={{fontWeight:"600", fontSize:"23px"}}>Main Hall</span>
                    </div>
                </div>
            </div>
            <div className='FeedBack'>
                <div className='citation'>
                    <strong className='strong'>
                        A excellent restaurant is like a tasty & good vacation.
                    </strong>
                    <span> EMILY MILER</span>
                    <img src={quote} alt='quote' style={{heigth:"20px", width:"25px"}}/>
                </div>
                <div className='newPost postBottom'>
                    <img src={postRoom} alt="post room" className='postImg'/>
                    <div className='Postover'>
                        <div style={{fontWeight:"600", fontSize:"23px"}}>26</div>
                        <div>MAR</div>
                    </div>
                    <div className='textPost'>
                        <div className='ref'>suites</div>
                        <h2 className='postTitle'>Daily sanitization</h2>
                        <div className='PostDescription'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra, risus ac hendrerit consectetur, elit nisl luctus est.
                            </p>
                        </div>
                        <div className='postOwner'>
                            <div className='center'>
                                <img src={avartar} className="avatarImg" alt="avatar of post owner"/>
                                <span style={{marginLeft:"10px"}}>nicdark</span>
                            </div>
                            <div className='center'>
                                <img src={comment} className="commentImg" alt="comments of post"/>
                                <span style={{marginLeft:"10px"}}>2 comments</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HotelNew


