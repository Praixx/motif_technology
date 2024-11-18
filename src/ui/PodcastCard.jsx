import ProjectImg from "../assets/project-1.png";
import ProjectImgg from "../assets/project-2.png";

function PodcastCard() {
  const podcasts = [
    {
      content: "Fintech Startup Launching: The Success Formula by Gary Palmer",
      image: ProjectImgg,
    },
    {
      content: "Cold Emails: Does Cold Outreach Still Work in Marketing?",
      image: ProjectImgg,
    },
    {
      content: "Insights into Market Fit and Startup Investment",
      image: ProjectImg,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-10">
      {podcasts.map((card, index) => (
        <div key={index} className=" mb-8 cursor-pointer">
          <img src={card.image} alt="" />
          <h4 className="w-11/12 md:w-10/12 mt-2">{card.content}</h4>
        </div>
      ))}
    </div>
  );
}

export default PodcastCard;
