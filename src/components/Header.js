function PageHeader(){
    return (
        <header class="site-header">
          <div class="logo-container">
            <div class="logo-wrap js-editable-target editable">
              <div class="logo logo-image has-rollover ">
                <a href="#" class="image-normal image-link">
                  <img
                    src="https://pro2-bar-s3-cdn-cf4.myportfolio.com/ac05157db7a7732302b941275878c68b/57117200-c9e3-41ef-8c56-1cfad47c13fa_rwc_0x0x128x128x4096.png?h=af96f62639b46477c5ef36308ff2117d"
                    alt="Robert Licau">
                </img>
                </a>
                <a href="#" class="image-rollover image-link">
                  <img
                    src="https://pro2-bar-s3-cdn-cf6.myportfolio.com/ac05157db7a7732302b941275878c68b/7194b706-a166-496e-bef1-bdb4c16a9881_rwc_0x0x128x128x4096.png?h=670ce358c1bf73a7f1c0c7ce91b467fc"
                    alt="Robert Licau">
                </img>
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