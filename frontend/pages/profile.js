import Head from 'next/head';
import { userFromCookie } from '../utils';
import { Divide } from 'react-feather';

const Profile = ({}) => {

return(
    <div className="background">
        <div className="avatar-inventaire-container">

            <div className="avatar">
                <img src="/images/avatar1.png" alt="Avatar1" className="avatar" />
            </div>

            <div className="spacer"></div>

            <div className="inventaire">
                <img src="/images/panneau-inventaire.png" alt="Inventaire" id="panneau-inventaire" />
            </div>
        </div>

    </div>

);
}
export default Profile;