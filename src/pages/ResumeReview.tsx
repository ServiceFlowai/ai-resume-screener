import React from 'react';

const ResumeReview = () => {
  const candidates = [
    { id: 1, name: 'John Doe', score: 85, feedback: '' },
    { id: 2, name: 'Jane Smith', score: 78, feedback: '' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Resume Review</h1>
      <div className="bg-white p-4 rounded shadow-md">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Score</th>
              <th className="px-4 py-2">Feedback</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map(candidate => (
              <tr key={candidate.id} className="border-t">
                <td className="px-4 py-2">{candidate.name}</td>
                <td className="px-4 py-2">{candidate.score}</td>
                <td className="px-4 py-2">
                  <input
                    type="text"
                    className="border rounded px-2 py-1"
                    value={candidate.feedback}
                    onChange={(e) => console.log(`Feedback for ${candidate.name}:`, e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResumeReview;