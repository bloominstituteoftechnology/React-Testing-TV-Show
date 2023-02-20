import React from "react";

const Autocomplete = (props) => {
  var rememberShow = "";
  const chooseShow = () => {
    props.setSelectedSeason("");
    const showWords = rememberShow.split(" ").join("-").toLowerCase();
    props.setShowApi(
      `https://api.tvmaze.com/singlesearch/shows?q=${showWords}&embed=episodes`
    );
  };
  return (
    <div>
      {props.desiredShow.map((item, index) => {
        const showSubmit = () => {
          props.setShow(null);
          rememberShow = item.show.name;
          chooseShow();

          props.setShowText("");
        };

        return (
          <p key={index} style={{ cursor: "pointer" }} onClick={showSubmit}>
            {item.show.name}
          </p>
        );
      })}
    </div>
  );
};
export default Autocomplete;