import Calendrier from "./outils/calendrier";
import FirstImage from "./outils/firstImage";
import Navbar from "./outils/nav"
import Reception from "./outils/reception";
import Numbers from './outils/number';
import AllRooms from './outils/allRooms';
import Services from "./outils/services";

function PrincipalPage(){
    return(
        <div>
            <Navbar />
            <FirstImage />
            <Calendrier/>
            <Reception/>
            <Numbers/>
            <AllRooms/>
            <Services/>
        </div>
    )
}

export default PrincipalPage;
