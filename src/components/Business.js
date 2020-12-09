import React from "react";
import "../styles/Business.css";

class Business extends React.Component {
  render() {
    return (
      <div className="business">
        <div className="image-container">
          <img src={this.props.business.image_url} alt="" />
        </div>
        <h2>{this.props.business.name}</h2>
        <div className="business__information">
          <div className="business__address">
            <p>{this.props.business.address1}</p>
            <p>{this.props.business.city}</p>
            <p>{`${this.props.business.state} ${this.props.business.zip_code}`}</p>
          </div>
          <div className="business__reviews">
            <h3>{this.props.business.category.toUpperCase()}</h3>
            <h3 className="business__rating">{`${this.props.business.rating} stars`}</h3>
            <p>{`${this.props.business.review_count} reviews`}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;
