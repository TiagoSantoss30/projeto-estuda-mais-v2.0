import * as S from "./styles";

function StudentAreaCard({ CardImg, CardImgWidth, CardImgHeight, CardImgAltText, CardText, CardHref }) {
  return (
    <S.LinkHref to={CardHref}>
      <S.Div>
        <img src={CardImg} alt={CardImgAltText} width={CardImgWidth} height={CardImgHeight} />
        <p>{CardText}</p>
      </S.Div>
    </S.LinkHref>
  );
}

export default StudentAreaCard;
