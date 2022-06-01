import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../../Styles/Marketing.css";

const ShowMarketing = ({ MarketingData, createMarketing }) => {
  //console.log("props from ShowContact", MarketingData);

  const [newMarketingForm, setnewMarketingForm] = useState({
    Marketing_info: {
      gitHub: "",
      linkedIn: "",
      resume: "",
      coverLetter: "",
    },
  });

  const handleChange = (event) => {
    setnewMarketingForm({
      Marketing_info: {
        ...newMarketingForm.Marketing_info,
        [event.target.name]: event.target.value,
      },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createMarketing(newMarketingForm);
    setnewMarketingForm({
      Marketing_info: {
        gitHub: "",
        linkedIn: "",
        resume: "",
        coverLetter: "",
      },
    });
  };

  const loadedMarketingData = () => {
    return MarketingData.map((data) => (
        <div key={data._id} className="marketing">
          <ul>
            <li>
              <a href={data.Marketing_info.gitHub} target="_blank"rel="noreferrer">
              <i className="fa-brands fa-github github">GitHub</i>
              </a>
            </li>
            <li>
              <a href={data.Marketing_info.linkedIn}>
              <i className="fa-brands fa-linkedin linkedin">Linkedin</i>
              </a>
            </li>
            <li>
              <a href={data.Marketing_info.Resume}>
              <i className="fa-solid fa-file resume">Resume</i>
              </a>
            </li>
            <li>
              <a href={data.Marketing_info.coverLetter}>
              <i className="fa-solid fa-envelope coverletter">Cover Letter</i>
              </a>
            </li>
          </ul>
          <Link to={`/marketing/${data._id}`}>
            <button className="btn-edit-marketing">Ediit</button>
          </Link>
        </div>
    ));
  };

  const loadingMarketingData = () => {
    return <h1>Loading.......</h1>;
  };

  return (
    <div>
      <h1>ShowMarketing</h1>
      {MarketingData ? loadedMarketingData() : loadingMarketingData()}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newMarketingForm.Marketing_info.gitHub}
          name="gitHub"
          placeholder="gitHub"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newMarketingForm.Marketing_info.linkedIn}
          name="linkedIn"
          placeholder="linkedIn"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newMarketingForm.Marketing_info.resume}
          name="resume"
          placeholder="resume"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newMarketingForm.Marketing_info.coverLetter}
          name="coverLetter"
          placeholder="coverLetter"
          onChange={handleChange}
        />
        <input type="submit" value="Create New Marketing" />
      </form>
    </div>
  );
};

export default ShowMarketing;
