import { useEffect, useState } from 'react';

function App() {

  const [connectedWallet, setConnectedWallet] = useState();

  const connectToSolana = async () => {
    const { solana } = window;

    if(solana) {
      const response = await solana.connect();
      console.log("connected to pfp wall with wallet: ", response.publicKey.toString());
      setConnectedWallet(response.publicKey.toString());
    }
  }

  const checkIfWalletConnected = async () => {
    try {
      const { solana } = window;
      if(solana) {

        if(solana.isPhantom) {
          //once the phantom wallet is confirmed
          console.log('Found phantom wallet');

          //request access
          const wallet = await solana.connect({ onlyIfTrusted: true });

          console.log('Connected to pfp wall with account: ', wallet.publicKey.toString());

        } else {
          alert('Get phantom wallet');
        }
      }
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletConnected();
    }
    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  }, [])

  return (
    <div className="App">
      <button onClick={connectToSolana}>
        Connect Wallet
      </button>
    </div>
  );
}

export default App;
