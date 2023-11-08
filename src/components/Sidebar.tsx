import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Typography from "@mui/material/Typography";
import { Link } from "react-scroll";
import LanguageSelector from "./LanguageSelector";

const navItems = ["Om mig", "Projekt", "Kontakt"];

const Sidebar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 1,
        padding: 0,
        height: "100%",
        backgroundColor: "transparent",
      }}
    >
      <div>
        <Typography
          variant="h5"
          sx={{
            m: 2,
            textAlign: "left",
            fontFamily: "Montserrat",
            fontWeight: 300,
          }}
        >
          Marcus Danneil Wahlström
        </Typography>
        <Typography
          variant="h6"
          sx={{
            m: 2,
            textAlign: "left",
            fontFamily: "Montserrat",
            fontWeight: 400,
          }}
        >
          Fullstackutvecklare
        </Typography>
        <List>
          {navItems.map((item, index) => (
            <ListItem key={item} disablePadding>
              <Link to={item.toLowerCase()} smooth={true} duration={500}>
                <ListItemButton>
                  <Typography
                    sx={{
                      fontFamily: "Montserrat",
                      fontWeight: 500,
                    }}
                  >
                    {item}
                  </Typography>
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </div>
      <LanguageSelector />
    </Box>
  );
};

export default Sidebar;
