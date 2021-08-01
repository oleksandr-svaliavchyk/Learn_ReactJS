import s from './Avatar.module.css'

const Avatar = (props) => {
    return(
        <div>
            <img className={s.ava} src={props.avatarLink}/>
        </div>
    );
}

export default Avatar;