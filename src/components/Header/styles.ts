import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.header`
  width: 100%;
  background-color: #001212;
  padding: 1.8rem 0;
  border-bottom: 0.1rem solid #0f2626;
`;

export const ContentHeader = styled.div`
  width: 90%;
  margin: 0 auto;

  .content-left {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > img {
      width: 11.7rem;
    }

    .cart {
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
      border-radius: 50%;
      width: 4rem;
      height: 4rem;
      border: 0.1rem solid rgba(255, 255, 255, 0.2);

      svg {
        color: rgba(255, 255, 255, 0.7);
      }
    }
  }

  .search {
    display: flex;
    align-items: center;
    width: 100%;
    height: 4rem;
    border-radius: 3rem;
    border: none;
    padding: 0 1.2rem;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px;
    border: none;
    margin-top: 1.5rem;
    border: 0.2rem solid transparent;
    transition: 0.3s border;

    &:focus-within {
      border: 0.2rem solid rgb(16, 187, 119);

      svg {
        color: rgb(16, 187, 119);
      }
    }

    svg {
      margin-right: 1.2rem;
      transition: 0.3s color;
    }

    input {
      width: 100%;
      height: 4rem;
      background: transparent;
      border: none;
      font-size: 1.8rem;
    }
  }

  button,
  .avatar,
  .cart-right {
    display: none;
  }

  button,
  .avatar,
  .cart,
  .cart-right {
    cursor: pointer;
  }

  @media (min-width: 960px) {
    & {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .content-left .cart {
        display: none;
      }

      button,
      .avatar-right,
      .cart-right {
        display: block;
      }

      div .navigation {
        display: none;
      }

      .avatar {
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 50%;
        width: 4.8rem;
        height: 4.8rem;
        margin: 0 1rem 0 2.4rem;

        svg {
          color: rgba(255, 255, 255, 0.7);
        }
      }

      button {
        width: 24rem;
        height: 4rem;
        border-radius: 3rem;
        font-size: 1.4rem;
        border: 0.2rem solid rgb(16, 187, 119);
        background: transparent;
        color: rgb(16, 187, 119);
        font-weight: bold;
        margin-left: 2.4rem;
        transition-property: border, color;
        transition-duration: 0.3s;

        &:hover {
          border: 0.2rem solid ${shade(0.3, '#10BB77')};
          color: ${shade(0.3, '#10BB77')};
        }
      }

      .content-right {
        display: flex;
        align-items: center;

        .cart-right {
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          border: 0.1rem solid rgba(255, 255, 255, 0.2);
          &:focus-within {
      border: 0.2rem solid rgb(16, 187, 119);
          svg {
            color: rgba(255, 255, 255, 0.7);
          }
        }
      }

      .search {
        width: 24rem;
        height: 3.6rem;
        margin-top: 0;
        transition: 0.3s width;

        &:focus-within {
          width: 30rem;
        }

        input {
          font-size: 1.6rem;
        }
      }
    }
  }
`;
