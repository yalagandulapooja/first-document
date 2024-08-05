import React, { useEffect, useState } from 'react';
import innerStyles from "./innerpage.module.css";
import banner from "./DESK1.jpg";
import course from "./download.jpg";
import axios from 'axios';

const Home = () => {
  const [lnews, setLnews] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:4000/lnews`)
    .then((res) => {
      setLnews(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  })
  return (
    <main className={innerStyles}>
      <section>
        <div>
          <img src={banner} alt="banner" className="w-100" />
        </div>
        <div>
        <marquee>
          {lnews.map((lnews) => {
              return lnews.lnews;
            })}
          </marquee>
        </div>
      </section>
      <section className="py-3">
      <div className="container my-4">
            <div className="row">
                <div className="col-lg-12">
                  <h1 className={innerStyles.title}>Welcome To <span>Elearn InfoTech</span></h1>
                <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles.The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles.</p>
                <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles.The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles.</p>
                </div>
            </div>
      </div>
      </section>
      <section className={`${innerStyles.bg_main} py-4`}>
      <div className="container my-4">
            <div className="row">
                <div className="col-lg-12">
                  <h1 className={innerStyles.title}>Our <span>Courses</span></h1>
                </div>
            </div>
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
      </section>
    </main>
  )
}

export default Home