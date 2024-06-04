// import { useNavigate } from "react-router-dom"


const Project = ({image, title, liveLink, gitLink}) => {

    // const navigate = useNavigate()

  return (
    <div>
        <img src={image} alt="" />
        {/* <button onClick={() => navigate(liveLink)}>Live</button> */}
        <a href={liveLink}>Live</a>
    </div>
  )
}

export default Project