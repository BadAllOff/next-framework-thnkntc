import React from "react";
import ContactFormModal from "./ContactFormModal";

const AuthorCard = ({ author }) => {
  return (
    <div className="card border-dark">
      <img className="card-img-top" src={author.avatar} alt={author.name} />
      <div className="card-body">
        <h5 className="card-title">{author.name}</h5>
        <p className="card-text">{author.about}</p>
        <p className="card-text">
          <small className="text-muted">{author.email}</small>
        </p>
        <ContactFormModal author={author} />
      </div>
    </div>
  );
};

export default AuthorCard;
