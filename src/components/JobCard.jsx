export default function JobCard({ skill, location, contact, date, client }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-xl font-semibold">{skill}</h3>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Client:</strong> {client}</p>
      <p><strong>Location:</strong> {location}</p>
      <a
        href={`https://wa.me/91${contact}`}
        target="_blank"
        className="inline-block mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        WhatsApp
      </a>
    </div>
  )
}
