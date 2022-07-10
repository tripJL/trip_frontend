import styled from "styled-components";
import Image from "next/image";

const Wrapper = styled.section`
    width: 100%;
    height: 340px;
    position: relative;
`;

export default function Banner() {
    return (
        <Wrapper>
            <Image src={"/x1122.png"} layout="fill" />
        </Wrapper>
    );
}
