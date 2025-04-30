import { 
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent, 
  IonHeader, 
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton, 
  IonPage, 
  IonThumbnail,
  IonTitle, 
  IonToolbar 
} from '@ionic/react';

const Favorites: React.FC = () => {
  const colors = [
    'primary', 'secondary', 'tertiary', 'success',
    'warning', 'danger', 'light', 'medium', 'dark'
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Favorites</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* Card with List */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Favorites</IonCardTitle>
            <IonCardSubtitle>SECTION C NIGGAS</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              {[1, 2, 3, 4].map((item, index) => (
                <IonItem key={index} lines={index === 3 ? 'none' : 'full'}>
                  <IonThumbnail slot="start">
                    <img 
                      alt="Silhouette of mountains" 
                      src="https://scontent.fcgy3-2.fna.fbcdn.net/v/t39.30808-6/491991173_2123271441419934_3720262893929846172_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeE_1w90sb9A1q85u_uWX1_lZ0hz_HZoutFnSHP8dmi60bGhgnb4RYPiL-JTRU38gDgbK84CaMOmN-0yE6duZTcn&_nc_ohc=IuPABUAjYrsQ7kNvwGq66OG&_nc_oc=AdlgxmcbIZxxxo8fDsKGnFOUVa1Bi137dfvp7bq2GENOP2n4dZz8x2JCWy0SALyOGTM&_nc_zt=23&_nc_ht=scontent.fcgy3-2.fna&_nc_gid=NMSGgu3-BefcAP0BmILn_g&oh=00_AfG8dJesorDdICif_2VKuzh3VexPZ4lEvQiOLEOPbdBjbA&oe=68170864" 
                    />
                  </IonThumbnail>
                  <IonLabel>Niggas in one frame</IonLabel>
                </IonItem>
              ))}
            </IonList>
          </IonCardContent>
        </IonCard>

        {/* Color-Themed Cards */}
        {colors.map((color, idx) => (
          <IonCard color={color as any} key={idx}>
            <IonCardHeader>
              <IonCardTitle>Card Title</IonCardTitle>
              <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>Card Content</IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Favorites;

