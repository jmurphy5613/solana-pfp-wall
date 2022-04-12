import { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#0f172a',
    width: '100vw',
    height: '100vh'
  }
})

function App() {

  const classes = useStyles();

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
    <div className={classes.root}>
      hey
    </div>
  );
}

export default App;
