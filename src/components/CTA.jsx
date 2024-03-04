import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex-col" data-aos="fade-right" data-aos-delay="300">
      <h2 className={styles.heading2}>Let&apos;s try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        {" "}
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>
    <div data-aos="fade-left" data-aos-delay="300">
      <Button />
    </div>
  </section>
);

export default CTA;
