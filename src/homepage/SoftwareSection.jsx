import Button from "../ui/Button";
import List from "../assets/List.png";

function SoftwareSection() {
  return (
    <div className="mt-10 rounded-t-3xl bg-gradient-to-b from-blue-50 to-stone-50 pt-10 md:pl-28 md:pr-9">
      <div className="md:mb-16 md:mt-5 md:grid md:grid-cols-[1fr_1fr] md:items-center md:justify-center md:gap-10 md:pl-2 md:pr-10">
        <div>
          <h1 className="pb-5 text-center text-3xl font-semibold md:pb-0 md:text-left md:text-5xl">
            Software Development for Discerning Clients.
          </h1>
        </div>
        <div className="pl-7 pr-8 pb-7 md:pl-0 md:pr-8 md:pb-0">
          <p className="text-sm pb-6 md:pb-7 md:pt-10">
            Lorem ipsum dolor sit amet consectetur. Risus egestas nam congue
            diam maecenas id. Sed lectus consequat in proin elit purus tortor
            euismod diam. Ut ullamcorper tempus amet in volutpat amet et
            convallis turpis.
          </p>
          <Button />
        </div>
      </div>
      <div className="pb-7">
        <img src={List} alt="" />
      </div>
    </div>
  );
}

export default SoftwareSection;
