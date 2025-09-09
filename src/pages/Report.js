import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import "./Report.css";

const Report = () => {
  const [newImage, setNewImage] = useState(null);
  const [previousReports, setPreviousReports] = useState([]);

  // Upload new image for checking severity
  const handleNewImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewImage(URL.createObjectURL(file));
    }
  };

  // Upload previous report
  const handlePreviousReportUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newReport = {
        id: Date.now(),
        title: file.name,
        img: URL.createObjectURL(file),
        date: new Date().toLocaleDateString(),
      };
      setPreviousReports([newReport, ...previousReports]);
    }
  };

  return (
    <div className="main-layout">
      <Sidebar />
      <div className="report-container">
        {/* Upload New Image Section */}
        <div className="section upload-new">
          <h1>Upload New Image to Check Severity</h1>
          <label htmlFor="newImageUpload" className="upload-btn">
            + Upload Image
          </label>
          <input
            type="file"
            id="newImageUpload"
            accept="image/*"
            onChange={handleNewImageUpload}
          />
          {newImage && (
            <div className="image-preview">
              <img src={newImage} alt="Uploaded" />
            </div>
          )}
        </div>

        {/* Previous Reports Section */}
        <div className="section previous-reports">
          <h2>Previous Reports</h2>
          <label htmlFor="prevReportUpload" className="upload-btn prev-upload-btn">
            + Upload Previous Report
          </label>
          <input
            type="file"
            id="prevReportUpload"
            accept="image/*"
            onChange={handlePreviousReportUpload}
          />

          <div className="reports-grid">
            {previousReports.length > 0 ? (
              previousReports.map((report) => (
                <div className="report-card" key={report.id}>
                  <img src={report.img} alt={report.title} className="report-img" />
                  <div className="report-info">
                    <h3>{report.title}</h3>
                    <p>Date: {report.date}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="empty-text">No previous reports uploaded yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
