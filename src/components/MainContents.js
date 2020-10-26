import TopDescription from "./TopDescription";
import Project from "./Project";
import BackToTop from "./BackToTop";
import Footer from "./Footer";

function MainContents(){
    return (
        <main>
            <TopDescription />
            {/* <section className="project-covers js-site-wrap js-editable-target editable" data-context="page.gallery.covers">
                <Project />
            </section> */}
            {/* <BackToTop /> */}
            <Footer />
        </main>
    );
}
export default MainContents;