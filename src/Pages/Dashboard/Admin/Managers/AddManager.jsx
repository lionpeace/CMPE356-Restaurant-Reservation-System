import React from "react";
import Navigation from "../../../../Shared/Dashboard/Admin/NavigationAdmin.jsx";

function AddManager() {
    return (
        <>
            <Navigation/>
            <div id="content">
                <h1 className="page-name">Add Manager</h1>
                <div className="add-manager-div">
                    <form className="add-manager-form">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter new manager's name" required/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="surname">Surname</label>
                                <input type="text" className="form-control" id="surname" placeholder="Enter a new manager's surname" required/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" id="username" placeholder="Set username for new manager" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="photo">Photo</label>
                            <input type="text" className="form-control" id="photo" placeholder="Enter the photo link for new manager" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter a new manager's email" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="tel" className="form-control" id="phone" placeholder="Enter a new manager's phone number" required />
                        </div>
                        <div className="btn-div-add-manager">
                            <button type="submit" className="btn-add-manager">Add Manager</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AddManager;
