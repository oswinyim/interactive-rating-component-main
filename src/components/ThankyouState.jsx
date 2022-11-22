import styled from "styled-components";
import thankYou from "../assets/illustration-thank-you.svg";

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  flex-direction: column;
  padding: 2.3rem;
  margin: 0;
  justify-items: center;

  img {
    width: auto;
  }

  h4 {
    color: hsl(25, 97%, 53%);
    border: none;
    border-radius: 1rem;
    background-color: hsla(216, 12%, 54%, 0.205);
    border-radius: 1em;
    padding: 0.4em 1.3em;
  }

  h1 {
    margin: 0;
    color: white;
  }

  p {
    color: hsl(216, 12%, 54%);
    text-align: center;
    font-size: 1rem;
  }
`;

const ThankyouState = (props) => {
  return (
    <Wrapper>
      <img src={thankYou} alt="" />
      <h4>
        You selected {props.mark} out of {props.maxMark}
      </h4>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </Wrapper>
  );
};

export default ThankyouState;
