import React from 'react';
import './UpcomingLessons.css';

const UpcomingLessons = () => {
  const lessons = [
    {
      date: '21 July',
      time: '2:00 - 3:00 Pm',
      course: 'Introduction to Piano',
      student: 'Eunice Reed & Arnold Hayes'
    },
    {
      date: '22 July',
      time: '4:00 - 5:00 Pm',
      course: 'Finger Exercises',
      student: 'Eunice Reed & Arnold Hayes'
    },
    {
      date: '23 July',
      time: '3:00 - 4:00 Pm',
      course: 'Classic Chorads',
      student: 'Eunice Reed & Arnold Hayes'
    },
    {
      date: '24 July',
      time: '5:00 - 6:00 Pm',
      course: 'Rhythm Basics',
      student: 'Eunice Reed & Arnold Hayes'
    },
    {
      date: '25 July',
      time: '2:00 - 3:00 Pm',
      course: 'Simple Melodies',
      student: 'Eunice Reed & Arnold Hayes'
    },
    {
      date: '26 July',
      time: '10:00 - 11:00 Am',
      course: 'Tempo Control',
      student: 'Eunice Reed & Arnold Hayes'
    },
    {
      date: '24 July',
      time: '1:00 - 2:00 Pm',
      course: 'Rhythm Basics',
      student: 'Eunice Reed & Arnold Hayes'
    },
    {
      date: '22 July',
      time: '4:00 - 5:00 Pm',
      course: 'Finger Warmups',
      student: 'Eunice Reed & Arnold Hayes'
    }
  ];

  return (
    <div className="upcoming-lessons">
      <div className="lessons-header">
        <h3 className="lessons-title">Upcoming Lessons</h3>
        <button className="view-all-btn">View All</button>
      </div>
      
      <div className="lessons-table-container">
        <table className="lessons-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Course</th>
              <th>Student Name</th>
            </tr>
          </thead>
          <tbody>
            {lessons.map((lesson, index) => (
              <tr key={index} className="lesson-row">
                <td className="lesson-date">{lesson.date}</td>
                <td className="lesson-time">{lesson.time}</td>
                <td className="lesson-course">{lesson.course}</td>
                <td className="lesson-student">{lesson.student}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UpcomingLessons;
