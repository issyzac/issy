import back_to_top from '../res/svg/back_to_top.svg';
import {ReactComponent as TopLogo} from '../res/svg/back_to_top.svg';

function BackToTop(){
    return (
        <div>
            <section class="back-to-top js-editable-target editable">
                <a href="index.html#"><span class="arrow">&uarr;</span><span class="preserve-whitespace">Back to
                    Top</span></a>
            </section>
            <a class="back-to-top-fixed js-editable-target editable js-back-to-top " href="index.html#">
            <TopLogo />
          </a>
        </div>
    );
}
export default BackToTop;