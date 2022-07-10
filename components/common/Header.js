import styled from "styled-components";
import Link from "next/link";
import { routes } from "../../shared/routes";

const Wrapper = styled.header`
    width: 100vw;
    height: 60px;
    position: fixed;
    top: 0;
    z-index: 9;
    background-color: ${(props) => props.theme.white};
    border-bottom: 2px solid ${(props) => props.theme.gray2};
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Contents = styled.div`
    width: 100%;
    max-width: 1180px;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled.div`
    width: 100px;
    height: 30px;
    border: 2px solid ${(props) => props.theme.gray2};
    text-align: center;
    line-height: 25px;
    > a {
        width: 100%;
        height: 100%;
    }
`;

const SearchInput = styled.div`
    width: 200px;
    height: 30px;
    margin-right: 105px;
    border: 2px solid ${(props) => props.theme.gray2};
    font-size: 15px;
    font-weight: 700;
    text-align: center;
    line-height: 25px;
`;

const LinkWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    > a {
        width: 55px;
        height: 20px;
        border: 2px solid ${(props) => props.theme.gray2};
        font-size: 12px;
        text-align: center;
        line-height: 15px;
    }
    > :nth-child(2) {
        margin-right: 15px;
    }
`;

export default function Header() {
    return (
        <Wrapper>
            <Contents>
                <Logo>
                    <Link href={routes.home}>
                        <a className="logo">Logo</a>
                    </Link>
                </Logo>
                <LinkWrapper>
                    <SearchInput>Search</SearchInput>
                    <Link href={routes.login}>
                        <a>로그인</a>
                    </Link>
                    <Link href={routes.join}>
                        <a>회원가입</a>
                    </Link>
                </LinkWrapper>
            </Contents>
        </Wrapper>
    );
}
