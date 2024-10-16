import PropTypes from "prop-types";
import { stickynote } from "../../assets";

// Helper function to get category color
const getCategoryColor = (category) => {
  switch (category.toLowerCase()) {
    case "coding":
      return "bg-purple-600";
    case "programming":
      return "bg-blue-600";
    case "development":
      return "bg-green-600";
    case "university":
      return "bg-orange-500";
    case "degree":
      return "bg-red-600";
    case "ai":
      return "bg-indigo-500";
    default:
      return "bg-gray-500";
  }
};

// Helper function to limit question length
const truncateQuestion = (question, wordLimit = 20) => {
  const words = question.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : question;
};

function QuestionItem({ category, question, linkedinUrl, status, answerUrl }) {
  return (
    <div
      className="w-full sm:w-1/2 lg:w-1/4 min-h-[300px] sm:min-h-[220px] bg-cover bg-top pt-10 shadow-lg sm:-rotate-6 hover:rotate-0 transition-all"
      style={{ backgroundImage: `url(${stickynote})` }}
    >
      <div className="p-5 flex flex-col gap-4 items-start">
        <h2
          className={`text-xl font-bold p-1 px-2 text-white rounded-full ${getCategoryColor(
            category
          )}`}
        >
          {category}
        </h2>
        <p className="text-lg">{truncateQuestion(question)}</p>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          View LinkedIn Profile
        </a>

        {status === "answered" && answerUrl && (
          <a
            href={answerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 underline"
          >
            View Answer
          </a>
        )}

        <span
          className={`text-white px-3 py-1 rounded-full ${
            status === "answered"
              ? "bg-green-500"
              : status === "pending"
              ? "bg-yellow-500"
              : "bg-red-500"
          }`}
        >
          {status}
        </span>
      </div>
    </div>
  );
}

QuestionItem.propTypes = {
  category: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  linkedinUrl: PropTypes.string.isRequired,
  status: PropTypes.oneOf(["answered", "pending", "rejected"]).isRequired,
  answerUrl: PropTypes.string, // Optional URL for answered questions
};

export default QuestionItem;
