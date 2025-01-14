"use client"
import React, { useState, useEffect } from 'react';
import '@assets/css/eventManagement.css';

import { Trash2, Plus, Calendar, FileText } from 'lucide-react';

// Event Type Definition
interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  createdAt: Date;
}

const EventManagementDashboard: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    description: ''
  });
  const [errors, setErrors] = useState({
    title: '',
    date: '',
    description: ''
  });

  // Load events from local storage on component mount
  useEffect(() => {
    const storedEvents = localStorage.getItem('adminEvents');
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
    }
  }, []);

  // Save events to local storage whenever events change
  useEffect(() => {
    localStorage.setItem('adminEvents', JSON.stringify(events));
  }, [events]);

  const validateForm = () => {
    let formErrors = {
      title: '',
      date: '',
      description: ''
    };
    let isValid = true;

    if (!newEvent.title.trim()) {
      formErrors.title = 'Event title is required';
      isValid = false;
    }

    if (!newEvent.date) {
      formErrors.date = 'Event date is required';
      isValid = false;
    }

    if (!newEvent.description.trim()) {
      formErrors.description = 'Event description is required';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleAddEvent = () => {
    if (validateForm()) {
      const eventToAdd: Event = {
        id: `event_${Date.now()}`,
        ...newEvent,
        createdAt: new Date()
      };

      setEvents([...events, eventToAdd]);
      
      // Reset form
      setNewEvent({
        title: '',
        date: '',
        description: ''
      });
    }
  };

  const handleDeleteEvent = (eventId: string) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this event?');
    if (confirmDelete) {
      setEvents(events.filter(event => event.id !== eventId));
    }
  };

  return (
    <div className="eventManagementContainer">
      <div className="dashboardHeader">
        <h1>Event Management Dashboard</h1>
      </div>
      
      <div className= "eventCreationSection">
        <div className= "formGroup">
          <label htmlFor="eventTitle">
            <FileText size={24} />
            Event Title
          </label>
          <input
            type="text"
            id="eventTitle"
            value={newEvent.title}
            onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
            placeholder="Enter event title"
            className={errors.title ? "inputError" : ''}
          />
          {errors.title && <span className= "errorText">{errors.title}</span>}
        </div>

        <div className= "formGroup">
          <label htmlFor="eventDate">
            <Calendar size={24} />
            Event Date
          </label>
          <input
            type="date"
            id="eventDate"
            value={newEvent.date}
            onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
            className={errors.date ?  "inputError" : ''}
          />
          {errors.date && <span className= "errorText">{errors.date}</span>}
        </div>

        <div className= "formGroup">
          <label htmlFor="eventDescription">
            <FileText size={24} />
            Event Description
          </label>
          <textarea
            id="eventDescription"
            value={newEvent.description}
            onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
            placeholder="Enter event details"
            className={errors.description ?  "inputError" : ''}
          />
          {errors.description && <span className= "errorText">{errors.description}</span>}
        </div>

        <button 
          onClick={handleAddEvent}
          className= "addEventButton"
        >
          <Plus size={20} /> Add Event
        </button>
      </div>

      <div className= "eventListSection">
        <h2>Upcoming Events</h2>
        {events.length === 0 ? (
          <div className= "noEvents">
            <p>No events scheduled</p>
          </div>
        ) : (
          <div className="eventGrid">
            {events.map((event) => (
              <div key={event.id} className= "eventCard">
                <div className= "eventCardHeader">
                  <h3>{event.title}</h3>
                  
                </div>
                <div className= "eventCardBody">
                  <p className='flex'>
                    {/* <Calendar size={24} />  */}
                    {new Date(event.date).toLocaleDateString()}
                  </p>
                  <p>{event.description}</p>

                </div>
                <button 
                    onClick={() => handleDeleteEvent(event.id)}
                    className= "deleteButton"
                  >
                    <Trash2 size={24} />
                  </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventManagementDashboard;