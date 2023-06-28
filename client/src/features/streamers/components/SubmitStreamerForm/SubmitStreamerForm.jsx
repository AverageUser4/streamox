import pt from 'prop-types';
import { useState } from 'react';
import css from './SubmitStreamerForm.module.css';
import { Text, Button } from 'features/ui';
import { Label, Input, TextArea, Select, Option } from 'features/forms';
import { Message } from 'src/features/ui';
import { API_ADD_STREAMER, STREAMER_MAX_DESCRIPTION_LENGTH, STREAMER_MAX_NAME_LENGTH } from 'src/data';

function SubmitStreamerForm({ successCallback }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [platform, setPlatform] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  async function onSubmit(event) {
    event.preventDefault();

    setError('');
    setSuccess('');

    try {
      if(!name) {
        throw 'You have to provide name of the streamer!';
      }
      if(name.length > STREAMER_MAX_NAME_LENGTH) {
        throw `Streamer's name may be at most ${STREAMER_MAX_NAME_LENGTH} characters long!`;
      }
      if(!description) {
        throw 'You have to provide description of the streamer!';
      }
      if(description.length > STREAMER_MAX_DESCRIPTION_LENGTH) {
        throw `Streamer's description may be at most ${STREAMER_MAX_DESCRIPTION_LENGTH} characters long!`;
      }
      if(!platform) {
        throw 'Choose a platform!';
      }

      const params = new URLSearchParams();
      params.append('name', name);
      params.append('description', description);
      params.append('platform', platform);

      const response = await fetch(API_ADD_STREAMER, { method: 'POST', body: params });
      if(response.status === 201) {
        const json = await response.json();
        setSuccess(`Streamer ${json.name} added successfully!`);
        setName('');
        setPlatform('');
        setDescription('');
        successCallback && successCallback(json);
      } else {
        throw await response.json();
      }
    } catch(error) {
      setError(error);
    }
  } 

  return (
    <form className={css['form']} onSubmit={(event) => onSubmit(event)}>
      <Text element="h2" variant="h" fontSize={1}>Add Streamer</Text>
      
      <Label label="Name">
        <Input 
          name="name"
          value={name}
          setValue={setName}
          placeholder="Streamer's name..."
          validatorCallback={(value) => !value.includes(' ')}
        />
      </Label>

      <Label label="Description">
        <TextArea
          name="description"
          value={description}
          setValue={setDescription}
          placeholder="Say something interesting about your favorite streamer..."
        />
      </Label>
      
      <Label label="Platform">
        <Select
          name="platform"
          value={platform}
          setValue={setPlatform}
        >
          <Option value="">--- choose platform ---</Option>
          <Option value="Twitch">Twitch</Option>
          <Option value="YouTube">YouTube</Option>
          <Option value="TikTok">TikTok</Option>
          <Option value="Kick">Kick</Option>
          <Option value="Rumble">Rumble</Option>
        </Select>
      </Label>

      <Button>Submit</Button>

      {error && <Message type="danger" message={error}/>}
      {success && <Message type="success" message={success}/>}
    </form>
  )
}

SubmitStreamerForm.propTypes = {
  successCallback: pt.func,
};

export { SubmitStreamerForm };