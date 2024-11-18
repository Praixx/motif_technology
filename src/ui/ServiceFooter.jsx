import FooterList from "./FooterList";

function ServiceFooter({title, navList}) {
    
    const serviceList = [
      {
        listTitle: "digital product design",
      },
      {
        listTitle: "custom software development",
      },
      {
        listTitle: "software consultancy",
      },
      {
        listTitle: "business branding",
      },
      {
        listTitle: "digital strategy",
      },
      {
        listTitle: "digital modernization",
      },
      {
        listTitle: "Digital Marketing",
      },
      {
        listTitle: "Website Development",
      },
      {
        listTitle: "Digital Design and Enablement",
      },
      
    ];
    
    
    return (
        <div>
            <FooterList navList={serviceList} >services </FooterList>
        </div>
    )
}

export default ServiceFooter
