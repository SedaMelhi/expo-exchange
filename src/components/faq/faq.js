import './faq.sass';
import SimpleAccordion from './accordion/simple-accordion';
import { useTranslation } from 'react-i18next';


const Faq = () => {
    const { t, i18n } = useTranslation();
    const dataFaq = [
        {
            question: t("faq_1"),
            answer: t("faq_answer-1"),
            id: 1
        },
        {
            question: t("faq_2"),
            answer: t("faq_answer-2"),
            id: 2
        },
        {
            question: t("faq_3"),
            answer: t("faq_answer-3"),
            id: 3
        },
        {
            question: t("faq_4"),
            answer: t("faq_answer-4"),
            id: 4
        },
        {
            question: t("faq_5"),
            answer: t("faq_answer-5"),
            id: 5
        },
    ]
    return(
        <div className="faq" id='faq'>
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