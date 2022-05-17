import DaumPostcode from 'react-daum-postcode';

const SearchPostcode = (props) => {
  const onCompletePost = (data) => {
    props.setAddress(data.address);
  };

  const postCodeStyle = {
    display: "block",
    position: "absolute",
    top: "20%",
    width: "500px",
    height: "400px",
    padding: "7px",
    zIndex: 100, 
  };

  return (
      <DaumPostcode
          style={postCodeStyle}
          autoClose
          onComplete={onCompletePost}
      />
  );
};

export default SearchPostcode
