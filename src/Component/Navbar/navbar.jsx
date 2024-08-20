import { Box, Button } from "@mui/material";
import styles from "./navBar.module.css";
import { FaArrowAltCircleRight } from "react-icons/fa";

const NavbarOfNetweb = () => {
  return (
    <Box
      className="mainContainer"
      sx={{
        height: "70px",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "0px 10px",
      }}
    >
      <Box sx={{ width: "178px",height:"70px" }}>
        <img
          src="src\assets\netweb-logo-img-2.svg"
          alt="logo"
          style={{ width: "100%", height: "100%",objectFit:"contain" }}
        />
      </Box>
      <Box
        sx={{
          width: "674px",
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            width: "100%",
            justifyContent: "space-evenly",
          }}
        >
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Development Services</a>
          </li>
          <li>
            <a href="#">On-demand Apps</a>
          </li>
          <li>
            <a href="#">Hire Developer</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
        </ul>
      </Box>
      <Box mr={7}>
        <Button
          className={styles.navBarButton}
          variant="conatined"
          sx={{
            textTransform: "none",
            width: "216px",
            height: "50px",
            display: "flex",
            alignItems: "center",
          }}
        >
          Get Free Counselling
          <FaArrowAltCircleRight style={{ fontSize: "23px",marginLeft:"5px"}} />
        </Button>
      </Box>
    </Box>
  );
};
export default NavbarOfNetweb;
