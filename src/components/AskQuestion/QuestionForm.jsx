import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Client, Databases } from "appwrite";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// Initialize Appwrite client
const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("670f99ab001e200b8ee6");

const databases = new Databases(client);

function QuestionForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await databases.createDocument(
        "670f9c1d0010e00f0181",
        "670f9c2f002ebe7198f7",
        "unique()",
        { linkedin: data.linkedin, category: data.category, question: data.question }
      );
      toast.success("Form submitted and saved to Appwrite! 🎉");
    } catch (error) {
      toast.error("Failed to save data. Please try again.");
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full mt-10 flex flex-col items-start gap-4 px-4 md:px-10 lg:px-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar />

      <motion.div className="w-full" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
        <input
          type="url"
          className={`py-2 px-3 text-xl md:text-2xl w-full border-2 rounded-md outline-none ${errors.linkedin ? "border-red-500" : "border-black"}`}
          placeholder="Your LinkedIn URL"
          {...register("linkedin", {
            required: "LinkedIn URL is required",
            pattern: { value: /^(https?:\/\/)?(www\.)?linkedin\.com\/.*$/i, message: "Enter a valid LinkedIn URL" },
          })}
        />
        {errors.linkedin && <p className="text-red-500 mt-1">{errors.linkedin.message}</p>}
      </motion.div>

      <motion.div className="w-full" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
        <select
          className={`py-2 px-3 text-xl md:text-2xl w-full border-2 rounded-md outline-none ${errors.category ? "border-red-500" : "border-black"}`}
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
        {errors.category && <p className="text-red-500 mt-1">{errors.category.message}</p>}
      </motion.div>

      <motion.div className="w-full" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }}>
        <textarea
          className={`py-2 px-3 text-xl md:text-2xl w-full border-2 rounded-md outline-none ${errors.question ? "border-red-500" : "border-black"}`}
          placeholder="Ask your question..."
          rows={5}
          {...register("question", { required: "Question is required" })}
        ></textarea>
        {errors.question && <p className="text-red-500 mt-1">{errors.question.message}</p>}
      </motion.div>

      <motion.button
        type="submit"
        className="hover:scale-110 transition-transform text-xl md:text-2xl lg:text-3xl select-none uppercase font-hand-text font-bold bg-[#2A2A2A] rounded-full text-amber-50 px-4 py-2 inline-block"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Submit
      </motion.button>
    </motion.form>
  );
}

export default QuestionForm;
