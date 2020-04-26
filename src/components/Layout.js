import React, { useContext, useMemo, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { NAV_LIST, ICON_LIST } from "../config";

export const LayoutContext = React.createContext({
  lState: { rDrawer: false },
  lMethods: {},
});
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    zIndex: theme.zIndex.drawer + 2,
  },
  rightDrawer: {
    width: drawerWidth,
    flexShrink: 0,
    zIndex: theme.zIndex.drawer,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },

  gridRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
}));

export default function PermanentDrawerLeft(props) {
  const classes = useStyles();

  const { lState } = useContext(LayoutContext);
  const [rDrawer, setRDrawer] = useState(false);

  const [path, setPath] = useState("");

  const lMethods = useMemo(
    () => ({
      openRdrawer: () => {
        console.log("value changed");
        setRDrawer(true);
      },
      closeRdrawer: () => {
        setRDrawer(false);
      },
    }),
    []
  );

  return (
    <LayoutContext.Provider value={{ lState, lMethods }}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              {props.title}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <div className={classes.toolbar} />
          <Divider />
          <List>
            {["Dashboard"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {Object.values(NAV_LIST).map((nav, index) => (
              <ListItem
                button
                key={index}
                onClick={() => props.setPage(nav.key)}
              >
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={nav.title} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {React.createElement(props.component, { path })}
        </main>
        {console.log(rDrawer)}
        <Drawer
          className={classes.rightDrawer}
          //   variant="permanent"
          open={rDrawer}
          onClose={lMethods.closeRdrawer}
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="right"
        >
          <div className={classes.toolbar} />
          <div className={classes.gridRoot}>
            <GridList cellHeight={160} className={classes.gridList} cols={2}>
              {ICON_LIST.map((path, index) => (
                <GridListTile
                  key={index}
                  cols={1}
                  onClick={() => setPath(path)}
                >
                  <img src={path} style={{ width: "100%", height: "auto" }} />
                </GridListTile>
              ))}
            </GridList>
          </div>
        </Drawer>
      </div>
    </LayoutContext.Provider>
  );
}
