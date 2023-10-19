import { useMemo } from "react";
import "./FOOTER.css";
const FOOTER = ({
  linkAppstorepng,
  fOOTERPosition,
  fOOTERBottom,
  fOOTERLeft,
  divpgEwoIconTop,
  onLinkFAQsClick,
  onLinkContactClick,
  onLinkTermsClick,
  onLinkPrivacyClick,
  onLinkOffersClick,
  onLinkReviewsClick,
  onLinkScheduledClick,
  onLinkACClick,
  onLinkCleaningClick,
  onLinkLightsClick,
  onLinkDentingClick,
  onLinkCustomClick,
  onLinkBatteriesClick,
  onLinkTyresClick,
  onLinkDetailingClick,
  onLinkWindshieldsClick,
}) => {
  const fOOTERStyle = useMemo(() => {
    return {
      position: fOOTERPosition,
      bottom: fOOTERBottom,
      left: fOOTERLeft,
    };
  }, [fOOTERPosition, fOOTERBottom, fOOTERLeft]);

  const divpgEwoIconStyle = useMemo(() => {
    return {
      top: divpgEwoIconTop,
    };
  }, [divpgEwoIconTop]);

  return (
    <div className="footer" style={fOOTERStyle}>
      <div className="footer-child" />
      <div className="footer-item" />
      <div className="div-3foey">
        <div className="div-2tmps">
          <div className="span-3l0pg">
            <img className="div-3wrwr-icon" alt="" src="/undefined17.png" />
            <b className="heading-5">Email</b>
          </div>
          <div className="link-infogomechanicin">Info@Carservice.in</div>
        </div>
        <div className="div-2tmps1">
          <div className="span-3l0pg">
            <img
              className="divpgewo-icon"
              alt=""
              src="/undefined18.png"
              style={divpgEwoIconStyle}
            />
            <b className="heading-51">Phone Number</b>
          </div>
          <div className="link-9388893888">9388893888</div>
        </div>
        <div className="div-2tmps2">
          <div className="span-3l0pg">
            <img className="div-2wrtx-icon" alt="" src="/undefined19.png" />
            <b className="heading-52">Working Days</b>
          </div>
          <div className="link-infogomechanicin">Monday - Sunday</div>
        </div>
        <div className="div-2tmps3">
          <div className="span-3l0pg">
            <img className="divpgewo-icon" alt="" src="/undefined20.png" />
            <b className="heading-53">Working Hours</b>
          </div>
          <div className="am-900pmist">7:00AM - 9:00PM(IST)</div>
        </div>
        <div className="link-playstorepng-parent">
          <img className="link-playstorepng" alt="" src="/undefined21.png" />
          <img className="link-playstorepng" alt="" src={linkAppstorepng} />
        </div>
      </div>
      <img className="link-icon" alt="" src="/undefined23.png" />
      <img className="link-icon1" alt="" src="/undefined24.png" />
      <img className="link-icon2" alt="" src="/undefined25.png" />
      <img className="link-icon3" alt="" src="/undefined26.png" />
      <img className="link-icon4" alt="" src="/undefined27.png" />
      <div className="f-212-dlf-new">F-212, DLF NEW TOWN HEIGHTS,</div>
      <div className="sector-91-garhi">
        SECTOR 91, Garhi Harsaru, Gurugram, Haryana, 122505
      </div>
      <div className="frame-group">
        <div className="heading-4-about-us-parent">
          <div className="heading-4">ABOUT US</div>
          <div className="div-3s5jj">
            <div className="link-faqs" onClick={onLinkFAQsClick}>
              FAQs
            </div>
            <div className="link-faqs" onClick={onLinkContactClick}>
              Contact Us
            </div>
            <div className="link-careers">Careers</div>
            <div className="link-faqs" onClick={onLinkTermsClick}>
              Terms and Conditions
            </div>
            <div className="link-faqs" onClick={onLinkPrivacyClick}>
              Privacy Policy
            </div>
            <div className="link-careers">Car Service Partners</div>
            <div className="link-careers">Workshop Locator</div>
            <div className="link-faqs" onClick={onLinkOffersClick}>
              Offers
            </div>
            <div className="link-faqs" onClick={onLinkReviewsClick}>
              Reviews
            </div>
            <div className="link-careers">Directory</div>
          </div>
        </div>
        <div className="heading-4-about-us-parent">
          <div className="heading-4">OUR SERVICES</div>
          <div className="div-3s5jj1">
            <div className="link-faqs" onClick={onLinkScheduledClick}>
              Scheduled Services
            </div>
            <div className="link-faqs" onClick={onLinkACClick}>
              AC Services
            </div>
            <div
              className="link-faqs"
              onClick={onLinkCleaningClick}
            >{`Cleaning & Detailing`}</div>
            <div
              className="link-faqs"
              onClick={onLinkLightsClick}
            >{`Lights & Fitments`}</div>
            <div className="link-faqs" onClick={onLinkDentingClick}>
              Denting Painting
            </div>
            <div className="link-careers">Insurance Services</div>
            <div className="link-faqs" onClick={onLinkCustomClick}>
              Custom Repair
            </div>
            <div className="link-faqs" onClick={onLinkBatteriesClick}>
              Batteries
            </div>
            <div className="link-faqs" onClick={onLinkTyresClick}>
              Tyres
            </div>
            <div className="link-faqs" onClick={onLinkDetailingClick}>
              Detailing Services
            </div>
            <div
              className="link-faqs"
              onClick={onLinkWindshieldsClick}
            >{`Windshields & Glass`}</div>
          </div>
        </div>
        <div className="heading-4-luxury-brands-parent">
          <div className="heading-4">LUXURY BRANDS</div>
          <div className="div-3s5jj2">
            <div className="link-careers">Mercedes</div>
            <div className="link-careers">BMW</div>
            <div className="link-careers">Audi</div>
            <div className="link-careers">Volvo</div>
            <div className="link-careers">Mitsubishi</div>
            <div className="link-careers">Jaguar</div>
            <div className="link-careers">Porsche</div>
            <div className="link-careers">Rolls Royce</div>
            <div className="link-careers">Ferrari</div>
            <div className="link-careers">Land Rover</div>
          </div>
        </div>
        <div className="heading-4-about-us-parent">
          <div className="heading-4">POPULAR BRANDS</div>
          <div className="div-3s5jj3">
            <div className="link-careers">Maruti Suzuki</div>
            <div className="link-careers">Hyundai</div>
            <div className="link-careers">Honda</div>
            <div className="link-careers">Toyota</div>
            <div className="link-careers">Tata</div>
            <div className="link-careers">Mahindra</div>
            <div className="link-careers">Chevrolet</div>
            <div className="link-careers">Fiat</div>
            <div className="link-careers">Renault</div>
            <div className="link-careers">Kia</div>
            <div className="link-careers">Skoda</div>
            <div className="link-careers">Volkswagen</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FOOTER;
