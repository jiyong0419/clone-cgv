import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid red;
`;
const NavBarBox = styled.div`
  min-width: 980px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const NavBarTopLeft = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  a {
    margin-right: 45px;
    font-weight: 600;
    font-size: 16px;
    &:last-child {
      margin-right: 0;
    }
  }
`;
const NavBarTopRight = styled.form`
  display: flex;
  margin-right: 8px;
  padding: 0 8px;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  input {
    background-color: transparent;
    border: none;
  }
  button {
    background-color: transparent;
    border: none;
    font-size: 20px;
  }
`;
const HideContainer = styled.div`
  background-color: #857d7d;
  width: 100%;
  height: 325px;
  display: flex;
  justify-content: center;
  position: absolute;
`;
const HideContainerBox = styled.div`
  background-color: skyblue;
  min-width: 980px;
  height: 320px;
  padding: 24px 0;
  display: flex;
  justify-content: space-between;
  position: absolute;
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    margin-right: 22px;
    &:last-child {
      border: none;
    }
    a {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.6);
      margin-bottom: 14px;
      &:first-child {
        font-weight: 600;
        color: black;
      }
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

function NavBar() {
  const [showing, setShowing] = useState(false);
  return (
    <>
      <Container onMouseLeave={() => setShowing(false)}>
        <NavBarBox>
          <NavBarTopLeft onMouseEnter={() => setShowing(true)}>
            <Link to="#">
              <li>영화</li>
            </Link>
            <Link to="#">
              <li>극장</li>
            </Link>
            <Link to="#">
              <li>예매</li>
            </Link>
            <Link to="#">
              <li>스토어</li>
            </Link>
            <Link to="#">
              <li>이벤트</li>
            </Link>
            <Link to="#">
              <li>혜택</li>
            </Link>
          </NavBarTopLeft>
          <NavBarTopRight>
            <input type="text" />
            <button>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </NavBarTopRight>
        </NavBarBox>
      </Container>
      {showing ? (
        <HideContainer
          onMouseEnter={() => setShowing(true)}
          onMouseLeave={() => setShowing(false)}
        >
          <HideContainerBox>
            <div>
              <Link to={"#"}>영화</Link>
              <Link to={"#"}>무비차트</Link>
              <Link to={"#"}>아트하우스</Link>
              <Link to={"#"}>ICECON</Link>
            </div>
            <div>
              <Link to={"#"}>극장</Link>
              <Link to={"#"}>CGV 극장</Link>
              <Link to={"#"}>특별관</Link>
            </div>
            <div>
              <Link to={"#"}>예매</Link>
              <Link to={"#"}>빠른예매</Link>
              <Link to={"#"}>상영스케줄</Link>
              <Link to={"#"}>English Ticheting</Link>
              <Link to={"#"}>English Schedule</Link>
            </div>
            <div>
              <Link to={"#"}>스토어</Link>
              <Link to={"#"}>영화관람권</Link>
              <Link to={"#"}>기프트카드</Link>
              <Link to={"#"}>콤보</Link>
              <Link to={"#"}>팝콘</Link>
              <Link to={"#"}>음료</Link>
              <Link to={"#"}>스낵</Link>
              <Link to={"#"}>플레이존</Link>
              <Link to={"#"}>씨네샵 ＞</Link>
            </div>
            <div>
              <Link to={"#"}>SPECIAL</Link>
              <Link to={"#"}>영화/예매</Link>
              <Link to={"#"}>멤버십/CLUB</Link>
              <Link to={"#"}>CGV 극장별</Link>
              <Link to={"#"}>제휴할인</Link>
              <Link to={"#"}>당첨자 발표</Link>
              <Link to={"#"}>종료된 이벤트</Link>
            </div>
            <div>
              <Link to={"#"}>혜택</Link>
              <Link to={"#"}>CGV 할인정보</Link>
              <Link to={"#"}>CLUB 서비스</Link>
              <Link to={"#"}>VIP 라운지</Link>
            </div>
          </HideContainerBox>
        </HideContainer>
      ) : null}
    </>
  );
}

export default NavBar;
