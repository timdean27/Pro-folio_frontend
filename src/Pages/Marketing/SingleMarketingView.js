import React from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const SingleMarketingView = ({ MarketingData, updateMarketing }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  let marketingCurrent = MarketingData.find(marketing => marketing._id === id);

  const [editMarketing, setEditMarketing] = useState(marketingCurrent);

  const handleChange = (event) => {
    setEditMarketing({
      Marketing_info: {
        ...editMarketing.marketing,
        [event.target.name]: event.target.value,
      },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateMarketing(editMarketing, id);

    navigate("/");
  };

  const loadedMarketing = () => {
    return (
      <div key={marketingCurrent._id} className="Marketing">
        <p>{marketingCurrent.Marketing_info.gitHub}</p>
        <p>{marketingCurrent.Marketing_info.linkedIn}</p>
        <p>{marketingCurrent.Marketing_info.resume}</p>
        <p>{marketingCurrent.Marketing_info.coverLetter}</p>
      </div>
    );
  };

    const loadingMarketing = () => {
      return <h1>Loading.........</h1>;
    }

    return (
        <div>SingleMarketingView
        {MarketingData ? loadedMarketing() : loadingMarketing()}
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={editMarketing.Marketing_info.gitHub}
                name="gitHub"
                placeholder="GitHub URL"
                onChange={handleChange}
            />
            <input 
                type="text"
                value={editMarketing.Marketing_info.linkedIn}
                name="linkedIn"
                placeholder="LinkedIn URL"
                onChange={handleChange}
            />
            <input 
                type="text"
                value={editMarketing.Marketing_info.resume}
                name="resume"
                placeholder="resume URL"
                onChange={handleChange}
            />
            <input 
                type="text"
                value={editMarketing.Marketing_info.coverLetter}
                name="coverLetter"
                placeholder="coverLetter URL"
                onChange={handleChange}
            />
            <input type="submit" value="Submit" />
        </form>
        </div>
    )
};

export default SingleMarketingView;