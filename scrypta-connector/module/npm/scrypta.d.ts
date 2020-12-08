import { ScryptaBlock, ScryptaTx, ScryptaUnspent } from './constants';
import { PinoLogger } from 'nestjs-pino';
export declare abstract class ScryptaBlockchainService {
    protected scrypta: any;
    protected testnet: boolean;
    protected currency: 'LYRA';
    protected readonly logger: PinoLogger;
    constructor(testnet?: boolean);
    getNetwork(): {
        messagePrefix: string;
        bech32: string;
        bip32: {
            public: number;
            private: number;
        };
        pubKeyHash: number;
        scriptHash: number;
        wif: number;
    };
    private getDerivationPath;
    getBlockChainInfo(testnet?: boolean): Promise<any>;
    getCurrentBlock(testnet?: boolean): Promise<number>;
    getBlockHash(i: number, testnet?: boolean): Promise<string>;
    getBlock(hash: string, testnet?: boolean): Promise<ScryptaBlock>;
    generateAddress(xpub: string, derivationIndex: number): Promise<{
        address: string;
    }>;
    generateWallet(mnem?: string): Promise<{
        mnemonic: string;
        xpub: any;
    }>;
    generateAddressPrivateKey(derivationIndex: number, mnemonic: string): Promise<{
        key: string;
    }>;
    getTransactionsByAddress(address: string, pagination?: object, testnet?: boolean): Promise<Array<ScryptaTx>>;
    getUnspentsByAddress(address: string, pagination?: object, testnet?: boolean): Promise<Array<ScryptaUnspent>>;
    getUTXO(hash: string, index: number, testnet?: boolean): Promise<ScryptaTx>;
    getRawTransaction(txHash: string, testnet?: boolean): Promise<any>;
    broadcast(txData: string, testnet?: boolean): Promise<{
        txId: string;
        failed?: boolean;
    }>;
}
