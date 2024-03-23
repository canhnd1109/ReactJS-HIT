import './Profile.scss';

function Profile({ userInfor }) {
    return (
        <div className='profile'>
            <div className="profile-infor">
                <div className="profile-avatar">
                    <img src={userInfor.avatar} alt="" />
                </div>
                <h2>{userInfor.name}</h2>
                <p>{userInfor.address.city}</p>
                <div className="profile-socials">
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-github"></i>
                    <i className="fa-brands fa-discord"></i>
                    <i className="fa-brands fa-instagram"></i>
                </div>
            </div>
        </div>
    )
}

export default Profile