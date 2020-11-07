import {ReactComponent as IssyLogo} from '../res/svg/logo.svg';

function PageHeader(){
    return (
        <header class="site-header">
          <div class="logo-container">
            <div class="logo-wrap js-editable-target editable">
              <div class="logo logo-image has-rollover ">
                <a href="#" class="image-normal image-link">
                <span class="ec ec-grinning"></span>
                </a>
                <a href="#" class="image-rollover image-link">
                  <span class="ec ec-grinning"></span>
                </a>
              </div>
            </div>
            <div class="hamburger-click-area js-hamburger">
              <div class="hamburger">
                <i></i>
                <i></i>
                <i></i>
              </div>
            </div>
          </div>
          <div class="nav-container">
            <nav class="js-editable-target editable" style={{ fontFamily: "Google Sans" , color: "#202124" }}>
              <div class="gallery-title">
                <a href="#" class="active" style={{ fontFamily: "Google Sans" , color: "#202124" }}>Hi!</a>
              </div>
              <div class="page-title">
                <a href="#" style={{ fontFamily: "Google Sans" , color: "#202124" }}>About</a>
              </div>
              <div class="page-title">
                <a href="#" style={{ fontFamily: "Google Sans" , color: "#202124" }} >Contact</a>
              </div>
            </nav>
          </div>
        </header>       
    );
}

export default PageHeader;