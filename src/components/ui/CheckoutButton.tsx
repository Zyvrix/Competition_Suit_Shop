import React from "react";
import styled from "styled-components";

interface CheckoutButtonProps {
  onClick?: () => void;
}

const CheckoutButton = ({ onClick }: CheckoutButtonProps) => {
  return (
    <StyledWrapper>
      <div className="container-button" onClick={onClick}>
        <div className="hover bt-1" />
        <div className="hover bt-2" />
        <div className="hover bt-3" />
        <div className="hover bt-4" />
        <div className="hover bt-5" />
        <div className="hover bt-6" />
        <button type="button" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;

  .container-button {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:
      "bt-1 bt-2 bt-3"
      "bt-4 bt-5 bt-6";

    position: relative;
    perspective: 800px;

    width: 100%;
    height: 52px;

    cursor: pointer;
    overflow: hidden;
  }

  .container-button:active {
    transform: scale(0.97);
  }

  .hover {
    position: absolute;
    inset: 0;
    z-index: 10;
  }

  .bt-1 { grid-area: bt-1; }
  .bt-2 { grid-area: bt-2; }
  .bt-3 { grid-area: bt-3; }
  .bt-4 { grid-area: bt-4; }
  .bt-5 { grid-area: bt-5; }
  .bt-6 { grid-area: bt-6; }

  .bt-1:hover ~ button { transform: rotateX(12deg) rotateY(-12deg); }
  .bt-3:hover ~ button { transform: rotateX(12deg) rotateY(12deg); }
  .bt-4:hover ~ button { transform: rotateX(-12deg) rotateY(-12deg); }
  .bt-6:hover ~ button { transform: rotateX(-12deg) rotateY(12deg); }

  .hover:hover ~ button::before {
    opacity: 0.95;
  }

  button {
    position: absolute;
    inset: 0;

    background: transparent;
    border: none;

    border-radius: 999px;
    overflow: hidden;

    transition: transform 0.3s ease;
  }

  button::before {
    content: "";
    position: absolute;
    inset: 0;

    background-color: #ec4899;
    border-radius: 999px;

    z-index: -1;
  }

  button::after {
    content: "Checkout";

    position: absolute;
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 16px;
    font-weight: 700;
    color: white;

    transition: all 0.3s ease;
  }
`;

export default CheckoutButton;
