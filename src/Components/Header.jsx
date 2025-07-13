const SocialMediaHeader = () => {
    return (<header>
        <div className="px-3 py-2 bg-dark text-white border-bottom">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a
                        href="/"
                        className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
                    >
                        <i className="fas fa-gem fa-2x me-2"></i>
                    </a>

                    <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                        <li>
                            <a href="#" className="nav-link text-secondary">
                                <i className="fas fa-home d-block mx-auto mb-1"></i>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link text-white">
                                <i className="fas fa-tachometer-alt d-block mx-auto mb-1"></i>
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link text-white">
                                <i className="fas fa-receipt d-block mx-auto mb-1"></i>
                                Orders
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link text-white">
                                <i className="fas fa-box-open d-block mx-auto mb-1"></i>
                                Products
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link text-white">
                                <i className="fas fa-users d-block mx-auto mb-1"></i>
                                Customers
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="px-3 py-2 text-bg-dark border-bottom">
            <div className="container d-flex flex-wrap justify-content-center">
                <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto" role="search">
                    <input
                        type="search"
                        className="form-control"
                        placeholder="Search..."
                        aria-label="Search"
                    />
                </form>
                <div className="text-end">
                    <button type="button" className="btn btn-light text-dark me-2">Login</button>
                    <button type="button" className="btn btn-primary">Sign-up</button>
                </div>
            </div>
        </div>
    </header>
    );
}

export default SocialMediaHeader;