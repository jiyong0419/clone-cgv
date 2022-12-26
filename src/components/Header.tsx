import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 114px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
`;
const HeaderBox = styled.div`
  min-width: 980px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
`;
const LeftDiv = styled.div``;
const RightDiv = styled.div`
  display: flex;
  ul {
    display: flex;
    li a {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 12px;
      margin-left: 40px;
      img {
        width: 36px;
      }
    }
  }
`;
function Header() {
  return (
    <Container>
      <HeaderBox>
        <LeftDiv>
          <Link to={"/"}>
            <img
              src="https://img.cgv.co.kr/R2014/images/common/logo/logoRed.png"
              width={"120px"}
            />
          </Link>
          <span>C U L T U R E P L E X</span>
        </LeftDiv>
        <RightDiv>
          <ul>
            <li>
              <Link to="#">
                <img
                  src="https://img.cgv.co.kr/R2014/images/common/ico/loginPassword.png"
                  alt="로그인"
                />
                <span>로그인</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <img
                  src="https://img.cgv.co.kr/R2014/images/common/ico/loginJoin.png"
                  alt="회원가입"
                />
                <span>회원가입</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <img
                  src="https://img.cgv.co.kr/R2014/images/common/ico/loginMember.png"
                  alt="MY CGV"
                />
                <span>MY CGV</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <img
                  src="https://img.cgv.co.kr/R2014/images/common/ico/loginCustomer.png"
                  alt="고객센터"
                />
                <span>고객센터</span>
              </Link>
            </li>
          </ul>
        </RightDiv>
      </HeaderBox>
    </Container>
  );
}

export default Header;
