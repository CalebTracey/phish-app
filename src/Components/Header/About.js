const About = (props) => {
  return (
    <div className="about-center">
      <div className="about-text">
        <div className="text-box">
          Navigate through the sidebar by year, tour, or song. You may also
          provide a keyword into the search bar above.
        </div>
        <div className="text-box">
          API provided by{" "}
          <a href="https://www.phish.in" target="_top">
            Phish.in
          </a>
          .
        </div>
      </div>
    </div>
  );
};

export default About;
