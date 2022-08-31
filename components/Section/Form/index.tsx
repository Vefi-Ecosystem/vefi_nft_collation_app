import { Typography, message, Spin } from "antd";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { FormWrapper } from "./Form.style";
import { Container, Button } from "components";
import { db } from "utils/firebase";
import { collection, addDoc } from "firebase/firestore";
import { Select } from "antd";
import Data from "./data.interface";

const { Option } = Select;

export default function Form() {
  const chainList = [
    "Ethereum",
    "Binance Smartchain",
    "Bitgert",
    "Celo",
    "Harmony",
    "Telos",
    "Arbitrum",
    "Optimism",
    "Velas",
    "Polygon",
    "Metis",
    "Caduceus"
  ];
  const mediaList = [
    { name: "twitter", placeholder: "Twitter" },
    { name: "discord", placeholder: "Discord" },
    { name: "telegram", placeholder: "Telegram" },
    { name: "facebook", placeholder: "Facebook" }
  ];
  const [data, setData] = useState<Data>({
    artistAddress: "",
    artistName: "",
    collectionName: "",
    ipfsHashes: [],
    email: "",
    description: "",
    maxSupply: 0,
    maxPerAddress: 0,
    mediaUrls: {} as any,
    imageUrl: "",
    externalLink: "",
    blockchain: chainList[0],
    pricePerAsset: 0
  });
  const [isLoading, setIsLoading] = useState(false);

  const fieldChange = (e: ChangeEvent<HTMLInputElement>) =>
    setData(d => ({
      ...d,
      [e.target.name]: e.target.type === "number" ? e.target.valueAsNumber || 0 : e.target.value
    }));

  const textAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setData(d => ({
      ...d,
      [e.target.name]: e.target.value
    }));

  const mediaUrlsFieldChange = (e: ChangeEvent<HTMLInputElement>) =>
    setData(d => ({
      ...d,
      mediaUrls: { ...d.mediaUrls, [e.target.name]: e.target.value }
    }));

  const ipfsHashesTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setData(d => ({
      ...d,
      ipfsHashes: e.target.value.replace(/\s/g, "").split(",")
    }));

  const checkRequiredFields = () =>
    !!data.artistAddress &&
    !!data.artistName &&
    !!data.collectionName &&
    !!data.ipfsHashes &&
    data.ipfsHashes.length === data.maxSupply &&
    !!data.email &&
    !!data.description &&
    !!data.maxSupply &&
    data.maxSupply > 0 &&
    !!data.maxPerAddress &&
    data.maxPerAddress > 0 &&
    !!data.imageUrl &&
    !!data.blockchain;

  const resetFields = () =>
    setData({
      artistAddress: "",
      artistName: "",
      collectionName: "",
      ipfsHashes: [],
      email: "",
      description: "",
      maxSupply: 0,
      maxPerAddress: 0,
      mediaUrls: {} as any,
      imageUrl: "",
      externalLink: "",
      blockchain: chainList[0],
      pricePerAsset: 0
    });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    if (checkRequiredFields()) {
      addDoc(collection(db, "items"), data)
        .then(() => {
          setIsLoading(false);
          resetFields();
          message.success("Done!", 5);
        })
        .catch(err => {
          setIsLoading(false);
          message.error(err.message, 3);
        });
    }
  };

  return (
    <>
      <FormWrapper>
        <Container>
          <div className="form__container">
            <form onSubmit={submit}>
              <div className="form__wrapper">
                <Typography.Title level={3}>Create New Item</Typography.Title>
              </div>
              <p>
                <span className="red">*</span>Required fields
              </p>
              <div className="form">
                <Typography.Title level={3}>
                  Image URL <span className="red">*</span>
                </Typography.Title>
                <p>Supported file types: JPG, PNG, GIF.</p>
                <input
                  required
                  type="text"
                  name="imageUrl"
                  className="form__control"
                  placeholder="URL to your collection's image here"
                  onChange={fieldChange}
                  value={data.imageUrl}
                />
              </div>
              <div className="form">
                <Typography.Title level={3}>
                  Collection Name<span className="red">*</span>
                </Typography.Title>
                <input
                  required
                  type="text"
                  placeholder="Name of your collection"
                  className="form__control"
                  name="collectionName"
                  onChange={fieldChange}
                  value={data.collectionName}
                />
              </div>
              <div className="form">
                <Typography.Title level={3}>External Link</Typography.Title>
                <p>
                  This link would be included in your collection&apos;s detail page. We recommend a link to a website
                  dedicated to your collection.
                </p>
                <input
                  type="text"
                  placeholder="https://externallink.com"
                  className="form__control"
                  name="externalLink"
                  onChange={fieldChange}
                  value={data.externalLink}
                />
              </div>
              <div className="form">
                <Typography.Title level={3}>Max Supply</Typography.Title>
                <p>
                  How many possible assets are there in this collection?{" "}
                  <span className="red">Must be greater than 0.</span>
                </p>
                <input
                  type="number"
                  className="form__control"
                  name="maxSupply"
                  onChange={fieldChange}
                  value={data.maxSupply}
                />
              </div>
              <div className="form">
                <Typography.Title level={3}>Max Per Address</Typography.Title>
                <p>
                  What is the highest number of assets in this collection each address can hold?{" "}
                  <span className="red">Must be greater than 0.</span>
                </p>
                <input
                  type="number"
                  className="form__control"
                  name="maxPerAddress"
                  onChange={fieldChange}
                  value={data.maxPerAddress}
                />
              </div>
              <div className="form">
                <Typography.Title level={3}>Price Per Asset</Typography.Title>
                <p>
                  How much in Ether does each asset worth? <span className="red">Be strategic about this.</span>
                </p>
                <input
                  type="number"
                  className="form__control"
                  name="pricePerAsset"
                  onChange={fieldChange}
                  value={data.pricePerAsset}
                />
              </div>
              <div className="form">
                <Typography.Title level={3}>Media URLs</Typography.Title>
                <p>Links to media pages/channels dedicated to your collection.</p>
                {mediaList.map(media => (
                  <input
                    key={media.name}
                    type="url"
                    className="form__control"
                    style={{ marginBottom: 8 }}
                    placeholder={media.placeholder}
                    name={media.name}
                    onChange={mediaUrlsFieldChange}
                    value={data.mediaUrls?.[media.name]}
                  />
                ))}
              </div>
              <div className="form">
                <Typography.Title level={3}>
                  IPFS URIs / CIDs<span className="red">*</span>
                </Typography.Title>
                <p>
                  Comma-separated IPFS URLs or CIDs of the assets within this collection. e.g
                  https://ipfs.io/ipfs/QmPK1s3pNYLi9ERiq3BDxKa4XosgWwFRQUydHUtz4YgpqB,QmPK1s3pNYLi9ERiq3BDxKa4XosgWwFRQUydHUtz4YgpqB{" "}
                  <span className="red">
                    If just CIDs are given, it is assumed that the content is hosted on https://ipfs.io
                  </span>
                </p>
                <textarea
                  required
                  rows={4}
                  cols={4}
                  placeholder="Assets' CIDs/URLs."
                  className="form__control"
                  name="ipfsHashes"
                  onChange={ipfsHashesTextAreaChange}
                  value={data.ipfsHashes}
                ></textarea>
              </div>
              <div className="form">
                <Typography.Title level={3}>
                  Description<span className="red">*</span>
                </Typography.Title>
                <p>This description would be included in your collection&apos;s detail page.</p>
                <textarea
                  required
                  rows={4}
                  cols={4}
                  placeholder="Provide a detailed description of your item."
                  className="form__control"
                  name="description"
                  onChange={textAreaChange}
                  value={data.description}
                ></textarea>
              </div>
              <div className="form">
                <Typography.Title level={3}>
                  Artist Name<span className="red">*</span>
                </Typography.Title>
                <input
                  required
                  type="text"
                  placeholder="Name of the owner of this collection"
                  className="form__control"
                  name="artistName"
                  onChange={fieldChange}
                  value={data.artistName}
                />
              </div>
              <div className="form">
                <Typography.Title level={3}>
                  Artist Address<span className="red">*</span>
                </Typography.Title>
                <input
                  required
                  type="text"
                  placeholder="Address of this artist"
                  className="form__control"
                  name="artistAddress"
                  onChange={fieldChange}
                  value={data.artistAddress}
                />
              </div>
              <div className="form">
                <Typography.Title level={3}>
                  Email<span className="red">*</span>
                </Typography.Title>
                <input
                  required
                  type="email"
                  placeholder="Your email address"
                  className="form__control"
                  name="email"
                  onChange={fieldChange}
                  value={data.email}
                />
              </div>
              <div className="form">
                <Typography.Title level={3}>Blockchain</Typography.Title>

                <Select defaultValue={data.blockchain} onChange={val => setData(d => ({ ...d, blockchain: val }))}>
                  {chainList.map((item, index) => (
                    <Option value={item} key={index}>
                      {item}
                    </Option>
                  ))}
                </Select>
              </div>
              <div className="form">
                <Button
                  label="Create"
                  bg="var(--btn-graidient)"
                  borderRadius="20px"
                  disabled={!checkRequiredFields()}
                />
                <div style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                  <Spin spinning={isLoading} size="default" />
                </div>
              </div>
            </form>
          </div>
        </Container>
      </FormWrapper>
    </>
  );
}
