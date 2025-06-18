import * as S from "./styles";

function StudentAreaCard({ CardImg, CardImgAltText, CardText, CardHref, imgWidth }) {
  return (
    <S.LinkHref to={CardHref}>
      <S.Div imgWidth={imgWidth}>
        <img src={CardImg} alt={CardImgAltText} />
        <p>{CardText}</p>
      </S.Div>
    </S.LinkHref>
  );
}

export default StudentAreaCard;
