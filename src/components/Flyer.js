import React, { useState, useEffect } from "react";
import StarMonth from "../images/star_of_month.png";
import ImageSelect from "./ImageSelect";
import starBadge from "../svg/starBadge.svg";

export default function Flyer(props) {
  const [imgType, setImgType] = useState("");
  const [images, setImages] = useState({
    starOfMonth: "",
    sig1: "",
    sig2: "",
    sig3: "",
  });

  useEffect(() => {
    setImages((prevState) => ({
      ...prevState,
      [imgType]: props.path,
    }));
  }, [props.path]);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <input
        type="text"
        placeholder="NAME &amp; SURNAME"
        style={{
          position: "absolute",
          top: "235px",
          left: "280px",
          fontSize: "25.53pt",
          border: "0",
          color: "#F06728",
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      />

      <textarea
        rows="2"
        placeholder="REALPAGE"
        maxLength="38"
        style={{
          resize: "none",
          position: "absolute",
          top: "30px",
          left: "36px",
          fontSize: "23pt",
          border: "0",
          color: "#FFF",
          backgroundColor: "#F06728",
          fontWeight: "bold",
          textTransform: "uppercase",
          width: "330px",
          height: "80px",
        }}
      />

      <ImageSelect
        imageType="starOfMonth"
        top="135px"
        left="15px"
        width="60mm"
        path={images.starOfMonth}
        setImgType={setImgType}
        default={starBadge}
      />
      <ImageSelect
        imageType="sig1"
        top="430px"
        left="100px"
        width="60px"
        path={images.sig1}
        setImgType={setImgType}
        default={starBadge}
      />
      <ImageSelect
        imageType="sig2"
        top="430px"
        left="380px"
        width="60px"
        path={images.sig2}
        setImgType={setImgType}
        default={starBadge}
      />
      <ImageSelect
        imageType="sig3"
        top="430px"
        left="680px"
        width="60px"
        path={images.sig3}
        setImgType={setImgType}
        default={starBadge}
      />
      <img src={StarMonth}></img>
    </div>
  );
}
