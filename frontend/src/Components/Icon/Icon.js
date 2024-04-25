const Icon = ({ size = 30, src = "", margin = "" }) => {
  return src ? (
    <img
      src={src}
      style={{
        width: size,
        height: size,
        margin: margin,
        filter: "invert(20%)",
      }}
      alt="Icon"
    />
  ) : (
    <span
      style={{
        width: size,
        height: size,
        margin: margin,
      }}
    ></span>
  );
};

export default Icon;
