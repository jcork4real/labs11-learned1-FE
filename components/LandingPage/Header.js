
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from 'next/link';

const styles = {
    root:{
        height:"600px",
        background:"url('https://i.ibb.co/HHf65vV/trianglify-1.png')",
        backgroundSize:"cover",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
    },
    textArea:{
        color:"white",
        width:"35%",
        display: 'flex',
        marginBottom: '40px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTitle : {
        fontSize:"2.7rem",
        textAlign: 'center'
    },
    headerText:{
        fontSize:"1.6rem",
        textAlign: 'center',
        marginBottom: '60px'
    },
    headerSignUp : {
        fontSize:"1.2rem",
        backgroundColor: '#e76d89',
        width: '80%',
        color:"white",
        borderRadius: '24px',
        '&:hover' : {
            color:"white",
            backgroundColor:"#0db4b9",
        }
    },
    img : {
        width: '300px',
        height: '350px',
        marginLeft: '80px'
    },
    '@media(max-width: 1000px)': {
        img: {
            display: 'none'
        },
        textArea:{
            width: '400px'
        },
        headerText: {
            width: '100%'
        }
    },
    '@media(max-width: 800px)': {
        root: {
            justifyContent:"space-evenly",
        },
        headerText: {
            fontSize: '1.5rem',
        },
        headerSignUp: {
            fontSize: '1rem'
        }
    },
    '@media(max-width: 600px)': {
        root:{
            flexDirection:"column",
            justifyContent:"space-evenly",
        },
        img:{
            display:"none"
        },
        headerTitle: {
            fontSize: '2rem'
        },
        headerText: {
            fontSize: '1.3rem'
        },
        textArea:{
            width: '70%'
        },
    },
}

function Header(props){
    const {classes} = props;
    return(
        <div className={classes.root}>
            <div className={classes.textArea}>
                <h1 className={classes.headerTitle}>Never be <br />Unproductive Again!</h1>
                <p className={classes.headerText}>
                    Erudition utilizes a social community to help you find the most effective resources in a modern
                    era of infinite information, all while allowing you to update your platform of friends and peers on your 
                    latest finds!
                </p>
                <Link href="/Homepage">
                    <Button className={classes.headerSignUp}>Sign Up for free</Button>
                </Link>
            </div>
            <img className={classes.img} src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/process_e90d.svg" />
        </div>
    )
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);