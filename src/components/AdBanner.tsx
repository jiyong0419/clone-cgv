import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { AdBannerShowing } from "../atoms";

const Container = styled.div`
  background-color: #a5c6e5;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const AdBannerBox = styled.div<{ bgImage: string }>`
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center center;
  background-color: green;
  min-width: 980px;
  position: relative;
`;

const CloseBtn = styled.button`
  width: 15px;
  height: 15px;
  border: none;
  background-color: transparent;
  position: absolute;
  top: 10%;
  right: 3%;
  padding: 0;
`;

const bgImageArr = [
  {
    name: "3000년의 기다림",
    link: "https://adimg.cgv.co.kr/images/202212/3000years/980x80.jpg",
  },
  {
    name: "스위치",
    link: "https://adimg.cgv.co.kr/images/202212/switch/1226_980x80.jpg",
  },
  {
    name: "유령",
    link: "https://adimg.cgv.co.kr/images/202212/Ghost/1220_980x80.png",
  },
  {
    name: "장화신은 고양이",
    link: "https://adimg.cgv.co.kr/images/202212/PussinBoots/980x80.jpg",
  },
  {
    name: "영웅",
    link: "https://adimg.cgv.co.kr/images/202212/hero/1220_980x80.png",
  },
];

function AdBanner() {
  const setAdBannerShowing = useSetRecoilState(AdBannerShowing);
  const onClickBtn = () => {
    setAdBannerShowing(false);
  };
  const randomNum = Math.floor(Math.random() * bgImageArr.length);
  return (
    <Container>
      <AdBannerBox bgImage={bgImageArr[randomNum].link}>
        <CloseBtn onClick={onClickBtn}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
          </svg>
        </CloseBtn>
      </AdBannerBox>
    </Container>
  );
}
export default AdBanner;

/*
 api로부터 영화 배너이미지를 받아와서 bgImageArr에 추가하기
 랜덤한 배너이미지에 따라 Container의 색깔도 변경되어야함 
 */
