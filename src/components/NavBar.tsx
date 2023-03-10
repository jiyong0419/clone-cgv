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
              <li>??????</li>
            </Link>
            <Link to="#">
              <li>??????</li>
            </Link>
            <Link to="#">
              <li>??????</li>
            </Link>
            <Link to="#">
              <li>?????????</li>
            </Link>
            <Link to="#">
              <li>?????????</li>
            </Link>
            <Link to="#">
              <li>??????</li>
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
              <Link to={"#"}>??????</Link>
              <Link to={"#"}>????????????</Link>
              <Link to={"#"}>???????????????</Link>
              <Link to={"#"}>ICECON</Link>
            </div>
            <div>
              <Link to={"#"}>??????</Link>
              <Link to={"#"}>CGV ??????</Link>
              <Link to={"#"}>?????????</Link>
            </div>
            <div>
              <Link to={"#"}>??????</Link>
              <Link to={"#"}>????????????</Link>
              <Link to={"#"}>???????????????</Link>
              <Link to={"#"}>English Ticheting</Link>
              <Link to={"#"}>English Schedule</Link>
            </div>
            <div>
              <Link to={"#"}>?????????</Link>
              <Link to={"#"}>???????????????</Link>
              <Link to={"#"}>???????????????</Link>
              <Link to={"#"}>??????</Link>
              <Link to={"#"}>??????</Link>
              <Link to={"#"}>??????</Link>
              <Link to={"#"}>??????</Link>
              <Link to={"#"}>????????????</Link>
              <Link to={"#"}>????????? ???</Link>
            </div>
            <div>
              <Link to={"#"}>SPECIAL</Link>
              <Link to={"#"}>??????/??????</Link>
              <Link to={"#"}>?????????/CLUB</Link>
              <Link to={"#"}>CGV ?????????</Link>
              <Link to={"#"}>????????????</Link>
              <Link to={"#"}>????????? ??????</Link>
              <Link to={"#"}>????????? ?????????</Link>
            </div>
            <div>
              <Link to={"#"}>??????</Link>
              <Link to={"#"}>CGV ????????????</Link>
              <Link to={"#"}>CLUB ?????????</Link>
              <Link to={"#"}>VIP ?????????</Link>
            </div>
          </HideContainerBox>
        </HideContainer>
      ) : null}
    </>
  );
}

export default NavBar;
