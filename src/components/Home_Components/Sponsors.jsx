import React from "react";

const Sponsors = () => {
  const style = {
    color: "rgba(6, 12, 34, 0.98)",
  };
  return (
    <section id="sponsors" className="section-with-bg ">
      <div className="container">
        <div className="section-header">
          <h2 style={style}>Sponsors</h2>
        </div>

        <div className="row no-gutters sponsors-wrap clearfix">
          <div className="col-lg-4 col-md-4 col-xs-4">
            <div className="sponsor-logo">
              <img
                src="Assets/sponsors/starcopiers.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-xs-4">
            <div className="sponsor-logo">
              <img
                src="Assets/sponsors/Reckoning Logos_Black.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-xs-4">
            <div className="sponsor-logo">
              <img
                src="Assets/sponsors/dAppWorld.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
