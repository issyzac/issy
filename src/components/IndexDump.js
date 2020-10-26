import PageHeader from "./Header"
import ResponsiveNav from "./ResponsiveNav";
import { Component } from "react";
import MainContents from "./MainContents";

class IndexDump extends Component {
    render(){
        return (
        <div>
            <ResponsiveNav />
            <div className="site-wrap cfix">
                <div className="site-container">
                    <div className="site-content">
                        <PageHeader />
                        <MainContents />
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
export default IndexDump;