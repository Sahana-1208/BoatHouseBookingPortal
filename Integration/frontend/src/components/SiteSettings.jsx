import { useState } from 'react';
import '../assets/css/SiteSettings.css';
function SiteSettings({setsite}){
    const [siteSettingsData, setSiteData]=useState({
        aboutUs:[
            {heading:"Boat Voyagers,",description:"MyHouseboats.com is a Online service portal,a new business venture of Conspiro India Limited registered in Bangalore,specializes in providing solutions for Kerala Backwater Tourism Projects in areas of sales and marketing. It emphasizes on both online and offline bookings for Houseboats,Motorboats,Shikkaraboats,Homestyas,Hotels and resorts to all International and Domestic tourist. The company has a dedicated round the clock call centre for reservations. It has a strong cutting edge technology in reservation and sales that enhances bookings. Our support available in various states in India,Middle East,Canada and USA.MyHouseboats.com right now only focus on the backwater tourism markets in Alappuzha and Kumarakom of Kerala."}
        ],
        contactUs:"Get in Touch with Boat Voyager        Have questions, need assistance, or just want to share your excitement about your upcoming nautical adventure? We're here to help! Contact Boat Voyager through the following channels: Customer Support Our dedicated customer support team is available around the clock to ensure your journey with Boat Voyager is smooth sailing. Whether you have inquiries about a specific booking, need assistance navigating our platform, or just want some personalized recommendations, we're here for you.",
    });
    return(
        <>
        <div className="site-settings-outer">
            <button onClick={()=>setsite(false)}>Close</button>
            <h1 className="site-setting-label">About us</h1>
            {siteSettingsData.aboutUs.map((m,index)=>
            <>
            {/* <h2>Page</h2> */}
            <label className="site-settings-label">Heading</label>
            <input type="text" className="site-settings-heading-input-tag" value={m.heading}/>
            <label className="site-settings-label">Description</label>
            <textarea className="site-settings-textarea" value={m.description}/>
            <button className="site-settings-apply">Apply</button>
            <br/>
            </>
            )}

            <h1 className="site-setting-label">ContactUs</h1>
            <textarea className="site-settings-textarea">{siteSettingsData.contactUs}</textarea>
            <button className="site-settings-apply">Apply</button>
        </div>
        </>
    );
}
export default SiteSettings;