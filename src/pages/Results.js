import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Redirect } from 'react-router-dom';
import Personal from '../components/Personal';
import { dummyRepos, dummyLang, dummyUser, dummyEvents } from '../utils/data';
import DataVisualization from '../components/DataVisualization';

export default function Results() {
  const [isLoading, setIsLoading] = useState(false);
  const { username } = useParams();
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState(null);
  const [events, setEvents] = useState(null);
  const [lang, setLang] = useState(null);

  const fetchUser = async () => {
    try {
      const res = await axios.get(`https://api.github.com/users/${username}`);
      setUser(res.data);
    } catch (error) {
      console.log(error)
      setError('Failed to fetch');
    }
  };

  const fetchRepos = async () => {
    try {
      const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=100`);
      setRepos(res.data)
    } catch (error) {
      setError('Failed to fetch')
    }
  };

  const fetchEvents = async () => {
    try {
      const res = await axios.get(`https://api.github.com/users/${username}/events`);
      setEvents(res.data);
    } catch (error) {
      setError('Failed to fetch')
    }
  }

  useEffect(() => {
    setIsLoading(true);
    fetchUser();
    fetchRepos();
    fetchEvents();
    // setEvents(dummyEvents);
    // setLang(dummyLang);
    // setUser(dummyUser);
    // setRepos(dummyRepos);
    setIsLoading(false);
  }, [])

  return (
    <div>
      {isLoading && <h1>Spinner</h1>}
      {error && <Redirect to='/error' />}
      {user && <Personal user={user} />}
      {events && <DataVisualization languages={lang} repositories={repos} events={events} />}
    </div>
  )
}
