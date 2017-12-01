import React from 'react';
import './profile.css'

const Profile = () => (
    <div className="container">
        <div className="row">
            <div className="col-lg-3 col-sm-6">
                <div className="card hovercard">
                    <div className="cardheader">

                    </div>
                    <div className="avatar">
                        <img alt="" src="http://img1.gtsstatic.com/voiture/logo-maserati_114705_wide.jpg" />
                    </div>
                    <div className="info">
                        <div className="title">
                            <a>Username</a>
                        </div>
                        <div className="desc">First Name : </div>
                        <div className="desc">Last Name :</div>
                        <div className="desc">User Name :</div>
                        <div className="desc">Birth Date :</div>
                        <div className="desc">Email : </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Profile;