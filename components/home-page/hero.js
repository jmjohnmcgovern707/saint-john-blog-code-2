import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/baby-jesus.jpg"
          alt="An image showing Max"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, My name is Saint John. I love Jesus Christ.</h1>
      <p>
        I blog about Jesus Christ. I love him with all of my heart and soul.
      </p>
    </section>
  );
}

export default Hero;
