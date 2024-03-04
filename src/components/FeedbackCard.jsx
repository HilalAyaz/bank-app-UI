import { quotes } from "../assets";

import { PropTypes } from "prop-types";
const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <section>
      <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
        <img
          src={quotes}
          alt="double_quotes"
          className="w-[42px] h-[27px] object-contain"
        />
        <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
          {content}
        </p>
        <div className="flex flex-row">
          <img
            src={img}
            alt={name}
            className="w-[48px] h-[48px] rounded-full"
          />
          <div className="flex flex-col ml-4">
            <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white ml-4">
              {name}
            </h4>
            <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite ml-4">
              {title}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

FeedbackCard.propTypes = {
  content: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
export default FeedbackCard;
