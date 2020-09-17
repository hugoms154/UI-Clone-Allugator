import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const StepsTitle = styled.span`
  display: flex;
  align-items: center;
`;

export const Number = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 6rem;
  margin-right: 1.3rem;
  border: 0.2rem solid #ced4da;
  color: #ced4da;
  border-radius: 50%;
  font-weight: 500;
  font-size: 24px;
`;

export const NeverBuy = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6rem 0 8rem 0;

  h1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  h1 + div {
    margin-top: 6rem;
  }

  .content {
    display: flex;
    flex-direction: column;
  }

  .content > img {
    align-self: center;
  }

  span + p {
    margin-top: 2rem;
  }

  p + span {
    margin-top: 6rem;
  }

  @media (min-width: 720px) {
    & {
      .content > img {
        width: 50rem;
      }
    }
  }

  @media (min-width: 1080px) {
    & {
      .content {
        flex-direction: row;
        margin-top: 6rem;
      }

      .content > img {
        width: 60rem;
      }
    }
  }
`;

export const Iframe = styled.iframe`
  width: 100%;

  height: 350px;
  margin-top: 6rem;

  @media (min-width: 720px) {
    & {
      height: 475px;
    }
  }

  @media (min-width: 1000px) {
    & {
      height: 60rem;
    }
  }

  @media (min-width: 1280px) {
    & {
      height: 30.2rem;
      width: 54rem;
      margin-top: 0;
    }
  }
`;

