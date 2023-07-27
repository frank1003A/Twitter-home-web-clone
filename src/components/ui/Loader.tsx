import AbsoluteCenter from "../core/AbsoluteCenter";

import logo from "../assets/svg/xlogo.svg";

const Loader = () => {
  return (
    <AbsoluteCenter>
      <img
        src={logo}
        alt="logo"
        width={60}
        height={60}
        style={{
          filter: "var(--filter)",
        }}
      />
    </AbsoluteCenter>
  );
};

export default Loader;
