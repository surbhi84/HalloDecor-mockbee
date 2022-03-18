import foot from "./footer.module.css";

const footerLink = [
  { name: "Faq's", link: "" },
  { name: "T&C", link: "" },
  { name: "Terms of use", link: "" },
  { name: "Order tracking", link: "" },
  { name: "Shipping", link: "" },
  { name: "Returns", link: "" },
  { name: "Cancellation", link: "" },
  { name: "Feedback", link: "" },
];
// the empty strings are there till the time links are created

const footerIcon = [
  {
    iconClass: "fab fa-linkedin-in",
    link: "https://www.linkedin.com/in/surbhi-kukreti-a91b0b163",
  },
  { iconClass: "fab fa-github", link: "https://github.com/surbhi84" },
  {
    iconClass: "fab fa-twitter",
    link: "https://twitter.com/Surbhikukreti89",
  },
  { iconClass: "fab fa-medium-m", link: "https://medium.com/@surbhikukreti" },
];

export const Footer = () => {
  function FooterLinks() {
    return (
      <>
        {footerLink.map((item) => {
          return (
            <li key={item.name}>
              <a className={foot["footer-link"]} href={item.link}>
                {item.name}
              </a>
            </li>
          );
        })}
      </>
    );
  }

  function FooterIcons() {
    return (
      <>
        {footerIcon.map((item) => {
          return (
            <li key={item.iconClass} className={foot["footer-icon"]}>
              <a
                href={item.link}
                target="blank"
                className={foot["footer-icon"]}
              >
                <i className={item.iconClass}></i>
              </a>
            </li>
          );
        })}
      </>
    );
  }

  return (
    <footer>
      <div className={foot["footer-grid"]}>
        {/* <!-- icon-links --> */}
        <div className="display-block">
          Keep in touch
          <ul className={foot["footer-list"]}>
            <FooterIcons />
          </ul>
        </div>
        {/* end of icon-links  */}

        {/* <!-- useful links --> */}
        <div className="display-block">
          Useful Links
          <ul className={foot["footer-list"]}>
            <FooterLinks />
          </ul>
        </div>
        {/* <!-- end of useful links  --> */}
      </div>

      <div className={`${foot["copyright-text"]} flex-row`}>
        <p className="marg-un">
          In case of any concern,
          <a href="" className={foot["footer-link"]}>
            Contact Us
          </a>
        </p>
        <p className="marg-un">
          © 2022 HalloDecor by Surbhi Kukreti. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
