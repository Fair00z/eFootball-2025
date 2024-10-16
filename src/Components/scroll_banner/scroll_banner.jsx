
import banner_1 from '../../Assets/images/banner-1.jpg'
import './scroll_banner.css'

function Scroll_Banner(){
    return(
        <div className='image-slider mt-3'>
            <img src={banner_1} />
        </div>
    )
}
export default Scroll_Banner;