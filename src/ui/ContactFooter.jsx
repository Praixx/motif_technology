import FooterList from "./FooterList"

function ContactFooter() {
    const contactList = [
      {
        listTitle: "info@motiftechnology.com",
      },
      {
        listTitle: "career@moriftechnology.com",
        },
    ]
    
    
    return (
        <div>
            <FooterList navList={contactList}>contact us</FooterList>
        </div>
    )
}

export default ContactFooter
