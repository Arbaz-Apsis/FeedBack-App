import Card from '../Components/Shared/Card'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About this project</h1>
            <p>This is a React App to leave feedback for a product or service</p>
            <p>Version: 1.0.0</p>
        </div>
        <Link to="/">Back to home</Link >
    </Card>
  )
}

export default AboutPage
