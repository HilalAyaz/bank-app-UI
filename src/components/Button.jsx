import styles from "../style";
const Button = () => (
  <button
    type="button"
    className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px] mt-10 hover:filter hover:brightness-50  transition duration-300`}
  >
    Get Started
  </button>
);

export default Button;
