

const About = ({ }) => {
  return (
    <div class="about-center">
      <div className = "about-text">
      <div className="text-box">
        Created for learning and experimentation purposes.
        </div>
        <div className="text-box">
        PhishApp provides a simple, user-friendly interface to navigate the
        vast public archive of audience recordings for the band Phish. You can search for
        a specific show by year, tour, or song. You may also provide a keyword into the 
        search bar above. Each track of every show is also linked to an audio file and fully 
        playable.
      </div >
      <div className="text-box">
        The required data is gathered using an API provided by <a href="https://www.phish.in" target="_blank">Phish.in</a>.
        Queries are done in real time and based upon the user's input. The resulting data is then used to provide an interface
        to further refine your search until the desired show has been found. The app was built using 
        the React library and utilizes the Node.js run-time environment. HTTP requests are done through Node.js using the 
        Axios library. Styling comprises of CSS elements from the Bootstrap front-end framework.
      </div>
      </div>
    </div>
  );
}

export default About