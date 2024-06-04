import Project from "../Components/Project"
import taskly from '../assets/taskly.png'


const Portfolio = () => {



  return (
    <div className="py-20">
        <h2 className="text-4xl text-white text-center">PORTFOLIO</h2>
        <div>
            <Project title={'Taskly'} image={taskly} liveLink={'https://taskly-tasker.netlify.app/'}/>
        </div>
    </div>
  )
}

export default Portfolio