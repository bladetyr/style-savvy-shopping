import './css/NavBar.css';

function NavBar(){
    return(
        <div className="NavBox">
            {/* Nav bar buttons */}
            <ul className="NavButtons">
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
            </ul>
            {/*Right-side logo */}
            <div className="SiteTitle">
                <b><i>Style Savvy</i></b>
                {/*Import link for star */}
                <link href="./css/font-awesome.css" rel="stylesheet"  type='text/css'></link>
                <i className="fa fa-star fa-spin" aria-hidden="true" style={{ color:'#F5C5C5' }}></i>
            </div>
        </div>
    );
}

export default NavBar;