import React, { useState } from "react";

export default function JobFinder() {
  const workers = [
    { id: 1, name: "Ravi Kumar", skill: "Electrician", phone: "9876543210", location: "Delhi" },
    { id: 2, name: "Anjali Sharma", skill: "Plumber", phone: "9123456780", location: "Pune" },
    { id: 3, name: "Sita Devi", skill: "Painter", phone: "9988223344", location: "Lucknow" },
    { id: 4, name: "Amit Das", skill: "Electrician", phone: "9876540000", location: "Patna" },
  ];

  const bookings = [
    { workerId: 1, date: "2025-07-14", client: "Akash", location: "Delhi" },
    { workerId: 2, date: "2025-07-15", client: "Maya", location: "Pune" },
    { workerId: 3, date: "2025-07-16", client: "Ritu", location: "Noida" },
  ];

  const initialReviews = [
    { workerId: 1, job: "Wiring in Kitchen", client: "Rahul", rating: 5, feedback: "Very professional and quick!" },
    { workerId: 1, job: "Fan Installation", client: "Neeraj", rating: 4, feedback: "Good work, but a bit late." },
    { workerId: 2, job: "Pipe Fitting", client: "Sneha", rating: 5, feedback: "Excellent and neat work!" },
    { workerId: 3, job: "Wall Painting", client: "Karan", rating: 4, feedback: "Great painting skills." },
  ];

  const [reviews, setReviews] = useState(initialReviews);
  const [visibleWorker, setVisibleWorker] = useState(null);
  const [showReviews, setShowReviews] = useState({});
  const [search, setSearch] = useState("");
  const [filterSkill, setFilterSkill] = useState("All");
  const [formInputs, setFormInputs] = useState({});

  const toggleDetails = (id) => {
    setVisibleWorker(visibleWorker === id ? null : id);
  };

  const toggleReviews = (id) => {
    setShowReviews((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleInputChange = (workerId, field, value) => {
    setFormInputs((prev) => ({
      ...prev,
      [workerId]: { ...prev[workerId], [field]: value },
    }));
  };

  const submitReview = (workerId) => {
    const data = formInputs[workerId];
    if (!data || !data.job || !data.client || !data.rating || !data.feedback) {
      alert("Please fill all fields!");
      return;
    }

    setReviews((prev) => [...prev, { workerId, ...data }]);
    setFormInputs((prev) => ({ ...prev, [workerId]: { job: "", client: "", rating: "", feedback: "" } }));
  };

  const filteredWorkers = workers.filter(
    (worker) =>
      (worker.name.toLowerCase().includes(search.toLowerCase()) ||
        worker.location.toLowerCase().includes(search.toLowerCase())) &&
      (filterSkill === "All" || worker.skill === filterSkill)
  );

  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body, html { font-family: Arial, sans-serif; background: linear-gradient(to right, #e3f2fd, #ffffff); }
        .container { max-width: 1200px; margin: 80px auto 20px; padding: 20px; }
        .title { text-align: center; font-size: 2rem; font-weight: 700; color: #1e3a8a; margin-bottom: 30px; }
        .search-filter { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; margin-bottom: 30px; }
        .search-filter input, .search-filter select { padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 1rem; min-width: 200px; }
        .grid-container { display: flex; flex-wrap: wrap; gap: 20px; }
        .worker-card { flex: 1 1 calc(50% - 20px); background: #ffffff; border-left: 6px solid #2563eb; border-radius: 10px; padding: 30px; box-shadow: 0 2px 10px rgba(0,0,0,0.06); transition: all 0.3s ease-in-out; }
        .worker-card.expanded { flex: 1 1 100%; background-color: #f1f5f9; }
        .worker-header { display: flex; justify-content: space-between; flex-wrap: wrap; align-items: center; }
        .worker-name { font-size: 1.5rem; font-weight: bold; color: #1e293b; }
        .worker-skill { font-size: 1rem; color: #475569; }
        .toggle-btn { background-color: #2563eb; color: white; border: none; padding: 10px 16px; border-radius: 6px; cursor: pointer; font-size: 15px; margin-top: 10px; }
        .toggle-btn:hover { background-color: #1d4ed8; }
        .worker-details { margin-top: 15px; font-size: 1rem; color: #1f2937; }
        .worker-details a { color: #0ea5e9; text-decoration: none; }
        .worker-details h4 { margin-top: 10px; color: #0f172a; }
        .worker-details ul { padding-left: 20px; list-style-type: disc; }
        .review-box { margin-top: 10px; background: #fff; padding: 10px; border-radius: 6px; border: 1px solid #e2e8f0; }
        .review-box li { margin-bottom: 8px; padding-bottom: 6px; border-bottom: 1px solid #f1f5f9; }
        .add-review { margin-top: 12px; padding: 10px; background: #fff; border: 1px solid #ddd; border-radius: 6px; }
        .add-review input, .add-review select, .add-review textarea { width: 100%; padding: 8px; margin-bottom: 6px; border: 1px solid #ccc; border-radius: 4px; }
        .add-review button { background: #10b981; color: white; border: none; padding: 8px 12px; border-radius: 4px; cursor: pointer; }
        .add-review button:hover { background: #059669; }
      `}</style>

      <div className="container">
        <h1 className="title">Job Finder – Workers & Schedules</h1>

        <div className="search-filter">
          <input
            type="text"
            placeholder="Search by name or location"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select value={filterSkill} onChange={(e) => setFilterSkill(e.target.value)}>
            <option value="All">All Skills</option>
            <option value="Electrician">Electrician</option>
            <option value="Plumber">Plumber</option>
            <option value="Painter">Painter</option>
          </select>
        </div>

        <div className="grid-container">
          {filteredWorkers.map((worker) => {
            const showDetails = visibleWorker === worker.id;
            const workerBookings = bookings.filter((b) => b.workerId === worker.id);
            const workerReviews = reviews.filter((r) => r.workerId === worker.id);

            return (
              <div key={worker.id} className={`worker-card ${showDetails ? "expanded" : ""}`}>
                <div className="worker-header">
                  <div>
                    <h2 className="worker-name">{worker.name}</h2>
                    <p className="worker-skill">Skill: {worker.skill}</p>
                  </div>
                  <button className="toggle-btn" onClick={() => toggleDetails(worker.id)}>
                    {showDetails ? "Hide Details" : "View Details"}
                  </button>
                </div>

                {showDetails && (
                  <div className="worker-details">
                    <p><strong>Phone:</strong> <a href={`tel:${worker.phone}`}>{worker.phone}</a></p>
                    <p><strong>Location:</strong> {worker.location}</p>

                    <h4>Scheduled Jobs:</h4>
                    {workerBookings.length > 0 ? (
                      <ul>
                        {workerBookings.map((job, index) => (
                          <li key={index}>{job.date} – for <strong>{job.client}</strong> in {job.location}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>No bookings yet.</p>
                    )}

                    <button className="toggle-btn" style={{ marginTop: "10px" }} onClick={() => toggleReviews(worker.id)}>
                      {showReviews[worker.id] ? "Hide Previous Jobs & Reviews" : "Show Previous Jobs & Reviews"}
                    </button>

                    {showReviews[worker.id] && (
                      <div className="review-box">
                        <h4>Previous Jobs & Reviews:</h4>
                        {workerReviews.length > 0 ? (
                          <ul>
                            {workerReviews.map((r, i) => (
                              <li key={i}>
                                <strong>{r.job}</strong> for {r.client} ⭐ {r.rating}/5 <br />
                                <em>{r.feedback}</em>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p>No reviews yet.</p>
                        )}
                      </div>
                    )}

                    {/* ✅ Add Review Form */}
                    <div className="add-review">
                      <h4>Add Your Review</h4>
                      <input
                        type="text"
                        placeholder="Job Name"
                        value={formInputs[worker.id]?.job || ""}
                        onChange={(e) => handleInputChange(worker.id, "job", e.target.value)}
                      />
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={formInputs[worker.id]?.client || ""}
                        onChange={(e) => handleInputChange(worker.id, "client", e.target.value)}
                      />
                      <select
                        value={formInputs[worker.id]?.rating || ""}
                        onChange={(e) => handleInputChange(worker.id, "rating", e.target.value)}
                      >
                        <option value="">Select Rating</option>
                        {[1, 2, 3, 4, 5].map((r) => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                      <textarea
                        placeholder="Write feedback..."
                        value={formInputs[worker.id]?.feedback || ""}
                        onChange={(e) => handleInputChange(worker.id, "feedback", e.target.value)}
                      ></textarea>
                      <button onClick={() => submitReview(worker.id)}>Submit Review</button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
