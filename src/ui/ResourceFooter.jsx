import FooterList from "./FooterList"

function ResourceFooter() {
    
    const resourceList = [
      {
        listTitle: "our podcast",
      },
      {
        listTitle: "careers",
        },
      {
        listTitle: "insight",
        },
    ]
    
    return (
        <div>
            <FooterList navList={resourceList}>Resources</FooterList>
        </div>
    )
}

export default ResourceFooter
