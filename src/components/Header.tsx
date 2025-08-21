const Header = () => {
    return (
        <div className="header">
            <div className="logo-box">
                <figure>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/DataArt%27s_Logo.png"
                        alt="logo image not found"/> 
                </figure>
                <h1>JavaScript School Timeline 2025</h1>
            </div>
            <div className="theme-toggle-box">
                Theme Toggle:
                <input type="checkbox" name="" />
            </div>
        </div>
    )
};

export default Header; 