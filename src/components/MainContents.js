import TopDescription from "./TopDescription";
import Project from "./Project";
import BackToTop from "./BackToTop";
import Footer from "./Footer";

function MainContents(){
    return (
        <main>
            <TopDescription />
            <section className="project-covers js-site-wrap js-editable-target editable" 
                data-context="page.gallery.covers">
               { getHobbies() }
            </section>
            <BackToTop />
            <Footer />
        </main>
    );
}

function getHobbies(){

    let hobbies = [
        {
            hobbyName:"I Code",
            thumbnailUrl: "https://miro.medium.com/max/640/1*ob_8Ko_xuN6obuThOe3QHQ.png",
            description: "Here are some of the projects that I have been a part of"
        },        
        {
            hobbyName:"I Shoot",
            thumbnailUrl: "https://assets.entrepreneur.com/content/3x2/2000/20191009140007-GettyImages-1053962188.jpeg",
            description: "Pationate about product photography here are some of my photography works (Amature alert)"
        },
        {
            hobbyName:"I Brew",
            thumbnailUrl: "https://sunrisenews.co/wp-content/uploads/2020/07/Best-Barista-Schools-In-The-World.jpg",
            description: "I do everything with coffee and my love for coffee has led me to explore a future as a barista, check this out"
        },
    ]

    return hobbies.map((item, index) => {
        return (
            <Project hobby={item} />
        )
    });

}

export default MainContents;