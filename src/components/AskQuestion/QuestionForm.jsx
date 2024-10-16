import { useForm } from "react-hook-form";
import { Client, Databases } from "appwrite"; // Import Appwrite SDK
import { ToastContainer, toast } from "react-toastify"; // Import Toast
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles

// Initialize Appwrite client
const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1") // Your Appwrite endpoint
  .setProject("670f99ab001e200b8ee6"); // Replace with your project ID

const databases = new Databases(client);

function QuestionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await databases.createDocument(
        "670f9c1d0010e00f0181", // Replace with your Database ID
        "670f9c2f002ebe7198f7", // Replace with your Collection ID
        "unique()", // Generate a unique document ID
        {
          linkedin: data.linkedin,
          category: data.category,
          question: data.question,
        }
      );
      // console.log("Document created successfully:", response);
      toast.success("Form submitted and saved to Appwrite! 🎉"); // Success toast
    } catch (error) {
      // console.error("Error creating document:", error);
      toast.error("Failed to save data. Please try again."); // Error toast
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full mt-10 flex flex-col items-start gap-4 px-4 md:px-10 lg:px-20"
    >
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar /> {/* Toast Container */}

      {/* LinkedIn URL Input */}
      <div className="w-full">
        <input
          type="url"
          className={`py-2 px-3 text-xl md:text-2xl w-full border-2 rounded-md outline-none ${
            errors.linkedin ? "border-red-500" : "border-black"
          }`}
          placeholder="Your LinkedIn URL"
          {...register("linkedin", {
            required: "LinkedIn URL is required",
            pattern: {
              value: /^(https?:\/\/)?(www\.)?linkedin\.com\/.*$/i,
              message: "Enter a valid LinkedIn URL",
            },
          })}
        />
        {errors.linkedin && (
          <p className="text-red-500 mt-1">{errors.linkedin.message}</p>
        )}
      </div>

      {/* Select Category */}
      <div className="w-full">
        <select
          className={`py-2 px-3 text-xl md:text-2xl w-full border-2 rounded-md outline-none ${
            errors.category ? "border-red-500" : "border-black"
          }`}
          {...register("category", { required: "Select a category" })}
        >
          <option value="">Select a category</option>
          <option value="coding">Coding</option>
          <option value="programming">Programming</option>
          <option value="development">Development</option>
          <option value="university">University</option>
          <option value="degree">Degree</option>
          <option value="ai">AI / ML / Data Science</option>
          <option value="others">Others</option>
        </select>
        {errors.category && (
          <p className="text-red-500 mt-1">{errors.category.message}</p>
        )}
      </div>

      {/* Question Textarea */}
      <div className="w-full">
        <textarea
          className={`py-2 px-3 text-xl md:text-2xl w-full border-2 rounded-md outline-none ${
            errors.question ? "border-red-500" : "border-black"
          }`}
          placeholder="Ask your question..."
          rows={5}
          {...register("question", { required: "Question is required" })}
        ></textarea>
        {errors.question && (
          <p className="text-red-500 mt-1">{errors.question.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="hover:scale-110 transition-transform text-xl md:text-2xl lg:text-3xl select-none uppercase font-hand-text font-bold bg-[#2A2A2A] rounded-full text-amber-50 px-4 py-2 inline-block"
      >
        Submit
      </button>
    </form>
  );
}

export default QuestionForm;
