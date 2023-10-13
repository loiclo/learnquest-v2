import Head from 'next/head';
import { userFromCookie } from '../utils';
import { Divide } from 'react-feather';

const Profile = ({}) => {

return(
    <div className="background">
        <div className="avatar-inventaire-container">

            <div className="avatar">
            </div>

            <div className="inventaire">
                <image src="/images/panneau-inventaire.png" alt="Inventaire" className="panneau-inventaire" />
            </div>
        </div>

    </div>

);






}
export default Profile;