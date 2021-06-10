import React, { useState } from 'react';
import AddButton from '../components/AddButton.jsx';
import Card from '../components/Card.jsx';
import ModalWindow from '../components/ModalWindow.jsx';
import Button from '../components/Button.jsx';
import './FetchUsers.css';

function FetchUser() {
  const [people, setPeople] = useState([]);
  const [loader, setLoader] = useState(false);
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState('');


  async function getCards() {
    const url = 'https://tinyfac.es/api/users';
    const response = await fetch(url);
    const data = await response.json();

    return data
  }

  async function getRandomCard() {
    const cards = await getCards();
    const radnomNumber = Math.floor(cards.length * Math.random());
    const randomCard = await cards[radnomNumber];

    return randomCard
  }

  async function addCard() {
    try {
      const card = await getRandomCard();

      setPeople(prevState => ([...prevState, card]));
    } catch (error) {
      setMessage(`Request for adding a new tile was failed: ${error}`)
    }
  }

  async function refreshAll() {
    if (!people.length) {
      setModal(true)
      setMessage('Please add at least one tile for refreshing all tiles')
      return
    }

    setLoader(true);

    const oldState = people;
    const newState = await Promise.all(oldState.map(async (el) => {
      const card = await getRandomCard();
      el = card;
      return el
    }));

    setPeople(newState);
    setLoader(false);
  }

  async function avatarChanger(e) {
    try {
      const card = await getRandomCard();
      const curentItem = +e.target.id;
      setPeople((prevState) => {
        const prev = [...prevState];
        prev[curentItem] = card;
        return prev
      });
    } catch (error) {
      setMessage(`Request for updating the tile was failed: ${error}`)
    }
  }

  function handlerModal() {
    setModal(false)
  }

  return (

    <div className='container'>
      { modal &&
        <ModalWindow onClick={handlerModal}>
          <p>{message}</p>
          <Button arialLabel='Close Modal Window' onClick={handlerModal}>Close</Button>
        </ModalWindow>
      }
      <div className='cards'>
        {people.map((person, index) => {
          return (
            <div className='card'>
              <Card loading={loader} key={person.avatars_origin.id.toString()} id={index} avatar={person.avatars[1].url} onClick={avatarChanger} ></Card>
            </div>
          )
        })
        }
        <AddButton onClick={addCard}></AddButton>
      </div>
      <div className='button-refresh-wrapper'>
        <div className='button-refresh-container'>
          <Button arialLabel='Refresh All' onClick={refreshAll}> Refresh All  {people.length ? `(${people.length})` : null}</Button>
        </div>
      </div>
    </div>

  )
}


export default FetchUser;