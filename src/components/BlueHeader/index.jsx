import * as S from "./styles";

function BlueHeader({imgSrc, imgAltText, text}) {
  return (
    <S.Header>
      <img src={imgSrc} alt={imgAltText} />
      <h1>{text}</h1>
    </S.Header>
  );
}

export default BlueHeader;
