import React from "react";

export default function Link(props) {
  const copy = () => {
    const copyText = document.getElementById(props.id);
    copyText.select();
    document.execCommand("copy");
  };

  return (
    <div className="Link">
      <p className="Link__originalLink">{props.urls.originalLink}</p>
      <p className="Link__shortLink">{props.urls.shortLink}</p>
      <input
        readOnly
        type="text"
        // style={{ display: "none" }}
        style={{ position: "absolute", left: "-1000px" }}
        id={props.id}
        value={props.urls.shortLink}
      ></input>
      <button className="Link__copyButton button-cta" onClick={copy}>
        Copy
      </button>
    </div>
  );
}
