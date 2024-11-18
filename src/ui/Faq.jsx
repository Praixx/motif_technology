import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Faq() {
  const [ visibleIndex, setVisibleIndex ] = useState(null);

  const faqs = [
    {
      question:
        "Why choose Motif Technology as a custom software development company?",
      answer:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Aipsum torquent posuere ullamcorper diam pretium ad. Maecenas porttitor fames sociosqu praesent egestas gravida urna. Sem facilisi eu hac tempor sollicitudin nisl rutrum hendrerit. Dolor laoreet molestie sapien maecenas, ut gravida lobortis senectus.",
    },
    {
      question:
        "What software development services does Motif Technology offer?",
      answer:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Aipsum torquent posuere ullamcorper diam pretium ad. Maecenas porttitor fames sociosqu praesent egestas gravida urna. Sem facilisi eu hac tempor sollicitudin nisl rutrum hendrerit. Dolor laoreet molestie sapien maecenas, ut gravida lobortis senectus.",
    },
    {
      question: "What technologies does Motif Technology work with?",
      answer:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Adipiscing sit morbi faucibus ornare massa torquent dis senectus suscipit. Viverra netus lorem faucibus iaculis gravida scelerisque.",
    },
    {
      question: "How does Motif Technology guarantee confidentiality?",
      answer:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Posuere nostra malesuada penatibus parturient congue egestas.",
    },
    {
      question: "How much does software development at Motif Technology cost?",
      answer:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Posuere nostra malesuada penatibus parturient congue egestas.",
    },
  ];

  const showFaqAnswer = (index) => {
    setVisibleIndex((prevIndex) => (prevIndex === index ?  null : index))
  }

  return (
    <div className="mb-32 md:mb-0">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border-b border-t-2 pb-4 pt-4 active:text-blue-700"
          onClick={() => showFaqAnswer(index)}
        >
          <div className="md:items md:flex md:justify-between md:items-center">
            <h4
              className={`font-semibold hover:text-blue-700 cursor-pointer  ${
                visibleIndex === index ? "text-blue-700" : "text-black"
              }`}
            >
              {faq.question}
            </h4>
            <p className="hidden md:block">
              {visibleIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </p>
          </div>
          <p className="pt-5 font-light">
            {visibleIndex === index && faq.answer}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Faq;
