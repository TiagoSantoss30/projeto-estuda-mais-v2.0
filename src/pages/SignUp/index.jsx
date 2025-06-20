import * as S from "./styles";
import WhiteHeader from "../../components/WhiteHeader/index.jsx";
import SignUpForm from "../../components/SignUpForm/index.jsx";
import signUpImg1 from "../../assets/SignUp/signUp-img1.svg";

function SignUp() {
  return (
    <>
      <WhiteHeader />
      <S.Section>
        <div>
          <img
            src={signUpImg1}
            alt="ilustração de um mulher utilizando óculos VR."
          />
        </div>
        <SignUpForm />
      </S.Section>
    </>
  );
}

export default SignUp;
