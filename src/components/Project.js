function Project(props){

  const { hobby } = props;

    return (
        <a class="js-editable-target editable project-cover js-project-cover-touch hold-space"
              href="#" data-context="pages"
              data-identity="id:p5acdd0120aabd202770ce9f8d28a0bbc08784c034a7bc5e17e0e8">
              <div class="cover-content-container">
                <div class="cover-image-wrap">
                  <div class="cover-image">
                    <div class="cover cover-normal">
                    <img class="cover__img js-lazy"
                        src={ hobby.thumbnailUrl }>
                    </img>
                    </div>
                  </div>
                </div>
                <div class="details-wrap">
                  <div class="details">
                    <div class="details-inner">
                      <div class="title" style={{ fontFamily: 'Google Sans' }}> { hobby.hobbyName } </div>
                      <div class="custom2" style={{ fontFamily: 'Forum, cursive' }}> {hobby.description} </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
    )
}
export default Project;