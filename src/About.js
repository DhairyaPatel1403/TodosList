import React from 'react'
import "./App.css";

export const About = () => {
  return (
    <>
        <div class="aboutus-section">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-6 col-xs-12">
                    <div class="aboutus">
                        <h2 class="aboutus-title">About Us</h2>
                        <p class="aboutus-text">ToDo's List is made for your task managing more easy by simply adding your tasks on the todos list of ours and mark it done when completed.</p>
                        <p class="aboutus-text">Made by @DhairyaPatel, computer pursuing computer engineering from DDU.</p>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-12">
                </div>
                <div class="col-md-5 col-sm-6 col-xs-12">
                    <div class="feature">
                        <div class="feature-box">
                            <div class="clearfix">
                                <div class="iconset">
                                    <span class="glyphicon glyphicon-cog icon"></span>
                                </div>
                                <div class="feature-content">
                                    <h4>About the Author</h4>
                                    <p>@DhairyaPatel.<br></br>Competitive Programmer, FreeLancer, Front-end / Back-end Developer</p>
                                </div>
                            </div>
                        </div>
                        <div class="feature-box">
                            <div class="clearfix">
                                <div class="iconset">
                                    <span class="glyphicon glyphicon-cog icon"></span>
                                </div>
                                <div class="feature-content">
                                    <h4>About ToDo's List</h4>
                                    <p>Developed under a personal project using ReactJS.</p>
                                </div>
                            </div>
                        </div>
                        <div class="feature-box">
                            <div class="clearfix">
                                <div class="iconset">
                                    <span class="glyphicon glyphicon-cog icon"></span>
                                </div>
                                <div class="feature-content">
                                    <h4>Great support</h4>
                                    <p>Canva, bootsnipp, Bootstrap</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}