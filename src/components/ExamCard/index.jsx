import * as S from "./styles";

function ExamCard({file, label}){
    return(
        <S.Div>
            <a href={file} target="_blank"> {label}</a>
        </S.Div>
    );
}

export default ExamCard;