import Calendrier from "./outils/calendrier";
import FirstImage from "./outils/firstImage";
import Navbar from "./outils/nav"
import Reception from "./outils/reception";
import Numbers from './outils/number';
import AllRooms from './outils/allRooms';
import Services from "./outils/services";
import Assistance from './outils/assistance';
import SingleRoom from "./outils/singleRoom";

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
            
        </div>
    )
}

export default PrincipalPage;
