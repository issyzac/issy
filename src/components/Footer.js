function Footer(){
    return(
        <footer class="site-footer js-editable-target editable">
            <div class="social pf-footer-social">
              {/* <ul>
                <li>
                  <a href="https://twitter.com/RobertLicau" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                      viewBox="0 0 30 24" class="icon">
                      <path
                        d="M24.71 5.89C24 6.2 23.2 6.4 22.4 6.53c0.82-0.5 1.45-1.29 1.75-2.23c-0.77 0.46-1.62 0.8-2.53 1 C20.92 4.5 19.9 4 18.7 4c-2.2 0-3.99 1.81-3.99 4.04c0 0.3 0 0.6 0.1 0.92C11.54 8.8 8.6 7.2 6.6 4.7 C6.3 5.3 6.1 6 6.1 6.77c0 1.4 0.7 2.6 1.8 3.36c-0.65-0.02-1.27-0.2-1.81-0.51c0 0 0 0 0 0.1 c0 2 1.4 3.6 3.2 3.96c-0.34 0.09-0.69 0.14-1.05 0.14c-0.26 0-0.51-0.03-0.75-0.07c0.51 1.6 2 2.8 3.7 2.8 c-1.36 1.08-3.08 1.73-4.95 1.73c-0.32 0-0.64-0.02-0.95-0.06C7.05 19.3 9.1 20 11.4 20c7.33 0 11.34-6.15 11.34-11.49 c0-0.18 0-0.35-0.01-0.52C23.5 7.4 24.2 6.7 24.7 5.89z" />
                      </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.behance.net/Robert-Licau" target="_blank">
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 24"
                      class="icon">
                      <path id="path-1"
                        d="M18.83,14.38a2.78,2.78,0,0,0,.65,1.9,2.31,2.31,0,0,0,1.7.59,2.31,2.31,0,0,0,1.38-.41,1.79,1.79,0,0,0,.71-0.87h2.31a4.48,4.48,0,0,1-1.71,2.53,5,5,0,0,1-2.78.76,5.53,5.53,0,0,1-2-.37,4.34,4.34,0,0,1-1.55-1,4.77,4.77,0,0,1-1-1.63,6.29,6.29,0,0,1,0-4.13,4.83,4.83,0,0,1,1-1.64A4.64,4.64,0,0,1,19.09,9a4.86,4.86,0,0,1,2-.4A4.5,4.5,0,0,1,23.21,9a4.36,4.36,0,0,1,1.5,1.3,5.39,5.39,0,0,1,.84,1.86,7,7,0,0,1,.18,2.18h-6.9Zm3.67-3.24A1.94,1.94,0,0,0,21,10.6a2.26,2.26,0,0,0-1,.22,2,2,0,0,0-.66.54,1.94,1.94,0,0,0-.35.69,3.47,3.47,0,0,0-.12.65h4.29A2.75,2.75,0,0,0,22.5,11.14ZM18.29,6h5.36V7.35H18.29V6ZM13.89,17.7a4.4,4.4,0,0,1-1.51.7,6.44,6.44,0,0,1-1.73.22H4.24V5.12h6.24a7.7,7.7,0,0,1,1.73.17,3.67,3.67,0,0,1,1.33.56,2.6,2.6,0,0,1,.86,1,3.74,3.74,0,0,1,.3,1.58,3,3,0,0,1-.46,1.7,3.33,3.33,0,0,1-1.35,1.12,3.19,3.19,0,0,1,1.82,1.26,3.79,3.79,0,0,1,.59,2.17,3.79,3.79,0,0,1-.39,1.77A3.24,3.24,0,0,1,13.89,17.7ZM11.72,8.19a1.25,1.25,0,0,0-.45-0.47,1.88,1.88,0,0,0-.64-0.24,5.5,5.5,0,0,0-.76-0.05H7.16v3.16h3a2,2,0,0,0,1.28-.38A1.43,1.43,0,0,0,11.89,9,1.73,1.73,0,0,0,11.72,8.19ZM11.84,13a2.39,2.39,0,0,0-1.52-.45H7.16v3.73h3.11a3.61,3.61,0,0,0,.82-0.09A2,2,0,0,0,11.77,16a1.39,1.39,0,0,0,.47-0.54,1.85,1.85,0,0,0,.17-0.88A1.77,1.77,0,0,0,11.84,13Z" />
                      </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/robertlicau" target="_blank">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 30 24"
                      style="enable-background:new 0 0 30 24;" class="icon">
                      <path id="path-1_24_"
                        d="M19.6,19v-5.8c0-1.4-0.5-2.4-1.7-2.4c-1,0-1.5,0.7-1.8,1.3C16,12.3,16,12.6,16,13v6h-3.4
                                  c0,0,0.1-9.8,0-10.8H16v1.5c0,0,0,0,0,0h0v0C16.4,9,17.2,7.9,19,7.9c2.3,0,4,1.5,4,4.9V19H19.6z M8.9,6.7L8.9,6.7
                                  C7.7,6.7,7,5.9,7,4.9C7,3.8,7.8,3,8.9,3s1.9,0.8,1.9,1.9C10.9,5.9,10.1,6.7,8.9,6.7z M10.6,19H7.2V8.2h3.4V19z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://dribbble.com/RobertLicau" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg"  version="1.1"
                      id="Layer_1" x="0px" y="0px" viewBox="0 0 30 24"  class="icon">
                      <path
                        d="M15 20c-4.41 0-8-3.59-8-8s3.59-8 8-8c4.41 0 8 3.6 8 8S19.41 20 15 20L15 20z M21.75 13.1 c-0.23-0.07-2.12-0.64-4.26-0.29c0.89 2.5 1.3 4.5 1.3 4.87C20.35 16.6 21.4 15 21.8 13.1L21.75 13.1z M17.67 18.3 c-0.1-0.6-0.5-2.69-1.46-5.18c-0.02 0-0.03 0.01-0.05 0.01c-3.85 1.34-5.24 4.02-5.36 4.27c1.16 0.9 2.6 1.4 4.2 1.4 C15.95 18.8 16.9 18.6 17.7 18.3L17.67 18.3z M9.92 16.58c0.15-0.27 2.03-3.37 5.55-4.51c0.09-0.03 0.18-0.06 0.27-0.08 c-0.17-0.39-0.36-0.78-0.55-1.16c-3.41 1.02-6.72 0.98-7.02 0.97c0 0.1 0 0.1 0 0.21C8.17 13.8 8.8 15.4 9.9 16.58L9.92 16.6 z M8.31 10.61c0.31 0 3.1 0 6.32-0.83c-1.13-2.01-2.35-3.7-2.53-3.95C10.18 6.7 8.8 8.5 8.3 10.61L8.31 10.61z M13.4 5.4 c0.19 0.2 1.4 1.9 2.5 4c2.43-0.91 3.46-2.29 3.58-2.47C18.32 5.8 16.7 5.2 15 5.18C14.45 5.2 13.9 5.2 13.4 5.4 L13.4 5.37z M20.29 7.69c-0.14 0.19-1.29 1.66-3.82 2.69c0.16 0.3 0.3 0.7 0.5 0.99c0.05 0.1 0.1 0.2 0.1 0.3 c2.27-0.29 4.5 0.2 4.8 0.22C21.82 10.3 21.2 8.8 20.3 7.69L20.29 7.69z" />
                      </svg>
                  </a>
                </li>
                <li>
                  <a href="https://medium.com/@RobertLicau" target="_blank">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 30 24"
                      style="enable-background:new 0 0 30 24;"  class="icon">
                      <g>
                        <path class="st0" d="M23.5,7.4C23.5,7.4,23.5,7.4,23.5,7.4L23.5,7.4l-5.2-2.6c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0
                                    c-0.2,0-0.4,0.1-0.5,0.3l-3,4.8l3.7,6.1L23.5,7.4C23.5,7.5,23.5,7.4,23.5,7.4z" />
                        <polygon class="st0" points="13,8.8 13,14.3 17.9,16.7   " />
                        <path class="st0" d="M18.6,17.1l4,2c0.5,0.3,0.9,0.1,0.9-0.4V9L18.6,17.1z" />
                        <path class="st0"
                          d="M12.1,7.4l-5-2.5C7,4.9,6.9,4.8,6.8,4.8C6.6,4.8,6.4,5,6.4,5.3v10.9c0,0.3,0.2,0.6,0.5,0.8l4.4,2.2
                                    c0.1,0.1,0.2,0.1,0.3,0.1c0.3,0,0.5-0.2,0.5-0.6L12.1,7.4C12.1,7.5,12.1,7.4,12.1,7.4z" />
                      </g>
                    </svg>
                  </a>
                </li>
              </ul> */}
            </div>
            <div class="footer-text" style = {{ fontFamily: 'Google Sans' }}>
              <h2><a href="mailto:issyzac.iz@gmail.com" style={{ fontFamily: 'Google Sans', color: '#414141' }}>habari@isayamollel.com</a></h2>
              © 2020 Isaya Mollel, All rights reserved
            </div>
          </footer>
    );
}
export default Footer;