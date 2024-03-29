import React from "react";
import { styles } from "../style";
import { useSelector } from "react-redux";

const Footer = () => {
  const { items } = useSelector((state) => state.data);
  const { address, phoneNumber, contactEmail } = items?.user?.about || {};

  return (
    <div className="flex justify-around items-center h-[200px] bg-tertiary rounded-2xl text-center">
      <div>
        <h2 className={styles.sectionSubText}>Address</h2>
        <p>{address}</p>
      </div>
      <div>
        <h2 className={styles.sectionSubText}>phone number</h2>
        <p>{phoneNumber}</p>
      </div>
      <div>
        <h2 className={styles.sectionSubText}>email</h2>
        <p>{contactEmail}</p>
      </div>
    </div>
  );
};

export default Footer;
