export const FunctionalPhoneInput = ({
  phoneNumber0,
  phoneNumber1,
  phoneNumber2,
  phoneNumber3,
  setPhoneNumber,
}) => {
  return (
    <div className="input-wrap">
      <label htmlFor="phone">Phone:</label>
      <div id="phone-input-wrap">
        <input
          type="text"
          id="phone-input-1"
          placeholder="55"
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
          value={phoneNumber0}
        />
        -
        <input
          type="text"
          id="phone-input-2"
          placeholder="55"
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
          value={phoneNumber1}
        />
        -
        <input
          type="text"
          id="phone-input-3"
          placeholder="55"
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
          value={phoneNumber2}
        />
        -
        <input
          type="text"
          id="phone-input-4"
          placeholder="5"
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
          value={phoneNumber3}
        />
      </div>
    </div>
  );
};
