import React, { useEffect, useState } from 'react';
import { FAQstructure } from '../../../../types/faq';
import faqPlus from '../../../../assets/images/Icons/plus.svg';
import faqMinus from '../../../../assets/images/Icons/minus.svg';
import './FAQ.scss';

interface FAQprops {
  faq: FAQstructure,
  questionIndex: number,
};

const FAQ: React.FC<FAQprops> = ({faq, questionIndex}) => {
  const {question, answer} = faq;
  const [answerHidden, setAnswerHidden] = useState(true);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    if (!answerHidden) {
      setTimeout(() => {
        setShowAnswer(true);
      }, 300)
    } else {
      setShowAnswer(false);
    }
  }, [answerHidden])

  return (
    <li className="faq">
      <div className="faq__question-wrapper">
        <p className="faq__question">
          {`${questionIndex}. ${question}`}
        </p>
        <img 
          src={answerHidden ? faqPlus : faqMinus} 
          alt="plus" 
          className="faq__plus" 
          onClick={() => {
            setAnswerHidden((prev) => !prev);
          }}
        />
      </div>
      
      {
        !answerHidden && (
        <aside className="faq__answer">
          <p className="faq__answer-value" style={{opacity: `${showAnswer ? '1' : '0'}`}}>
            {answer}
          </p>
        </aside>
        )
      }
    
    </li>
  )
}

export default FAQ
