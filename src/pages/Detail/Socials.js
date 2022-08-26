import React from "react";

const Socials = ({ btnLinkSocials }) => {
  return (
    <div className="detail-footer flex gap-4 p-4 items-center justify-between ">
      {btnLinkSocials.map((social) => (
        <button className="button-link" key={social.id}>
          <a
            className="detail-link-social"
            rel="noreferrer"
            target="_blank"
            href={social.urlLink}
          >
            {social.name}
          </a>
          <p> {social.name}</p>
        </button>
      ))}
    </div>
  );
};

export default Socials;
