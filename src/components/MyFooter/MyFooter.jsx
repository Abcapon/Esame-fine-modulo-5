import React, { useContext } from "react";

import { Theme } from "../../Contexts/ThemeChanger";

const MyFooter = () => {
	const { isDarkMode } = useContext(Theme);

	return (
		<>
			<footer
				className={`page-footer font-small blue pt-4 ${
					isDarkMode ? "bg-dark text-light" : "bg-light text-dark"
				}`}
			>
				<div className="container-fluid text-center text-md-left">
					<div className="row">
						<div className="col-md-6 mt-md-0 mt-3">
							<h5 className="text-uppercase">EpiBooks</h5>
							<p>Leggere allunga la vita, buona lettura</p>
						</div>

						<hr className="clearfix w-100 d-md-none pb-0" />

						<div className="col-md-3 mb-md-0 mb-3">
							<h5 className="text-uppercase">Links</h5>
							<ul className="list-unstyled">
								<li>
									<a href="#!">Link 1</a>
								</li>
								<li>
									<a href="#!">Link 2</a>
								</li>
								<li>
									<a href="#!">Link 3</a>
								</li>
								<li>
									<a href="#!">Link 4</a>
								</li>
							</ul>
						</div>

						<div className="col-md-3 mb-md-0 mb-3">
							<h5 className="text-uppercase">Links</h5>
							<ul className="list-unstyled">
								<li>
									<a href="#!">Link 1</a>
								</li>
								<li>
									<a href="#!">Link 2</a>
								</li>
								<li>
									<a href="#!">Link 3</a>
								</li>
								<li>
									<a href="#!">Link 4</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="footer-copyright text-center py-3">
					© 2020 Copyright:
					<a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
				</div>
			</footer>
		</>
	);
};

export default MyFooter;
