import AppBtn from "../Btn/Btn"
import style from './Post.module.css'

export default function AppContainer() {
    return (
        <section>
            <div className={style.img}></div>
            <div className={style.desc}>
                <h3>
                    Titolo del post
                </h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aut veniam enim velit, aperiam quas placeat consectetur excepturi libero quibusdam incidunt aliquid voluptate cum rerum, aliquam tenetur eum architecto illo.
                </p>
                <AppBtn />
            </div>
        </section>
    )
}