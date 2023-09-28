import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Fantasy from "../data/fantasy.json"; // Importa il file JSON
import { Theme } from "../Contexts/ThemeChanger";
import Card from "react-bootstrap/Card";

const Description = () => {
	/*
	const { isDarkMode } = useContext(Theme);
    */
	const { bookId } = useParams();
	const [cardData, setCardData] = useState(null);
	console.log(Fantasy);

	useEffect(() => {
		// Funzione per ottenere i dati in base all'ID
		const getCardData = () => {
			console.log(`book ID:`, bookId);
			const card = Fantasy.find((item) => item.asin === bookId);
			console.log(`card found:`, card);
			// Imposta i dati della card
			setCardData(card);
		};
		getCardData();
	}, [bookId]);

	return (
		<Card className={`custom-card `} style={{ width: "18rem" }}>
			{cardData && (
				<>
					<Card.Img variant="top" src={cardData.img} />
					<Card.Body>
						<Card.Title>{cardData.title}</Card.Title>
						<Card.Text>{cardData.category}</Card.Text>
						<Card.Text>{cardData.price}</Card.Text>
					</Card.Body>
				</>
			)}
		</Card>
	);
};

export default Description;

/*
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fs from 'fs';  // Dipendenza per il file system (Node.js)

const CardComponent = () => {
  const { id } = useParams();
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    // Funzione per leggere il file JSON e ottenere i dati in base all'ID
    const getCardData = async () => {
      try {
        // Leggi il file JSON
        const jsonData = await fs.promises.readFile('path_to_your_json_file.json', 'utf-8');
        const parsedData = JSON.parse(jsonData);

        // Trova il dato corrispondente all'ID
        const card = parsedData.find(item => item.id === parseInt(id));

        // Imposta i dati della card
        setCardData(card);
      } catch (error) {
        console.error('Errore nella lettura del file JSON:', error);
      }
    };

    // Chiama la funzione per ottenere i dati della card
    getCardData();
  }, [id]);

  if (!cardData) {
    return null;
  }

  // Renderizza la card con i dati ottenuti
  return (
    <div className="card">
      <h3>{cardData.title}</h3>
      <p>{cardData.description}</p>
      {Altri dati della card...}
      </div>
      );
    };
    
    export default CardComponent;
    
*/
