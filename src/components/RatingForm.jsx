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

const RatesWrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const Rate = styled.li`
  background: #122535;
  color: hsl(217, 12%, 63%);
  font-size: 16px;
  padding: 20px;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  text-align: center;

  &:hover,
  &.active {
    background: hsl(25, 97%, 53%);
    color: white;
    cursor: pointer;
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
  letter-spacing: 3px;

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
      console.log(props.mark === index + 1);
      return (
        <Rate
          key={index + 1}
          value={index + 1}
          className={props.mark === index + 1 ? "active" : null}
        >
          {index + 1}
        </Rate>
      );
    });

  const rateHandler = (e) => {
    if (e.target.tagName === "LI") {
      props.onRate(e.target.value);
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
      <RatesWrapper onClick={rateHandler}>{rates}</RatesWrapper>
      <SubmitButton disabled={!props.mark} onClick={props.onSubmit}>
        Submit
      </SubmitButton>
    </Wrapper>
  );
};

export default RatingForm;
