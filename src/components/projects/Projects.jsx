import "./projects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <h3>Games</h3>
      <p>
        Making games is what brought me into programming and still absolutely
        fascinates me. By now, I’ve built a small library of pixel art assets
        and games that I’m proud of. I primarily use the Godot Game Engine and
        Aseprite for my projects. Why not swing by my itch.io page to check them
        out? Happy Blocks is a fun, easy place to start!
      </p>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        loop
      >
        <SwiperSlide>
          <div className="projects__content projects__happy-blocks">
            <img
              src="/src/assets/images/HappyBlocks_a.png"
              alt="Screenshot of Happy Blocks a"
            />
            <img
              src="/src/assets/images/HappyBlocks_b.png"
              alt="Screenshot of Happy Blocks b"
            />
            <p>
              <b>Happy Blocks</b> - A cute little puzzle game optimized for
              mobile phones. It’s a great little game I’m still very proud
              of—and a total blast to play!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="projects__content">
            <img
              src="/src/assets/images/DistantShores.png"
              alt="Screenshot of Distant Shores"
            />
            <p>
              <b>Distant Shores</b> - My latest project, a city-builder inspired
              by classics like Anno 1602. It’s still in development but already
              shaping up nicely with plenty of progress to show.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="projects__content">
            <img
              src="/src/assets/images/ColonyDefender.png"
              alt="Screenshot of Colony Defender 2"
            />
            <p>
              <b>Colony Defender</b> - The very first game built completely on
              my own, making it a milestone I treasure. It’s inspired by the
              gritty space games of the Atari 2600 era.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="projects__content">
            <img
              src="/src/assets/images/ColonyDefender2_a.jpeg"
              alt="Screenshot of Colony Defender 2"
            />
            <p>
              <b>Colony Defender 2</b> - Likely my best-looking game to date,
              this classic space shoot-’em-up draws inspiration from the Super
              Nintendo era of gaming.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="projects__content">
            <img
              src="/src/assets/images/ColonyDefender2_b.jpeg"
              alt="Screenshot of Colony Defender 2"
            />
            <p>
              <b>Colony Defender 2</b> - Likely my best-looking game to date,
              this classic space shoot-’em-up draws inspiration from the Super
              Nintendo era of gaming.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="projects__content">
            <img
              src="/src/assets/images/StellarDominion_a.png"
              alt="Screenshot of Stellar Dominion"
            />
            <p>
              <b>Stellar Dominion</b> - One of my later and most ambitious
              projects, this 4X game lets you build an empire and battle
              opponents who adapt to your progress. It was a huge undertaking,
              but the result is pretty impressive.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Projects;
