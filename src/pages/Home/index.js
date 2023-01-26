import './styles.css'
import facebookIcon from '../../assets/images/facebookIcon.png'
import UserIconAndTexts from '../../components/UserIconAndTexts'
import MenuTopBar from '../../components/MenuTopBar'

export default function Home() {
    return (
        <div>
            <MenuTopBar/>
            <UserIconAndTexts
                userTitle={"Gabriel Barros"}
                userDescription={`Bem-vindo ao meu perfil.
                Siga-me nas redes sociais!`}
                userPhoto={"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
            />

            <div className='listContainer'>
                <div className='listIconContainer'>
                    <img className='listIconImage' src={facebookIcon}></img>
                </div>
                <div className='listTextContainer'>
                    <h2 className='listText'>
                        Meu facebook!
                    </h2>
                </div>
            </div>
        </div>
    )
}