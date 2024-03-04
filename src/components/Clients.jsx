import { clients } from "../constants";
import styles from "../style";
const Clients = () => (
  <section className={`${styles.flexCenter} flex-wrap w-full`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client, index) => (
        <div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}
          data-aos="fade-up"
          data-aos-delay={`${index * 300 + 500}`}
        >
          <img
            src={client.logo}
            alt="client"
            className="sm:w-[192px] w-[100px] object-contain hover:filter hover:brightness-200 hover:animate-pulse"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
