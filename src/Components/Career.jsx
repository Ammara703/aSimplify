// import "bootstrap/dist/css/bootstrap.min.css";
import location from "/public/location-Vector.svg";
import clock from "/public/clock-Vector.svg";
import { Tabs, Tab } from "react-bootstrap";
import "../index.css";
export default function Career() {
  return (
    <div className="careers-section wrapper" id="career">
      <div className="job-positions">
        <h1 className="lg-heading">Open Positions</h1>

        <Tabs defaultActiveKey="all" id="positions-tabs">
          <Tab eventKey="all" title="View All" className="tab">
            <div className="each-tab">
              <h1 className="md-heading c-head">
                Job Title <span className="c-dept">Department</span>
                <button className="btn primary-btn apply-btn">
                  <a href="">apply now</a>
                </button>
              </h1>
              <p className="c-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                eaque assumenda cupiditate nihil corrupti aspernatur id
                voluptatibus sed iste vel.
              </p>
              <div className="job-details">
                <p>
                  <span className="vector-span">
                    <img src={location} alt="" />
                  </span>
                  loctaion
                </p>
                <p>
                  <span className="vector-span">
                    <img src={clock} alt="" />
                  </span>
                  contact type
                </p>
              </div>
            </div>
            <div className="each-tab">
              <h1 className="md-heading c-head">
                Job Title <span className="c-dept">Department</span>
                <button className="btn primary-btn apply-btn">
                  <a href="">apply now</a>
                </button>
              </h1>
              <p className="c-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                eaque assumenda cupiditate nihil corrupti aspernatur id
                voluptatibus sed iste vel.
              </p>
              <div className="job-details">
                <p>
                  <span className="vector-span">
                    <img src={location} alt="" />
                  </span>
                  loctaion
                </p>
                <p>
                  <span className="vector-span">
                    <img src={clock} alt="" />
                  </span>
                  contact type
                </p>
              </div>
            </div>
          </Tab>

          <Tab eventKey="dept1" title="Department one" className="tab">
            <div className="each-tab">
              <h1 className="md-heading c-head">
                Job Title <span className="c-dept">Department</span>
                <button className="btn primary-btn apply-btn">
                  <a href="">apply now</a>
                </button>
              </h1>
              <p className="c-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                eaque assumenda cupiditate nihil corrupti aspernatur id
                voluptatibus sed iste vel.
              </p>
              <div className="job-details">
                <p>
                  <span className="vector-span">
                    <img src={location} alt="" />
                  </span>
                  loctaion
                </p>
                <p>
                  <span className="vector-span">
                    <img src={clock} alt="" />
                  </span>
                  contact type
                </p>
              </div>
            </div>
          </Tab>

          <Tab eventKey="dept2" title="Department two" className="tab">
            <div className="each-tab">
              <h1 className="md-heading c-head">
                Job Title <span className="c-dept">Department</span>
                <button className="btn primary-btn apply-btn">
                  <a href="">apply now</a>
                </button>
              </h1>
              <p className="c-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                eaque assumenda cupiditate nihil corrupti aspernatur id
                voluptatibus sed iste vel.
              </p>
              <div className="job-details">
                <p>
                  <span className="vector-span">
                    <img src={location} alt="" />
                  </span>
                  loctaion
                </p>
                <p>
                  <span className="vector-span">
                    <img src={clock} alt="" />
                  </span>
                  contact type
                </p>
              </div>
            </div>
          </Tab>

          <Tab eventKey="dept3" title="Department three" className="tab">
            <div className="each-tab">
              <h1 className="md-heading c-head">
                Job Title <span className="c-dept">Department</span>
                <button className="btn primary-btn apply-btn">
                  <a href="">apply now</a>
                </button>
              </h1>
              <p className="c-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                eaque assumenda cupiditate nihil corrupti aspernatur id
                voluptatibus sed iste vel.
              </p>
              <div className="job-details">
                <p>
                  <span className="vector-span">
                    <img src={location} alt="" />
                  </span>
                  loctaion
                </p>
                <p>
                  <span className="vector-span">
                    <img src={clock} alt="" />
                  </span>
                  contact type
                </p>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
      <button className="nextPage-btn">
        <a href="">
          our services
          <img className="arrow-icon" src="./arrow.png" alt="" />
        </a>
      </button>
    </div>
  );
}
