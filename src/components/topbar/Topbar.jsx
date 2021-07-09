import './topbar.css'
import { Search, Person,Chat,Notifications } from '@material-ui/icons';
 
export default function Topbar() {
    return(
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">DNSocial</span>
            </div>
            <div className="topbarCenter">
                <div className="searchBar">
                    <Search className="searchIcon" />
                    <input type="text" placeholder="Search for friend, post or video" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <div className="topbar">
                            <Person />
                            <span className="topbarIconBadge">1</span>
                        </div>
                    </div>
                    <div className="topbarIconItem">
                        <div className="topbar">
                            <Chat />
                            <span className="topbarIconBadge">2</span>
                        </div>
                    </div>
                    <div className="topbarIconItem">
                        <div className="topbar">
                            <Notifications />
                            <span className="topbarIconBadge">1</span>
                        </div>
                    </div>
                </div>
                <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
            </div>
        </div>
    )
};