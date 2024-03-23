import './UserCardList.scss';
import Profile from '../Profile/Profile';

function UserCardList({ usersList, children }) {
    return (
        <div className="user-card-list container">
            <div className="wide container">
                {children}
                <div className="container">
                    {usersList?.map((user) => (
                        <Profile userInfor={user} key={user.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default UserCardList;
