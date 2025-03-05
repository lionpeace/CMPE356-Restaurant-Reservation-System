import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from "../../../Shared/Promotion/Header"; 
import Footer from "../../../Shared/Promotion/Footer";


/*npm install @fortawesome/fontawesome-free*/


const FeaturesComponent = () => {
    return (
        <>
            <Header></Header>
            <section className="features-section">
                <div className="features-container">
                <h2 className="section-title">
                <span>Rezal</span> Reservation System Essential Features
                </h2>
                    <p className="section-subtitle">Everything you need to manage your reservations efficiently.</p>
                    <div className="features-grid">
                        <div className="feature-item">
                            <img src="images/foto1.png" alt="Feature 1" />
                            <h3>Easy Online Reservations</h3>
                            <p>Allow customers to book a table anytime with a seamless online experience.</p>
                        </div>
                        <div className="feature-item">
                            <img src="images/foto2.png" alt="Feature 2" />
                            <h3>Real-time Availability</h3>
                            <p>Keep track of your tables with up-to-the-minute updates.</p>
                        </div>
                        <div className="feature-item">
                            <img src="images/foto3.jpg" alt="Feature 3" />
                            <h3>Automated Confirmations</h3>
                            <p>Send instant booking confirmations and reminders to reduce no-shows.</p>
                        </div>
                        <div className="feature-item">
                            <img src="images/foto4.webp" alt="Feature 4" />
                            <h3>Customer Insights</h3>
                            <p>Gain valuable data on customer preferences and behaviors.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="integration-section">
    <div className="features-container">
        <h2 className="section-title">Online reservation widget integrations</h2>
        <p className="section-subtitle">
            Get more reservations by allowing your clients to book online from any marketing tools
            your business uses. Seamless integration without any technical knowledge.
        </p>
        <div className="integration-table">
            <div className="integration-row">
                <span>Google Business Link integration</span> <i className="fas fa-check"></i>
            </div>
            <div className="integration-row">
                <span>Reserve with Google integration</span> <i className="fas fa-check"></i>
            </div>
            <div className="integration-row">
                <span>Facebook integration <i className="fas fa-info-circle"></i></span> <i className="fas fa-check"></i>
            </div>
            <div className="integration-row">
                <span>Instagram integration <i className="fas fa-info-circle"></i></span> <i className="fas fa-check"></i>
            </div>
            <div className="integration-row">
                <span>Michelin guide integration <i className="fas fa-info-circle"></i></span> <i className="fas fa-check"></i>
            </div>
            <div className="integration-row">
                <span>WordPress integration</span> <i className="fas fa-check"></i>
            </div>
            <div className="integration-row">
                <span>Squarespace integration</span> <i className="fas fa-check"></i>
            </div>
            <div className="integration-row">
                <span>Wix page integration</span> <i className="fas fa-check"></i>
            </div>
            <div className="integration-row">
                <span>Webflow integration</span> <i className="fas fa-check"></i>
            </div>
            <div className="integration-row">
                <span>Hostinger integration</span> <i className="fas fa-check"></i>
            </div>
            <div className="integration-row">
                <span>Compatible with all page builders</span> <i className="fas fa-check"></i>
            </div>
            <div className="integration-row">
                <span>HTML code-based widget</span> <i className="fas fa-check"></i>
            </div>
            <div className="integration-row">
                <span>Active link with clear booking policy</span> <i className="fas fa-check"></i>
            </div>
        </div>
    </div>
</section>
<section className="customization-section">
    <div className="features-container">
        <h2 className="section-title">Online reservation widget customization</h2>
        <p className="section-subtitle">
            Customize online widget to match your brand. Use predesigned styles, sizes and colors
            of your widget. Personalize data fields for your clients' needs.
        </p>
        <div className="customization-table">
            <div className="customization-row">
                <span>Four widget designs</span> <i className="fas fa-check"></i>
            </div>
            <div className="customization-row">
                <span>Dark and light widget styles</span> <i className="fas fa-check"></i>
            </div>
            <div className="customization-row">
                <span>Your brand's accent colours for widget</span> <i className="fas fa-check"></i>
            </div>
            <div className="customization-row">
                <span>Optional fields: gift voucher, discount code, food allergies, etc.</span> <i className="fas fa-check"></i>
            </div>
            <div className="customization-row">
                <span>Quick tags for special requirements like wheelchair, high chair, anniversary, etc.</span> <i className="fas fa-check"></i>
            </div>
            <div className="customization-row">
                <span>Separated adults and children fields</span> <span className="coming-soon">Coming soon</span>
            </div>
            <div className="customization-row">
                <span>Option to allow guests to modify reservations</span> <i className="fas fa-check"></i>
            </div>
            <div className="customization-row">
                <span>Optional restaurant email newsletter Opt-in field</span> <i className="fas fa-check"></i>
            </div>
            <div className="customization-row">
                <span>Optional showing availability in each dining area</span> <i className="fas fa-check"></i>
            </div>
            <div className="customization-row">
                <span>Widget for multiple locations</span> <i className="fas fa-check"></i>
            </div>
            <div className="customization-row">
                <span>Multi-language widget</span> <i className="fas fa-check"></i>
            </div>
        </div>
    </div>
</section>
<section className="features-widget-section">
    <div className="features-container">
        <h2 className="section-title">Online reservation widget features</h2>
        <p className="section-subtitle">
            Accepting table reservations online helps you save time, grow your client database and
            allows your clients to feel more comfortable. Stay ahead of your competitors!
        </p>
        <div className="features-widget-table">
            <div className="features-widget-row">
                <span>Automatic or manual reservation confirmation</span> <i className="fas fa-check"></i>
            </div>
            <div className="features-widget-row">
                <span>Live availability check</span> <i className="fas fa-check"></i>
            </div>
            <div className="features-widget-row">
                <span>Availability control by time slot or total guests per day</span> <i className="fas fa-check"></i>
            </div>
            <div className="features-widget-row">
                <span>Optional floor and dining area selection</span> <i className="fas fa-check"></i>
            </div>
            <div className="features-widget-row">
                <span>Custom message for group reservations</span> <i className="fas fa-check"></i>
            </div>
            <div className="features-widget-row">
                <span>Custom message when online reservations are blocked</span> <i className="fas fa-check"></i>
            </div>
            <div className="features-widget-row">
                <span>Widget time preferences</span> <i className="fas fa-check"></i>
            </div>
            <div className="features-widget-row">
                <span>Instant payments or deposits</span> <i className="fas fa-check"></i>
            </div>
            <div className="features-widget-row">
                <span>Saving card details</span> <i className="fas fa-check"></i>
            </div>
            <div className="features-widget-row">
                <span>Events, offers, discounts and more</span> <i className="fas fa-check"></i>
            </div>
            <div className="features-widget-row">
                <span>Join the waiting list <i className="fas fa-info-circle"></i></span> <i className="fas fa-check"></i>
            </div>
        </div>
    </div>
</section>
<section className="management-section">
    <div className="features-container">
        <h2 className="section-title">Reservation management features</h2>
        <p className="section-subtitle">
            Experience seamless operation with our user-friendly system—smooth and effortlessly
            managed for optimal efficiency.
        </p>
        <div className="management-table">
            <div className="management-row">
                <span>Reservation calendar view</span> <i className="fas fa-check"></i>
            </div>
            <div className="management-row">
                <span>Reservation list view</span> <i className="fas fa-check"></i>
            </div>
            <div className="management-row">
                <span>Visual floor plan view</span> <i className="fas fa-check"></i>
            </div>
            <div className="management-row">
                <span>Light/Dark theme toggle</span> <i className="fas fa-check"></i>
            </div>
            <div className="management-row">
                <span>Advanced reservation window</span> <i className="fas fa-check"></i>
            </div>
            <div className="management-row">
                <span>Modified reservation window for events</span> <span className="coming-soon">Coming soon</span>
            </div>
            <div className="management-row">
                <span>Feedback overview with reply option</span> <span className="coming-soon">Coming soon</span>
            </div>
            <div className="management-row">
                <span>Table locking functionality</span> <i className="fas fa-check"></i>
            </div>
            <div className="management-row">
                <span>Reservations & guests history</span> <i className="fas fa-check"></i>
            </div>
            <div className="management-row">
                <span>Advanced reservation search</span> <i className="fas fa-check"></i>
            </div>
            <div className="management-row">
                <span>Reservation filtering tool</span> <i className="fas fa-check"></i>
            </div>
            <div className="management-row">
                <span>Reservation tags & notes</span> <i className="fas fa-check"></i>
            </div>
            <div className="management-row">
                <span>File uploads for reservation</span> <i className="fas fa-check"></i>
            </div>
            <div className="management-row">
                <span>Export & print reservations</span> <i className="fas fa-check"></i>
            </div>
            <div className="management-row">
                <span>Special daily notes for team</span> <i className="fas fa-check"></i>
            </div>
            <div className="management-row">
                <span>Quick actions tools</span> <i className="fas fa-check"></i>
            </div>
            <div className="management-row">
                <span>All-Channel statistics</span> <span className="coming-soon">Coming soon</span>
            </div>
            <div className="management-row">
                <span>Guests CRM system</span> <span className="coming-soon">Coming soon</span>
            </div>
            <div className="management-row">
                <span>Export & print guest database</span> <i className="fas fa-check"></i>
            </div>
            <div className="management-row">
                <span>Guest categories: VIP, critics, special, etc.</span> <i className="fas fa-check"></i>
            </div>
            <div className="management-row">
                <span>Guest tags</span> <i className="fas fa-check"></i>
            </div>
            <div className="management-row">
                <span>Personalized guest information</span> <span className="coming-soon">Coming soon</span>
            </div>
            <div className="management-row">
                <span>Guest blacklisting</span> <i className="fas fa-check"></i>
            </div>
            <div className="management-row">
                <span>System mobile app <i className="fas fa-info-circle"></i></span> <i className="fas fa-check"></i>
            </div>
            <div className="management-row">
                <span>System offline version</span> <i className="fas fa-check"></i>
            </div>
            <div className="management-row">
                <span>Quick-entry web-based system</span> <i className="fas fa-check"></i>
            </div>
        </div>
    </div>
</section>
<section className="table-time-section">
    <div className="features-container">
        <h2 className="section-title">Table and time management features</h2>
        <p className="section-subtitle">
            In just a matter of minutes, you will have effortlessly arranged your dining spaces,
            tables, and personalised preferences to get maximum from your restaurant.
        </p>
        <div className="table-time-table">
            <div className="table-time-row">
                <span>Separated layouts for floor plan and calendar</span> <i className="fas fa-check"></i>
            </div>
            <div className="table-time-row">
                <span>Unlimited dining areas</span> <i className="fas fa-check"></i>
            </div>
            <div className="table-time-row">
                <span>Quick floor layout creation</span> <i className="fas fa-check"></i>
            </div>
            <div className="table-time-row">
                <span>Dining area availability control</span> <i className="fas fa-check"></i>
            </div>
            <div className="table-time-row">
                <span>Easy table joining option</span> <i className="fas fa-check"></i>
            </div>
            <div className="table-time-row">
                <span>Easy customized opening hours</span> <i className="fas fa-check"></i>
            </div>
            <div className="table-time-row">
                <span>Custom online reservation times by each area</span> <i className="fas fa-check"></i>
            </div>
            <div className="table-time-row">
                <span>Quick disable tool for online booking</span> <i className="fas fa-check"></i>
            </div>
            <div className="table-time-row">
                <span>Customized hours by layout/floor plan</span> <i className="fas fa-check"></i>
            </div>
            <div className="table-time-row">
                <span>Maximum guests allowed daily limit</span> <span className="coming-soon">Coming soon</span>
            </div>
        </div>
    </div>
</section>
<section className="sms-email-section">
    <div className="features-container">
        <h2 className="section-title">SMS and email notification features</h2>
        <p className="section-subtitle">
            Instantly inform clients and staff with real-time notifications – keeping everyone in the 
            loop effortlessly.
        </p>
        <div className="sms-email-table">
            <div className="sms-email-row">
                <span>Real-Time reservation notifications center</span> <span className="coming-soon">Coming soon</span>
            </div>
            <div className="sms-email-row">
                <span>Staff updates via email and SMS</span> <i className="fas fa-check"></i>
            </div>
            <div className="sms-email-row">
                <span>Customisable notification templates</span> <i className="fas fa-check"></i>
            </div>
            <div className="sms-email-row">
                <span>Automatic email/SMS confirmation</span> <i className="fas fa-check"></i>
            </div>
            <div className="sms-email-row">
                <span>Automatic email/SMS reminder</span> <i className="fas fa-check"></i>
            </div>
            <div className="sms-email-row">
                <span>Automatic email/SMS feedback</span> <i className="fas fa-check"></i>
            </div>
            <div className="sms-email-row">
                <span>5-Star rating request email</span> <span className="coming-soon">Coming soon</span>
            </div>
            <div className="sms-email-row">
                <span>Awaiting reservation approval notifications</span> <i className="fas fa-check"></i>
            </div>
            <div className="sms-email-row">
                <span>Automatic cancellation email</span> <i className="fas fa-check"></i>
            </div>
            <div className="sms-email-row">
                <span>Modify reservation: optional edit link</span> <i className="fas fa-check"></i>
            </div>
            <div className="sms-email-row">
                <span>Payment request email for confirmation</span> <i className="fas fa-check"></i>
            </div>
            <div className="sms-email-row">
                <span>Joined waiting list notification</span> <i className="fas fa-check"></i>
            </div>
            <div className="sms-email-row">
                <span>Table is ready SMS</span> <i className="fas fa-check"></i>
            </div>
            <div className="sms-email-row">
                <span>No show reservation SMS</span> <i className="fas fa-check"></i>
            </div>
            <div className="sms-email-row">
                <span>Personalized banner ads in emails</span> <i className="fas fa-check"></i>
            </div>
        </div>
    </div>
</section>
<section className="account-management-section">
    <div className="features-container">
        <h2 className="section-title">Account management features</h2>
        <p className="section-subtitle">
            Tailor your experience with custom accounts and explore a variety of restaurant options effortlessly.
        </p>
        <div className="account-management-table">
            <div className="account-management-row">
                <span>Multi-restaurant access</span> <i className="fas fa-check"></i>
            </div>
            <div className="account-management-row">
                <span>Unlimited team members</span> <i className="fas fa-check"></i>
            </div>
            <div className="account-management-row">
                <span>Custom users permissions</span> <i className="fas fa-check"></i>
            </div>
            <div className="account-management-row">
                <span>View-only user account</span> <i className="fas fa-check"></i>
            </div>
            <div className="account-management-row">
                <span>Team-friendly user account with separated names</span> <i className="fas fa-check"></i>
            </div>
            <div className="account-management-row">
                <span>2D code authentication</span> <i className="fas fa-check"></i>
            </div>
            <div className="account-management-row">
                <span>Modification tracking for reservations</span> <i className="fas fa-check"></i>
            </div>
        </div>
    </div>
</section>
<section className="report-analytics-section">
    <div className="features-container">
        <h2 className="section-title">Report and analytics features</h2>
        <p className="section-subtitle">
            Fuel your business growth with insightful reports from our table reservation system, 
            providing valuable analytics for strategic decision-making.
        </p>
        <div className="report-analytics-table">
            <div className="report-analytics-row">
                <span>Reporting dashboards</span> <i className="fas fa-check"></i>
            </div>
            <div className="report-analytics-row">
                <span>Daily overview summary</span> <span className="coming-soon">Coming soon</span>
            </div>
            <div className="report-analytics-row">
                <span>Strategic multi-channel marketing</span> <span className="coming-soon">Coming soon</span>
            </div>
            <div className="report-analytics-row">
                <span>Filtered data reports</span> <i className="fas fa-check"></i>
            </div>
            <div className="report-analytics-row">
                <span>Booking trends by hour</span> <i className="fas fa-check"></i>
            </div>
            <div className="report-analytics-row">
                <span>Performance metrics</span> <i className="fas fa-check"></i>
            </div>
            <div className="report-analytics-row">
                <span>International guest analysis</span> <span className="coming-soon">Coming soon</span>
            </div>
            <div className="report-analytics-row">
                <span>Guestbook metrics and filters</span> <i className="fas fa-check"></i>
            </div>
            <div className="report-analytics-row">
                <span>Customizable reservations view and metrics</span> <span className="coming-soon">Coming soon</span>
            </div>
            <div className="report-analytics-row">
                <span>Feedback analytics and filters</span> <span className="coming-soon">Coming soon</span>
            </div>
        </div>
    </div>
</section>
<section className="sales-marketing-section">
    <div className="features-container">
        <h2 className="section-title">Sales and marketing features</h2>
        <p className="section-subtitle">
            Unlock the power of free marketing tools within our table reservation system, 
            boosting your restaurant's visibility and attracting more diners.
        </p>
        <div className="sales-marketing-table">
            <div className="sales-marketing-row">
                <span>Promotional experiences</span> <i className="fas fa-check"></i>
            </div>
            <div className="sales-marketing-row">
                <span>Exclusive special offers and deals</span> <i className="fas fa-check"></i>
            </div>
            <div className="sales-marketing-row">
                <span>Events management</span> <i className="fas fa-check"></i>
            </div>
            <div className="sales-marketing-row">
                <span>Full guest CRM</span> <i className="fas fa-check"></i>
            </div>
            <div className="sales-marketing-row">
                <span>Guest segmentation and targeting</span> <i className="fas fa-check"></i>
            </div>
            <div className="sales-marketing-row">
                <span>Customer reviews and feedback</span> <i className="fas fa-check"></i>
            </div>
            <div className="sales-marketing-row">
                <span>Automatic 5-star email request</span> <span className="coming-soon">Coming soon</span>
            </div>
            <div className="sales-marketing-row">
                <span>Social media integration</span> <i className="fas fa-check"></i>
            </div>
            <div className="sales-marketing-row">
                <span>Restaurant landing page</span> <i className="fas fa-check"></i>
            </div>
            <div className="sales-marketing-row">
                <span>Email marketing integration</span> <i className="fas fa-check"></i>
            </div>
            <div className="sales-marketing-row">
                <span>Email banners with active links</span> <i className="fas fa-check"></i>
            </div>
            <div className="sales-marketing-row">
                <span>Booking platforms <i className="fas fa-info-circle"></i></span> <i className="fas fa-check"></i>
            </div>
            <div className="sales-marketing-row">
                <span>Stripe integration</span> <i className="fas fa-check"></i>
            </div>
            <div className="sales-marketing-row">
                <span>PayPal integration</span> <i className="fas fa-check"></i>
            </div>
            <div className="sales-marketing-row">
                <span>Paysera integration</span> <i className="fas fa-check"></i>
            </div>
            <div className="sales-marketing-row">
                <span>Viva Wallet integration</span> <i className="fas fa-check"></i>
            </div>
        </div>
    </div>
</section>
<section className="website-menu-section">
    <div className="features-container">
        <h2 className="section-title">Website and menu builder</h2>
        <p className="section-subtitle">
            Create stunning website and menus effortlessly. Boost your online visibility and attract 
            customers with SEO and social media tools. Stay agile with quick updates.
        </p>
        <div className="website-menu-table">
            <div className="website-menu-row">
                <span>Simple editing tools</span> <i className="fas fa-check"></i>
            </div>
            <div className="website-menu-row">
                <span>Responsive mobile-friendly design</span> <i className="fas fa-check"></i>
            </div>
            <div className="website-menu-row">
                <span>Integrated reservation widget</span> <i className="fas fa-check"></i>
            </div>
            <div className="website-menu-row">
                <span>Image gallery</span> <i className="fas fa-check"></i>
            </div>
            <div className="website-menu-row">
                <span>Restaurant features overview</span> <i className="fas fa-check"></i>
            </div>
            <div className="website-menu-row">
                <span>ON/OFF feedback rating and reviews</span> <i className="fas fa-check"></i>
            </div>
            <div className="website-menu-row">
                <span>Public reply functionality</span> <span className="coming-soon">Coming soon</span>
            </div>
            <div className="website-menu-row">
                <span>Automatic Multi-language pages</span> <i className="fas fa-check"></i>
            </div>
            <div className="website-menu-row">
                <span>Automatic contact information and hours</span> <i className="fas fa-check"></i>
            </div>
            <div className="website-menu-row">
                <span>Restaurant experiences and events section</span> <span className="coming-soon">Coming soon</span>
            </div>
            <div className="website-menu-row">
                <span>SEO Optimization</span> <i className="fas fa-check"></i>
            </div>
            <div className="website-menu-row">
                <span>Preview Mode</span> <i className="fas fa-check"></i>
            </div>
            <div className="website-menu-row">
                <span>One-Click publishing</span> <i className="fas fa-check"></i>
            </div>
            <div className="website-menu-row">
                <span>Social media integration</span> <i className="fas fa-check"></i>
            </div>
            <div className="website-menu-row">
                <span>Visual menu with images</span> <span className="coming-soon">Coming soon</span>
            </div>
            <div className="website-menu-row">
                <span>Dynamic QR code generation for menus</span> <span className="coming-soon">Coming soon</span>
            </div>
            <div className="website-menu-row">
                <span>A La Carte menu editor</span> <span className="coming-soon">Coming soon</span>
            </div>
            <div className="website-menu-row">
                <span>Degustation Menu editor</span> <span className="coming-soon">Coming soon</span>
            </div>
            <div className="website-menu-row">
                <span>AI integration (Artificial intelligence systems)</span> <span className="coming-soon">Coming soon</span>
            </div>
            <div className="website-menu-row">
                <span>Online ordering integration</span> <span className="coming-soon">Coming soon</span>
            </div>
        </div>
    </div>
</section>
<section className="integrations-section">
    <div className="features-container">
        <h2 className="section-title">Integrations</h2>
        <p className="section-subtitle">
            Maximize efficiency and expand functionality by seamlessly integrating third-party 
            tools and services.
        </p>
        <div className="integrations-table">
            <div className="integrations-row">
                <span>Google Business Link</span> <i className="fas fa-check"></i>
            </div>
            <div className="integrations-row">
                <span>Google "Reserve" button</span> <i className="fas fa-check"></i>
            </div>
            <div className="integrations-row">
                <span>Facebook integration</span> <i className="fas fa-check"></i>
            </div>
            <div className="integrations-row">
                <span>Instagram integration</span> <i className="fas fa-check"></i>
            </div>
            <div className="integrations-row">
                <span>Michelin Guide integration</span> <i className="fas fa-check"></i>
            </div>
            <div className="integrations-row">
                <span>Viva Wallet integration</span> <i className="fas fa-check"></i>
            </div>
            <div className="integrations-row">
                <span>Stripe integration</span> <i className="fas fa-check"></i>
            </div>
            <div className="integrations-row">
                <span>PayPal integration</span> <i className="fas fa-check"></i>
            </div>
            <div className="integrations-row">
                <span>Redsys integration</span> <i className="fas fa-check"></i>
            </div>
            <div className="integrations-row">
                <span>PayPal express integration</span> <i className="fas fa-check"></i>
            </div>
            <div className="integrations-row">
                <span>Mailchimp integration</span> <i className="fas fa-check"></i>
            </div>
            <div className="integrations-row">
                <span>MailerLite integration</span> <i className="fas fa-check"></i>
            </div>
            <div className="integrations-row">
                <span>Zapier integration</span> <i className="fas fa-check"></i>
            </div>
            <div className="integrations-row">
                <span>AI integration (Artificial intelligence systems)</span> <span className="coming-soon">Coming soon</span>
            </div>
            <div className="integrations-row">
                <span>POS integration</span> <span className="coming-soon">Coming soon</span>
            </div>
            <div className="integrations-row">
                <span>Wallet integration</span> <span className="coming-soon">Coming soon</span>
            </div>
            <div className="integrations-row">
                <span>Apple Pay integration</span> <span className="coming-soon">Coming soon</span>
            </div>
            <div className="integrations-row">
                <span>Other integrations</span> <span className="on-request">On request</span>
            </div>
            <div className="integrations-row">
                <span>Paysera integration</span> <i className="fas fa-check"></i>
            </div>
        </div>
    </div>
</section>
<section className="customer-support-section">
    <div className="features-container">
        <h2 className="section-title">Customer support without annoying bots</h2>
        <p className="section-subtitle">
            Experience exceptional service with our online support and personalized assistance – 
            our dedicated team is here to enhance your journey.
        </p>
        <div className="customer-support-table">
            <div className="customer-support-row">
                <span>Knowledge base</span> <i className="fas fa-check"></i>
            </div>
            <div className="customer-support-row">
                <span>Online chat support</span> <i className="fas fa-check"></i>
            </div>
            <div className="customer-support-row">
                <span>In-App messaging</span> <i className="fas fa-check"></i>
            </div>
            <div className="customer-support-row">
                <span>Email support</span> <i className="fas fa-check"></i>
            </div>
            <div className="customer-support-row">
                <span>Technical support</span> <i className="fas fa-check"></i>
            </div>
            <div className="customer-support-row">
                <span>Phone support <i className="fas fa-info-circle"></i></span> <i className="fas fa-check"></i>
            </div>
            <div className="customer-support-row">
                <span>Ticketing system</span> <i className="fas fa-check"></i>
            </div>
            <div className="customer-support-row">
                <span>Installation assistance</span> <i className="fas fa-check"></i>
            </div>
            <div className="customer-support-row">
                <span>Settings optimization advisor</span> <i className="fas fa-check"></i>
            </div>
            <div className="customer-support-row">
                <span>Personalized support</span> <i className="fas fa-check"></i>
            </div>
            <div className="customer-support-row">
                <span>Marketing packages <i className="fas fa-info-circle"></i></span> <i className="fas fa-check"></i>
            </div>
        </div>
    </div>
</section>
<section className="security-features-section">
    <div className="features-container">
        <h2 className="section-title">Business and customer data security features</h2>
        <p className="section-subtitle">
            Rest easy knowing your data is fully secure with our table reservation system, 
            prioritizing the confidentiality and protection of your information.
        </p>
        <div className="security-features-table">
            <div className="security-features-row">
                <span>Secure AWS hosting</span> <i className="fas fa-check"></i>
            </div>
            <div className="security-features-row">
                <span>AWS cloud infrastructure</span> <i className="fas fa-check"></i>
            </div>
            <div className="security-features-row">
                <span>User authentication and access control</span> <i className="fas fa-check"></i>
            </div>
            <div className="security-features-row">
                <span>Data encryption</span> <i className="fas fa-check"></i>
            </div>
            <div className="security-features-row">
                <span>Regular data backups</span> <i className="fas fa-check"></i>
            </div>
            <div className="security-features-row">
                <span>Security monitoring and logging</span> <i className="fas fa-check"></i>
            </div>
            <div className="security-features-row">
                <span>Data masking and anonymization</span> <i className="fas fa-check"></i>
            </div>
            <div className="security-features-row">
                <span>Data lifecycle management</span> <i className="fas fa-check"></i>
            </div>
            <div className="security-features-row">
                <span>Compliance Management: GDPR</span> <i className="fas fa-check"></i>
            </div>
            <div className="security-features-row">
                <span>Regular security audits and assessments</span> <i className="fas fa-check"></i>
            </div>
        </div>
    </div>
</section>

            <Footer></Footer>
        </>
    );
};

export default FeaturesComponent;