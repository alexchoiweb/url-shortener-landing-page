import React, { useRef } from "react";

export default function URLInput() {
  const inputRef = useRef();

  const submit = () => {
    let url = inputRef.current.value;

    if (url == "") {
      console.log("blank");
    } else {
      console.log(url);
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
        .then((data) => console.log(`https://rel.ink/${data.hashid}`))
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="Content__inputContainer">
      <input
        className="Content__input"
        ref={inputRef}
        type="text"
        placeholder="Shorten a link here..."
      ></input>
      <button className="Content__inputButton button-cta" onClick={submit}>
        Shorten it!
      </button>
    </div>
  );
}
