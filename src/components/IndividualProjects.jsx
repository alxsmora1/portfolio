import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

class IndividualProjects extends Component {
  showModal = (title, body, image, skills, link, linkCode) => {
    const listItems = skills.map((skill) => " " + skill);

    const MySwal = withReactContent(Swal);

    MySwal.fire({
      title: `<h1 class="text-center">${title}</h1>`,
      html:`
        <img class="img-fluid text-center shadow rounded" src="${image}" alt="" />
        <p class="lead text-center"><strong>Description</strong></p>
        <p class="text-center lead"> ${body} </p>
        <p class="lead text-center"><strong>Build with: </strong></P>
        ${listItems}
        <br><br>
        <div class="row">
          <div class="col-md-6">
            <a class="btn btn-primary form-control" href="${link}" target="_BLANK"> <i class="fas fa-globe"></i> Live Project</a>
          </div>
          <div class="col-md-6">
            <a class="btn btn-primary form-control" href="${linkCode}" target="_BLANK"> <i class="fab fa-github"></i> Github Code</a>
          </div>
        </div>
        `,
      showCloseButton: true,
      showConfirmButton: false,
    });
  };

  render() {
    return (
      <div class="col-md-6 col-lg-4 mb-5">
        <div class="portfolio-item mx-auto shadow h-100" data-aos="flip-left">
          <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
            <div class="portfolio-item-caption-content text-center text-white">
              <p>{this.props.title}</p>
              <button
                className="btn btn-success"
                onClick={() =>
                  this.showModal(
                    this.props.title,
                    this.props.body,
                    this.props.image,
                    this.props.skills,
                    this.props.link,
                    this.props.linkCode
                  )
                }
              >
                <FontAwesomeIcon icon={faPlus} /> Show More
              </button>
            </div>
          </div>
          <img class="img-fluid" src={this.props.image} alt="" />
        </div>
      </div>
    );
  }
}

export default IndividualProjects;
