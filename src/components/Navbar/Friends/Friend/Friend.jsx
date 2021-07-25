import s from './Friend.module.css'
const Friend = (props) => {

    return (
        <div>
            <div className={s.container}>
                <img className={s.ava} src={props.avatarLink}/>
                <p>{props.name}</p>
            </div>
        </div>
    );
}

export default Friend;