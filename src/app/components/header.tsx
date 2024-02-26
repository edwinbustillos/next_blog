import Image from 'next/image'
import logo from '../../../public/logo.png'
import Link from 'next/link'

const Header = () => {

    return (
        <header>
            <div>
                <h1>Ghost Blog</h1>
            </div>
            <div>
                <Image className='logo' src={logo} alt="logo" />
            </div>
            <div>
                <h1>@Bustillos</h1>
            </div>
            <Link href='/create' className='button_menu'>Novo Post</Link>
        </header>
    )
}

export default Header