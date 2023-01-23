import SimpleAccordion from './accordion/simple-accordion';
import './faq.sass';

const dataFaq = [
    {
        question: "1. How does the ExpoExchange system work?",
        answer: "Your account is currently not verified, please provide us with additional information to start using the platform. Your account is currently not verified, please provide us with additional information to start using the platform",
        id: 1
    },
    {
        question: "2. What is the service fee?",
        answer: "Your account is currently not verified, please provide us with additional information to start using the platform. Your account is currently not verified, please provide us with additional information to start using the platform",
        id: 2
    },
    {
        question: "3. Why do I need to be verified?",
        answer: "Verification is required in order to make any financial operation and personal data safe. Identity verification ensures that there is a real person behind a process and proves that they are who they claim to be",
        id: 3
    },
    {
        question: "4. How can I get Expo tokens?",
        answer: "Verification is required in order to make any financial operation and personal data safe. Identity verification ensures that there is a real person behind a process and proves that they are who they claim to be",
        id: 4
    },
    {
        question: "5. When is it possible to cancel a deal?",
        answer: "Your account is currently not verified, please provide us with additional information to start using the platform. Your account is currently not verified, please provide us with additional information to start using the platform",
        id: 5
    },
]

const Faq = () => {
    return(
        <div className="faq">
            <div className="faq__title">FAQ</div>
            <div className="accordion__wrap">
                {
                    dataFaq.map(item => 
                        <SimpleAccordion 
                            question={item.question} 
                            answer={item.answer}
                            key={item.id}/>
                    )
                }
                
            </div>
        </div>
    )
}

export default Faq;