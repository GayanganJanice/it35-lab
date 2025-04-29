import { 
  IonButtons,
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonSearchbar,
  IonList,
  IonItem,
  IonLabel
} from '@ionic/react';
import { useState } from 'react';

const Search: React.FC = () => {
  const [results, setResults] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleInput = (event: CustomEvent) => {
    const query = event.detail.value;
    setSearchTerm(query);

    // Simulate search logic
    if (query && query.trim() !== '') {
      const mockResults = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig'].filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setResults(mockResults);
    } else {
      setResults([]);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Search</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonSearchbar debounce={1000} onIonInput={handleInput} />

        <IonList>
          {results.map((result, index) => (
            <IonItem key={index}>
              <IonLabel>{result}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Search;
