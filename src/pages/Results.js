import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Redirect } from 'react-router-dom';
import Personal from '../components/Personal';
import GhPolyglot from 'gh-polyglot';
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
      // console.log(res.data);
    } catch (error) {
      console.log(error)
      setError('Failed to fetch');
    }
  };

  const fetchRepos = async () => {
    try {
      const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=100`);
      setRepos(res.data)
      // console.log(res.data);
    } catch (error) {
      setError('Failed to fetch')
    }
  };

  const fetchEvents = async () => {
    try {
      const res = await axios.get(`https://api.github.com/users/${username}/events`);
      // console.log(res.data);
      setEvents(res.data);
    } catch (error) {
      setError('Failed to fetch')
    }
  }

  const fetchLanguages = async () => {
    const me = new GhPolyglot(`${username}`);
    await me.userStats((err, stats) => {
      if (err) {
        console.log(err)
      }
      setLang(stats)
    });
  };

  useEffect(() => {
    setIsLoading(true);
    fetchUser();
    fetchLanguages();
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
      {(events && repos) && <DataVisualization languages={lang} repositories={repos} events={events} />}
    </div>
  )
}
