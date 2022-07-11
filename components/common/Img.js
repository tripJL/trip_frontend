import styled from "styled-components";
import Image from "next/image";

const Wrapper = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    position: relative;
`;

export default function Img({ src, width, height }) {
    return (
        <Wrapper width={width} height={height}>
            <Image src={src} layout="fill" />
        </Wrapper>
    );
}
