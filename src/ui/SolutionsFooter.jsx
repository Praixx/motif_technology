import FooterList from "./FooterList"

function SolutionsFooter() {
    
    const solutionList = [
      {
        listTitle: "CRM Development",
      },
      {
        listTitle: "marketplace development",
        },
    ]
    
    return (
        <div>
            <FooterList navList={solutionList}  >Solutions</FooterList>
        </div>
    )
}

export default SolutionsFooter
