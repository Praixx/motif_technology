import Boba from "../assets/boba.png";
import Bosch from "../assets/bosch.png";
import Freestone from "../assets/freestone.png";
import Impactive from "../assets/impactive.png";
import Porsche from "../assets/porsche.png";
import Reverso from "../assets/reverso.png";
import Tata from "../assets/tata.png";

function SponsorsMenu() {
  return (
    <div className="grid grid-cols-[1fr_1fr_1fr] gap-5 md:ml-20 md:mr-9 md:flex md:justify-center md:gap-14 md:border-l md:border-r">
      <div className="md:pb-5 md:pt-7">
        <img src={Boba} alt="Boba logo" />
      </div>
      <div className="md:pb-5 md:pt-7">
        <img src={Bosch} alt="Bosch logo" />
      </div>
      <div className="md:pb-5 md:pt-7">
        <img src={Freestone} alt="Freestone logo" />
      </div>
      <div className="md:pb-5 md:pt-7">
        <img src={Impactive} alt="Impactive logo" />
      </div>
      <div className="md:pb-5 md:pt-7">
        <img src={Porsche} alt="Porsche logo" />
      </div>
      <div className="md:pb-5 md:pt-7">
        <img src={Reverso} alt="Reverso logo" />
      </div>
      <div className="md:pb-5 md:pt-7">
        <img src={Tata} alt="Tata logo" />
      </div>
    </div>
  );
}

export default SponsorsMenu;
