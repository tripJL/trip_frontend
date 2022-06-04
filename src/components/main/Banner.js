import styled from "styled-components";
//temporary image
import x1122 from "../../assets/img/x1122.png";

const Image = styled.img`
    width: 100%;
    height: 100%;
    max-height: 340px;
`;

export const Banner = () => {
    return <Image src={x1122} />;
};
