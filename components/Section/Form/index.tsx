/* eslint-disable import/no-anonymous-default-export */
import { Typography } from "antd";
import React, { ChangeEvent, useState } from "react";
import { FormWrapper } from "./Form.style";
import { Container, Button } from "components";
import { db } from "utils/firebase";
import { collection, addDoc } from "firebase/firestore";
import { Select } from "antd";
import Data from "./data.interface";

const { Option } = Select;

export default function Form() {
  const [data, setData] = useState<Data>({
    artistName: "",
    artistAddress: "",
    collectionName: "",
    description: "",
    maxPerAddress: 0,
    maxSupply: 0,
    ipfsHashes: [],
    email: "",
    imageUrl: "",
    blockchain: "",
    mediaUrls: {} as any,
    externalLink: ""
  });

  const onFieldChange = (e: ChangeEvent<HTMLInputElement>) =>
    setData(d => ({
      ...d,
      [e.target.name]: e.target.type === "text" || e.target.type === "email" ? e.target.value : e.target.valueAsNumber
    }));

  const onTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setData(d => ({ ...d, [e.target.name]: e.target.value }));

  const onMediaFieldChange = (e: ChangeEvent<HTMLInputElement>) =>
    setData(d => ({ ...d, mediaUrls: { ...data.mediaUrls, [e.target.name as string]: e.target.value } }));

  const submit = (e: SubmitEvent) => {
    e.preventDefault();
    // addDoc(collection(db, "items"), {
    //   file,
    //   name,
    //   blockchain,
    //   externalLink: ext_link,
    //   description
    // });
  };

  return (
    <>
      <FormWrapper>
        <Container>
          <div className="form__container">
            <form>
              <div className="form__wrapper">
                <Typography.Title level={3}>Create New Item</Typography.Title>
              </div>
              <p>
                <span className="red">*</span>Required fields
              </p>
              <div className="form">
                <Typography.Title level={3}>
                  Image Url <span className="red">*</span>
                </Typography.Title>
                <p>Supported file types: JPG, PNG, GIF</p>
                <input
                  type="text"
                  placeholder="URL for your collection's image"
                  name="imageUrl"
                  className="form__control"
                  onChange={onFieldChange}
                  value={data.imageUrl}
                />
                {/* <label htmlFor="files" className="upload">
                <FiUploadCloud className="upload__img" />
              </label> */}
              </div>
              <div className="form">
                <Typography.Title level={3}>
                  Collection Name<span className="red">*</span>
                </Typography.Title>
                <input
                  type="text"
                  placeholder="Name of collection"
                  className="form__control"
                  name="collectionName"
                  onChange={onFieldChange}
                  value={data.collectionName}
                />
              </div>
              <div className="form">
                <Typography.Title level={3}>External Link</Typography.Title>
                <p>
                  This link will be included in this collection&apos;s detail page. We recommend a link to a website dedicated to this collection.
                </p>
                <input
                  type="text"
                  placeholder="https://externallink.com"
                  className="form__control"
                  name="externalLink"
                  onChange={onFieldChange}
                  value={data.externalLink}
                />
              </div>
              <div className="form">
                <Typography.Title level={3}>Description</Typography.Title>
                <p>
                  This description will be included in the item&apos;s detail page.
                </p>
                <textarea
                  rows={4}
                  cols={4}
                  placeholder="Provide a detailed description of your collection."
                  className="form__control"
                  name="description"
                  onChange={onTextAreaChange}
                  value={data.description}
                ></textarea>
              </div>
              <div className="form">
                <Typography.Title level={3}>Artist&apos;s Name</Typography.Title>
                <p>
                  vefi will include a link to this URL on this item&apos;s detail page, so that users can click to learn
                  more about it. You are welcome to link to your own webpage with more details
                </p>
                <input
                  type="text"
                  placeholder="https://yorsite.io/item/123"
                  className="form__control"
                  onChange={e => {}}
                />
              </div>
              <div className="form">
                <Typography.Title level={3}>External Link</Typography.Title>
                <p>
                  vefi will include a link to this URL on this item&apos;s detail page, so that users can click to learn
                  more about it. You are welcome to link to your own webpage with more details
                </p>
                <input
                  type="text"
                  placeholder="https://yorsite.io/item/123"
                  className="form__control"
                  onChange={e => {}}
                />
              </div>
              <div className="form">
                <Typography.Title level={3}>Blockchain</Typography.Title>

                <Select defaultValue={""} onChange={value => {}}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="disabled" disabled>
                    Disabled
                  </Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
              </div>
              <div className="form">
                <Button label="Create" bg="var(--btn-graidient)" borderRadius="20px" onClick={submit} />
              </div>
            </form>
          </div>
        </Container>
      </FormWrapper>
    </>
  );
}
