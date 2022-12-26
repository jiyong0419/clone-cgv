import styled from "styled-components";
import AdBanner from "../components/AdBanner";
import { useRecoilValue } from "recoil";
import { AdBannerShowing } from "../atoms";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

const Background = styled.div`
  background-color: #e9d6d6; // delete
  width: 100vw;
  height: 100vh;
`;
function Home() {
  const isShowAdBanner = useRecoilValue(AdBannerShowing);
  return (
    <Background>
      {isShowAdBanner ? <AdBanner /> : null}
      <Header />
      <NavBar />
      <div
        style={{
          width: "100%",
          height: "497px",
          backgroundColor: "teal",
          fontSize: "36px",
        }}
      >
        예고편영상보여줄 박스
      </div>
    </Background>
  );
}

export default Home;
