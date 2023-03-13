import { useNavigate } from "react-router-dom"

const Landingpage = (props) => {
    //Destructured the passed props
    const {data} = props;

    //useNavigate hook is used to navigate the page when user is selected and
    //props of the particular user is passed
    const navigate = useNavigate();
    const goToProfilePage = (user) => {
        navigate("/profilepage", {
            state : {
                id : user.id,
                name : user.name,
                profilepicture : user.profilepicture,
                username : user.username,
                email : user.email,
                phone : user.phone,
                website : user.website,
                companyname : user.company.name,
                catchphrase : user.company.catchPhrase,
                bs : user.company.bs,
                street : user.address.street,
                suite : user.address.suite,
                city : user.address.city,
                zipcode : user.address.zipcode,
                lat : user.address.geo.lat,
                lng : user.address.geo.lng
            }});
      };

    return (
        //svg is used for background wave graphics
        <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="wave"
                viewBox="0 0 1440 320"
            >
            <path
            fill="#5000ca"
            fill-opacity="1.5"
            d="M0,96L40,117.3C80,139,160,181,240,181.3C320,181,400,139,480,149.3C560,160,640,224,720,213.3C800,203,880,117,960,117.3C1040,117,1120,203,1200,224C1280,245,1360,203,1400,181.3L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            />
            </svg>
            <div className="outer-card">
                <h3>Select an account</h3>
                <div className="inner-card">
                {data?.users?.map((user) => {
                    // profile pic and name of each user is displayed on the card with help of map function
                    return(
                        <div
                            className="users"
                            onClick={()=>{
                                goToProfilePage(user);
                            }}
                            style={{cursor:'pointer'}}
                            aria-label="On Click">
                            <img className="propic" src={user.profilepicture} alt={user.name}/>
                            <h5 className="usernames">{user.name}</h5>
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
        )
  }

  export default Landingpage;