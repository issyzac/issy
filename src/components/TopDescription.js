function TopDescription(){
    return (
        <div className="masthead js-editable-target editable" data-context="page.masthead">
            <div className="masthead-contents">
              <div className="masthead-text js-masthead-text">
                <div className="js-editable-target editable" data-context="page.masthead">
                  <h1 decorator="inlineTextEditable" contenteditable="false"
                    className="js-inline-text-editable preserve-whitespace main-text rich-text module-text"
                    data-text-keypath="customizations.masthead.title.text"
                    value="I Design &amp; Build Digital Experience to Help Brands Grow" style={{ fontFamily: "Google Sans", color: "#414141" }} >I Design &amp; Build Software
                    products to Bring ideas to life</h1>
                </div>
                <div className="js-editable-target editable" data-context="page.masthead">
                  <p decorator="inlineTextEditable" contenteditable="false"
                    className="js-inline-text-editable preserve-whitespace main-text rich-text module-text"
                    data-text-keypath="page.masthead.text.text"
                    value="My name is Isaya Mollel, I'm a Software Developer and Entrepreneur with more than 7+ years of
                    Experience. I specialized in Mobile Projects" style={{ fontFamily: 'Forum, cursive', color: "#202124" }}>
                    Hi, I'm Isaya Mollel, a Software Developer and Entrepreneur with more than 7 years of
                    Experience. I specialize in Mobile Technologies.</p>
                </div>
                <div className="masthead-buttons">
                  <a href="#whatIdo" className="masthead-button masthead-button-1 preserve-whitespace--nowrap">
                    What I do! <span class="ec ec-point-down"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
    );
}

export default TopDescription;