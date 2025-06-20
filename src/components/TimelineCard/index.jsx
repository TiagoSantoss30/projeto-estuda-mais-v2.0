import * as S from "./styles";


function TimelineCard({imgSrc, imgAltText, file, label}) {
  return (
    <S.Div>
      <img src={imgSrc} alt={imgAltText}/>
      <a href={file} target="_blank">{label}</a>
    </S.Div>
  );
}

export default TimelineCard;
