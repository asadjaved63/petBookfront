import React, { useState, useEffect, lazy } from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCol,
  CContainer,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilMagnifyingGlass } from '@coreui/icons'
import PetDataService from "../../services/pet.service"
const Home = () => {
    const [petdata, setPetdata] = useState([]);
    useEffect(() => {
        retrievePets()
      }, []);
      const retrievePets = () => {
        PetDataService.getAll()
          .then(response => {
            setPetdata(response.data);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      };
  return (
    <>
      <div className="topbar">
        <div className="container-lg container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#">
                    <img src={require(`../../assets/images/logo.png`)} />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Listing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Contact Us</a>
                        </li>
                    </ul>
                    <div className="topright">
                        <i className="fas fa-search"></i>
                        <a href="javascript:void(0);" className="custombtn">Adopt Here</a>
                    </div>
                </div>
            </nav>
        </div>
    </div>

    <div className="banner">
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={require(`../../assets/images/slider_bg_3.jpg`)} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <div className="banner_content">
                           
                            <h1>We provide best pet products</h1>
                            <p>Human Shampoo on Dogs After six days of delirat, the jury found Hernandez guilty of first-degree murder</p>
                            <a href="javascript:void(0);" className="custombtn">View More</a>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={require(`../../assets/images/slider_bg_4.jpg`)} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <div className="banner_content">
                           
                            <h1>We provide best pet products</h1>
                            <p>Human Shampoo on Dogs After six days of delirat, the jury found Hernandez guilty of first-degree murder</p>
                            <a href="javascript:void(0);" className="custombtn">View More</a>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </button>
        </div>
    </div>

    <div className="searchbox">
        <div className="searchflied flex">
            <i className="fas fa-map-marker-alt"></i>
            <input type="text" placeholder="Enter City, State. or Zip" value="" />
        </div>
        <div className="searchbtn">
            <select className="custombtn">
                <option>Find Your Dog</option>
                <option>Find Your Cat</option>
                <option>Find Your Birds</option>
            </select>
        </div>
    </div>

    <div className="adoption_area">
        <div className="container-lg container-fluid">
            <div className="adoption_heading text-center">
               
                <h2>Puppies Waiting for Adoption</h2>
                <p>The best overall dog DNA test is Embark Breed & Health Kit (view at Chewy), which provides you with a breed brwn and information Most dogs</p>
            </div>    

            <div className="adoption_area_grid">
                {
                     
                        petdata.map((item, i) => 
                        <div className="adoption_card" key={i}>
                        <div className="adoption_card_thumb">
                            <img src="images/adoption_img_a.jpg" alt="" />
                            <Link to={`/petDtail/${item.pet_name}`} className="text-center mt-3">
                                Adoption 
                                <img src={require(`../../assets/uploads/${item.pet_img_1}`)} alt="" />
                            </Link>
                        </div>
                        <div className="adoption_card_content">
                            <h3 className="title">
                                <a href="#/shop-details">{item.pet_name}</a>
                                <span>30%</span>
                            </h3>
                            <div className="adoption_card_bottom">
                                <div className="adoption_card_bottom_inner">
                                    <i className="fas fa-cog"></i><a href="/#">{item.pet_name}</a>
                                </div>
                              
                             
                            </div>
                        </div>
                    </div>
                         )
                }
            </div>
        </div>
    </div>
    <footer>
        <div className="container-lg container-fluid">
            <div className="footer_grid">
                <div>
                    <div className="footer_inner">
                        <img src="images/logo.png" />
                        <p>The best overall dog DNA test Embark Breed &amp; Health Kit (view at Chewy) which provides overall dog you.</p>
                        <div className="social_icon">
                            <a href="javascript:void(0);"><i className="fab fa-facebook-f"></i></a>
                            <a href="javascript:void(0);"><i className="fab fa-twitter"></i></a>
                            <a href="javascript:void(0);"><i className="fab fa-youtube"></i></a>
                            <a href="javascript:void(0);"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="footer_links">
                        <h3>Our Policies</h3>
                        <ul>
                            <li><a href="javascript:void(0);"><i className="fas fa-angle-right"></i>Privacy Policy</a></li>
                            <li><a href="javascript:void(0);"><i className="fas fa-angle-right"></i>Terms and Conditions</a></li>
                            <li><a href="javascript:void(0);"><i className="fas fa-angle-right"></i>Editorial Policy</a></li>
                            <li><a href="javascript:void(0);"><i className="fas fa-angle-right"></i>Return Policy</a></li>
                            <li><a href="javascript:void(0);"><i className="fas fa-angle-right"></i>IP Policy</a></li>
                            <li><a href="javascript:void(0);"><i className="fas fa-angle-right"></i>Grievance Redressal Policy</a></li>
                            <li><a href="javascript:void(0);"><i className="fas fa-angle-right"></i>Our Conditions</a></li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div className="footer_links">
                        <h3>Our Services</h3>
                        <ul>
                            <li><a href="javascript:void(0);"><i className="fas fa-angle-right"></i>Our Breeder</a></li>
                            <li><a href="javascript:void(0);"><i className="fas fa-angle-right"></i>Our Adoption</a></li>
                            <li><a href="javascript:void(0);"><i className="fas fa-angle-right"></i>Editorial Policy</a></li>
                            <li><a href="javascript:void(0);"><i className="fas fa-angle-right"></i>Return Policy</a></li>
                            <li><a href="javascript:void(0);"><i className="fas fa-angle-right"></i>Grievance Policy</a></li>
                            <li><a href="javascript:void(0);"><i className="fas fa-angle-right"></i>Redressal Policy</a></li>
                            <li><a href="javascript:void(0);"><i className="fas fa-angle-right"></i>Contact Us</a></li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div className="footer_links">
                        <h3>Contact Info</h3>
                        <p>If you have any question.please contact us at <a href="javascript:void(0)"> demo@example.com</a></p>
                        <div className="footer_call">
                            <div>
                                <div className="icon">
                                    <i className="fas fa-mobile"></i>
                                </div>
                            </div>
                            <div>
                                <span>Have any Question</span>
                                <h4>747-800-9880</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  

            <div className="copyright">
                Copyright © 2022 kutto. All Rights Reserved.  
            </div> 
        </div>
    </footer>
    </>
  )
}

export default Home
