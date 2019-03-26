import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Nav from '../components/Navigation/Nav'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {addPost} from '../components/addPost.js';
import {editPost} from '../components/addPost';
import {getPost} from '../components/addPost';

export default class LearningLab extends React.Component {
    state = {
        open: false,
    };





//this button can be placed elsewhere. It is in learning labs just as a test
    handleAdd = () => {
        addPost();
    }
    handleGet = () => {
        getPost();
    }

    handleEdit = () => {
        editPost()
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
        <div>
            <Nav />

            <h1>Current Courses</h1>
            <div className="thisIsWhereCoursesCardsWillGo">
            {/* This is where user courses will show up */}
            </div>
            <h1>My List</h1>
            <div className="IDKWTFThisIs">
            {/* I still have no Idea what this is */}
            </div>
            <Fab color="primary" aria-label="Add" onClick={this.handleClickOpen}>
                <AddIcon />
            </Fab>

            {/* Modul starts here */}
            <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Enter Link to Blog/Course</DialogTitle>

                <DialogContent>
                    <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Link"
                    fullWidth
                    />
                </DialogContent>

                <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                    Cancel
                    </Button>
                    {/* Change this to handle submit */}
                    <Button onClick={this.handleClose} color="primary">
                    Add
                    </Button>
                </DialogActions>

            </Dialog>


            <button onClick = {this.handleAdd}>Add post</button>
            <button onClick = {this.handleEdit}>Edit post</button>
            <button onClick = {this.handleGet}>Get post</button>
        </div>
        );
    }
}