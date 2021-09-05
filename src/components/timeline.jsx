import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Graduate Teaching Assistant at UT Dallas <span>2021-present</span></h2>
                        <p>I am a teaching assistant at UT Dallas for courses 'IT for Business' and 'System Analytics and Project Management'. My job involves helping students with queries, grading their assignments, helping professor wih designing and teaching the syllabus.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Student Technology and Media Assistant <span>Jan 21-Jun 21</span></h2>
                        <p>I worked as a STMA in UTD where I got to work on University Website and UTD Social Media handles.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Masters in Information Technology and Management <span>2021-present</span></h2>
                        <p>I am graduate ITM student at UTD. I selected this major after Bachelor's degree in Computer Science to gain knowlege in the area of IT Management, project management, management principles, and to look at the technical things from a business perspective.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineer at TCS <span>2017-2020</span></h2>
                        <p>As a Software Engineer, I got trained in Java, Oracle SQL, HTML, CSS, JS,  Oracle CRM/CX Siebel. After training I have worked on multiple projects where I got to opportunity to apply these skills.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-7">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Bachelor's in Computer Science from SGGSIE&T,India <span>2013-2017</span></h2>
                        <p>I have completed my undegraduate degree in computer science with 3.6/4 GPA. During my time at university, I have developed interest in solving complex problems and writing efficient solutions.</p> 
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
