// import React from "react";
// import {
//   alpha,
//   makeStyles,
//   Theme,
//   createStyles,
// } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
// import InputBase from "@material-ui/core/InputBase";
// import MenuItem from "@material-ui/core/MenuItem";
// import Menu from "@material-ui/core/Menu";
// import SearchIcon from "@material-ui/icons/Search";
// import AccountCircle from "@material-ui/icons/AccountCircle";
// import MoreIcon from "@material-ui/icons/MoreVert";
// import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
// import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
// import { SupervisedUserCircle } from "@material-ui/icons";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     grow: {
//       flexGrow: 1,
//     },
//     menuButton: {
//       marginRight: theme.spacing(2),
//     },
//     title: {
//       display: "none",
//       [theme.breakpoints.up("sm")]: {
//         display: "block",
//       },
//     },
//     search: {
//       position: "relative",
//       borderRadius: theme.shape.borderRadius,
//       backgroundColor: alpha(theme.palette.common.white, 0.15),
//       "&:hover": {
//         backgroundColor: alpha(theme.palette.common.white, 0.25),
//       },
//       marginRight: theme.spacing(2),
//       marginLeft: 0,
//       width: "100%",
//       [theme.breakpoints.up("sm")]: {
//         marginLeft: theme.spacing(3),
//         width: "auto",
//       },
//     },
//     searchIcon: {
//       padding: theme.spacing(0, 2),
//       height: "100%",
//       position: "absolute",
//       pointerEvents: "none",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//     },
//     inputRoot: {
//       color: "inherit",
//     },
//     inputInput: {
//       padding: theme.spacing(1, 1, 1, 0),
//       // vertical padding + font size from searchIcon
//       paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//       transition: theme.transitions.create("width"),
//       width: "100%",
//       [theme.breakpoints.up("md")]: {
//         width: "20ch",
//       },
//       "&:focus": {
//         width: "20rem",
//       },
//     },
//     account: {
//       paddingLeft: theme.spacing(2),
//     },
//     sectionDesktop: {
//       display: "none",
//       [theme.breakpoints.up("md")]: {
//         display: "flex",
//       },
//     },
//     sectionMobile: {
//       display: "flex",
//       [theme.breakpoints.up("md")]: {
//         display: "none",
//       },
//     },
//   })
// );

// export default function Navbar() {
//   const classes = useStyles();
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
//     React.useState<null | HTMLElement>(null);

//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//   const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null);
//   };

//   const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
//     setMobileMoreAnchorEl(event.currentTarget);
//   };

//   const handleSignUp = () => {};
//   const handleLogin = () => {};

//   const mobileMenuId = "primary-search-account-menu-mobile";
//   const renderMobileMenu = (
//     <Menu
//       anchorEl={mobileMoreAnchorEl}
//       anchorOrigin={{ vertical: "top", horizontal: "right" }}
//       id={mobileMenuId}
//       keepMounted
//       transformOrigin={{ vertical: "top", horizontal: "right" }}
//       open={isMobileMenuOpen}
//       onClose={handleMobileMenuClose}
//     >
//       <MenuItem>
//         <IconButton onClick={handleSignUp} aria-label="Sign Up" color="inherit">
//           <SupervisedUserCircle />
//         </IconButton>
//         <p>Sign Up</p>
//       </MenuItem>
//       <MenuItem>
//         <IconButton
//           aria-label="account of current user"
//           aria-controls="primary-search-account-menu"
//           aria-haspopup="true"
//           color="inherit"
//           onClick={handleLogin}
//         >
//           <AccountCircle />
//         </IconButton>
//         <p>Login</p>
//       </MenuItem>
//     </Menu>
//   );

//   return (
//     <div className={classes.grow}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             edge="start"
//             className={classes.menuButton}
//             color="inherit"
//             aria-label="open drawer"
//           >
//             <ShoppingBasketIcon />
//           </IconButton>
//           <Typography className={classes.title} variant="h6" noWrap>
//             Shopping App
//           </Typography>
//           <div className={classes.search}>
//             <div className={classes.searchIcon}>
//               <SearchIcon />
//             </div>
//             <InputBase
//               placeholder="Search…"
//               classes={{
//                 root: classes.inputRoot,
//                 input: classes.inputInput,
//               }}
//               inputProps={{ "aria-label": "search" }}
//             />
//           </div>
//           <div className={classes.grow} />
//           <div className={classes.sectionDesktop}>
//             <IconButton
//               aria-label="Sign Up"
//               onClick={handleSignUp}
//               color="inherit"
//             >
//               <SupervisorAccountIcon />
//               <Typography className={classes.account} noWrap>
//                 Sign Up
//               </Typography>
//             </IconButton>
//             <IconButton
//               edge="end"
//               aria-label="Log In"
//               aria-haspopup="true"
//               onClick={handleLogin}
//               color="inherit"
//             >
//               <AccountCircle />
//               <Typography className={classes.account} noWrap>
//                 Login
//               </Typography>
//             </IconButton>
//           </div>
//           <div className={classes.sectionMobile}>
//             <IconButton
//               aria-label="show more"
//               aria-controls={mobileMenuId}
//               aria-haspopup="true"
//               onClick={handleMobileMenuOpen}
//               color="inherit"
//             >
//               <MoreIcon />
//             </IconButton>
//           </div>
//         </Toolbar>
//       </AppBar>
//       {renderMobileMenu}
//     </div>
//   );
// }

import React from "react";

export const Navbar = () => {
  return (
    <nav>
      <section>
        <h1>Redux Essentials Example</h1>
        <div className="navContent">
          <div className="navLinks"></div>
        </div>
      </section>
    </nav>
  );
};
