import React from 'react';
import innerStyles from "./innerpage.module.css";
import course from "./download.jpg";

const Courses = () => {
  return (
    <>
      <div className={innerStyles.breadcrumb}> <h3>Courses</h3></div>
        <div className="container mt-5 mb-3">
            <div className="row">
                <div className="col-lg-3">
                    <div className={innerStyles.box_shadow}>
                    <img src={course} alt="course name" />
                    <h6>Web Design</h6>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className={innerStyles.box_shadow}>
                    <img src={course} alt="course name" />
                    <h6>Web Design</h6>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className={innerStyles.box_shadow}>
                    <img src={course} alt="course name" />
                    <h6>Web Design</h6>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className={innerStyles.box_shadow}>
                    <img src={course} alt="course name" />
                    <h6>Web Design</h6>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className={innerStyles.box_shadow}>
                    <img src={course} alt="course name" />
                    <h6>Web Design</h6>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className={innerStyles.box_shadow}>
                    <img src={course} alt="course name" />
                    <h6>Web Design</h6>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className={innerStyles.box_shadow}>
                    <img src={course} alt="course name" />
                    <h6>Web Design</h6>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className={innerStyles.box_shadow}>
                    <img src={course} alt="course name" />
                    <h6>Web Design</h6>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Courses