import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./Components/Header"
import FeedbackList from "./Components/FeedbackList"
import FeedbackStats from "./Components/FeedbackStats"

import FeedbackForm from "./Components/FeedbackForm"
import AboutIconLink from './Components/AboutIconLink'
import AboutPage from './Pages/AboutPage'
import { FeedbackProvider } from './Components/Context/FeedbackContext'

function App(){

      return (
        <FeedbackProvider>
       <Router>
            <Header />
            <div className="container">
                <Routes>
                    <Route
                    exact 
                    path='/'
                    element={
                        <>
                        <FeedbackForm  />
                        <FeedbackStats />
                        <FeedbackList  />
                        </>
                    }    
                    ></Route>
                <Route path='/about' element={<AboutPage />} />
              </Routes>
            </div> 
               <AboutIconLink/>
        </Router>
        </FeedbackProvider>
    )
}

// started from video 39
// practiced 42 watched 42

 
export default App

//  creating of components using JavaScript.
// function App(){
//     return React.createElement('div', {className : 'container'}, 
//      React.createElement('h1' , {}, 'Welcome to my App') )
// }


// This is the sample of JSX
    // function App(){
    //     const title = 'Blog post'
    //     const body = 'This is my blog post'
    //     const comments = [
    //         {id : 1 , text : 'Comment One'},
    //         {id : 2 , text : 'Comment Two'},
    //         {id : 3 , text : 'Comment Three'},
    //     ]

    //     const loading = false
    //     const showComments = true

    //     if(loading) return <h1>loading ...</h1>

    //     const CommentBlock = (( <div className="comments">
    //     <h3> comments ({comments.length})</h3>
    //     <ul>
    //         {comments.map((comment , index) => (
    //             <li key={index}> {comment.text}</li>
    //         ))}
    //     </ul>

    // </div> ))

    //     return (
    //     <div>
    //         <h1>{title.toLocaleUpperCase()}</h1>
    //         <p>{body}</p>

    //         {showComments && CommentBlock }

        
    //     </div>
    //     )
    // }


    // export default App