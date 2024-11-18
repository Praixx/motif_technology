import FooterList from "./FooterList"

function IndustriesFooter() {
    
    const industriesList = [
      {
        listTitle: "healthcare",
      },
      {
        listTitle: "logistics",
        },
      {
        listTitle: "fintech",
        },
      {
        listTitle: "insurance",
        },
      {
        listTitle: "government",
        },
    ]
    
    return (
        <div>
            <FooterList navList={industriesList}>industries</FooterList>
        </div>
    )
}

export default IndustriesFooter
