import styles, { layout } from "../style";
import Button from "./Button";
const CardDeal = () => (
  <section className={layout.section}>
    <div
      className={layout.sectionInfo}
      data-aos="fade-right"
      data-aos-delay="1000"
    >
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        {" "}
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
      </p>{" "}
      <Button />
    </div>
    <div
      className={layout.sectionImg}
      data-aos="fade-left"
      data-aos-delay="1000"
    >
      <img src="src/assets/card.png" alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
