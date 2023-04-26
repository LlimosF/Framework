import React from "react";
import "../../../Pages/French/FrenchUtilisation/FrenchUtilisation.css";
import DownloadButton from "../../../Components/Download/Download";
import CopyButton from "../../Copy/Copy";

export default function EnglishUseContent () {
  return (
    <div>
      <h2 className="title-use">Guide to using the Framework</h2>
      <div className="card">
          <h3>Copy / paste</h3>
          <hr className="separator-card" />
          <p>100% secure</p>
          <hr className="separator-card" />
          <p>Editable</p>
        </div>
        <div className="card">
          <h3>Download</h3>
          <hr className="separator-card" />
          <p>Secure download</p>
          <hr className="separator-card" />
          <p>Editable</p>
        </div>
        <h4 className="title-utilisation">Copier / coller</h4>
        <p className="text">
          To use this solution, create a file named "framework.css". Click the button below and just paste all the text into this file. You will only be left
          more cases integrate this css file in your html page.
        </p>
        <CopyButton />
        <h4 className="title-utilisation">Téléchargement</h4>
        <p className="text">
        For this solution, you just need to click the button below, it will download the css file for you,
          drag it into your project and link it to your html page.
        </p>
        <DownloadButton />
    </div>
  )
}