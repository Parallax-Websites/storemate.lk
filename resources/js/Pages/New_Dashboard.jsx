import React from 'react';
import { Head } from '@inertiajs/react';
import '../../css/dashboard.css';

const New_Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Head title="New Dashboard" />
      <div className="sidebar">
        <div className="logo">StoreMate</div>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Users</li>
            <li>Contacts</li>
            <li>Products</li>
            <li>Inquiry</li>
            <li>Sales</li>
            <li>Sync History</li>
          </ul>
        </nav>
      </div>

      <div className="main-content">
        <header>
          <input type="text" placeholder="Search" />
          <div className="profile">
            <img src="profile-icon.png" alt="Profile" />
          </div>
        </header>

        <section className="stats">
          <div className="enquiry-summary">
            <div className="stat-card blue">
              <span>Total</span>
              <p>Rs 1,000,000</p>
              <div className="progress">100%</div>
            </div>
            <div className="stat-card orange">
              <span>Interested</span>
              <p>Rs 2,000</p>
              <div className="progress">20%</div>
            </div>
            <div className="stat-card green">
              <span>Won</span>
              <p>Rs 7,000</p>
              <div className="progress">70%</div>
            </div>
            <div className="stat-card red">
              <span>Lost</span>
              <p>Rs 1,000</p>
              <div className="progress">10%</div>
            </div>
          </div>

          <div className="sales-summary">
            <div className="stat-card blue">
              <span>Total</span>
              <p>Rs 7,000</p>
              <div className="progress">100%</div>
            </div>
            <div className="stat-card purple">
              <span>Shipped</span>
              <p>Rs 6,500</p>
              <div className="progress">40%</div>
            </div>
            <div className="stat-card green">
              <span>Delivered</span>
              <p>Rs 5,000</p>
              <div className="progress">30%</div>
            </div>
            <div className="stat-card red">
              <span>Failed</span>
              <p>Rs 1,000</p>
              <div className="progress">10%</div>
            </div>
          </div>
        </section>

        <section className="charts">
          <div className="line-chart">
            <h3>Enquiry vs Sales Orders</h3>
            {/* Use a chart library like Chart.js to render this chart */}
          </div>

          <div className="top-cities">
            <h3>Top 10 Cities of Sales Order Count</h3>
            {/* Render a bar chart or data visualization here */}
          </div>

          <div className="enquiry-sources">
            <h3>Enquiries Based on Sources</h3>
            {/* Render pie chart for sources */}
          </div>

          <div className="sales-distribution">
            <h3>Courier Company wise Sales Distribution</h3>
            {/* Render a pie chart for sales distribution */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default New_Dashboard;
