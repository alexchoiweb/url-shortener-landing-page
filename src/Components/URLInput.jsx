import React, { useState, useRef } from "react";

import Link from "./Link.jsx";

export default function URLInput() {
  const [links, setLinks] = useState([]);
  const inputRef = useRef();

  function isValidURL(str) {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(str);
  }

  const submit = () => {
    let invalidInputMessage = document.querySelector(".Content__invalidInput");
    if (invalidInputMessage != null) {
      invalidInputMessage.remove();
    }

    let url = inputRef.current.value;
    let inputEl = document.querySelector(".Content__input");
    let child = document.createElement("p");
    child.classList.add("Content__invalidInput");
    child.innerHTML = "Please add a valid http link";

    if (!isValidURL(url)) {
      inputEl.classList.add("input-error");
      inputEl.insertAdjacentElement("afterend", child);
    } else {
      let invalidEl = document.querySelector(".Content__invalidInput");
      if (invalidEl) invalidEl.remove();
      inputEl.classList.remove("input-error");

      fetch("https://rel.ink/api/links/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: url,
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          const link = [url, `https://rel.ink/${data.hashid}`];
          setLinks([...links, link]);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className="Content__inputContainer">
        <input
          className="Content__input"
          ref={inputRef}
          type="url"
          placeholder="Shorten a link here..."
        ></input>
        <button className="Content__inputButton button-cta" onClick={submit}>
          Shorten it!
        </button>
      </div>
      <div className="Content__linkContainer">
        {links.map((link, index) => {
          return <Link link={link} key={index} id={index} />;
        })}
      </div>
    </>
  );
}
