import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Footer from './Footer'
import Contact from './Contact'

class Main extends Component {
  render () {
    return (<main id='main-grid'>
      <div class='col-lg-12 text-box text-center'>
        <h4>"When something is important enough, you do it even if the odds are not in your favor."</h4>
        <quote>Elon Musk</quote>
      </div>
      <div class='parallax' />

      <div className='mainSection projects' id="projects">
        <div className='projects-text'>
          <h3>&lt; Projects built with <i className='fa fa-heart' />/&gt; </h3>
        </div>

        <div id='sectionDiv'>

          <section className='container1 one'>

            <img
              id='first'
              src='./assets/images/ExchangeRateCalculator.png'
              alt='computers web design'
              width='100%'
              height='50%' 
            />


            <div className='bottom'>
              <h3><a href='https://furbo1.github.io/Exchange-Rate-Calculator-Portfolio/' target="_blank"> Exchange Rate Calculator</a>
              </h3>
              <h5>Project Specifications:</h5>
              <div>
                <ul>
                  <li>Display UI with 2 select lists for countries and 2 inputs for amounts</li>
                  <li>Fetch exchange rates from <a href='https://api.exchangerate-api.com' target="_blank">API </a></li>
                  <li>Display the values for both countries</li>
                  <li>Update values on amount change</li>
                  <li>Swap country rates</li>
                  <li>View/test it here 👉: <a href='https://furbo1.github.io/Exchange-Rate-Calculator-Portfolio/' target="_blank">https://furbo1.github.io/Exchange-Rate-Calculator-Portfolio/</a></li>
                </ul>
              </div>

            </div>
          </section>
          <section className='container1 two'> <img
            id='second'

            src='./assets/images/CustomVideoPlayer.png'
            alt='Human DNA code'
            width='100%'
            height='50%'
          />

          <div className='bottom'>
              <h3><a href='https://furbo1.github.io/Custom-Video-Player-Portfolio/' target="_blank">Custom Video Player</a>
            </h3>
            <h5>Project Specifications:</h5>
            <div>
                <ul>
                <li>Display custom video player styled with CSS</li>
                <li>Play/Pause/Stop</li>
                <li>Video progress bar</li>
                <li>Set progress bar time</li>
                <li>Display time in mins and seconds</li>
                <li>View/test it here 👉: <a href='https://furbo1.github.io/Custom-Video-Player-Portfolio/' target="_blank">https://furbo1.github.io/Custom-Video-Player-Portfolio/</a></li>
              </ul>
            </div>
            </div>
          </section> <section className='container1 three'> <img
            id='third'
            src='./assets/images/MovieBooking.png'
            alt='Human DNA code'
            width='100%'
            height='50%'
          />

          <div className='bottom'>
              <h3><a href='https://furbo1.github.io/Movie-Seat-Booking-App-Portfolio/' target="_blank"> Movie Seat Booking App</a>
            </h3>
            <h5>Project Specifications:</h5>
            <div>
                <ul>
                <li>Display UI with movie select, screen, seats, legend & seat info</li>
                <li>User can select a movie/price & select/deselect seats</li>
                <li>User can not select occupied seats</li>
                <li>Number of seats and price will update</li>
                <li>Save seats, movie and price to local storage so that UI is still populated on refresh</li>
                <li>View/test it here 👉: <a href='https://furbo1.github.io/Movie-Seat-Booking-App-Portfolio/' target="_blank">https://furbo1.github.io/Movie-Seat-Booking-App-Portfolio/</a></li>
              </ul>
            </div>
            </div>
            
          </section>
          <div className='more-projects'>
            <h3>&lt; ....& More projects built with <i className='fa fa-heart' /> here: /&gt; </h3>
            <div>
            <ul>
                <li><a href='https://furbo1.github.io/React-Web-Developer-Template-Website-Portfolio/' target="_blank">👉:React-Web-Developer-Template-Website-Portfolio</a> </li>
                <li><a href='https://furbo1.github.io/Infinite-Scroll-Blog-Posts-Portfolio/' target="_blank">👉:Infinite-Scroll-Blog-Posts-Portfolio</a> </li>
                <li><a href='https://furbo1.github.io/Sign-Up-Form-Validator-Javascript-Portfolio/' target="_blank">👉:Sign-Up-Form-Validator-Javascript-Portfolio</a> </li>
                <li><a href='https://furbo1.github.io/Modal-Menu-Slider-Portfolio/' target="_blank">👉:Modal-Menu-Slider-Portfolio</a> </li>
                <li><a href='https://furbo1.github.io/DOM-array-methods-portfolio/' target="_blank">👉:DOM-array-methods-Portfolio</a> </li>
                <li><a href='https://github.com/furbo1/UD-FED-Evaluate-News-Article-with-NLP-Portfolio' target="_blank">👉:Evaluate-News-Article-with-NLP-Portfolio</a> </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section id='description'>
        <div className='container'>
          <div className='descriptionText'>
            <h2> About me
            </h2> <p> I am a Front - End Web Developer specialized in UI, HTML, CSS, JavaScript, Jquery and React.I will help you develop mobile friendly, fully responsive web pages.  </p>
          </div> <div id='poza'> <img
            id='pozapass'
            src='./assets/images/Poza_pasaport.jpg'
            alt='Poza mea'
            width='200px'
            height='200px'
                                 />
                 </div>
        </div>
        <div className='mainSection'>
        <div id='sectionDiv'>
          <section className='container1 one'>

            <img
              id='first'
              
              src='./assets/images/artificial-intelligence-3382507_640.jpg'
              alt='computers web design'
              width='100%'
              height='50%'
            />

            <div className='bottom'>
              <h2> Education
              </h2> 
              {/* <h6> Image by Gerd Altmann from Pixabay  </h6>   */}
              <ul>
              <li><img src="https://img.icons8.com/nolan/24/diploma.png"/>Master Degree - Management & Rural Development,1998-2005, U.S.A.M.V.-Bucharest,Romania </li>
              <li><img src="https://img.icons8.com/nolan/24/diploma.png"/>Mini-MBA- Kauffman Fellows Academy, 2013</li>
              <li><img src="https://img.icons8.com/nolan/24/diploma.png"/>Marketing in a Digital World @University of Illinois at Urbana-Champaign/Coursera , 2016 </li>
              <li><img src="https://img.icons8.com/nolan/24/diploma.png"/>Front End Web Developer Nanodegree @ Udacity , 2019/2020 </li>
                <li><img src="https://img.icons8.com/fluent/24/000000/open-resume.png"/><a href="https://www.linkedin.com/in/alex-cocan-59a392139/" target="_blank">Full resume here:https://www.linkedin.com/in/alex-cocan-59a392139/</a></li>
              </ul>

            </div>
          </section>
          <section className='container1 two'> <img
            id='second'
            src='./assets/images/dna-3539309_640.jpg'
            alt='Human DNA code'
            width='100%'
            height='50%'
          />

          <div className='bottom'>
              <h2> Experience</h2>
            {/* </h2> <h6> Image by Gerd Altmann from Pixabay  </h6>  */}
            <ul>
              <li>I worked in Casino industry for past 21 years 1999-2020</li>
              <li>I worked 14 years in variuos Management positions, including Fleet Cage Operations Manager and Casino Manager  </li>
              <li>As a Fleet Manager I provided accounting/compliance support to over 100 Casino Management teams at Carnival Corporation, Global Casino Operations .</li>
              <li>As a Casino Manager I was managing teams of 12 to 40 employees & a monthly gaming revenue exceeding $1,000,000.00 USD.</li>
            </ul>
           

            </div>
          </section> <section className='container1 three'> <img
            id='third'
            src='./assets/images/monitor-1307227_640.jpg'
            alt='Human DNA code'
            width='100%'
            height='50%'
          />

          <div className='bottom'>
              <h2> Interests </h2>
            {/* </h2> <h6> Image by Gerd Altmann from Pixabay  </h6>  */}
            <ul>
              <li>Programming: I developed a passion for it, thus i'm changing careers @40</li>
              <li>Reading & Audio Books(new passion)</li>
              <li>Sports, including body-building, running, cycling</li>
              <li>Nutrition</li>
              <li>Renewables/Environment(reading/sharing daily about)</li>
              <li>Investing/Anti-aging/AI/Robotics/& many others</li>
            </ul>

            </div>
          </section>
        </div>
      </div>
      </section>

      
            </main>

    )
  }
}

class App extends Component {
  render () {
    return (<div>
      <Header />
      <Main />
      <Contact />
      <Footer />
            </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(<App />,
    document.getElementById('app')
  )
})
