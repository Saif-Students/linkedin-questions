import { FaLinkedin } from 'react-icons/fa'; // Import LinkedIn icon

function Login() {
  const handleLinkedInLogin = () => {
    // LinkedIn OAuth URL (replace 'your-client-id' and 'redirect-uri')
    const linkedInAuthUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=your-client-id&redirect_uri=your-redirect-uri&state=123456&scope=r_liteprofile%20r_emailaddress`;
    window.location.href = linkedInAuthUrl; // Redirect to LinkedIn login
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="bg-[#E0F2FE] px-6 py-8 shadow-lg rounded-md w-[300px] flex flex-col items-center">
        <h2 className="text-3xl font-semibold mb-6">Sign Up</h2>
        <button
          onClick={handleLinkedInLogin}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#0A66C2] text-white font-semibold rounded-md hover:bg-[#004182] transition"
        >
          <FaLinkedin size={24} />
          Sign up with LinkedIn
        </button>
      </div>
    </div>
  );
}

export default Login;
