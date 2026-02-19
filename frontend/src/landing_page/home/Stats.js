import React from "react";

function Stats() {
  return (
    <div className="page-wrapper">
      <div className="container-fluid py-5 my-5">
        <div className="row px-md-5">
          <div className="col-lg-6 p-4">
            <h1 className="mb-5 fs-1 pb-4">Trust with confidence</h1>

            <h4 className="fs-2">Customer-first always</h4>
            <p className="text-muted pb-3">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments, making us India’s largest broker;
              contributing to 15% of daily retail exchange volumes in India.
            </p>

            <h4 className="fs-2">No spam or gimmicks</h4>
            <p className="text-muted pb-3">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like. Our
              philosophies.
            </p>

            <h4 className="fs-2">The Zerodha universe</h4>
            <p className="text-muted pb-3">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>

            <h4 className="fs-2">Do better with money</h4>
            <p className="text-muted pb-3">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>

          <div className="col-lg-6 d-flex flex-column align-items-center">
            <img
              src="media/images/ecosystem.png"
              alt="Ecosystem"
              style={{
                width: "100%",
                maxWidth: "900px",
                height: "auto",
              }}
            />

            <div className="text-center mt-4">
              <a
                href="#"
                className="mx-4 text-decoration-none text-primary fw-medium"
              >
                Explore our products <i className="fa fa-long-arrow-right"></i>
              </a>
              <a
                href="#"
                className="text-decoration-none text-primary fw-medium"
              >
                Try Kite demo <i className="fa fa-long-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-auto">
            <img
              src="media/images/pressLogos.png"
              className="img-fluid"
              alt="Press Logos"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
