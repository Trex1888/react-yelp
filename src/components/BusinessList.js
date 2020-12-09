import React from "react";
import "../styles/BusinessList.css";
import Business from "../components/Business";

class BusinessList extends React.Component {
  render() {
    return (
      <div className="businessList">
        {this.props.businesses.map((business) => {
          return <Business key={business.id} business={business} />;
        })}
      </div>
    );
  }
}

export default BusinessList;
