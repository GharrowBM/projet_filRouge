import React from 'react'
import Header from "../components/Header"
import SearchTags from '../components/SearchTags'
import SelectedTags from '../components/SelectedTags'

class Home extends React.PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            baseForums: props.baseForums,
            baseTags: props.baseTags,
            baseUsers: props.baseUsers,
        }
    }

    componentDidMount() {
        console.log(this.state.baseForums);
    }

    render() {
        return (<>
            <Header />
            <div className="tags-area">
                <SelectedTags />
            <SearchTags />
            </div>
            {this.state.baseForums.map((forum,index) => {
                return (
                    <article key={index} className="forum-question">
                        <aside className="forum-counters">
                            <div>{forum.answers} answers</div>
                            <div>{forum.views} views</div>
                        </aside>
                        <section className="forum-question__content">
                            <a href="/"><h2>{forum.posts[0].title} </h2></a>
                            <p>{forum.posts[0].content}</p>
                        </section>
                        <aside className="forum-poster">
                            <p className="forum-poster__asked">Asked : {forum.posts[0].date}</p>
                            <div className="forum-posterinfo">
                                <svg className="forum-poster__avatar" id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 432 354.63" fill="#fff"><ellipse cx="164.42" cy="148.3" rx="22.57" ry="37.61"/><ellipse cx="265.43" cy="148.3" rx="22.57" ry="37.61"/><path d="M465.83,194.54a8.59,8.59,0,0,0-16.74-.42H424a24.18,24.18,0,0,0-15-20.78V160.81H388.63V150.06H371.19a132.76,132.76,0,0,0-241.31,0H111.37v10.75H91v13.61A24.23,24.23,0,0,0,76.2,193H50.56a8.61,8.61,0,1,0,.35,5.38H76a24.17,24.17,0,0,0,15,20.77v12.54h20.41v57A138.63,138.63,0,0,0,250,427.31h0A138.63,138.63,0,0,0,388.63,288.69v-57H409V218.12a24.23,24.23,0,0,0,14.76-18.63h25.64a8.6,8.6,0,0,0,16.39-5ZM250,156.51c58.16,0,105.31,29.83,105.31,66.62S308.16,289.76,250,289.76s-105.31-29.83-105.31-66.63S191.84,156.51,250,156.51ZM250.54,394c-52.68,0-97.27-44.89-112.3-106.78a154,154,0,0,0,224.6,0C347.8,349.11,303.21,394,250.54,394Z" transform="translate(-34 -72.69)"/></svg>
                                <div className="forum-poster__name">{forum.creator}</div>
                            </div>
                        </aside>
                    </article>
                )
            }
            )}
        </>)
    }
}

export default Home