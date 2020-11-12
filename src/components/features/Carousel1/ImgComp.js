let imgStyles = {
  width: 100 + "%",
  height: "auto",
};

const ImgComp = ({ src }) => (
  <>
    <img src={src} alt='slide-img' style={imgStyles} />
    <button>lalala</button>
  </>
);

export default ImgComp;
