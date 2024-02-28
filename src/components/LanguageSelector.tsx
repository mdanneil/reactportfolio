import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Button
      onClick={() => {
        changeLanguage(i18n.language === "en" ? "sv" : "en");
      }}
      style={{
        position: "fixed",
        bottom: 0,
        width: "60px",
        height: "60px",
        padding: 5,
      }}
    >
      {i18n.language === "en" ? (
        <img
          src="https://img.icons8.com/color/48/great-britain-circular.png"
          alt="British flag"
          style={{ width: "100%", height: "100%" }}
        />
      ) : (
        <img
          src="https://img.icons8.com/color/48/sweden-circular.png"
          alt="Swedish flag"
          style={{ width: "100%", height: "100%" }}
        />
      )}
    </Button>
  );
};

export default LanguageSelector;
