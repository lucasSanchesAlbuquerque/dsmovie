import {ReactComponent as IconGitHub} from 'assets/img/iconGitHub.svg'
import './styles.css'   
function Navbar(){

        return (
          <header>
            <nav className="container">
              <div className="dsmovie-nav-content">
                <h1>DSmovie</h1>
                <a href="https://github.com/lucasSanchesAlbuquerque/dsmovie">
                  <div dsmovie-icon-container>
                    <IconGitHub className="dsmovie-iconImg" width="20px" height="20px"/>
                  </div>
                  <p className="dsmovie-link">/LucasAlbuquerque</p>
                </a>
              </div>
            </nav>
          </header>
        );
    
}

export default Navbar