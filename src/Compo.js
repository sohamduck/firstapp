import Nav from './components/Nav'
import I1 from './components/Intro1'
import I2 from './components/Intro2'
import I3 from './components/Intro3'
import Promo from './components/Promo'

export default function Compo(){
    return(
        <div className='Compo'>
            <Nav/>
            <Promo/>
            <I1/>
            <I2/>
            <I3/>
        </div>
    )
}