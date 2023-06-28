import React from 'react'

const SignIn = () => {
    return (
        <div className="sign-inup">
            <div className="container d-flex align-items-center justify-content-center form-height-login pt-24px pb-24px">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-10">
                        <div className="card">
                            <div className="card-header bg-primary">
                                <div className="ec-brand">
                                    <a href="index" title="Admin">
                                        <img
                                            className="ec-brand-icon"
                                            src="assets/img/logo/logo-login.png"
                                            alt=""
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="card-body p-5">
                                <h4 className="text-dark mb-5">Sign In</h4>
                                <form action="/">
                                    <div className="row">
                                        <div className="form-group col-md-12 mb-4">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                placeholder="Username"
                                            />
                                        </div>
                                        <div className="form-group col-md-12 ">
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="password"
                                                placeholder="Password"
                                            />
                                        </div>
                                        <div className="col-md-12">
                                            <div className="d-flex my-2 justify-content-between">
                                                <div className="d-inline-block mr-3">
                                                    <div className="control control-checkbox">
                                                        Remember me
                                                        <input type="checkbox" />
                                                        <div className="control-indicator" />
                                                    </div>
                                                </div>
                                                <p>
                                                    <a className="text-blue" href="#">
                                                        Forgot Password?
                                                    </a>
                                                </p>
                                            </div>
                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-block mb-4"
                                            >
                                                Sign In
                                            </button>
                                            <p className="sign-upp">
                                                Don't have an account yet ?
                                                <a className="text-blue" href="sign-up">
                                                    Sign Up
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn