import React, { useState, useEffect } from 'react'
import { shortenAddress, useEthers, useLookupAddress } from '@usedapp/core'

import styles from '../styles'

function WalletButton() {
    const [accountAddress, setAccountAddress] = useState('');
    const { ens } = useLookupAddress();
    const { account, activateBrowserWallet, deactivate } = useEthers();

    useEffect(() => {
        if (ens) {
            setAccountAddress(ens);
        } else if (account) {
            setAccountAddress(shortenAddress(account))
        } else {
            setAccountAddress('')
        }
    }, [account, ens, setAccountAddress])

    return (
        <button
            onClick={() => {
                if (!account) {
                    {console.log('here');}
                    activateBrowserWallet();
                } else {
                    deactivate();
                }
            }}
            className={styles.walletButton}
        >
            {/* SHORT SYNTAX OF TERNARY */}
            {accountAddress || "Connect Wallet"}
        </button>
    )
}

export default WalletButton