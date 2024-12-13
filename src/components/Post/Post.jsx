import AppBtn from "../Btn/Btn"
import style from './Post.module.css'

const url = '/image/';

export default function Post(props) {
    return (
        <section>
            <img className={style.img} src={`${url}${props.post.image}`} />
            <div className={style.desc}>
                <h3>
                    {props.post.title}
                </h3>
                <p>
                    {props.post.content}
                </p>
                <div>
                    {props.post.tags.map((curTag, index) => {
                        return <div key={index} className={`tag ${style[curTag]}`}>{curTag}</div>
                    })
                    }
                </div>
                <AppBtn />
            </div>
        </section>
    )
}