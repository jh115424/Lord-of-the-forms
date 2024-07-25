import { useRef } from "react";

export const FunctionalPhoneInput = ({
  phoneNumberInput,
  setPhoneNumberInput,
}) => {
  const ref0 = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const refs = [ref0, ref1, ref2, ref3];

  const handlePhoneNumberChange =
    (index) =>
    ({ target: { value } }) => {
      const valueLength = [2, 2, 2, 1];
      const currentMaxLength = valueLength[index];
      const nextRef = refs[index + 1];
      const previousRef = refs[index - 1];

      const shouldGoToNextRef =
        currentMaxLength === value.length && nextRef?.current;

      const shouldGoToPreviousRef = value.length === 0 && index !== 0;
      const newState = phoneNumberInput.map((numberInput, numberIndex) =>
        index === numberIndex ? value.replace(/[^0-9]/g, "") : numberInput
      );
      if (shouldGoToNextRef) {
        nextRef.current.focus();
      }
      if (shouldGoToPreviousRef) {
        previousRef.current.focus();
      }
      setPhoneNumberInput(newState);
    };
  {
    {
      return (
        <div className="input-wrap">
          <label htmlFor="phone">Phone:</label>
          <div id="phone-input-wrap">
            <input
              ref={ref0}
              type="text"
              id="phone-input-1"
              placeholder="55"
              onChange={handlePhoneNumberChange(0)}
              value={phoneNumberInput[0]}
              maxLength={2}
            />
            -
            <input
              ref={ref1}
              type="text"
              id="phone-input-2"
              placeholder="55"
              onChange={handlePhoneNumberChange(1)}
              value={phoneNumberInput[1]}
              maxLength={2}
            />
            -
            <input
              ref={ref2}
              type="text"
              id="phone-input-3"
              placeholder="55"
              onChange={handlePhoneNumberChange(2)}
              value={phoneNumberInput[2]}
              maxLength={2}
            />
            -
            <input
              ref={ref3}
              type="text"
              id="phone-input-4"
              placeholder="5"
              onChange={handlePhoneNumberChange(3)}
              value={phoneNumberInput[3]}
              maxLength={1}
            />
          </div>
        </div>
      );
    }
  }
};
