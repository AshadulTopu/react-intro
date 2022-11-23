
import image from '../../img/Iamge.png';
function Header(){
    return (
        <main>
        <header>
            <nav>
                <div class="nav-logo">
                    <img src="img/logo.png" alt=""/>
                </div>
                <div class="nav-menu">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Community</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Event</a></li>
                    </ul>
                </div>
                <div class="nav-btn">
                    <div>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input class="search" type="text" placeholder="Search here..."/>
                    </div>

                    <button><a href="">log in</a></button>
                </div>
            </nav>
            <div class="hero-content">
                <div class="hero-content-wrapper">
                    <div class="hero-content-left">
                        <h4 class="hero-content-sub-heading">
                            Netbook community
                        </h4>
                        <h1 class="hero-content-heading">
                            Your solution for community
                        </h1>
                        <p class="hero-content-discription">
                            More than 2 billion people over counties use socibook <br/> to stay in touch with friends &
                            family.
                        </p>
                        <div class="hero-content-btn">
                            <a class="about-more" href="#"> about more</a>
                            <a class="invite-fnd" href="#"> Invite friend</a>
                        </div>
                    </div>
                    <div class="hero-content-right">
                        <img src={image} alt=""/>
                    </div>
                </div>
            </div>
        </header>
    </main>
    );
}

export default Header;