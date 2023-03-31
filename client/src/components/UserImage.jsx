import { Box } from "@mui/material";

const UserImage = ({ image, size = "60px" }) => {
  console.log(image);
  return (
    <Box width={size} height={size}>
      <img
        // https:/localhost:5001/assets/ fix it
        src={image}
        alt="user"
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
      />
    </Box>
  );
};

export default UserImage;
