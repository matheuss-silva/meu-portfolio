import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 110px 20px 90px;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: url("https://cdnb.artstation.com/p/assets/images/images/049/195/939/large/elise-lunenburg-rpg-skill-icons.jpg?1651912239")
    no-repeat center;
  background-size: cover;

  h1 {
    z-index: 2;
    margin-bottom: 18px;
    font-size: 40px;
    line-height: 1.1;
    font-weight: 900;
    text-align: center;
  }

  p {
    z-index: 2;
    max-width: 720px;
    opacity: 0.82;
    text-align: center;
    font-size: 16px;
    line-height: 1.7;
  }

  @media (max-width: 768px) {
    padding: 90px 18px 70px;

    h1 {
      font-size: 34px;
    }

    p {
      font-size: 15px;
    }
  }

  @media (max-width: 480px) {
    padding: 80px 16px 60px;

    h1 {
      font-size: 28px;
    }

    p {
      font-size: 14px;
    }
  }
`;

export const BackgroundFade = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.92), rgba(0, 0, 0, 0.78));
  z-index: 1;
`;

export const Content = styled(motion.div)`
  z-index: 2;
  width: 100%;
  max-width: 1180px;
  margin-top: 48px;
`;

export const SkillsGrid = styled.div`
  display: grid;
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  column-gap: 18px;
  row-gap: 26px;
  justify-items: center;

  @media (max-width: 900px) {
    max-width: 620px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    max-width: 460px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: 14px;
    row-gap: 22px;
  }

  @media (max-width: 480px) {
    max-width: 320px;
    grid-template-columns: repeat(2, minmax(130px, 1fr));
    gap: 16px;
  }
`;

export const SkillCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 8px;
  text-align: center;
  transition: transform 0.3s ease;

  .icon-wrapper {
    width: 96px;
    height: 96px;
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.04)
    );
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 18px 34px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  }

  svg {
    font-size: 50px;
    color: #f5f5f5;
  }

  strong {
    font-size: 1.15rem;
    font-weight: 700;
    color: #fff;
    line-height: 1.2;
  }

  &:hover {
    transform: translateY(-8px);

    .icon-wrapper {
      transform: translateY(-4px) scale(1.03);
      border-color: rgba(255, 255, 255, 0.16);
      box-shadow: 0 22px 38px rgba(0, 0, 0, 0.28);
    }
  }

  @media (max-width: 480px) {
    gap: 10px;

    .icon-wrapper {
      width: 84px;
      height: 84px;
      border-radius: 20px;
    }

    svg {
      font-size: 42px;
    }

    strong {
      font-size: 1rem;
    }
  }
`;
