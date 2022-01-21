import '../Assets/Sass/Base.scss'
import './Profile.scss'



const Profile = (Store)=>{
    return (
        <div className="Profile">
            <div  className="Profile__Hero">
                    <h1>Hotel Sofitel morocco</h1>
            </div>
            <div className="Profile_Information">
                <div className="Profile_Information__left">
                    <div className="Description">
                        <h5>Description</h5>
                        <p>
                            Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
                        </p>
                    </div>

                </div>
                <div className="Profile_Information__Right">
                        <div className="Profile_Information__Services">
                                <div className="Localisation">
                                    <h5>Localisation</h5>

                                </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;