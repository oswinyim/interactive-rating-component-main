import styled from "styled-components";
import starIcon from "../assets/icon-star.svg";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.3rem;
`;

const StarIcon = styled.img`
  width: 20px;
  background: #122535;
  padding: 1rem;
  border-radius: 90px;
`;

const Header = styled.h1`
  margin: 0;
  color: white;
`;

const Info = styled.p`
  margin: 0;
  color: hsl(217, 12%, 63%);
`;

const RatesForm = styled.form`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const Input = styled.input`
  display: none;
`;

const Label = styled.label`
  background-color: #383e47;
  color: hsl(217, 12%, 63%);
  font-size: 1rem;
  padding: 20px;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  text-align: center;

  &:hover,
  &.active {
    background-color: hsl(25, 97%, 53%);
    color: white;
    cursor: pointer;
    transition: background-color 500ms;
  }
`;

const SubmitButton = styled.button`
  background: hsl(25, 97%, 53%);
  color: white;
  font-weight: 700;
  border: none;
  border-radius: 50px;
  padding: 1rem 1rem;
  text-transform: uppercase;
  letter-spacing: 0.25rem;

  &:hover {
    color: hsl(25, 97%, 53%);
    background: white;
    cursor: pointer;
  }

  &:disabled {
    background: grey;
    cursor: not-allowed;
    pointer-events: all !important;
    color: white;
  }
`;

const RatingForm = (props) => {
  const rates = Array(props.maxMark)
    .fill()
    .map((value, index) => {
      const num = index + 1;
      if (props.mark === num) {
      }
      return (
        <Label
          key={num}
          htmlFor={num}
          className={props.mark === num ? "active" : null}
        >
          {num}
          <Input name="ratings" type="radio" id={num} value={num} />
        </Label>
      );
    });

  const rateHandler = (e) => {
    if (e.target.tagName === "INPUT") {
      props.onRate(parseInt(e.target.value));
    }
  };
  return (
    <Wrapper>
      <StarIcon src={starIcon} alt="My Happy SVG" />
      <Header>How did we do?</Header>
      <Info>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </Info>
      <RatesForm onSubmit={(e) => e.preventDefault()} onClick={rateHandler}>
        {rates}
      </RatesForm>
      <SubmitButton disabled={!props.mark} onClick={props.onSubmit}>
        Submit
      </SubmitButton>
    </Wrapper>
  );
};

export default RatingForm;
