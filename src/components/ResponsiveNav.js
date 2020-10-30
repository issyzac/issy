function ResponsiveNav(){
    return (
    <div className="js-responsive-nav">
        <div className="responsive-nav">
        <div className="close-responsive-click-area js-close-responsive-nav">
            <div className="close-responsive-button"></div>
        </div>
        <div className="nav-container">
            <nav className="js-editable-target editable" style={{ fontFamily: "Google Sans !important" , color: "#202124" }}>
            <div className="gallery-title" style={{ fontFamily: "Google Sans !important" , color: "#202124" }}>
                <a href="works.html" className="active">Works</a>
            </div>
            <div className="page-title" style={{ fontFamily: "Google Sans !important" , color: "#202124" }}>
                <a href="about.html">About</a>
            </div>
            <div className="page-title" style={{ fontFamily: "Google Sans !important" , color: "#202124" }} >
                <a href="contact.html" >Contact</a>
            </div>
            </nav>
        </div>
        </div>
    </div>
    );
}
export default ResponsiveNav;