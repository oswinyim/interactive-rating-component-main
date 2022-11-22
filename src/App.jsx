import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import RatingForm from "./components/RatingForm";
import ThankyouState from "./components/ThankyouState";

const Wrapper = styled.div`
  width: 90%;
  height: 100vh;
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 0 5%;
  position: relative;
  min-height: 100vh;
  min-height: -webkit-fill-available;
`;

const Card = styled.div`
  background-color: #0b1232;
  width: auto;
  height: auto;
  border-radius: 20px;

  @media only screen and (min-width: 426px) {
    width: 400px;
  }
`;

const MAX_MARK = 5;

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mark, setMark] = useState();
  const onRateHandler = (value) => {
    setMark(value);
  };

  const onSubmitHandler = (value) => {
    setIsSubmitted(true);
  };
  return (
    <Wrapper>
      <main>
        <Card>
          {!isSubmitted && (
            <RatingForm
              onRate={onRateHandler}
              onSubmit={onSubmitHandler}
              maxMark={MAX_MARK}
              mark={mark}
            />
          )}
          {isSubmitted && <ThankyouState maxMark={MAX_MARK} mark={mark} />}
        </Card>
      </main>
    </Wrapper>
  );
}

export default App;
