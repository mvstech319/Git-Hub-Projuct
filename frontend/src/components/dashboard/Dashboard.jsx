import React, { useState } from "react";
import "./Dashboard.css"; // Import the CSS file
import { Client } from "../client/Client";
import { Users } from "../user/Users";
import { Hero } from "../hero/Hero";
import { Product } from "../product/product";



export const Dashboard=()=> {
    const [currentView, setCurrentView] = useState("Home");

    const handleMenuClick = (view) => {
        setCurrentView(view);
    };

    const renderContent = () => {
        switch (currentView) {
            case "Settings":
                return <div>Settings Content</div>;
            case"Product":
                return<div><Product/></div>
            case "Client":
                return <div><Client/></div>;
            case "Users":
                return <div><Users/></div>;
            case "Hero":
                    return <div><Hero/></div>;       
            default:
                return <div><Hero/></div>;
        }
    };

    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <div className="sidebar">
                <h3>Sidebar Menu</h3>
                <ul>
                    <li onClick={() => handleMenuClick("Hero")}>Dashbaord</li>
                    <li onClick={() => handleMenuClick("Users")}>Users</li>
                    <li onClick={() => handleMenuClick("Client")}>Clients</li>
                    <li onClick={() => handleMenuClick("Product")}>Product</li>
                    <li onClick={() => handleMenuClick("Settings")}>Settings</li>
                </ul>
            </div>

            {/* Main Dashboard Area */}
            <div className="main-content">
                {/* Header */}
                <header className="header">
                    <div className="profile-section">
                        <img
                            src="https://via.placeholder.com/40"
                            alt="Profile"
                            className="profile-picture"
                        />
                        <span className="profile-name">John Doe</span>
                    </div>
                    <h2 className="view-title"> Dashboard</h2>
                </header>

              
                <main className="content">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
}

export default Dashboard;
