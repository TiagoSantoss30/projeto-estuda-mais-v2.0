import * as S from "./styles";

function InfoSection({ p1, p2, imgSrc, imgAltText }) {
  return (
    <S.Section>
      <div>
        <p>{p1}</p>

        <p className="segundo-paragrafo">{p2}</p>
      </div>

      <img src={imgSrc} alt={imgAltText} />
    </S.Section>
  );
}

export default InfoSection;
