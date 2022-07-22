import React from "react";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left_row">
            <i class="fa-solid fa-phone"></i>
            <label>+91 9876543210</label>
            <i class="fa-solid fa-envelope"></i>
            <label>admin@admin.com</label>
          </div>
          {/* right section */}
          <div className="right row RText">
            <label>Theme FAQ's</label>
            <label>Need Help</label>
            <span>🏳️‍🌈</span>
            <label>EN</label>
            <span>🏳️‍🌈</span>
            <label>USD</label>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
