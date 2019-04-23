
import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { makeStyles } from "@material-ui/styles";
import CheckIcon from '@material-ui/icons/Check';
import DialogContent from '@material-ui/core/DialogContent';


function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const cardWidth = "24.5%";
const useStyles = makeStyles(theme => ({
  hint: {
    color: "white"
  },
  instructions: {
    color: "white",
    fontSize: '4rem',
    textAlign: 'center',
    marginTop: '100px'
  },
  instructionBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  modalContainer: {
      boxSizing:"border-box",
      display: "flex",
      flexFlow: "row wrap",
      alignItems: "center",
      justifyContent: "center",
      padding:"10px 10%",
      width:"100%",
  },
  cardStyle : {
    display: "block",
    margin: "0",
    height: "450px",
    width: cardWidth,
    cursor: "pointer",
  },
  selectedStyle : {
    display: "block",
    margin: "0",
    height: "450px",
    width: cardWidth,
    cursor: "pointer",
    transform:"scale(0.9)",
    boxShadow: "0px 0px 60px 4px rgba(250,85,250,0.81)",
  },
  hidden:{
    display:"none",
  },
  visible:{
    display:"flex", 
    justifyContent:"flex-end"
  },
  checkMark:{
    color: "rgba(250,85,250,0.81)", 
    position:"absolute", 
    zIndex:"999", 
    width:"20%", 
    height:"15%",
  },
  '@media(max-width: 1700px)':{
    instructions:{
      fontSize:"3rem"
    },
    cardStyle:{
      width:"100%"
    },
    selectedStyle : {
      width:"100%"
    },
  }
}));
function CategoryModal(props) {
  
  const classes = useStyles();
  const [r, setR] = React.useState(0);

  return (

      <Dialog
        fullScreen
        open={props.open}
        onClose={props.handleClose}
        TransitionComponent={Transition}
      >
        <DialogContent style={{background : "#1A237E"}}>
          {/* <GridList cellHeight={200} style={{boxSizing:"border-box", display: 'block', verticalAlign: 'baseline',  padding: '120px 160px 0 160px'}}> */}
          <div className={classes.modalContainer}>
            <GridListTile
              // cols={cardSize}
              style={{
                display: "block",
                height: '50%',
                width: "100%",
                margin: "0",
                boxSizing:"border-box",
                textAlign:"center",
                padding:"10%",
                // background: "rgb(25,25,112)"
              }}
            > 
              <div className={classes.instructionBox}>
                <h1 className={classes.instructions}>
                  Please Choose Your 3 Favorite Categories
                </h1>
                <h2 className={classes.hint}>3 are required!</h2>
              </div>
            </GridListTile>

            <GridListTile
              // cols={cardSize}
              className={props.categories.includes("Music") ? classes.selectedStyle : classes.cardStyle}
              onClick={() => {
                props.handleAdd("Music");
                setR(r + 1);
              }}
            >
              <div className={props.categories.includes("Music") ? classes.visible : classes.hidden}>
                <CheckIcon className={classes.checkMark}/>
              </div>
              <img src="https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
              <GridListTileBar title="Music" />
            </GridListTile>

            <GridListTile
              // cols={cardSize}
              className={props.categories.includes("Business") ? classes.selectedStyle : classes.cardStyle}
              onClick={() => {
                props.handleAdd("Business");
                setR(r + 1);
              }}
            >
              <div className={props.categories.includes("Business") ? classes.visible : classes.hidden}>
                <CheckIcon className={classes.checkMark}/>
              </div>
              <img src="https://images.pexels.com/photos/1437866/pexels-photo-1437866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
              <GridListTileBar title="Business" />
            </GridListTile>

            <GridListTile
              // cols={cardSize}
              className={
                props.categories.includes("Design") ? classes.selectedStyle : classes.cardStyle
              }
              onClick={() => {
                props.handleAdd("Design");
                setR(r + 1);
              }}
            >
              <div className={props.categories.includes("Design") ? classes.visible : classes.hidden}>
                <CheckIcon className={classes.checkMark}/>
              </div>
              <img src="https://images.pexels.com/photos/1328891/pexels-photo-1328891.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
              <GridListTileBar title="Design" />
            </GridListTile>

            <GridListTile
              // cols={cardSize}
              className={
                props.categories.includes("Development")
                  ? classes.selectedStyle
                  : classes.cardStyle
              }
              onClick={() => {
                props.handleAdd("Development");
                setR(r + 1);
              }}
            >
              <div className={props.categories.includes("Development") ? classes.visible : classes.hidden}>
                <CheckIcon className={classes.checkMark}/>
              </div>
              <img src="https://images.pexels.com/photos/908284/pexels-photo-908284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
              <GridListTileBar title="Development" />
            </GridListTile>

            <GridListTile
              // cols={cardSize}
              className={
                props.categories.includes("Health&Fitness")
                  ? classes.selectedStyle
                  : classes.cardStyle
              }
              onClick={() => {
                props.handleAdd("Health&Fitness");
                setR(r + 1);
              }}
            >
              <div className={props.categories.includes("Health&Fitness") ? classes.visible : classes.hidden}>
                <CheckIcon className={classes.checkMark}/>
              </div>
              <img src="https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
              <GridListTileBar title="Health & Fitness" />
            </GridListTile>

            <GridListTile
              // cols={cardSize}
              className={
                props.categories.includes("IT&Software")
                  ? classes.selectedStyle
                  : classes.cardStyle
              }
              onClick={() => {
                props.handleAdd("IT&Software");
                setR(r + 1);
              }}
            >
              <div className={props.categories.includes("IT&Software") ? classes.visible : classes.hidden}>
                <CheckIcon className={classes.checkMark}/>
              </div>
              <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
              <GridListTileBar title="IT & Software" />
            </GridListTile>

            <GridListTile
              // cols={cardSize}
              className={
                props.categories.includes("Lifestyle") ? classes.selectedStyle : classes.cardStyle
              }
              onClick={() => {
                props.handleAdd("Lifestyle");
                setR(r + 1);
              }}
            >
              <div className={props.categories.includes("Lifestyle") ? classes.visible : classes.hidden}>
                <CheckIcon className={classes.checkMark}/>
              </div>
              <img src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
              <GridListTileBar title="Lifestyle" />
            </GridListTile>

            <GridListTile
              // cols={cardSize}
              className={
                props.categories.includes("Marketing") ? classes.selectedStyle : classes.cardStyle
              }
              onClick={() => {
                props.handleAdd("Marketing");
                setR(r + 1);
              }}
            >
              <div className={props.categories.includes("Marketing") ? classes.visible : classes.hidden}>
                <CheckIcon className={classes.checkMark}/>
              </div>
              <img style={{position:"absolute"}} src="https://images.pexels.com/photos/1496192/pexels-photo-1496192.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
              <GridListTileBar title="Marketing" />
            </GridListTile>

            <GridListTile
              // cols={cardSize}
              className={
                props.categories.includes("Office") ? classes.selectedStyle : classes.cardStyle
              }
              onClick={() => {
                props.handleAdd("Office");
                setR(r + 1);
              }}
            >
              <div className={props.categories.includes("Office") ? classes.visible : classes.hidden}>
                <CheckIcon className={classes.checkMark}/>
              </div>
              <img src="https://images.pexels.com/photos/1432942/pexels-photo-1432942.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
              <GridListTileBar title="Office" />
            </GridListTile>

            <GridListTile
              // cols={cardSize}
              className={
                props.categories.includes("PersonalDevelopment")
                  ? classes.selectedStyle
                  : classes.cardStyle
              }
              onClick={() => {
                props.handleAdd("PersonalDevelopment");
                setR(r + 1);
              }}
            >
              <div className={props.categories.includes("PersonalDevelopment") ? classes.visible : classes.hidden}>
                <CheckIcon className={classes.checkMark}/>
              </div>
              <img src="https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
              <GridListTileBar title="Personal Development" />
            </GridListTile>

            <GridListTile
              // cols={cardSize}
              className={
                props.categories.includes("Photography")
                  ? classes.selectedStyle
                  : classes.cardStyle
              }
              onClick={() => {
                props.handleAdd("Photography");
                setR(r + 1);
              }}
            >
              <div className={props.categories.includes("Photography") ? classes.visible : classes.hidden}>
                <CheckIcon className={classes.checkMark}/>
              </div>
              <img src="https://images.pexels.com/photos/368893/pexels-photo-368893.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
              <GridListTileBar title="Photography" />
            </GridListTile>

            <GridListTile
              // cols={cardSize}
              className={
                props.categories.includes("Teaching&Academics")
                  ? classes.selectedStyle
                  : classes.cardStyle
              }
              onClick={() => {
                props.handleAdd("Teaching&Academics");
                setR(r + 1);
              }}
            >
              <div className={props.categories.includes("Teaching&Academics") ? classes.visible : classes.hidden}>
                <CheckIcon className={classes.checkMark}/>
              </div>
              <img src="https://images.pexels.com/photos/7075/people-office-group-team.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
              <GridListTileBar title="Teaching & Academics" />
            </GridListTile>
            
            <Button variant="contained" size="large" color="primary" style={{width:"53%", borderRadius: "24px", height: "71px", margin: "80px", backgroundColor: "#e76d89"}} onClick={props.addTagsToUser}>
              Save
            </Button>
          </div>
          </DialogContent>
      </Dialog>

  );
}

export default CategoryModal;
