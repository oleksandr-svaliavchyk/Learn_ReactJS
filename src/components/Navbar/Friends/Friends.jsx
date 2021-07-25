import Friend from "./Friend/Friend";
import s from './Friends.module.css'

const Friends = (props) => {

    let friends = props.friends.map(f => <Friend id={f.id} name={f.name} avatarLink={f.avatarLink} />);

        return (
        <div>
            <h3>Friends</h3>
            <div className={s.friendsContainer}>
                {friends}
            </div>
        </div>
    );
}

export default Friends;