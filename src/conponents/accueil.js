import Calendrier from "./outils/calendrier";
import FirstImage from "./outils/firstImage";
import Navbar from "./outils/nav"
import Reception from "./outils/reception";
import Numbers from './outils/number';
import AllRooms from './outils/allRooms';
import Services from "./outils/services";
import Assistance from './outils/assistance';
import SingleRoom from "./outils/singleRoom";
import Around from "./outils/arround";
import HotelNew from "./outils/hotelNew";
import NewLetter from "./outils/newLetter";
import Footer from "./outils/footer";
import SideBarRight from "./outils/sideBarRight";

function PrincipalPage(){
    return(
        <div>
            <Navbar />
            <FirstImage />
            <Calendrier/>
            <Reception/>
            <Numbers/>
            <AllRooms/>
            <div style={{position:"static"}}>
                <Services/>
                <Assistance/>
            </div>
            <SingleRoom/>
            <Around/>
            <HotelNew/>
            <NewLetter/>
            <Footer/>
            {/* <SideBarRight/> */}
        </div>
    )
}

export default PrincipalPage;
