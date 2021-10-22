import MediaCard from './components/MediaCard';
import Gate from './components/Gate';
import img from './logo.svg'

function App() {
  let isOpen = true;
  return (
    <>
     <MediaCard title="Title" body={(<>This is <b>body </b>section</>)} pic={img} />
     <Gate isOpen={isOpen}/>
    </>
  );
}

export default App;
