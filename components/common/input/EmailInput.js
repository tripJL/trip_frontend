import styled from "styled-components";
import { useState } from "react";
import Text from "../Text";

const Wrapper = styled.div`
    max-width: ${(props) => props.width};
    width: 100%;
    height: ${(props) => props.height};
    border: 1px solid ${(props) => props.theme.gray2};
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Input = styled.input`
    width: 70%;
    height: 100%;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    border: 0;
`;

const SelectWrapper = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-left: 2px solid ${(props) => props.theme.gray2};
`;

const Select = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
`;

const Default = styled.div``;

const Arrow = styled.div`
    width: 21px;
    height: 19px;
    border: 2px solid ${(props) => props.theme.gray2};
    margin-left: 5px;
`;

const OptionWrapper = styled.div`
    position: absolute;
    top: 30px;
`;

const Option = styled.div``;

const Button = styled.button`
    background-color: ${(props) => props.theme.black};
    color: ${(props) => props.theme.white};
    font-size: 14px;
`;

const optionList = ["naver.com", "google.com", "nate.com", "daum.com"];

export default function EmailInput({
    name,
    defaultValue,
    placeholder,
    required,
    width,
    height,
}) {
    const [select, setSelect] = useState(optionList[0]);
    const [open, setOpen] = useState(false);

    const handleOnOff = () => {
        setOpen(!open);
    };

    const handleSelect = (data) => {
        setSelect(data);
    };

    return (
        <Wrapper width={width} height={height}>
            <Input
                name={name}
                defaultValue={defaultValue}
                required={required}
                placeholder={placeholder}
            />
            <SelectWrapper>
                <Select onClick={handleOnOff}>
                    <Default>{select}</Default>
                    <Arrow></Arrow>
                    {open && (
                        <OptionWrapper>
                            {optionList.map((val, idx) => {
                                if (select !== val)
                                    return (
                                        <Option
                                            key={idx}
                                            onClick={() => handleSelect(val)}
                                        >
                                            {val}
                                        </Option>
                                    );
                            })}
                        </OptionWrapper>
                    )}
                </Select>
                <Button>인증하기</Button>
            </SelectWrapper>
        </Wrapper>
    );
}

EmailInput.defaultProps = {
    width: "733px",
    height: "48px",
    required: false,
    type: "text",
};
