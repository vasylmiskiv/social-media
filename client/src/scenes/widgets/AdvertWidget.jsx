import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="/assets/amazonshoes.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.65rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Amazon shoes</Typography>
        <Typography color={medium}>amazonshoes.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Comfortable and Stylish Sneakers: These sneakers are perfect for those
        who want a combination of comfort and style. They are made from
        high-quality materials that ensure durability and breathability. With
        their trendy design, you can wear them with any casual outfit.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
