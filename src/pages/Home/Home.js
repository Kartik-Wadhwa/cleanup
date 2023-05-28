import React from 'react'
import ImageForm from '../../components/ImageForm/ImageForm'
import "./home.css"

const Home = () => {
  return (
    <div>
   
      <section className="colored-section" id="title">

        <div className="container-fluid">
    
          {/* Nav Bar */}
    
          <nav className="navbar navbar-expand-lg navbar-dark">
    
            <a className="navbar-brand" href="">Clean Up</a>
    
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
                <span className="navbar-toggler-icon"></span>
            </button>
    
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    
              <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="#pricing">Community</a>
                  </li>
                <li className="nav-item">
                  <a className="nav-link" href="#footer">Contact Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#cta">Download</a>
                </li>
              </ul>
    
            </div>
          </nav>
    
    
          {/* Title */}
    
          <div className="row my-3">
    
            <div className="col-lg-6">
              <h1 className="big-heading">Be the change you want to see, report garbage with ease.</h1>
              <button type="button" className="btn btn-dark btn-lg download-button"><i className="fa fa-apple" aria-hidden="true"></i> Download</button>
              <button type="button" className="btn btn-outline-light btn-lg download-button"><i className="fa fa-play" aria-hidden="true"></i> Download</button>
              <p>Download the App now !</p>
            </div>
    
            <div className="col-lg-6">
              <img className="title-image" src="images/image.png" alt="SocialVerse"/>
            </div>
    
          </div>
    
        </div>
    
      </section>
        {/* Features */}

  <section className="white-section" id="features">

    <div className="container-fluid">

      <div className="row">
        <div className="feature-box col-lg-4">
            <i className="icon fa fa-check-circle-o fa-4x" aria-hidden="true"></i>
          <h3 className="feature-title">Easy to use.</h3>
          <p>Just Click the trash if you see on roads.</p>
        </div>

        <div className="feature-box col-lg-4">
            <i className="icon fa fa-map-marker fa-4x" aria-hidden="true"></i>
          <h3 className="feature-title">Location Shared</h3>
          <p>When you click the picture, location of that particular place will be shared with us.</p>
        </div>

        <div className="feature-box col-lg-4">
            <i className="icon fa fa-heart fa-4x" aria-hidden="true"></i>
          <h3 className="feature-title">Guaranteed to work.</h3>
          <p>Trash will be cleaned in 24hrs and we can bet on it!</p>
        </div>
      </div>


    </div>
  </section>
<section className="image-form">
    <ImageForm/>
</section>

  {/* Testimonials*/}

  <section className="colored-section" id="testimonials">

    <div id="testimonial-carousel" className="carousel slide" data-ride="false">
      <div className="carousel-inner">
        <div className="carousel-item active container-fluid">
          <h2 className="testimonial-text">Reduction in the amount of litter on our streets. Thank you for making our neighborhood cleaner and greener!</h2>
          <img className="testimonial-image" src="aditya.jpg" alt="aditya"/>
          <em>Aditya Gaur, Noida</em>
        </div>
        <div className="carousel-item container-fluid">
          <h2 className="testimonial-text"> It's amazing how much cleaner the streets are becoming. Easy to use app. I'm so grateful for this app!</h2>
          <img className="testimonial-image" src="chetan.jpg" alt="chetan"/>
          <em>Chetan Kumar, New Delhi</em>
        </div>
        <div className="carousel-item container-fluid">
            <h2 className="testimonial-text"> I'm always looking for ways to reduce my carbon footprint. This app makes it easy to do just that. Nice work!</h2>
            <img className="testimonial-image" src="pawan.jpg" alt="pawan"/>
            <em>Pawan, Noida</em>
          </div>
      </div>
      <a className="carousel-control-prev" href="#testimonial-carousel" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon"></span>
      </a>
      <a className="carousel-control-next" href="#testimonial-carousel" role="button" data-slide="next">
    <span className="carousel-control-next-icon"></span>
      </a>
    </div>

  </section>
  <section className="text-content">

    <ul> 
        <li><b>Reducing litter and pollution:</b> By making it easy for people to report garbage and assigning cleaners to remove it, your app can help to reduce the amount of litter and pollution in public spaces. This can make communities cleaner and healthier for everyone.</li>

        <li><b>Creating jobs for cleaners:</b> Your app can help to create employment opportunities for cleaners who are responsible for removing the garbage reported by users. This can be especially impactful in areas where there is high unemployment and limited job opportunities.</li>
        
        <li><b>Encouraging environmental responsibility:</b> By raising awareness about the impact of garbage on the environment, your app can help to foster a culture of environmental responsibility. This can inspire people to take action to reduce their own waste and contribute to a cleaner world.</li>
        
        <li><b>Fostering community engagement:</b> Your app can help to bring people together around a common goal of creating a cleaner and healthier community. By working together to report and remove garbage, users can build a sense of shared responsibility and pride in their neighborhood.</li>
        
        <li><b>Promoting public health:</b> Garbage can attract pests and create health hazards, such as bacterial infections and respiratory problems. By removing garbage promptly, your app can help to reduce the risk of these health issues and promote public health.</li>
    </ul>

  </section>

  <section className="colored-section" id="cta">

    <div className="container-fluid">

      <h3 className="big-heading"><b>Snap the Trash, Make the change. Download the app now!</b></h3>
      <button className="download-button btn btn-lg btn-dark" type="button"><i className="fa fa-apple" aria-hidden="true"></i> Download</button>
      <button className="download-button btn btn-lg brn-light" type="button"><i className="fa fa-play" aria-hidden="true"></i> Download</button>
    </div>
  </section>

  <footer className="white-section" id="footer">
    <center><div className="container-fluid">
      <i className="social-icon fa fa-facebook-f"></i>
      <i className="social-icon fa fa-twitter"></i>
      <i className="social-icon fa fa-instagram"></i>
      <i className="social-icon fa fa-envelope"></i>
      <p>© Copyright 2023 Social Verse</p>
    </div></center>
  </footer>

    </div>
  )
}

export default Home
