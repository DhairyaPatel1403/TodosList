import React from 'react'
import "./Footer.css";
import { SocialIcon } from 'react-social-icons';

export const Footer = () => {
  return (
    <section id="footer">
        
		<div className="container">
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
					<ul className="list-unstyled list-inline social text-center">
                        <SocialIcon className="mx-3" url="https://github.com/DhairyaPatel1403"/>
                        <SocialIcon className="mx-3" url="https://www.linkedin.com/in/dhairya-patel-032070223/"/>
                        <SocialIcon className="mx-3" url="mailto:dpvp1403@gmail.com" />
					</ul>
                    <br/>
				</div>
				<hr/>
			</div>	
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
					<p>ToDo's List is a web-application developed by @<a href="https://github.com/DhairyaPatel1403">DhairyaPatel</a> using ReactJs and Canva.</p>
					<p className="h6">© All rights Reserved <a className="text-green ml-2" href="https://github.com/DhairyaPatel1403" target="_blank">DhairyaPatel</a></p>
				</div>
				<hr/>
			</div>	
		</div>
	</section>
  )
}