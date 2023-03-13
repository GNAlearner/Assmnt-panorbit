import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaAngleRight } from 'react-icons/fa';
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { BsChatRight } from 'react-icons/bs';
import { BsFillCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom"

const Profilepage = (props) => {

    //Destructured the passed props
    const {data} = props;

    //useLocation hook is used for catching props from previous page and assign it to data
    const loggedinuser = useLocation();

    //useState hook is used to set the state of the navigation buttons on profile page
    const [ nav, setNav] = useState("Profile");

    //Two styles are defined as one needed for selected option of nav and other for other unselected options
    const Styles = {
        Active : {
            color: 'white',
            fontWeight: 'bold'
        },
        Inactive : {
            color: 'tan',
            fontWeight: 'normal',
            cursor:'pointer'
        }
    }

    //useState hook is used for enlarging the chatbox when clicked
    const [ showChat, setShowChat ] = useState(false);

    //This will change the state on clicking
    const Changechat = (e) => {
        setShowChat(!showChat);
    }

    //useState hook is used for showing users in status tab in top right
    const [ showUsers, setShowUsers ] = useState(false);

    const Changeshow = (e) => {
        setShowUsers(!showUsers);
    }

    //useNavigate is used to signout from the profilepage to landingpage
    const Homescreen = useNavigate();
    const Signout = () => {
        Homescreen("/");
    };

    //To Change user when clicked on other users in top status bar
    const Changeuser = (user) => {
        loggedinuser.state = {
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
            }
    }

    //This component is used to rembed googlemap in profilepage
    const Googlemap = () => {
        useEffect(() => {
            const iframeData = document.getElementById("iframe")
            iframeData.src=`https://maps.google.com/maps?q=${+loggedinuser.state.lat},${+loggedinuser.state.lng}&h1=es;&output=embed`
        }, [])
        return(
            <iframe
                    title="userLocation"
                    id="iframe"
                    width="800vw"
                    height="280vw"
                    >
            </iframe>
        )
    }

    //Details are shown in the page which depends on the state of nav that user clicked on side nav bar
    const Details = () => {
        if(nav === "Profile")
        return(
            <div className="de">
                <div className="de-first">
                    <div>
                        <img className="de-propic" src={loggedinuser.state.profilepicture} alt="de-propic"/>
                        <h4 className="de-name" >{loggedinuser.state.name}</h4>
                        <article className="de-text">
                            <div className="de-text-first">
                                <h5>Username : </h5>
                                <h5>e-mail : </h5>
                                <h5>Phone : </h5>
                                <h5>Website :</h5>
                            </div>
                            <div className="de-text-second">
                                <h5>{loggedinuser.state.username}</h5>
                                <h5>{loggedinuser.state.email}</h5>
                                <h5>{loggedinuser.state.phone}</h5>
                                <h5>{loggedinuser.state.website}</h5>
                            </div>
                        </article>
                        <h4 className="company">Company</h4>
                        <article className="de-company">
                            <div className="de-company-first">
                                <h5>Name : </h5>
                                <h5>catchphrase : </h5>
                                <h5 className="bs">bs : </h5>
                            </div>
                            <div className="de-company-second">
                                <h5>{loggedinuser.state.companyname}</h5>
                                <h5>{loggedinuser.state.catchphrase}</h5>
                                <h5>{loggedinuser.state.bs}</h5>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="de-second">
                    <h4 className="addr">Address :</h4>
                    <div className="addr-text">
                        <div className="addr-text-first">
                            <h5>Street :</h5>
                            <h5>Suite :</h5>
                            <h5>City :</h5>
                            <h5>Zipcode :</h5>
                        </div>
                        <div className="addr-text-second">
                            <h5>{loggedinuser.state.street}</h5>
                            <h5>{loggedinuser.state.suite}</h5>
                            <h5>{loggedinuser.state.city}</h5>
                            <h5>{loggedinuser.state.zipcode}</h5>
                        </div>
                    </div>
                    <div className="map">
                    <Googlemap/>
                    </div>
                    <div className="coordinates">
                            <p>Lat:</p>
                            <p style={{marginLeft: "1vw", fontWeight: "bold"}}>{loggedinuser.state.lat}</p>
                            <p style={{marginLeft: "2vw"}}>Long:</p>
                            <p style={{marginLeft: "1vw", fontWeight: "bold"}}>{loggedinuser.state.lng}</p>
                    </div>
                </div>
            </div>
        )
        else
        return(
            <div className="soon">
                <h1>Coming Soon</h1>
            </div>
        )
    }

    //Pointer component is used for pointing the nav bar option which is selected
    const Pointer = () => {
        if(nav === "Profile")
        return(
            <div style={{marginTop: "23vw"}} className="pointer">
                <div className="arrow">
                <FaAngleRight/>
                </div>
            </div>
        )
        else if(nav === "Posts")
        return(
            <div style={{marginTop: "26.75vw"}} className="pointer">
                <div className="arrow">
                <FaAngleRight/>
                </div>
            </div>
        )
        else if(nav === "Gallery")
        return(
            <div style={{marginTop: "30.5vw"}} className="pointer">
                <div className="arrow">
                <FaAngleRight/>
                </div>
            </div>
        )
        else
        return(
            <div style={{marginTop: "34.15vw"}} className="pointer">
                <div className="arrow">
                <FaAngleRight/>
                </div>
            </div>
        )
    };

    return(
        //Entire profile page is designed in below container which is responsive
        <section className="container">
            <section className="side">
                <section className="navbar">
                    <ul>
                        <li value="Profile" onClick={() => setNav("Profile")} style={nav === "Profile" ? Styles.Active : Styles.Inactive }>Profile</li>
                        <li value="Posts" onClick={() => setNav("Posts")} style={nav === "Posts" ? Styles.Active : Styles.Inactive }>Posts</li>
                        <li value="Gallery" onClick={() => setNav("Gallery")} style={nav === "Gallery" ? Styles.Active : Styles.Inactive }>Gallery</li>
                        <li value="ToDo" className="todo" onClick={() => setNav("ToDo")} style={nav === "ToDo" ? Styles.Active : Styles.Inactive }>ToDo</li>
                    </ul>
                </section>
                <Pointer/>
            </section>
            <section className="top">
                <div className="top-section">
                    <div className="nav-heading">
                        <h1>{nav}</h1>
                    </div>
                    <div
                        className="statusbar" style={{cursor:'pointer'}} onClick={Changeshow}>
                        <img className="st-propic"src={loggedinuser.state.profilepicture} alt="loggedinpropic"/>
                        <p className="user-top-name">{loggedinuser.state.name}</p>
                    </div>
                </div>
            </section>
            <section className="content">
                <Details/>
            </section>
            {!showChat && <div className="chatbox" onClick={Changechat}>
                            <span><BsChatRight/></span>
                            <span> Chats</span>
                            <span className="chatpoint"><FaAngleUp/></span>
                        </div>
            }
            { showChat && <div>
                            <div className="chatbox" style={{bottom: "8vw"}} onClick={Changechat}>
                                <span><BsChatRight/></span>
                                <span> Chats</span>
                                <span className="chatpoint"><FaAngleDown/></span>
                            </div>
                            <div className="chatcard" onClick={Changechat}>
                            {data?.users?.map((user) => {
                                if(loggedinuser.state.id !== user.id)
                                return(
                                <div className="userslist"
                                        onClick={()=>{
                                            Changeuser(user);
                                        }}>
                                    <img className="propic" src={user.profilepicture} alt={user.name}/>
                                    <h5 className="usernames-st-ch">{user.name}</h5>
                                    <span className="offline"><BsFillCircleFill/></span>
                                </div>
                            )
                            else
                            return(null);
                            })}
                            </div>
                        </div>
            }
            { nav === "Profile" && showUsers && <div className="switchuser">
                <img className="user-propic"src={loggedinuser.state.profilepicture} alt="loggedinpropic"/>
                <h5>{loggedinuser.state.name}</h5>
                <h6>{loggedinuser.state.email}</h6>
                <div className="userslist-box">
                {data?.users?.map((user) => {
                    // for showing other users in status bar to easily switch between users
                        if(loggedinuser.state.id !== user.id)
                        return(
                        <div className="userslist">
                                <img className="propic" src={user.profilepicture} alt={user.name}/>
                                <h5 className="usernames-st-ch">{user.name}</h5>
                                </div>
                        )
                        else
                        return(null);
                })}
                </div>
                <button onClick={Signout} className="signout">Sign out</button>
            </div>
            }
        </section>
    )
}

export default Profilepage;