import Post from '../Post/Post'
import './AppMain.module.css'
import arrayPost from '../../data/post'

function setPost(array) {
    return array.map(curPost => {
        return (curPost.published && <Post key={curPost.id} post={curPost} />)
    })
}


export default function AppMain() {
    return (
        <main>
            <h2>Il mio blog</h2>
            {setPost(arrayPost)}
        </main>
    )
}