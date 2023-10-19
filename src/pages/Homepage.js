import { useState, useCallback } from "react";
import MORE from "../components/MORE";
import PortalPopup from "../components/PortalPopup";
import Login from "../components/Login";
import CITY from "../components/CITY";
import FrameComponent from "../components/FrameComponent";
import CuratedCustomServicesContainer from "../components/CuratedCustomServicesContainer";
import WorkshopCard from "../components/WorkshopCard";
import FOOTER from "../components/FOOTER";
import CardContainer from "../components/CardContainer";
import Container from "../components/Container";
import Container1 from "../components/Container1";
import GroupComponent2 from "../components/GroupComponent2";
import RatingCard from "../components/RatingCard";
import "./Homepage.css";
const Homepage = () => {
  const [isMOREOpen, setMOREOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isCITYOpen, setCITYOpen] = useState(false);

  const onCuratedCustomServiceClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onHowCarServiceClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='groupContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onRatingReviewsClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);
  const onOurServies = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  

  const openMORE = useCallback(() => {
    setMOREOpen(true);
  }, []);

  const closeMORE = useCallback(() => {
    setMOREOpen(false);
  }, []);

  const openLogin = useCallback(() => {
    setLoginOpen(true);
  }, []);

  const closeLogin = useCallback(() => {
    setLoginOpen(false);
  }, []);

  const openCITY = useCallback(() => {
    setCITYOpen(true);
  }, []);

  const closeCITY = useCallback(() => {
    setCITYOpen(false);
  }, []);

  return (
    <>
      <div className="homepage">
        <img className="homepage-child" alt="" src="/undefined50.png" />
        <div className="link-spares-parent">
          <b className="link-spares">Spares</b>
          <b className="link-blog">
            Blog
          </b>
          <b className="link-blog" onClick={openMORE}>
            More
          </b>
          <div className="div-3g2ie" onClick={openLogin}>
            <b className="link-spares">Login</b>
          </div>
        </div>
        <div className="whatsapp-image-2023-05-26-at-1-wrapper">
          <img
            className="whatsapp-image-2023-05-26-at-1"
            alt=""
            src="/undefined51.png"
          />
        </div>
        <FrameComponent
          line122="/undefined52.png"
          frameDivPosition="absolute"
          frameDivTop="677px"
          frameDivLeft="24px"
          rectangleDivBorderRadius="12px"
          ourServicesColor="#001b39"
          curatedCustomServiceCursor="pointer"
          howCarServiceCursor="pointer"
          ratingReviewsCursor="pointer"
          onCuratedCustomServiceClick={onCuratedCustomServiceClick}
          onHowCarServiceClick={onHowCarServiceClick}
          onRatingReviewsClick={onRatingReviewsClick}
        />
        <div className="heading-2-car-services-avail-parent">
          <b className="heading-2">Car Services Available In Hyderabad</b>
          <div className="get-hassle-free-and">
            Get hassle-free and professional car service, car repair, wheel care
            services, cashless insurance claim and much more in Hyderabad.
          </div>
        </div>
        
        <CuratedCustomServicesContainer />
        <div className="heading-2-car-services-avail-group">
          <b className="heading-21">Choose the workshop Near You</b>
          <div className="rectangle-group">
            <div className="rectangle-div" />
            <WorkshopCard />
          </div>
        </div>
        <div
          className="heading-2-car-services-avail-container"
          data-scroll-to="groupContainer"
        >
          <b className="heading-22">How Car Service Works ?</b>
          <div className="group-parent">
            <div className="group-div">
              <b className="heading-23">Free Pickup Drop</b>
              <b className="heading-24">Genuine Parts</b>
            </div>
            <div className="heading-2-car-services-avail-parent1">
              <b className="heading-25">30 Days Warranty</b>
              <b className="heading-26">Affordable Price</b>
            </div>
          </div>
        </div>
        <FOOTER
          linkAppstorepng="/undefined75.png"
          fOOTERPosition="absolute"
          fOOTERBottom="0px"
          fOOTERLeft="0px"
          divpgEwoIconTop="calc(50% - 8px)"
         />
        <div className="experience-the-best">
          Experience The Best Car Services In Hyedrabad
        </div>
        <div className="homepage-item" />
       
        <div className="hyderabad-parent" onClick={openCITY}>
          <b className="link-spares">Hyderabad</b>
          <img
            className="b1a6d933-cb2c-4a34-b9f8-efeb99-icon"
            alt=""
            src="/undefined80.png"
          />
        </div>
        <div className="we-provide-our">
          We provide Our Services in over 100+ Major Cities also.
        </div>
        <i className="car-service">CAR SERVICE</i>
        <div className="group-container">
          <div className="group-parent1" >
            <img className="group-child" alt="" src="/undefined81.png" />
            <div className="batteries">Batteries</div>
          </div>
          <img className="image-70-icon" alt="" src="/undefined82.png" />
        </div>
        <div className="group-parent2">
          <div className="group-parent3" >
            <img className="group-item" alt="" src="/undefined83.png" />
            <div className="ac-service">{`AC Service & Repair`}</div>
          </div>
          <img className="image-69-icon" alt="" src="/undefined84.png" />
        </div>
        <div className="group-parent4">
          <div className="group-parent5">
            <img className="group-child" alt="" src="/undefined85.png" />
            <div className="insurance">Insurance</div>
          </div>
          <img className="image-73-icon" alt="" src="/undefined86.png" />
        </div>
        <div className="group-parent6">
          <div className="group-parent7" >
            <img className="group-child1" alt="" src="/undefined87.png" />
            <div className="ac-service">{`Denting & Painting`}</div>
          </div>
          <img className="image-72-icon" alt="" src="/undefined88.png" />
          <img className="image-74-icon" alt="" src="/undefined89.png" />
        </div>
        <div className="group-parent8">
          <div className="group-parent9" >
            <img className="group-child" alt="" src="/undefined90.png" />
            <div className="car-spa-container">
              <p className="car-spa">{`Car Spa &`}</p>
              <p className="car-spa">Cleansing</p>
            </div>
          </div>
          <img className="image-75-icon" alt="" src="/undefined91.png" />
          <img className="image-76-icon" alt="" src="/undefined92.png" />
        </div>
        <img className="image-77-icon" alt="" src="/undefined93.png" />
        <div className="group-parent10">
          <div className="group-parent11">
            <img className="group-child" alt="" src="/undefined94.png" />
            <div className="car-inspection">
              <span className="car-inspection-txt-container">
                <p className="car-spa">Car</p>
                <p className="car-spa">Inspection</p>
              </span>
            </div>
          </div>
          <img className="image-78-icon" alt="" src="/undefined95.png" />
        </div>
        <div className="group-parent12" >
          <div className="group-parent13">
            <img className="group-child4" alt="" src="/undefined77.png" />
            <div className="ac-service">
              <p className="car-spa">{`Wind Shield &`}</p>
              <p className="car-spa">Lights</p>
            </div>
          </div>
          <img className="image-79-icon" alt="" src="/undefined96.png" />
          <img className="image-80-icon" alt="" src="/undefined97.png" />
        </div>
        <img className="image-81-icon" alt="" src="/undefined98.png" />
        <img className="image-82-icon" alt="" src="/undefined99.png" />
        <img className="image-84-icon" alt="" src="/undefined100.png" />
        <div className="group-parent14">
          <div className="group-parent15" >
            <img className="group-child5" alt="" src="/undefined101.png" />
            <div className="ac-service">{`Detailing Service `}</div>
          </div>
          <img className="image-85-icon" alt="" src="/undefined102.png" />
        </div>
        <div className="frame-parent2">
          <div
            className="heading-2-car-services-avail-wrapper"
            data-scroll-to="frameContainer"
          >
            <b className="heading-27">What Car Owners in Hyderabad Say</b>
          </div>
          <div className="group-parent16">
            <CardContainer
              ellipse224="/undefined104.png"
              heading2CarServicesAvaila="Mohith Reddy"
              image92="/undefined106.png"
              wEEKAGO="1 WEEK AGO"
              absolutelyRecommendedGara="Absolutely recommended garage for everyone..!! Recently I had a issue of oil filters and engine m ounts replacement for my car BMW and i don't want my car to showroom because it will usually takes 1-2 weeks , so then my friend suggested this garage. And even gave the manager number. The manager there Sai is very professional and friendly person. With in two days they resolved my issue and even they gave an astonishing general service"
            />
            <Container />
            <Container1 />
            <GroupComponent2 />
            <CardContainer
              ellipse224="/undefined114.png"
              heading2CarServicesAvaila="Shiva Kumar"
              image92="/undefined113.png"
              wEEKAGO="4 WEEKS AGO"
              absolutelyRecommendedGara="This is a very trusted most popular and very amazing service provider mechanic luxury car service centre they have very best experience in this field for providing very best service (I car service) very good experience with maneger Sai"
              propLeft="397px"
              propBottom="656px"
              propWidth="285px"
              propWidth1="212px"
            />
            <CardContainer
              ellipse224="/undefined115.png"
              heading2CarServicesAvaila="Atharva Kulkarni"
              image92="/undefined113.png"
              wEEKAGO="1 MONTH AGO"
              absolutelyRecommendedGara="Excellent service. Sai helped me when I was stranded on highway (100km from city) at night due to battery malfunction. The towing of my car was arranged by Sai, then he repaired the car in quick time. He made sure that I understand what part was to be repaired and why. With the seamless service, I have become his all time customer :)"
              propLeft="399px"
              propBottom="329px"
              propWidth="287px"
              propWidth1="214px"
            />
          </div>
        </div>
        <img className="mask-group-icon" alt="" src="/undefined116.png" />
        <div className="lorem-ipsum-dolor">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec egestas ligula. Nulla facilisi. Phasellus faucibus ligula id mauris varius, eget faucibus lorem fringilla. Vivamus ut felis porta, luctus libero eget, feugiat velit. Sed aliquet leo et ex sodales, `}</div>
        <RatingCard />
        <img className="city-driver-pana-1" alt="" src="/undefined119.png" />
        <img className="image-153-icon" alt="" src="/undefined120.png" />
        <img
          className="product-quality-pana-1"
          alt=""
          src="/undefined121.png"
        />
        <img className="piyi3z-929-ai-1-icon" alt="" src="/undefined122.png" />
       
      </div>
      {isMOREOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMORE}
        >
          <MORE onClose={closeMORE} />
        </PortalPopup>
      )}
      {isLoginOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLogin}
        >
          <Login onClose={closeLogin} />
        </PortalPopup>
      )}
      {isCITYOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCITY}
        >
          <CITY onClose={closeCITY} />
        </PortalPopup>
      )}
    </>
  );
};

export default Homepage;