export const SmartConsumption = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6rem 0;
  background: #151515;

  div {
    h1 {
      margin-bottom: 6rem;
      color: #eef2f4;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    ul li {
      display: flex;
      align-items: center;

      span {
        display: block;
        font-size: 24px;
        color: #10bb77;
        height: 24px;
      }

      & + li {
        margin-top: 1rem;
      }
    }
  }

  @media (min-width: 1280px) {
    .content {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    & {
      div {
        ul {
          padding-right: 6rem;
        }
      }
    }
  }
`;

export const FreeSubscription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6rem 0;

  h1 {
    margin-bottom: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const FreeSubscriptionList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  > img {
    width: 50%;
  }

  ul li {
    display: flex;
    align-items: center;

    span {
      display: block;
      font-size: 24px;
      color: #10bb77;
      height: 24px;
    }

    & + li {
      margin-top: 1rem;
    }
  }

  @media screen and (media-device-width: 768px), screen and (max-width: 768px) {
    img {
      width: 80%;
    }

    flex-direction: column;
  }
`;

export const Footer = styled.footer`
  background: #151515;
  padding: 6rem 0;

  @media (min-width: 1280px) {
    .container {
      display: flex;
      flex-direction: row;

      .footer_text {
        color: #eef2f4;
        text-align: justify;
      }
    }
  }

  .container {
    padding-top: 20px;
  }

  .terms {
    display: flex;
    margin-top: 2rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      font-size: 1.5rem;
      padding-top: 20px;
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      text-align: center;
      flex-direction: row;
    }

    div a {
      text-decoration: none;
    }

    div a p {
      margin: 0 0.2rem;
      font-size: 1rem;
      color: #eef2f4;
    }
  }

  h1 {
    font-size: 3rem;
  }

  h1,
  h2,
  .container > p,
  .bottom_footer p {
    color: #eef2f4;
  }

  .container > p {
    margin: 20px;
  }

  .top_footer {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .footer_text {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 4rem;
    > p {
      text-align: justify;
      color: #eef2f4;
      margin-bottom: 2rem;
      font-size: 1.4rem;

      &:first-letter {
        margin-left: 4rem;
      }
    }
  }

  .bottom_footer {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      text-align: center;
    }

    span {
      color: #eef2f4;
      font-size: 1.8rem;
    }

    .social {
      margin: 4rem 0;
      width: 20rem;
      display: flex;
      justify-content: space-around;
      a {
        svg {
          color: #eef2f4;
        }
      }
    }
  }
`;

export const Slide = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  height: 30rem;
  background-color: #001212;
  overflow-y: auto;

  @media (min-width: 1280px) {
    & {
      height: 45rem;
    }
  }
`;

export const ContainerSlide = styled.div`
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(5, 23.2rem);
  grid-gap: 2rem;

  @media (min-width: 1280px) {
    & {
      grid-template-columns: repeat(5, 1fr);
      grid-gap: 0;
      padding: 0;
    }
  }
`;

const animationSlide = keyframes`
  from {
    transform: translateY(-3rem);
    opacity: 0;
  } to {
    transform: translateY(0);
    opacity: 1;
  }
`;

interface ItemProps {
  time: string;
}

export const Item = styled.div<ItemProps>`
  position: relative;
  width: 100%;
  height: 24.2rem;
  background-color: #222;
  border-radius: 3rem;
  border-bottom: 0.4rem solid #10bb77;
  transition: 0.3s transform;
  animation: 1s ${animationSlide} ${props => props.time} backwards;

  &:hover {
    transform: translateY(-1rem);
    box-shadow: 0 0 3rem 0.5rem #000;
  }

  @media (min-width: 1280px) {
    &:hover {
      box-shadow: 0 0 2rem 0.5rem #121212;
    }
  }

  img {
    width: 100%;
    border-radius: 3rem;
    height: 23.8rem;
    object-fit: cover;

    @media (min-width: 1280px) {
      & {
        height: 100%;
        border-radius: 0;
      }
    }
  }

  div {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 23.2rem;
    height: 24.2rem;
    background-color: rgba(0, 0, 0, 0.3);
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
    border-radius: 3rem;
    transition: 0.3s background-color;
    padding: 2rem;
    cursor: pointer;
    text-align: center;

    &:hover {
      background-color: rgba(0, 0, 0, 0.5);
    }

    @media (min-width: 1280px) {
      & {
        width: 100%;
        height: 100%;
        border-radius: 0;
      }
    }

    span {
      font-size: 1.6rem;
      margin-top: 1.2rem;
      font-weight: normal;
    }
  }

  @media (min-width: 1280px) {
    & {
      height: 40rem;
      border-radius: 0;

      span {
        display: none;
      }

      &:hover {
        span {
          display: block;
        }
      }
    }
  }
`;

export const SignIn = styled.div`
  background: #00194d;
  padding: 6rem 0;

  .container {
    max-width: 45rem;
  }

  h1 {
    color: #eef2f4;
    text-align: center;
    margin-bottom: 6rem;
  }

  .socialButtons {
    display: flex;
    flex-direction: column;
  }

  button + button {
    margin-top: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;

    label {
      display: block;
      font-weight: 600;
      color: #eef2f4;
      margin-top: 1.5rem;
    }

    .register {
      margin-top: 1.5rem;
    }

    > p {
      margin-top: 1.5rem;
      font-size: 1.2rem;
      text-align: center;
      a {
        color: #eef2f4;
      }
    }

    @media (min-width: 720px) {
      & {
        > div {
          display: flex;

          div + div {
            margin-left: 1.5rem;
          }

          div {
            display: flex;
            flex-direction: column;
          }
        }
      }
    }
  }
`;

export const Input = styled.input`
  /* input background: #FFFFFF1A */
  background: rgba(255, 255, 255, 0.1);
  border: 0.02rem solid rgba(255, 255, 255, 0.3);
  border-radius: 1rem;
  height: 4.5rem;
  margin-top: 1.5rem;
  padding-left: 1rem;
  width: 100%;

  color: #fff;

  &::placeholder {
    color: #fff;
  }
`;

interface ButtonProps {
  backgroundColor: string;
}

export const Button = styled.button<ButtonProps>`
  color: #eef2f4;
  height: 4.5rem;
  font-weight: 600;
  border-radius: 2rem;
  border: 0;
  font-size: 1.6rem;
  transition: background-color 0.2s;
  background-color: ${props => props.backgroundColor};
  padding: 1rem;

  &:hover {
    background: ${props => shade(0.2, props.backgroundColor)};
  }
`;
