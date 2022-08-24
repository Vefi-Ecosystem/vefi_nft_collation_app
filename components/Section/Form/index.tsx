import { Typography } from 'antd';
import React from 'react';
import { FormWrapper } from './Form.style';
import { Container, Button } from 'components';
import { FiUploadCloud } from 'react-icons/fi';
import { Select } from 'antd';
const { Option } = Select;

const Form = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <FormWrapper>
        <Container>
          <div className="form__container">
            <div className="form__wrapper">
              <Typography.Title level={3}>Create New Item</Typography.Title>
            </div>
            <p>
              <span className="red">*</span>Required fields
            </p>
            <div className="form">
              <Typography.Title level={3}>
                Image, Video, Audio, or 3D Model <span className="red">*</span>
              </Typography.Title>
              <p>
                File type supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV,
                OGG,GLB,GLTF. Max size:100 MB
              </p>
              <input
                type="file"
                name="files"
                id="files"
                multiple
                className="file"
                accept="image/*"
              />
              <label htmlFor="files" className="upload">
                <FiUploadCloud className="upload__img" />
              </label>
            </div>
            <div className="form">
              <Typography.Title level={3}>
                Name<span className="red">*</span>
              </Typography.Title>
              <input
                type="text"
                placeholder="Item name"
                className="form__control"
              />
            </div>
            <div className="form">
              <Typography.Title level={3}>External Link</Typography.Title>
              <p>
                vefi will include a link to this URL on this item&apos;s detail
                page, so that users can click to learn more about it. You are
                welcome to link to your own webpage with more details
              </p>
              <input
                type="text"
                placeholder="https://yorsite.io/item/123"
                className="form__control"
              />
            </div>
            <div className="form">
              <Typography.Title level={3}>Description</Typography.Title>
              <p>
                The description will be included on the item&apos;s detail page
                underneath its image. Markdown syntax is supported
              </p>
              <textarea
                rows={4}
                cols={4}
                placeholder="Provide a detailed description of your item."
                className="form__control"
              ></textarea>
            </div>
            <div className="form">
              <Typography.Title level={3}>External Link</Typography.Title>
              <p>
                vefi will include a link to this URL on this item&apos;s detail
                page, so that users can click to learn more about it. You are
                welcome to link to your own webpage with more details
              </p>
              <input
                type="text"
                placeholder="https://yorsite.io/item/123"
                className="form__control"
              />
            </div>
            <div className="form">
              <Typography.Title level={3}>External Link</Typography.Title>
              <p>
                vefi will include a link to this URL on this item&apos;s detail
                page, so that users can click to learn more about it. You are
                welcome to link to your own webpage with more details
              </p>
              <input
                type="text"
                placeholder="https://yorsite.io/item/123"
                className="form__control"
              />
            </div>
            <div className="form">
              <Typography.Title level={3}>Blockchain</Typography.Title>

              <Select defaultValue="lucy" onChange={handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                  Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </div>
            <div className="form">
              <Button
                label="Create"
                bg="var(--btn-graidient)"
                borderRadius="20px"
              />
            </div>
          </div>
        </Container>
      </FormWrapper>
    </>
  );
};

export default Form;
