export default interface Data {
  artistName: string;
  collectionName: string;
  ipfsHashes: Array<string>;
  email: string;
  description: string;
  maxSupply: number;
  maxPerAddress: number;
  mediaUrls?: { [key: string]: string };
  artistAddress: string;
  imageUrl: string;
  externalLink?: string;
  blockchain: string;
}
