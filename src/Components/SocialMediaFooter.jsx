const SocialMediaFooter = () => {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center myFooter border-top">
            <div className="col-md-4 d-flex align-items-center">
                <a
                    href="/"
                    className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
                    aria-label="Brand"
                >
                    <i className="fas fa-gem fa-lg"></i>
                </a>
                <span className="mb-3 mb-md-0 text-body-secondary">
                    © 2025 Company, Inc
                </span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3">
                    <a className="text-body-secondary" href="#" aria-label="Instagram">
                        <i className="fab fa-instagram fa-lg"></i>
                    </a>
                </li>
                <li className="ms-3">
                    <a className="text-body-secondary" href="#" aria-label="Facebook">
                        <i className="fab fa-facebook-f fa-lg"></i>
                    </a>
                </li>
            </ul>
        </footer>


    );
}

export default SocialMediaFooter