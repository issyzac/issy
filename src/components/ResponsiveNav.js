function ResponsiveNav(){
    return (
    <div className="js-responsive-nav">
        <div className="responsive-nav">
        <div className="close-responsive-click-area js-close-responsive-nav">
            <div className="close-responsive-button"></div>
        </div>
        <div className="nav-container">
            <nav className="js-editable-target editable">
            <div className="gallery-title">
                <a href="works.html" className="active">Hi!</a>
            </div>
            <div className="page-title">
                <a href="about.html">About</a>
            </div>
            <div className="page-title">
                <a href="contact.html" >Contact</a>
            </div>
            </nav>
        </div>
        </div>
    </div>
    );
}
export default ResponsiveNav;