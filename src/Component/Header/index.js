import React , {useState , useRef}from 'react'
import styles from './Header.module.css'


const Header = () => {

    
    const  toggleNav = useRef(null);
    const [isActive , setIsActive] = useState('Home')
    const [isOpen , setIsOpen] = useState(false)

    const addActiveClass = (link) =>{
        setIsActive(link)
    }
   
    const toggleNavbar = () =>{
            const navbar =  document.getElementById(`nav`);
            navbar.classList.toggle(`${styles.open}`)
        
    }
    return (
     
         <header>
            <a href="#" className={styles.logo}><span>LOGO</span></a>

            <ul ref={toggleNav} className={styles.navbar} id = 'nav'>
                <li><a href="#" className={isActive === 'Home' ? styles.active : ''} onClick = {()=>{addActiveClass('Home')}}>Home</a></li>
                <li><a href="#" className={isActive === 'About Us' ? styles.active : ''} onClick = {()=>{addActiveClass('About Us')}}>About Us</a></li>
                <li><a href="#" className={isActive === 'Services' ? styles.active : ''} onClick = {()=>{addActiveClass('Services')}}>Services</a></li>
                <li><a href="#" className={isActive === 'Feature' ? styles.active : ''} onClick = {()=>{addActiveClass('Feature')}}>Feature</a></li>
                <li><a href="#" className={isActive === 'Contact Us' ? styles.active : ''} onClick = {()=>{addActiveClass('Contact Us')}}>Contact Us</a></li>
            </ul>

            <div  className={styles.main}>
                <a href="#"  className={styles.user}><span>Sign In</span></a>
                <a href="#"><span>Register</span></a>
                <div  className= {styles.menu_icon} onClick = {toggleNavbar}>
                    |||
                </div>
            </div>
        </header>
      
    )
}

export default Header