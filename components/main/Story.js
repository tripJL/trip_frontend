import styled from "styled-components";

const Wrapper = styled.article`
    max-width: 495px;
    min-height: 300px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Top = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const Middle = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

const Contents1 = styled.div`
    width: 480px;
    height: 262px;
    border: 2px solid ${(props) => props.theme.gray2};
`;

const Contents2 = styled.div`
    width: 480px;
    height: 262px;
    border: 2px solid ${(props) => props.theme.gray2};
    background-color: ${(props) => props.theme.white};
    position: absolute;
    top: 15px;
    left: 15px;
`;

const Bottom = styled.div`
    margin-top: 20px;
`;

const Text = styled.span`
    font-size: 14px;
    color: ${(props) => props.theme.gray2};
    margin: ${(props) => props.margin};
`;

export default function Story() {
    return (
        <Wrapper>
            <Top>
                <Text margin={"0 0 15px 0"}>S T O R Y</Text>
                <Text margin={"0 15px 15px 0"}>MORE</Text>
            </Top>
            <Middle>
                <Contents1></Contents1>
                <Contents2></Contents2>
            </Middle>
            <Bottom>Bottom</Bottom>
        </Wrapper>
    );
}
