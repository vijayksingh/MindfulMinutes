const dogSrc =
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjh0azg1OWh3djkxM3JpemlwcjFxaG84am9rMG42YjVtMXRua21tcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oro5WmWzNxOmfAkli/giphy.gif";

const generateDogGif = async () => {
  // Get the active tab
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
  const activeTab = tabs[0];
  // Send the dog Gif
  chrome.tabs.sendMessage(activeTab.id || 0, dogSrc);
};

const App = () => {
  return (
    <main>
      <div>
        <h1>Add a Dog Gif to Webpage</h1>
        <img src={dogSrc} />
        <button onClick={generateDogGif}>Generate Dog Gif</button>
      </div>
    </main>
  );
};
export default App;
