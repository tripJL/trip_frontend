import styled from "styled-components";

const Wrapper = styled.article`
    max-width: 525px;
    min-height: 300px;
    width: 100%;
    height: 100%;
`;

const Item = styled.div`
    width: 100%;
    min-height: 45px;
    height: auto;
    border-bottom: 4px solid ${(props) => props.theme.gray2};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: ${(props) => props.align};
`;

const Text = styled.span`
    font-size: 14px;
    color: ${(props) => props.theme.gray2};
    margin: ${(props) => props.margin};
`;

const data = [
    { title: "포", date: "2020" },
    { title: "포", date: "2020" },
    { title: "포", date: "2020" },
    { title: "포", date: "2020" },
    { title: "포", date: "2020" },
];

export const News = () => {
    return (
        <Wrapper>
            <Item>
                <Text margin={"0 0 15px 0"}>N E W S</Text>
                <Text margin={"0 0 15px 0"}>MORE</Text>
            </Item>
            {data.map((val, idx) => {
                return (
                    <Item key={idx} align={"center"}>
                        <Text margin={"0 0 0 15px"}>{val.title}</Text>
                        <Text margin={"0 15px 0 0"}>{val.date}</Text>
                    </Item>
                );
            })}
        </Wrapper>
    );
};
