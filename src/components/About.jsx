import { Component } from "react";
import { Outlet } from "react-router-dom";

class About extends Component {

    // To set props first always constructor runs first this is a fixed syntax for uusing the first we have to set the props
    // constructor(props) {
    //     super(props);
    //     console.log("Constructor")
    // }

    // componentDidMount() {
    //     console.log("Component did mount")
    // }

    render() {
        return (
            <>
                <div className="sm:flex items-center h-[100vh]" style={{ backgroundColor: '#3d3d3d' }} >
                    <div className="sm:w-1/2 p-10">
                        <div className="image object-center text-center">
                            <img src="https://i.imgur.com/WbQnbas.png" />
                        </div>
                    </div>
                    <div className="sm:w-1/2 p-5">
                        <div className="text">
                            <span className="text-white border-b-2 border-indigo-600 uppercase">About us</span>
                            <h2 className="my-4 font-bold text-3xl  sm:text-4xl text-white">About <span className="text-indigo-600">Our Company</span>
                            </h2>
                            <p className="text-white">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi
                                doloremque, fugiat illum magni minus nisi nulla numquam obcaecati placeat quia, repellat tempore
                                voluptatum.
                            </p>
                        </div>
                    </div>
                </div>
                {/* <Outlet /> */}
            </>
        )
    }
}

export default About;