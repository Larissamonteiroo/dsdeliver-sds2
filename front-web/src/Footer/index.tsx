import './styles.css'
import { ReactComponent as GithubIcon } from './github.svg'
import { ReactComponent as LinkedinIcon } from './linkedin.svg'
import { ReactComponent as InstagramIcon } from './instagram.svg'

function Footer() {
    return (
        <footer className="main-footer">
            <p>
                App desenvolvido por Laríssa Monteiro
            </p>
            <p>durante a 2ª ed. do evento Semana DevSuperior</p> 

            <div className="footer-icons">
                <a href="https://github.com/larissamonteiroo/larissamonteiroo" target="_new">
                    <GithubIcon />
                </a>
                <a href="https://www.linkedin.com/in/larissa-monteiro-marques/" target="_new">
                    <LinkedinIcon />
                </a>
                <a href="https://www.instagram.com/catch_your/" target="_new">
                    <InstagramIcon />
                </a>
            </div>
        </footer>
    )
}

export default Footer;