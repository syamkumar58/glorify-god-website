// Import React and any other necessary modules

interface Styles {
  [key: string]: React.CSSProperties;
}

export default function Home() {
  return (
    <main style={styles.container}>
      <div style={styles.centeredText}>
        <h1>Glorify God</h1>
      </div>
    </main>
  );
}

const styles: Styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // This will make the container take the full height of the viewport
  },
  centeredText: {
    textAlign: 'center',
    color: 'white', // Set the text color to white
  } as React.CSSProperties, // Explicitly cast the style object
};
